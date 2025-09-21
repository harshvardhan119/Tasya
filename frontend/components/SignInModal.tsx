import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (token: string) => void; // now expects token
  onSwitchToSignUp: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  onSwitchToSignUp,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/login`,
        { email, password }
        
      );
       const token = res.data.token;
       localStorage.setItem("token", token);
      // Pass token up to App
      onLoginSuccess(token);
      
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-md bg-[#12022f]/80 border border-pink-500/50 rounded-2xl shadow-2xl shadow-pink-500/20 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2
              className="font-audiowide text-3xl text-center text-white mb-2"
              style={{ textShadow: "0 0 8px #00ffff" }}
            >
              Welcome Back
            </h2>
            <p className="text-center text-cyan-300/80 mb-6">
              Sign in to enter the future of art.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-pink-300 mb-2"
                >
                  Email<br></br>
                   email:test@gmail.com pass:123456789
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm transition-all duration-300"
                  placeholder="test@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-pink-300 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm transition-all duration-300"
                  placeholder="123456789"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500/80 text-black font-bold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300 transform hover:scale-105"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-cyan-500/30"></div>
              <span className="flex-shrink mx-4 text-cyan-300/80">OR</span>
              <div className="flex-grow border-t border-cyan-500/30"></div>
            </div>

            {/* Social login placeholder */}
            <button
              onClick={() => alert("Google login not yet implemented")}
              className="w-full flex items-center justify-center gap-3 bg-gray-100 text-gray-800 font-semibold px-8 py-3 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 6.57C34.566 2.734 29.626 0 24 0C11.854 0 2 9.854 2 22s9.854 22 22 22s22-9.854 22-22c0-1.341-.138-2.65-.389-3.917z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.842-5.496C34.566 2.734 29.626 0 24 0C16.318 0 9.656 4.986 6.306 11.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.641-3.356-11.303-7.962l-6.571 4.819C9.656 39.014 16.318 44 24 44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.048 36.634 44 32.135 44 26C44 23.978 43.862 21.995 43.611 20.083z"
                ></path>
              </svg>
              Sign in with Google
            </button>

            <div className="mt-6 text-center text-gray-400">
              <p>
                Don't have an account?{" "}
                <button
                  onClick={onSwitchToSignUp}
                  className="font-medium text-pink-400 hover:text-pink-300 bg-transparent border-none p-0 cursor-pointer"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignInModal;

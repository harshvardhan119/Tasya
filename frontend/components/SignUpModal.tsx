import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
  onSwitchToSignIn: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  onSwitchToSignIn,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        // save token in localStorage
        localStorage.setItem("token", data.token);

        // tell App.tsx that auth is successful
        onLoginSuccess();
        onClose();
      }
    } catch (err) {
      setError("Server error, try again later.");
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
              ✕
            </button>

            <h2 className="font-audiowide text-3xl text-center text-white mb-2">
              Create Account
            </h2>

            {error && (
              <p className="text-red-400 text-center mb-4">{error}</p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white"
              />
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500/80 text-black font-bold px-8 py-3 rounded-lg hover:bg-cyan-400 transition"
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>

            <div className="mt-6 text-center text-gray-400">
              Already have an account?{" "}
              <button
                onClick={onSwitchToSignIn}
                className="text-pink-400 hover:text-pink-300"
              >
                Sign In
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUpModal;

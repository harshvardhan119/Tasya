import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ProfileData {
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
}

interface ProfilePageProps {
  onBack: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onBack }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem('token'); // JWT token
        if (!token) throw new Error('User not authenticated');

        const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile(response.data);
      } catch (err) {
        setError('Failed to load profile. Please login again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen text-white">Loading...</div>;
  if (error) return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <p className="mb-4">{error}</p>
      <button
        onClick={onBack}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Back
      </button>
    </div>
  );

  return (
    <div className="flex justify-center mt-24 px-4">
      <div className="bg-[#1a0b3c] rounded-lg shadow-lg p-8 w-full max-w-md text-white">
        <div className="flex flex-col items-center">
          {profile?.avatar ? (
            <img
              src={profile.avatar}
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-4 border-2 border-pink-500"
            />
          ) : (
            <div className="w-24 h-24 rounded-full mb-4 bg-gray-700 flex items-center justify-center text-2xl font-bold">
              {profile?.username?.charAt(0).toUpperCase() || 'U'}
            </div>
          )}

          <h1 className="text-2xl font-bold mb-1">{profile?.username}</h1>
          <p className="text-gray-300 mb-4">{profile?.email}</p>
          {profile?.bio && <p className="text-gray-400 mb-4 text-center">{profile.bio}</p>}

          <button
            onClick={onBack}
            className="mt-4 px-6 py-2 bg-pink-500 rounded-lg hover:bg-pink-600 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

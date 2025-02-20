"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // Ensure client rendering


  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (!isClient) return null;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-white text-6xl font-extrabold mb-6">
            Raise Your Voice
          </h1>
          <p className="text-white text-lg max-w-xl">
            Empowering citizens to raise concerns and engage with the government for a better India.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
            Get Started
          </button>
        </motion.div>
      )}
    </div>
  );
}

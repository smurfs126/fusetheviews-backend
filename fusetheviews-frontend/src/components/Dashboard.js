import React, { useState, useEffect } from "react";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("https://fusetheviews-backend.onrender.com/stats");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setStats({ totalViews: 0, youtubeViews: 0, instagramViews: 0, tiktokViews: 0, topVideos: [] });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className={`${darkMode ? "dark" : "light"} min-h-screen p-6 max-w-4xl mx-auto text-center`}>
      <button 
        className="absolute top-4 right-4 bg-light-primary dark:bg-dark-primary text-white px-4 py-2 rounded-md" 
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      
      <h1 className="text-4xl font-bold mb-6">Total Views</h1>
      <motion.div 
        className="text-5xl font-extrabold text-light-accent dark:text-dark-accent mb-8"
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {stats ? stats.totalViews.toLocaleString() : "0"}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard platform="YouTube" icon={<FaYoutube className="text-red-500" />} views={stats?.youtubeViews ?? 0} />
        <StatCard platform="Instagram" icon={<FaInstagram className="text-pink-500" />} views={stats?.instagramViews ?? 0} />
        <StatCard platform="TikTok" icon={<FaTiktok className="text-black dark:text-white bg-gray-200 dark:bg-white rounded-full p-1" />} views={stats?.tiktokViews ?? 0} />
      </div>
    </div>
  );
};

const StatCard = ({ platform, icon, views }) => {
  return (
    <motion.div 
      className="shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 dark:text-white"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl mb-2 flex justify-center items-center">{icon}</div>
      <h3 className="text-xl font-semibold">{platform}</h3>
      <p className="text-lg font-bold">{views.toLocaleString()} views</p>
    </motion.div>
  );
};

export default Dashboard;
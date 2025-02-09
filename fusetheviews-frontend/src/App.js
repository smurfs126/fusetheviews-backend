import Dashboard from "./components/Dashboard";
import './styles/App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [tiktokStats, setTiktokStats] = useState(null);
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    fetch("https://fusetheviews-backend.onrender.com/tiktok/stats")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTiktokStats(data);
      })
      .catch((error) => {
        console.error("Error fetching TikTok stats:", error);
        setError("Failed to fetch data.");
      });
  }, []);

  return (
    <div className="App">
      <Dashboard />
      
      <h1>FuseTheViews Dashboard</h1>
      {error && <p>{error}</p>}
      {tiktokStats ? (
        <div>
          <h2>TikTok Analytics</h2>
          <p>Views: {tiktokStats.views}</p>
          <p>Likes: {tiktokStats.likes}</p>
          <p>Comments: {tiktokStats.comments}</p>
        </div>
      ) : (
        <p>Loading TikTok stats...</p>
      )}
    </div>
  );
}

export default App;
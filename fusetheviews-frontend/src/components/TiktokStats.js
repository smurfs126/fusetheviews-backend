import React from 'react';

const TikTokStats = ({ stats }) => {
  return (
    <div>
      <h2>TikTok Analytics</h2>
      <p>Views: {stats.views}</p>
      <p>Likes: {stats.likes}</p>
      <p>Comments: {stats.comments}</p>
    </div>
  );
};

export default TikTokStats;

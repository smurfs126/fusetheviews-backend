const API_URL = "https://fusetheviews-backend.onrender.com"; // Your backend URL

export const fetchTikTokStats = async () => {
    try {
        const response = await fetch(`${API_URL}/tiktok/stats`);
        if (!response.ok) throw new Error("Failed to fetch data");
        return await response.json();
    } catch (error) {
        console.error("Error fetching TikTok stats:", error);
        return null;
    }
};

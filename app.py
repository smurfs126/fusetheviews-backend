from dotenv import load_dotenv
import os
from fastapi import FastAPI

# Load environment variables from .env file
load_dotenv()

# Fetch API keys and secrets
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")
META_APP_ID = os.getenv("META_APP_ID")
META_APP_SECRET = os.getenv("META_APP_SECRET")
TIKTOK_CLIENT_KEY = os.getenv("TIKTOK_CLIENT_KEY")
TIKTOK_CLIENT_SECRET = os.getenv("TIKTOK_CLIENT_SECRET")

# Debugging: Print to check if it works (remove this after testing)
print("YouTube API Key:", YOUTUBE_API_KEY)
print("Meta App ID:", META_APP_ID)
print("TikTok Client Key:", TIKTOK_CLIENT_KEY)

# FastAPI setup
app = FastAPI()

# Root route
@app.get("/")
def read_root():
    return {"message": "Welcome to FuseTheViews API!"}

# Fake TikTok analytics data (Replace with real API later)
@app.get("/tiktok/stats")
def get_fake_tiktok_stats():
    return {
        "views": 10000,
        "likes": 500,
        "comments": 50
    }

# Run the server locally (if running locally)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 
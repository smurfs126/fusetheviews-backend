from fastapi import FastAPI

app = FastAPI()

# Fake TikTok analytics data (Replace with real API later)
@app.get("/tiktok/stats")
def get_fake_tiktok_stats():
    return {
        "views": 10000,
        "likes": 500,
        "comments": 50
    }

# Run the server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

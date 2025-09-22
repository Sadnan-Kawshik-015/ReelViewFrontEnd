// MovieStatsCards.js
import React, { useEffect, useState } from "react";
import api from "../api/axionsConfig";
import { Card, CardContent, Typography } from "@mui/material";

function MovieStatsCards() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/stats/movies");
        setStats(response.data.data);
        console.log("Fetched movie stats:", response.data.data);
      } catch (error) {
        console.error("Error fetching movie stats:", error);
      }
    };
    fetchStats();
  }, []);

  if (!stats)
    return <p style={{ textAlign: "center", color: "#fff" }}>Loading stats...</p>;

  const statCards = [
    { label: "Total Movies", value: stats.totalMovies },
    { label: "Unique Genres", value: stats.totalUniqueGenres },
    { label: "Total Reviews", value: stats.totalReviews },
    { label: "Total Users", value: stats.totalUsers },
  ];

  return (
    <div style={{ marginTop: "2rem" }}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
      >
        🎬 Top Movie Stats
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {statCards.map((card) => (
          <Card
            key={card.label}
            sx={{
              flex: "1 1 200px", // allows responsiveness
              maxWidth: 250,
              minHeight: 200,
              textAlign: "center",
              borderRadius: "1rem",
              backgroundColor: "#1e1e1e",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Typography variant="h5">{card.value}</Typography>
              <Typography color="inherit">{card.label}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MovieStatsCards;

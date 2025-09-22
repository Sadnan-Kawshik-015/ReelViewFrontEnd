// MovieStatsCards.js
import React, { useEffect, useState } from "react";
import api from "../api/axionsConfig";
import { Card, CardContent, Typography } from "@mui/material";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieStatCarousel() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/stats/movies");
        setStats(response.data.data);
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

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

      <Slider {...settings}>
        {statCards.map((card) => (
          <div key={card.label} style={{ padding: "0 10px" }}>
            <Card
              sx={{
                maxWidth: 250,
                minHeight: 200,
                textAlign: "center",
                borderRadius: "1rem",
                backgroundColor: "#1e1e1e",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <CardContent>
                <Typography variant="h5">{card.value}</Typography>
                <Typography color="inherit">{card.label}</Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieStatCarousel;

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const BoxCard = ({ title, description, btnIcon, bgColor }) => {
  return (
    <Card
      sx={{
        width: { xs: "90%", sm: 400 },
        margin: "auto",
        backgroundColor: "white",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        borderRadius: 3,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "20px", sm: "30px" },
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            color: "white",
            marginBottom: "15px",
          }}
        >
          {btnIcon}
        </Box>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "#333",
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            lineHeight: 1.6,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BoxCard;

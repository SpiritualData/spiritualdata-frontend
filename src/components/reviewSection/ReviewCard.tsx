import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  useTheme,
} from "@mui/material";

interface ReviewCardProps {
  name: string;
  title: string;
  text: string;
  img: string;
  dark?: boolean;
  highlight?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  title,
  text,
  img,
  dark,
  highlight,
}) => {
  const theme = useTheme();
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const angle = (Math.random() * 3 - 2).toFixed(2);
    setRotationAngle(Number(angle));
  }, []);

  return (
    <Box
      sx={{
        bgcolor: dark
          ? theme.palette.darkcard.main
          : highlight
          ? theme.palette.primary.focus
          : "#F9FAF4",
        color: dark
          ? theme.palette.darkcard.contrastText
          : theme.palette.text.primary,
        boxShadow: `0px 6px 20px ${theme.palette.cardshadow.main}`,
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: 350,
        height: 330,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ":hover": {
          transform: `scale(1.04) rotate(${rotationAngle}deg)`,
          boxShadow: `0px 12px 32px ${theme.palette.cardshadow.main}`,
        },
      }}
    >
      {/* Top Row */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box>
          <Typography fontSize="1.4rem">{name}</Typography>
          <Typography
            variant="body2"
            sx={{
              color: highlight
                ? theme.palette.primary.hero
                : theme.palette.text.secondary,
              fontSize: "1rem",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Avatar
          src={img}
          alt={name}
          sx={{
            width: 70,
            height: 70,
            bgcolor: theme.palette.primary.hero,
          }}
        />
      </Box>

      {/* Bottom Row */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          fontSize: "1.2rem",
          lineHeight: 1.4,
          letterSpacing: 0.8,
        }}
      >
        “{text}”
      </Typography>
    </Box>
  );
};

export default ReviewCard;
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react'
import theme from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

const FloatingLabel = ({
  text,
  icon,
  sx,
  link
}: {
  text: string;
  icon: React.ReactNode;
  sx: any;
  link?: string;
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: theme.palette.primary.hero,
        color: "#fff",
        px: 3,
        py: 1.2,
        borderRadius: "12px",
        fontWeight: 500,
        fontSize: "0.85rem",
        display: "flex",
        alignItems: "center",
        gap: 1,
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
        fontFamily: "theme.typography.fontFamily",
        zIndex: 2,
        transition: "all 0.3s ease, box-shadow 0.3s ease",
        height: 65,
        width: 240,

        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 10px 24px rgba(0, 0, 0, 0.2)",
          // cursor: "pointer",
          cursor: "pointer",
        },
        ...sx,
      }}
      onClick={() => {
        navigate(link || "#");
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.focus,
          color: theme.palette.primary.hover,
          width: 45,
          height: 45,
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "1.8rem",
          px: 0.75,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontWeight: 500,
            fontSize: "1.4rem",
            fontFamily: "theme.typography.fontFamily",
            wordWrap: "break-word",
            lineHeight: 1.2,
            textAlign: "left",
            letterSpacing: 2,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};
  

export default FloatingLabel
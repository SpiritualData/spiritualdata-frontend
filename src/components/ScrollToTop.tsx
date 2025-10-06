import React, { useState, useEffect } from "react";
import { Box, Button, Slide, useTheme } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import { fontWeight } from "@mui/system";

const styles = {
  scrollToTopBtnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollToTopBtn: {
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    position: "fixed",
    bottom: { xs: "70px", md: "50px" },
    right: { xs: "20px", md: "50px" },
    zIndex: 999,
    minWidth: "unset",
    minHeight: "unset",
    width: "56px",
    height: "56px",
  },
  icon: {
    fontSize: "28px",
    fontWeight: 1000,
    color: "primary.focus",
    position: "absolute",
    transition: "all 0.3s ease",
    ":hover": {
      color: "primary.hero",
      scale: 1.05,
    },
  },
  progressCircle: {
    transform: "rotate(-90deg)",
    transformOrigin: "center",
  },
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (scrolled / height) * 100;

      setProgress(scrolledPercentage);

      if (scrolled > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <Box sx={styles.scrollToTopBtnContainer}>
          <Slide direction="left" in>
            <Button onClick={scrollToTop} sx={styles.scrollToTopBtn}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r={radius}
                  fill="transparent"
                  stroke={theme.palette.primary.main}
                  strokeWidth="4"
                />
                <circle
                  cx="20"
                  cy="20"
                  r={radius}
                  fill="transparent"
                  stroke={theme.palette.primary.hero}
                  strokeWidth="4"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={styles.progressCircle}
                />
              </svg>
              <NorthIcon sx={styles.icon} />
            </Button>
          </Slide>
        </Box>
      )}
    </>
  );
};

export default ScrollToTopButton;

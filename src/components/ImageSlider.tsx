import { Box, Typography } from "@mui/material";
import image1 from "../assets/images/about/sliderImage1.webp";
import image2 from "../assets/images/about/sliderImage2.webp";
import image3 from "../assets/images/about/sliderImage3.webp";
import image4 from "../assets/images/about/sliderImage4.webp";

const images = [image2, image1, image3, image4, image2, image1, image3, image4];

const ImageSlider = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        pb: { xs: 4, sm: 6 },
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          letterSpacing: 2,
          mb: { xs: 3, sm: 4 },
          color: "#1C2A49",
          textTransform: "uppercase",
        }}
      >
        Our Trending Products
      </Typography>

      {/* Outer container */}
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Blur overlays */}
        {/* Left fade */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: { xs: 40, sm: 60, md: 300 },
            height: "100%",
            background: "linear-gradient(to right, white 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Right fade */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: 40, sm: 60, md: 300 },
            height: "100%",
            background: "linear-gradient(to left, white 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Scrolling images */}
        <Box
          sx={{
            display: "flex",
            width: "fit-content",
            animation: "marquee 30s linear infinite",
            zIndex: 1,
            position: "relative",
          }}
        >
          {[...images, ...images].map((src, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt={`slider-${i}`}
              sx={{
                height: { xs: 30, sm: 40, md: 50 },
                width: "auto",
                objectFit: "contain",
                mx: { xs: 3, sm: 5, md: 8 },
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
          ))}
        </Box>

        {/* Animation keyframes */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </Box>
    </Box>
  );
};

export default ImageSlider;

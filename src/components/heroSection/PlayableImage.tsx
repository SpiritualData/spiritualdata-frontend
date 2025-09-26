import React from "react";
import { Box, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useTheme } from "@mui/material/styles";

interface PlayableImageProps {
  imageSrc: string;
  alt: string;
  videoLink: string;
}

const PlayableImage: React.FC<PlayableImageProps> = ({
  imageSrc,
  alt,
  videoLink,
}) => {
  const theme = useTheme();

  const handlePlayClick = () => {
    window.open(videoLink, "_blank");
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        boxShadow: `0 0 16px ${theme.palette.primary.focus}33`,
        display: "flex",
        width: "100%",
        height: "100%",
        "&:hover img": {
          transform: "scale(1.06) rotateZ(1.2deg)",
        },
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.3s ease-in-out",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <IconButton
          onClick={handlePlayClick}
          sx={{
            color: "#fff",
            pointerEvents: "auto",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.5)",
            },
          }}
          aria-label="Play Video"
        >
          <PlayCircleOutlineIcon
            sx={{
              fontSize: { xs: 48, md: 60 },
              color: theme.palette.primary.focus,
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PlayableImage;

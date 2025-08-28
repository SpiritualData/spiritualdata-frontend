import { Card, Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

interface InitiativeProps {
  data: {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
    author?: string;
    buttonText?: string;
  };
}

const InitiativeCard = ({ data }: InitiativeProps) => {
  const { title, description, image, link, author, buttonText } = data;
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 4,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: "390px",
        backgroundColor: isDark ? "#1e1e1e" : "#f7f8f3",
        transition: "all 0.3s ease",
        "&:hover .initiative-image": {
          transform: "scale(1.06) rotateZ(1.2deg)",
        },
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: "relative",
          height: 200,
          overflow: "hidden",
        }}
      >
        <Box
          className="initiative-image"
          sx={{
            height: "100%",
            width: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.5s ease",
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 4,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{
            color: isDark ? "white" : "text.primary",
            mb: 3,
            letterSpacing: 2,
          }}
        >
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={0.5}>
          {description && description.length > 110
            ? description.slice(0, 110) + "..."
            : description || ""}
        </Typography>

        {link && (
          <Button
            component={Link}
            to={link}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.focus,
              color: theme.palette.primary.hover,
              px: 3.5,
              py: 1,
              fontWeight: 600,
              letterSpacing: 0.7,
              fontSize: "0.8rem",
              borderRadius: "999px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: theme.palette.primary.hero,
                color: theme.palette.primary.focus,
              },
            }}
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default InitiativeCard;

import theme from "../../styles/theme";
import { East } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ContentSectionProps {
  imageSrc?: string;
  imageSrc2?: string;
  heading: string;
  subText: string;
  buttonText?: string;
  altText?: string;
  path?: string;
  bioHeading?: string;
  buttonFunc?: () => void;
}

const ContentSection = ({
  imageSrc,
  imageSrc2,
  heading,
  subText,
  buttonText,
  altText,
  path,
  bioHeading,
  buttonFunc,
}: ContentSectionProps) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: imageSrc2 ? "row-reverse" : "row",
        justifyContent: "space-between",
      }}
      my={{ xs: 3, md: 8 }}
    >
      <Grid size={{ xs: 12 }}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 500,
            textAlign: "center",
            marginBottom: { xs: 0, md: "30px" },
          }}
        >
          {bioHeading}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ marginLeft: { xs: 0, md: "16px" } }}>
        <Grid
          size={{ md: 11 }}
          py={{ xs: 0, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            flexDirection: "column",
            height: "100%",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: 500 }}>
            {heading}
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: bioHeading ? "14px" : "16px",
              marginTop: bioHeading ? "20px" : "32px",
            }}
          >
            {subText}
          </Typography>
          {buttonText &&
            (buttonFunc ? (
              <Button
                onClick={buttonFunc}
                variant="text"
                sx={{
                  backgroundColor: theme.palette.primary.hero,
                  borderRadius: 8,
                  height: 42,
                  px: 3,
                  mt: 3,
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                  color: theme.palette.primary.focus,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.focus,
                    color: theme.palette.primary.hero,
                  },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {buttonText}
                <East sx={{ ml: 0.5, fontSize: "16px" }} />
              </Button>
            ) : (
              path && (
                <Link
                  to={path}
                  style={{ textDecoration: "none" }}
                  target={path.startsWith("http") ? "_blank" : undefined}
                  rel={
                    path.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  <Button
                    variant="text"
                    sx={{
                      backgroundColor: theme.palette.primary.hero,
                      borderRadius: 8,
                      height: 42,
                      px: 3,
                      mt: 3,
                      fontWeight: 600,
                      fontSize: "14px",
                      textTransform: "uppercase",
                      fontFamily: "Poppins, sans-serif",
                      letterSpacing: "0.5px",
                      transition: "all 0.3s ease",
                      color: theme.palette.primary.focus,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.focus,
                        color: theme.palette.primary.hero,
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {buttonText}
                    <East sx={{ ml: 0.5, fontSize: "16px" }} />
                  </Button>
                </Link>
              )
            ))}
        </Grid>
      </Grid>
      <Grid
        container
        size={{ xs: 12, md: 5 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
          }}
        >
          <img
            style={{
              width: altText === "discord" ? "60%" : "90%",
              borderRadius: "1vw",
              boxShadow:
                altText === "discord" ? "none" : "0 4px 8px rgba(0, 0, 0, 0.7)",
              transition: "transform 0.3s ease",
            }}
            src={imageSrc || imageSrc2}
            alt={altText || "image"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentSection;

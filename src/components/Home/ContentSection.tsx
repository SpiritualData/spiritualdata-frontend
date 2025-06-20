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
      px={"8%"}
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
          {path && (
            <Link
              to={path}
              style={{ textDecoration: "none" }}
              target={path.startsWith("http") ? "_blank" : ""}
            >
              {buttonText && (
                <Button
                  variant="text"
                  sx={{
                    my: 3,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "inherit",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.primary.focus,
                      fontSize: "16px",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {buttonText}{" "}
                    <East sx={{ marginLeft: "4px", fontSize: "16px" }} />
                  </Typography>
                </Button>
              )}
            </Link>
          )}
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
          }}
        >
          <img
            style={{ width: altText === "discord" ? "60%" : "90%" }}
            src={imageSrc || imageSrc2}
            alt={altText || "image"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentSection;

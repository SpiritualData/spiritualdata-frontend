import { East } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ContentSection = ({
  imageSrc,
  imageSrc2,
  heading,
  subText,
  buttonText,
  altText,
  path,
  bioHeading
}) => {
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
      <Grid item xs={12}>
        <Typography sx={{ fontSize: "30px", fontWeight: 500, textAlign: 'center', marginBottom: { xs: 0, md: "30px" }}}>
          {bioHeading}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginLeft: { xs: 0, md: "16px" } }}>
        <Grid
          item
          md={11}
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
          <Link
            to={path}
            style={{ textDecoration: "none" }}
            target={path && path.startsWith("http") ? "_blank" : ""}
          >
          {path?
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
          : null}
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
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

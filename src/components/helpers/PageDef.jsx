import { Grid, Typography } from "@mui/material";

const PageDef = ({ title, heading, details }) => {
  return (
    <Grid
      item
      xs={12}
      my={{ xs: 4, sm: 8 }}
      px={{ xs: 4, md: "26%" }}
      sx={{ textAlign: "center" }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          color: (theme) => theme.palette.primary.focus,
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "26px", md: "32px" }, fontWeight: 550 }}
      >
        {heading}
      </Typography>
      <Typography sx={{ fontSize: "16px", textAlign: "left" }}>
        {details}
      </Typography>
    </Grid>
  );
};

export default PageDef;

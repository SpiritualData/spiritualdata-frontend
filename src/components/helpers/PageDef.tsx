import { Grid, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface PageDefProps {
  title: string;
  heading: string;
  details: string | React.ReactNode;
}

const PageDef: React.FC<PageDefProps> = ({ title, heading, details }) => {
  const titleStyles: SxProps<Theme> = {
    fontSize: "20px",
    color: (theme) => theme.palette.primary.focus,
    fontWeight: "bold",
  };

  const headingStyles: SxProps = {
    fontSize: { xs: "26px", md: "32px" },
    fontWeight: 550,
  };

  const detailsStyles: SxProps = {
    fontSize: "16px",
    textAlign: "left",
  };

  return (
    <Grid
      size={{ xs: 12 }}
      my={{ xs: 4, sm: 8 }}
      px={{ xs: 4, md: "26%" }}
      sx={{ textAlign: "center" }}
      minWidth={"100%"}
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

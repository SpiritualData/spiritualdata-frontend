import { Grid, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface PageDefProps {
  title?: string;
  heading?: string;
  details?: string | React.ReactNode;
  custom?: boolean;
}

const PageDef: React.FC<PageDefProps> = ({
  title,
  heading,
  details,
  custom,
}) => {
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
      px={{ xs: 4, md: custom ? 35 : "25%" }}
      sx={{ textAlign: custom ? "left" : "center", justifyContent: "left" }}
      minWidth={"100%"}
      backgroundColor="transparent"
      component="div"
      {...({} as any)}
    >
      <Typography
        sx={{
          fontSize: "20px",
          color: (theme) => theme.palette.primary.focus,
          fontWeight: "bold",
          letterSpacing: 4,
          textShadow:  "2px 2px 2px rgba(0, 0, 0, 0.5)" ,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: custom ? "60px" : "40px" },
          fontWeight: 550,
          letterSpacing: custom ? "2px" : 3,
          lineHeight: custom ? "1.2" : "1.5",
          mt: custom ? 3 : 1,
        }}
      >
        {heading}
      </Typography>
      <Typography sx={{ fontSize: "16px", textAlign: "justify", letterSpacing: 1.2, mt: 2 }}>
        {details}
      </Typography>
    </Grid>
  );
};

export default PageDef;

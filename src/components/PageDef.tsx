import { Grid, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface PageDefProps {
  title: string;
  heading: string;
  details: string | React.ReactNode;
}

const PageDef: React.FC<PageDefProps> = ({ title, heading, details }) => {
  return (
    <Grid
      size={{ xs: 12 }}
      my={{ xs: 4, sm: 8 }}
      px={{ xs: 2, md: 4 }}
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
        sx={{
          fontSize: { xs: "24px", md: "32px" },
          fontWeight: 550,
          wordBreak: "break-word",
          px: { xs: 1, md: 0 },
        }}
      >
        {heading}
      </Typography>
      <Typography 
        sx={{ 
          fontSize: "16px", 
          textAlign: "center",
          maxWidth: "800px",
          mx: "auto",
          px: { xs: 1, md: 0 },
        }}
      >
        {details}
      </Typography>
    </Grid>
  );
};

export default PageDef;

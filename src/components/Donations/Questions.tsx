import { Button, Grid, Typography, useTheme } from "@mui/material";
import { East } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Questions = () => {
  const theme = useTheme();
  
  return (
    <Grid
      container
      sx={{
        background: "#F3F6F8",
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        borderRadius: "8px",
        overflow: "hidden",
      }}
      py={{ xs: 4, md: 8 }}
      px={{ xs: 4, md: 6 }}
    >
      <Grid container size={{ xs: 12 }} sx={{ textAlign: "center" }}>
        <Grid size={{ xs: 12 }} mt={{ xs: 2, md: 0 }} mb={1} gap={5} sx={{ textAlign: "left" }}>
          <Typography
            sx={{
              fontSize: "16px",
              color: (theme) => theme.palette.primary.focus,
              fontWeight: "bold",
            }}
          >
            MORE DETAILS
          </Typography>

          <Typography
            sx={{ fontSize: { xs: "22px", md: "30px" }, fontWeight: 550 }}
          >
            What are the donations used for?
          </Typography>

          <Typography sx={{ fontSize: "16px", mt: 2 }}>
            Your donations will fund a solid foundation that demonstrates how
            Spiritual Data can change research, AI, and society through
            automated evidence analysis.
          </Typography>

          <Typography
            variant="inherit"
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            Research:
          </Typography>
          <ul
            style={{
              margin: "16px 0px 0px",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: "0.00938em",
              fontSize: "16px",
              paddingLeft: "20px",
            }}
          >
            <li>
              Gathering thousands of spiritual experiences, research papers, and
              hypotheses into a single database.
            </li>
            <li>
              Automatically calculating the probability of hypotheses by
              relating research papers and spiritual experiences.
            </li>
            <li>
              Validating our methods with the research community and the public.
            </li>
          </ul>

          <Typography
            variant="inherit"
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            Product:
          </Typography>
          <ul
            style={{
              margin: "16px 0px 0px",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: "0.00938em",
              fontSize: "16px",
              paddingLeft: "20px",
            }}
          >
            <li>
              An intelligent Spiritual Data chatbot that automatically finds
              experiences, research, and hypotheses from our database.
            </li>
            <li>
              Impactful analysis about spiritual data presented on our website.
            </li>
            <li>
              Search interface with filters and an interface to review the
              evidence for and against each hypothesis.
            </li>
          </ul>

          <Box sx={{ mt: 2 }}>
            <Typography 
              component="a"
              href="https://givebutter.com/spiritualdatamvp"
              sx={{ 
                fontSize: "16px",
                color: (theme) => theme.palette.primary.focus,
                textDecoration: "none",
                display: "inline-block",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Learn more at our givebutter fundraising page.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        size={{ xs: 12 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          height: "40px",
        }}
      >
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button
            variant="text"
            sx={{
              my: 3,
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Typography
              sx={{
                color: (theme) => theme.palette.primary.focus,
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
                borderRadius: "20px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.focus,
                  color: "black",
                },
              }}
            >
              Questions? Click here to send us a message.{" "}
              <East sx={{ ml: 1, fontSize: "16px" }} />
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Questions;

import { Button, Grid, Typography } from "@mui/material";

import { East } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Questions = () => {
  return (
    <Grid
      container
      sx={{
        background: "#F3F6F8",
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
      }}
      py={{ xs: 3, md: 8 }}
      px={{ xs: 4, md: "20%" }}
    >
      <Grid
        item
        container
        xs={12}
        sx={{ textAlign: "center" }}
      >
        <Grid item xs={12} mt={{ xs: 2, md: 0 }} mb={1}>
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
          <Typography sx={{ fontSize: "16px", mt: 2 , textAlign: "left"}}>
  <p>Your donations will fund a solid foundation that demonstrates how Spiritual Data can change research, AI, and society through automated evidence analysis.</p>

  <h4>Research:</h4>
  <ul>
    <li>Gathering thousands of spiritual experiences, research papers, and hypotheses into a single database.</li>
    <li>Automatically calculating the probability of hypotheses by relating research papers and spiritual experiences.</li>
    <li>Validating our methods with the research community and the public.</li>
  </ul>

  <h4>Product:</h4>
  <ul>
    <li>An intelligent Spiritual Data chatbot that automatically finds experiences, research, and hypotheses from our database.</li>
    <li>Impactful analysis about spiritual data presented on our website.</li>
    <li>Search interface with filters and an interface to review the evidence for and against each hypothesis.</li>
  </ul>
            <p><a href="https://givebutter.com/spiritualdatamvp">Learn more at our givebutter fundraising page.</a></p>
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
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
              Questions? Click here to send us a message.{" "}
              <East sx={{ marginLeft: "4px", fontSize: "16px" }} />
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Questions;

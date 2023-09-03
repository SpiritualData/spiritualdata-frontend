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
            ASK QUESTIONS
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "22px", md: "30px" }, fontWeight: 550 }}
          >
            What are the donations used for?
          </Typography>
          <Typography sx={{ fontSize: "16px", mt: 2 }}>
            The donations we receive are wholly dedicated to making our product
            better and supporting the ongoing development of Spiritual Data.
            Your contributions play a crucial role in enhancing our platform,
            allowing us to implement new features, improve user experience, and
            conduct research that fosters deep spiritual insights. By supporting
            us through donations, you become an essential part of our mission to
            provide a transformative and enriching journey for our global
            community of seekers. Your generosity enables us to continuously
            grow and refine our platform, ensuring that we can offer valuable
            resources and foster an environment of unity and understanding among
            our users. We are deeply grateful for your support in fueling our
            pursuit of spiritual growth and enlightenment. Together, we can
            create a meaningful impact on the lives of countless individuals
            seeking profound spiritual experiences and knowledge.
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
              Do you have any question?{" "}
              <East sx={{ marginLeft: "4px", fontSize: "16px" }} />
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Questions;

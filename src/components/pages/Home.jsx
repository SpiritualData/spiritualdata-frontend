import {
  Button,
  Grid,
  Stack,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import React from "react";
import Image from "../../assests/home_header.webp";
import { Link } from "react-router-dom";

export const fadeInBottom = keyframes`
  0% {
    opacity:0;
    transform: translateY(40px);
  }
  100% {
    opacity:1;
    transform: translateY(0);
  }
`;

const StyledHeader = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  animation: `${fadeInBottom} 3s ease`,
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: "0.4",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "center",
    minHeight: "70vh",
  },
}));

export const StyledHeaderItem = styled(Grid)(() => ({
  display: "flex",
  alignItems: { xs: "center", md: "flex-start" },
  flexDirection: "column",
  zIndex: 1,
  color: "#fff",
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: "46px",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },
}));

const Home = () => {
  return (
    <Grid container>
      <StyledHeader item xs={12} mt={{ xs: 8, md: 0 }}>
        <StyledHeaderItem item px={{ xs: 4, sm: 10 }}>
          <StyledHeading
            sx={{
              fontSize: { xs: "30px", sm: "60px" },
              lineHeight: { xs: "3rem", sm: "5rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {" "}
            SPIRITUAL DATA
          </StyledHeading>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "12px", sm: "16px" },
              textAlign: { xs: "center", md: "left" },
              fontWeight: 300,
              marginY: "6px",
              pr: { xs: 0, md: "44%" },
              wordWrap: "break-word",
            }}
          >
            Discover our Spiritual AI Chatbot, a transformative companion using
            cutting-edge research and hypotheses to provide spiritual answers.
            Uncover profound insights into mindfulness, self-discovery, and the
            meaning of life. This advanced AI system engages in meaningful
            conversations, drawing from vast spiritual knowledge and teachings.
          </Typography>

          <Stack alignItems={{ xs: "center", md: "flex-start" }}>
            <Button
              sx={{
                background: (theme) => theme.palette.primary.focus,
                color: "white",
                textTransform: "none",
                height: "38px",
                width: "180px",
                px: 2,
                mt: 2,
                borderRadius: 20,
                "&:hover": {
                  background: (theme) => theme.palette.primary.hover,
                  opacity: 0.9,
                },
              }}
              component={Link}
              to={"/sign-up"}
            >
              Create an account
            </Button>
          </Stack>
        </StyledHeaderItem>
      </StyledHeader>

      <Grid item xs={12} px={2} mb={8}>
        <center>
          <h1>Spiritual Data</h1>
        </center>
        <center>
          <h3>
            Using collaboration technology and intellectual humility to answer
            the hard questions.
          </h3>
        </center>
      </Grid>
    </Grid>
  );
};

export default Home;

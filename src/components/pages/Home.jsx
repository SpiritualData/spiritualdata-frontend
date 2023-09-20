import {
  Button,
  Grid,
  Stack,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

import Image from "../../assets/home_header.webp";
import conciusness from "../../assets/conciusness.webp";
import explore from "../../assets/explore.png";
import discord from "../../assets/discord.png";
import NewsLetter from "../componentsExtended/Home/NewsLetter";
import Block1 from "../componentsExtended/Home/Block1";
import DiscoverMore from "../componentsExtended/Home/DiscoverMore";
import ContentSection from "../componentsExtended/Home/ContentSection";
import FAQ from "../componentsExtended/Home/FAQ";

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
  fontWeight: "bold",
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
              fontWeight: 400,
              marginY: "8px",
              pr: { xs: 0, md: "44%" },
              wordWrap: "break-word",
            }}
          >
            Discover our Spiritual AI Chatbot, a transformative companion using
            cutting-edge research and hypothesis to provide spiritual answers.
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
                mt: 3,
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

      <>
        <Block1 />

        <ContentSection
          imageSrc2={explore}
          heading={"Explore Spiritual Insights With Our Bot"}
          subText={
            "Curious about spiritual questions? Let our intuitive bot provide answers, guiding you on a journey of discovery and enlightenment. Unveil the wisdom you seek with illuminating guidance, leading you to answers that foster deeper understanding and growth on your journey."
          }
          buttonText={"Join Now"}
          path={"/sign-in"}
        />

        <ContentSection
          imageSrc={conciusness}
          heading={"Dive Deep Into Spiritual Conciousness."}
          subText={
            "Embark on a transformative journey of self-discovery and spiritual consciousness. Dive deep into research analysis, explore mindfulness, and elevate your inner being to new dimensions of understanding and awareness. Add your voice or perspective on how we should analyze reliable evidence."
          }
          buttonText={"Add your voice"}
          path={"https://forms.gle/pQWE2XZM9n8Pvu5v5"}
        />
      </>

      <DiscoverMore />

      <ContentSection
        imageSrc2={discord}
        heading={"Join Our Vibrant Discord Community!"}
        subText={
          "Connect with like-minded individuals, share ideas, learn from experts, and engage in meaningful discussions. Unlock a world of knowledge and collaboration today!"
        }
        buttonText={"Join Now"}
        path={"https://discord.gg/MPBprbvt"}
        altText={"discord"}
      />

      <FAQ />

      <NewsLetter />
    </Grid>
  );
};

export default Home;

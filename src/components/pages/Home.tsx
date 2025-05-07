import React from "react";
import { Button, Grid, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { fadeInBottom } from "../../Style/Animations/FadeInBottom";

import Image from "../../assets/home_header.webp";
import ai_hand from "../../assets/ai-hand-human-hand.png";
import explore from "../../assets/explore.png";
import discord from "../../assets/discord.png";
import NewsLetter from "../componentsExtended/Home/NewsLetter";
import Block1 from "../componentsExtended/Home/Block1";
import DiscoverMore from "../componentsExtended/Home/DiscoverMore";
import ContentSection from "../componentsExtended/Home/ContentSection";
import FAQ from "../componentsExtended/Home/FAQ";

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

export const StyledHeaderItem = styled(Grid)`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  color: #fff;

  @media (min-width: 600px) {
    align-items: flex-start;
  }
`;

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: "46px",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },
}));

const Home: React.FC = () => {
  return (
    <Grid container>
          <StyledHeader size={{xs:12}} mt={{ xs: 8, md: 0 }}>
            <StyledHeaderItem px={{ xs: 4, sm: 10 }}>
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
    Our methods are intellectual humility and automation, letting the data speak for itself. What we offer you is intellectual autonomy to see the data for yourself. Answers to the most profound questions about reality are right at your fingertips with our AI chatbot which draws upon firsthand accounts (such as near-death experiences), research papers, and scientific hypotheses. Try it out for free with the button below!
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
                      heading={"Overcome bias in research review"}
                      subText={
                        "Humans are inherently biased and limited in perspective. Do we really want to limit our understanding of reality to what most researchers agree on? Tons of research has been done in the areas of spiritual science and metaphysics, yet it's ignored due to an assumption that it must not be scientific, and most people don't even know about this research and the reliable evidence out there. We've started an initiative to update Wikipedia. Please sign up below to add your voice!"
                      }
                      buttonText={"Add your voice"}
                      path={"https://docs.google.com/forms/d/e/1FAIpQLSf0WTmE0RXZb5XWzRMKSNIUGX2kjqpMSY3aNLsvwH_UZqQJ6A/viewform?usp=dialog"}
                    />
    
            <ContentSection
              imageSrc={ai_hand}
              heading={"Overcoming bias in AI"}
              subText={
                "Generative AI, like humans, is often biased and inaccurate. While that's the case, we can still use AI in systematic ways to identify and review all relevant data and then use statistics to determine what is most likely true. That's what Spiritual Data is doing, and we're making this available to developers and companies as an API. Join the waitlist today!"
              }
              buttonText={"Join our API waitlist"}
              path={"https://docs.google.com/forms/d/e/1FAIpQLSc3d3BGiYRA1VQVpD9GeusBuEscUZN-VkGQeNoKyWjKiyuswg/viewform"}
            />
          </>
    
          <DiscoverMore />
    
          <ContentSection
            imageSrc2={discord}
            heading={"Join Our Vibrant Discord Community!"}
            subText={
              "Discord is our team's primary source of communication. We have many channels to discuss a wide variety of topics within spiritual science and other phenomena. We post relevant research here regularly."
            }
            buttonText={"Join Now"}
            path={"https://discord.com/invite/thQNvPGcJF"}
            altText={"discord"}
          />
    
          <FAQ />
    
          <NewsLetter />
        </Grid>
  );
};

export default Home;

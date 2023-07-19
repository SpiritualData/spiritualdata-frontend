import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import PageHeader from "../helpers/PageHeader";
import image from "../../assets/about.webp";
import Joshua from "../../assets/Joshua.jpeg";
import PageDef from "../componentsExtended/PageDef";
import { Link } from "react-router-dom";
import ContentSection from "../componentsExtended/Home/ContentSection";

const About = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"About Us"} sx={{ mb: 4 }} />

      <PageDef
        title={"ABOUT US"}
        heading={"Unveiling Our Spiritual Mission"}
        details={""}
      />

      <Typography
        sx={{
          mt: { xs: -3, md: -6 },
          mb: 6,
          fontSize: "16px",
          color: 'grey',
          px: { xs: 4, md: "17%" },
          textAlign: "center",
        }}
      >
        We're a diverse, dedicated group seeking answers and sharing insights.
        Our community is the heart of Spiritual Data, driving growth and
        understanding. Spiritual Data is a collaborative and open source of
        truth that organizes all research, experiences, and relevant information
        to calculate the probability of spiritual hypotheses without bias. It is
        a non-profit project with a quickly growing team of people across the
        world interested in learning spiritual truths. Our key principles are
        intellectual humility and autonomy. <br/><br/> <b>If you're interested, check out
        <Link style={{color:'#4691B8'}}> https://spiritualdata.org</Link> and add your perspective!</b>
      </Typography>

      <Box sx={{background: "#F3F6F8"}}>
        <ContentSection
          imageSrc2={Joshua}
          heading={"Joshua Mathias (CEO, Founder)"}
          subText={
            "Natural Language Processing entrepreneur turned Spiritual Scientist and Psychologist. Wherever I am, I seek efficient collaboration that enables as many people as possible to reach their potential. I do that through organization, enabling autonomy, project management, effective system architecture, and systematic analysis of people and knowledge. Since 2022 my learning interests are psychology, spirituality, and hypnotherapy. I founded the initiative Spiritual Data (spiritualdata.org) to provide an accessible and collaborative source of truth for spiritual truths. I also enjoy being a barefoot long distance runner and finding ways to continually challenge myself."
          }
          buttonText={"Get in touch"}
          path={"/contact"}
        />
      </Box>
    </Grid>
  );
};

export default About;

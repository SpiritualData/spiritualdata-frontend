import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import PageHeader from "../helpers/PageHeader";
import image from "../../assets/about.webp";
import Joshua from "../../assets/Joshua.jpeg";
import PageDef from "../helpers/PageDef";
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
          color: 'black',
          px: { xs: 4, md: "17%" },
          textAlign: "left",
        }}
      >
        <p>Spiritual Data is a global community and a United States registered non-profit organization.</p>
        <p><b>Our mission:</b> Empower informed decision-making and advance scientific understanding by fostering a collaborative, reliable, and accessible source of truth for spiritual questions.</p>

But while answering spiritual questions is our niche and why Joshua founded this project, this is also about truth in general and even AI in general. AI needs a reliable model of reality and truth, and now AI can help make it. That’s what we’re doing.

<p>Here’s how Spiritual Data stands out:
<ol><li><b>We're extremely open.</b> Open data and open methods is necessary for a fully trusted source of truth. Our code, tasks in Notion, and most of our staff Discord channels are also public. We don’t use intellectual property hiding for revenue.</li>
<li><b>We're disrupting research review.</b> We’re researching evidence-reliability and fundamentally changing how research is analyzed when aggregated together as a whole. What matters is establishing an unbiased source of “current best guesses” about the nature of reality, which can continually improve as more data is added.</li>
<li><b>We have an AI-first approach.</b> With a computational linguist as a Founder, we seek to automate every part of the process while allowing human correction and addition. This is why we’re not intimidated by the enormity of the task before us. Once the method is established, it will scale and allow people around the world to contribute and leverage each other's research automatically.</li>
</ol></p>
        <p><b>Interested in joining our team? <a href="https://forms.gle/E6A9p3GgvUDoy2q18" style={{ color: '#4691B8' }} target="_blank" rel="noopener noreferrer">Fill out this form!</a></b></p>
      </Typography>

      <Box sx={{background: "#F3F6F8"}}>
        <ContentSection
          imageSrc2={Joshua}
          heading={"Joshua Mathias (Executive Director, Founder)"}
          subText={
            "Joshua was originally a tech entrepreneur, computational linguist, project manager, and machine learning architect for AI projects. He was also extremely passionate about religion his entire life. In 2022, Joshua realized that subjective feelings wasn't the best way to determine what is true or what authority to listen to, and what's more, he found reliable evidence of spiritual or paranormal concepts that he hadn't heard about or taken seriously before. Joshua became concerned that he and others hadn't learned these things earlier and is determined to find unbiased answers to spiritual questions by letting the data speak for itself. Joshua is now leveraging his experience in computational linguistics and generative AI to analyze firsthand accounts of experiences and research papers to aggregate evidence on both sides of the argument for specific hypotheses. In 2023, he started a PhD in Integral and Transpersonal Psychology at the California Institute of Integral Studies to further this work. He also enjoys barefoot long distance running and helping people develop psychic abilities as a certified hypnotherapist."
          }
          buttonText={"Get in touch"}
          path={"/contact"}
        />
      </Box>
    </Grid>
  );
};

export default About;

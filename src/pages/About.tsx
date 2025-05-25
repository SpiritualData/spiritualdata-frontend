import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import PageHeader from "../components/PageHeader";
import image from "../assets/about.webp";
import Joshua from "../assets/Joshua.jpeg";
import Sanjay from "../assets/Sanjay_Rout.jpeg";
import Jason from "../assets/Jason_Bramble.jpeg";
import Petra from "../assets/Petra_Frese.png";
import PageDef from "../components/PageDef";
import ContentSection from "../components/Home/ContentSection";

const About: React.FC = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"About Us"} sx={{ mb: 4 }} />

      <PageDef
        title={"ABOUT US"}
        heading={"Unveiling Spiritual Data's Mission"}
        details={""}
      />

      <Typography
        sx={{
          mt: { xs: -3, md: -6 },
          mb: 6,
          fontSize: "16px",
          color: "black",
          px: { xs: 4, md: "17%" },
          textAlign: "left",
        }}
      >
        Spiritual Data is a global community and a United States registered
        non-profit organization.
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          color: "black",
          px: { xs: 4, md: "17%" },
          textAlign: "left",
          mb: 2,
        }}
      >
        <b>Our mission:</b> Empower informed decision-making and advance
        scientific understanding by fostering a collaborative, reliable, and
        accessible source of truth for spiritual questions.
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          color: "black",
          px: { xs: 4, md: "17%" },
          textAlign: "left",
          mb: 2,
        }}
      >
        But while answering spiritual or metaphysical questions is our niche and
        why Joshua founded this project, this is also about truth in general and
        even AI in general. AI needs a reliable model of reality and truth, and
        now AI can help make it. That's what we're doing.
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "black",
          px: { xs: 4, md: "17%" },
          textAlign: "left",
          mb: 1,
        }}
      >
        Here's how Spiritual Data stands out:
      </Typography>

      <Box
        component="ol"
        sx={{
          fontSize: "16px",
          color: "black",
          px: { xs: 4, md: "17%" },
          textAlign: "left",
          mb: 2,
        }}
      >
        <li>
          <b>We're extremely open.</b> Open data and open methods is necessary
          for a fully trusted source of truth. Most of our code, tasks in
          Notion, and even staff Discord channels are also public.
        </li>
        <li>
          <b>We're disrupting research review.</b> We're researching
          evidence-reliability and fundamentally changing how research is
          analyzed when aggregated together as a whole. What matters is
          establishing an unbiased source of "current best guesses" about the
          nature of reality, which can continually improve as more data is
          added.
        </li>
        <li>
          <b>We have an AI-first approach.</b> With a computational linguist as
          a Founder, we seek to automate every part of the process while
          allowing human correction and addition. This is why we're not
          intimidated by the enormity of the task before us. Once the method is
          established, it will scale and allow people around the world to
          contribute and leverage each other's research automatically.
        </li>
      </Box>

      <Typography
        sx={{
          fontSize: "16px",
          color: "black",
          px: { xs: 4, md: "17%" },
          textAlign: "left",
        }}
      >
        <b>
          Interested in joining our team?{" "}
          <a
            href="https://forms.gle/E6A9p3GgvUDoy2q18"
            style={{ color: "#4691B8" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fill out this form!
          </a>
        </b>
      </Typography>
      <Box 
        sx={{ 
          background: "#F3F6F8",
          width: "100%",
          py: 4,
          mt: 4
        }}
      >
        <Grid container maxWidth="lg" mx="auto" px={{ xs: 2, md: 4 }}>
          <ContentSection
            imageSrc={Joshua}
            heading={"Joshua Mathias (Executive Director, Founder)"}
            description={
              "Joshua was originally a tech entrepreneur, computational linguist, project manager, and machine learning architect for AI projects. He was also extremely passionate about religion his entire life. In 2022, Joshua realized that subjective feelings wasn't the best way to determine what is true or what authority to listen to, and what's more, he found reliable evidence of spiritual or paranormal concepts that he hadn't heard about or taken seriously before. Joshua became concerned that he and others hadn't learned these things earlier and is determined to find unbiased answers to spiritual questions by letting the data speak for itself. Joshua is now leveraging his experience in computational linguistics and generative AI to analyze firsthand accounts of experiences and research papers to aggregate evidence on both sides of the argument for scientific hypotheses. In 2023, he started a PhD in Integral and Transpersonal Psychology at the California Institute of Integral Studies to further this work. He also enjoys barefoot long distance running and helping individuals as a certified hypnotherapist."
            }
            buttonText={"Get in touch"}
            buttonLink={"/contact"}
            imagePosition="left"
          />
          <ContentSection
            imageSrc={Jason}
            heading={"Jason Bramble"}
            description={
              "Jason is the CEO & Co-founder of a Revcarto, a revenue operations and enablement agency. Jason is a true visionary and entrepreneur from the inner city of Philadelphia. Jason has been apart of growing (and starting) startups across multiple industries including SAAS, marketing, real estate, web3, entertainment, non-profits, etc. Most recently, Jason created an apprenticeship program with his education non-profit We Love Philly."
            }
            imagePosition="left"
          />
          <ContentSection
            imageSrc={Petra}
            heading={"Petra Frese"}
            description={
              "Dr. Petra Frese, a scientist and engineer turned spiritual healer, is an expert in brain health science and peak mental performance. After her multiple Near-Death Experiences, which dramatically widened her horizon and views on life, she integrated her spiritual insights into her science-based coaching practice. Petra is the founder of Peak Mind Academy, serving clients around the globe. She is the award-winning author of two bestselling books and earned the Excellence in Hypnosis Award. Petra holds two PhDs in Psychology. Her motto: \"Science plus Wisdom is LOVE.\""
            }
            imagePosition="left"
          />
          <ContentSection
            imageSrc={Sanjay}
            heading={"Sanjay Rout"}
            description={
              "Sanjay Rout seamlessly navigates the worlds of psychiatry, technology, journalism, law, coaching, authorship, innovation, and research, bringing together disparate disciplines for the common goal of finding solutions to pressing global issues. Sanjay is a visionary leader with a passion for advancing humanity through his groundbreaking work as CEO of Innovation Solution Lab. He holds a PhD in Human Resource Management and demonstrates his continuing passion for education through a wide variety of online degress."
            }
            imagePosition="left"
          />
        </Grid>
      </Box>
    </Grid>
  );
};

export default About;

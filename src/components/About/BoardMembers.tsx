import { useInView } from "@/hooks/useInView";
import { Box, Slide, Typography, useTheme } from "@mui/material";
import React from "react";
import ContentSection from "../Home/ContentSection";
import bm1 from "../../assets/Images/About/bm1.webp";
import bm2 from "../../assets/Images/About/bm2.webp";
import bm3 from "../../assets/Images/About/bm3.webp";
import bm4 from "../../assets/Images/About/bm4.webp";
import bm5 from "../../assets/Images/About/bm5.webp";

const BoardMembers: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2,
  });

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const contrastText = theme.palette.getContrastText(
    theme.palette.primary.main
  );

  const members = [
    {
      heading: "Joshua Mathias (Executive Director, Founder)",
      subText:
        "Joshua was originally a tech entrepreneur, computational linguist, project manager, and machine learning architect for AI projects. He was also extremely passionate about religion his entire life. In 2022, Joshua realized that subjective feelings wasn't the best way to determine what is true or what authority to listen to, and what's more, he found reliable evidence of spiritual or paranormal concepts that he hadn't heard about or taken seriously before. Joshua became concerned that he and others hadn't learned these things earlier and is determined to find unbiased answers to spiritual questions by letting the data speak for itself. Joshua is now leveraging his experience in computational linguistics and generative AI to analyze firsthand accounts of experiences and research papers to aggregate evidence on both sides of the argument for scientific hypotheses. In 2023, he started a PhD in Integral and Transpersonal Psychology at the California Institute of Integral Studies to further this work. He also enjoys barefoot long distance running and helping individuals as a certified hypnotherapist.",
      buttonText: "Get In Touch →",
      imageSrc: bm1,
    },
    {
      heading: "Patrizio Tressoldi",
      subText:
        "atrizio Tressoldi is an Italian psychologist and consciousness researcher leading the Science of Consciousness Research Group and affiliated with the Studium Patavinum of University of Padova, Italy. He has a long-term interest in psi phenomena, and began experimentation in the early 2000s, starting exploring the presentiment response and making notable progress in developing new methodologies. More recently he has designed novel experiments to investigate psychokinetic influences. He has also contributed several meta-analyses of the evidence for various forms of psi.",
      buttonText: "Get In Touch →",
      imageSrc: bm2,
    },
    {
      heading: "Jason Bramble",
      subText:
        "Jason is the CEO & Co-founder of a Revcarto, a revenue operations and enablement agency. Jason is a true visionary and entrepreneur from the inner city of Philadelphia. Jason has been apart of growing (and starting) startups across multiple industries including SAAS, marketing, real estate, web3, entertainment, non-profits, etc. Most recently, Jason created an apprenticeship program with his education non-profit We Love Philly.",
      buttonText: "Contact Sarah",
      imageSrc: bm3,
    },
    {
      heading: "Petra Frese",
      subText:
        "Dr. Petra Frese, a scientist and engineer turned spiritual healer, is an expert in brain health science and peak mental performance. After her multiple Near-Death Experiences, which dramatically widened her horizon and views on life, she integrated her spiritual insights into her science-based coaching practice. Petra is the founder of Peak Mind Academy, serving clients around the globe. She is the award-winning author of two bestselling books and earned the Excellence in Hypnosis Award. Petra holds two PhDs in Psychology. Her motto: “Science plus Wisdom is LOVE.”",
      buttonText: "Reach Out",
      imageSrc: bm4,
    },
    {
      heading: "Sanjay Rout",
      subText:
        "Sanjay Rout seamlessly navigates the worlds of psychiatry, technology, journalism, law, coaching, authorship, innovation, and research, bringing together disparate disciplines for the common goal of finding solutions to pressing global issues. Sanjay is a visionary leader with a passion for advancing humanity through his groundbreaking work as CEO of Innovation Solution Lab. He holds a PhD in Human Resource Management and demonstrates his continuing passion for education through a wide variety of online degress.",
      buttonText: "Say Hello",
      imageSrc: bm5,
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        pt: 20,
        pb: 10,
        px: { xs: 2, md: 30 },
        background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, transparent 100%)`,
      }}
    >
      {/* Title */}
      <Slide direction="up" in={sectionInView} timeout={600}>
        <Typography
          variant="h2"
          fontWeight={600}
          sx={{
            color: isDark ? contrastText : theme.palette.primary.hero,
            textShadow: `0 0 10px ${theme.palette.primary.focus}`,
            letterSpacing: 2,
            textAlign: "center",
            fontSize: { xs: "26px", md: "50px" },
            mb: 8,
          }}
        >
          Our Board Members
        </Typography>
      </Slide>

      {/* Board Members List */}
      {members.map((member, index) => (
        <Slide
          key={index}
          direction="up"
          in={sectionInView}
          timeout={600 + index * 200}
        >
          <div>
            <ContentSection
              heading={member.heading}
              subText={member.subText}
              buttonText={member.buttonText}
              imageSrc={index % 2 === 0 ? member.imageSrc : undefined}
              imageSrc2={index % 2 === 1 ? member.imageSrc : undefined}
            />
          </div>
        </Slide>
      ))}
    </Box>
  );
};

export default BoardMembers;

import { useInView } from "@/hooks/useInView";
import { Box, Slide, Typography, useTheme } from "@mui/material";
import React from "react";
import ContentSection from "../Home/ContentSection";
import bm1 from "../../assets/images/about/bm1.webp";
import bm2 from "../../assets/images/about/bm2.webp";
import bm3 from "../../assets/images/about/bm3.webp";
import bm4 from "../../assets/images/about/bm4.webp";
import bm5 from "../../assets/images/about/bm5.webp";
import yugen from "../../assets/images/about/yugen_korat.webp";
import armin from "../../assets/images/about/armin_masoumian.jpg";
import sander from "../../assets/images/about/sander_stepanov.jpg";

const BoardMembers: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.05,
  });

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const contrastText = theme.palette.getContrastText(
    theme.palette.primary.main
  );

  // Array of board member data
  const members = [
    {
      heading: "Joshua Mathias (Executive Director, Founder)",
      subText:
        "Joshua was originally a tech entrepreneur, computational linguist, project manager, and machine learning architect for AI projects. He was also extremely passionate about religion his entire life. In 2022, Joshua realized that subjective feelings wasn't the best way to determine what is true or what authority to listen to, and what's more, he found reliable evidence of spiritual or paranormal concepts that he hadn't heard about or taken seriously before. Joshua became concerned that he and others hadn't learned these things earlier and is determined to find unbiased answers to spiritual questions by letting the data speak for itself. Joshua is now leveraging his experience in computational linguistics and generative AI to analyze firsthand accounts of experiences and research papers to aggregate evidence on both sides of the argument for scientific hypotheses. In 2023, he started a PhD in Integral and Transpersonal Psychology at the California Institute of Integral Studies to further this work. He also enjoys barefoot long distance running and helping individuals as a certified hypnotherapist.",
      buttonText: "Get In Touch →",
      imageSrc: bm1,
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
        "Dr. Petra Frese, a scientist and engineer turned spiritual healer, is an expert in brain health science and peak mental performance. After her multiple Near-Death Experiences, which dramatically widened her horizon and views on life, she integrated her spiritual insights into her science-based coaching practice. Petra is the founder of Peak Mind Academy, serving clients around the globe. She is the award-winning author of two bestselling books and earned the Excellence in Hypnosis Award. Petra holds two PhDs in Psychology. Her motto: \"Science plus Wisdom is LOVE.\"",
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

  // Array of scientific council member data
  const scientificCouncil = [
    {
      heading: "Patrizio Tressoldi",
      subText:
        "Patrizio Tressoldi is an Italian psychologist and consciousness researcher leading the Science of Consciousness Research Group and affiliated with the Studium Patavinum of University of Padova, Italy. He has a long-term interest in psi phenomena, and began experimentation in the early 2000s, starting exploring the presentiment response and making notable progress in developing new methodologies. More recently he has designed novel experiments to investigate psychokinetic influences. He has also contributed several meta-analyses of the evidence for various forms of psi.",
      buttonText: "Get In Touch →",
      imageSrc: bm2,
    },
    {
      heading: "Yugen Korat",
      subText: "Dr. Yugen Korat is CTO at MarvinLabs, bringing expertise at the intersection of linguistics and technology. He holds a PhD in Linguistics with specialized research in semantics, applying rigorous linguistic analysis to understand meaning and communication. His work has focused on scientific methodology and research design, ensuring that spiritual and consciousness studies are approached with academic rigor. His unique combination of linguistic theory and technical leadership enables innovative approaches to analyzing and structuring spiritual data, bridging the gap between human meaning-making and computational analysis.",
      buttonText: "Get In Touch →",
      imageSrc: yugen,
    },
    {
      heading: "Armin Masoumian",
      subText: "Dr. Armin Masoumian is an AI Evaluations Research Scientist at Spiritual Data, specializing in machine learning, computer vision, and deep learning. He holds a PhD in Computer Science from Universitat Rovira i Virgili, where his dissertation focused on self-supervised monocular depth estimation using graph convolutional networks. Armin's research expertise spans AI applications in medical imaging, federated learning, and advanced neural network architectures. As a peer reviewer for over 20 ISI journals and recipient of a Catalan government scholarship, he brings rigorous academic standards to evaluating AI systems. At Spiritual Data, Armin develops and validates machine learning models that analyze spiritual and consciousness-related phenomena, ensuring methodological soundness and reproducibility.",
      buttonText: "Get In Touch →",
      imageSrc: armin,
    },
    {
      heading: "Sander Stepanov",
      subText: "Dr. Sander Stepanov is an independent industry expert combining expertise in artificial intelligence, electronics engineering, and consciousness studies. He holds a PhD in Electronics Engineering from Saint Petersburg State Technological University of Communication Systems and has worked as an AI Developer at Jesta I.S. in Toronto. Sander's research bridges theoretical and applied AI, with published work in MIMO signal detection, optical communication systems, and signal processing algorithms. His unique interdisciplinary approach integrates AI and data science with consciousness research, exploring how computational methods can illuminate questions about awareness and subjective experience. Sander is passionate about solving complex problems at the intersection of technology and human consciousness.",
      buttonText: "Get In Touch →",
      imageSrc: sander,
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        pt: 15,
        pb: 0,
        px: { xs: 0, md: 10, lg: 30 },
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
            fontFamily: "Sansation, sans-serif",
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
            <Box borderBottom={1} borderColor="divider" sx={{ pb: 5 }}>
              <ContentSection
                heading={member.heading}
                subText={member.subText}
                buttonText={member.buttonText}
                boardMember={true}
                imageSrc={index % 2 === 0 ? member.imageSrc : undefined}
                imageSrc2={index % 2 === 1 ? member.imageSrc : undefined}
              />
            </Box>
          </div>
        </Slide>
      ))}

      {/* Scientific Council Title */}
      <Slide direction="up" in={sectionInView} timeout={800}>
        <Typography
          variant="h2"
          fontWeight={600}
          sx={{
            color: isDark ? contrastText : theme.palette.primary.hero,
            textShadow: `0 0 10px ${theme.palette.primary.focus}`,
            letterSpacing: 2,
            textAlign: "center",
            fontSize: { xs: "26px", md: "50px" },
            mt: 10,
            mb: 8,
            fontFamily: "Sansation, sans-serif",
          }}
        >
          Scientific Council
        </Typography>
      </Slide>

      {/* Scientific Council List */}
      {scientificCouncil.map((member, index) => (
        <Slide
          key={index}
          direction="up"
          in={sectionInView}
          timeout={1000 + index * 200}
        >
          <div>
            <Box borderBottom={1} borderColor="divider" sx={{ pb: 5 }}>
              <ContentSection
                heading={member.heading}
                subText={member.subText}
                buttonText={member.buttonText}
                boardMember={true}
                imageSrc={index % 2 === 0 ? member.imageSrc : undefined}
                imageSrc2={index % 2 === 1 ? member.imageSrc : undefined}
              />
            </Box>
          </div>
        </Slide>
      ))}
    </Box>
  );
};

export default BoardMembers;

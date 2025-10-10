import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Fade,
  Slide,
  Container,
} from "@mui/material";
import { useInView } from "../hooks/useInView";
import PageHeader from "../components/PageHeader";
import banner from "../assets/images/about/banner.webp";

const OriginStory: React.FC = () => {
  const theme = useTheme();
  const headerRef = useInView({ threshold: 0.3 });
  const section1Ref = useInView({ threshold: 0.3 });
  const section2Ref = useInView({ threshold: 0.3 });
  const section3Ref = useInView({ threshold: 0.3 });
  const section4Ref = useInView({ threshold: 0.3 });
  const section5Ref = useInView({ threshold: 0.3 });

  return (
    <>
      <PageHeader image={banner} page={"ORIGIN STORY"} sx={{ mb: 4 }} />

      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
        }}
      >
        {/* Introduction */}
        <Box ref={headerRef.ref} sx={{ mb: 8 }}>
          <Fade in={headerRef.inView} timeout={1000}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.3,
                color: theme.palette.primary.hero,
                mb: 4,
                textAlign: "center",
              }}
            >
              A Journey from Faith to Evidence
            </Typography>
          </Fade>
          <Fade in={headerRef.inView} timeout={1500}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontWeight: 500,
                color: theme.palette.text.secondary,
                textAlign: "center",
                fontStyle: "italic",
                mb: 6,
              }}
            >
              The story of how Spiritual Data was born from one person's search
              for truth
            </Typography>
          </Fade>
        </Box>

        {/* Section 1: The Question */}
        <Box ref={section1Ref.ref} sx={{ mb: 8 }}>
          <Slide direction="up" in={section1Ref.inView} timeout={1000}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderLeft: `4px solid ${theme.palette.primary.focus}`,
                backgroundColor: "white",
                borderRadius: 2,
                boxShadow: `0 4px 20px ${theme.palette.cardshadow.main}`,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.hero,
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                What if everything you believed about reality was wrong?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                This question only crossed Joshua Mathias's mind once or twice,
                for the first 30 years of his life. Born and raised in a devout
                Latter-day Saint family, Joshua's faith was the bedrock of his
                existence. It shaped his worldview, his choices, and his very
                identity. He spent two years teaching this faith as a missionary
                in Mexico and even worked at his church's headquarters in Salt
                Lake City. Joshua had unwavering confidence in his spiritual
                convictions. It felt right, he had experienced and heard of some
                persuasive spiritual experiences, and he had intellectual answers
                for everything. What's more, he interacted day to day with very
                intelligent, sincere people with the same beliefs.
              </Typography>
            </Box>
          </Slide>
        </Box>

        {/* Section 2: The Breaking Point */}
        <Box ref={section2Ref.ref} sx={{ mb: 8 }}>
          <Fade in={section2Ref.inView} timeout={1000}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                backgroundColor: theme.palette.darkcard.main,
                color: theme.palette.darkcard.contrastText,
                borderRadius: 2,
                boxShadow: `0 4px 20px ${theme.palette.cardshadow.main}`,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                The Philosophical Bubble Bursts
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                But in July 2022, Joshua's philosophical bubble burst when his
                wife shared that she was leaving their religion due to learning
                new information through reading a 138 page document in one day.
                She made the decision immediately, even with fears that Joshua
                would divorce her due to his strong faith. Knowing that he would
                have to review the same information in order to reply sincerely,
                the next day Joshua dove in to find counterarguments and convince
                her to stay. He systematically went through the core arguments.
                Yet the more he investigated, the more he realized the "truth" he
                had built his life upon was a house of cards. What hit him most
                was not the historical evidence, but the fact that people of many
                religions across the world had similar spiritual confirmations
                that their religion was the only true religion, just like his. He
                thought, "who am I to say that my subjective witness is more
                valid than theirs, without an objective comparison?" "What if
                faith is actually self-deception and psychological conditioning?"
                Joshua's commitment to truth and humility went deeper than his
                commitment to religion, and suddenly these commitments parted
                ways.
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Section 3: The Search */}
        <Box ref={section3Ref.ref} sx={{ mb: 8 }}>
          <Slide direction="up" in={section3Ref.inView} timeout={1000}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderLeft: `4px solid ${theme.palette.primary.focus}`,
                backgroundColor: "white",
                borderRadius: 2,
                boxShadow: `0 4px 20px ${theme.palette.cardshadow.main}`,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.hero,
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                The Search for Real Answers
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  textAlign: "justify",
                  mb: 3,
                }}
              >
                Shaken to his core, Joshua struggled with nihilism at first,
                accompanied with an odd sense of freedom from not knowing what
                the future holds. "Am I just going to die and that's it?" But
                something within him refused to accept that there were no
                answers. If what he had believed for so long wasn't the full
                truth, then what was? He documented miracles he was aware of in a
                spreadsheet, he went to a Mormon temple one last time and asked
                God if it was okay to leave (with his changed mind, the answer
                was yes), and he debated with his religious father. Then,
                recognizing Joshua's search for tangible miracles, Joshua's wife
                told him of the movie "Heaven is for Real" about a Christian kid
                having a near-death experience. They watched it.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                That was the key, for him. With his expertise in computational
                linguistics and technology, Joshua knew he could analyze
                near-death experiences as a whole to come to a less biased
                conclusion. He searched for "record of near-death experiences"
                which led him to nderf.org and much more.
              </Typography>
            </Box>
          </Slide>
        </Box>

        {/* Section 4: The Discovery */}
        <Box ref={section4Ref.ref} sx={{ mb: 8 }}>
          <Fade in={section4Ref.inView} timeout={1000}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
                boxShadow: `0 4px 20px ${theme.palette.cardshadow.main}`,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.hero,
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                What He Uncovered
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  textAlign: "justify",
                  mb: 3,
                }}
              >
                What he uncovered astounded him. Rigorous evidence for
                "paranormal" concepts that mainstream science dismissed. Multiple
                studies on psi phenomena, past life memories, and learning
                verified information out-of-body. All the data pointed to a
                paradigm-shattering conclusion: Consciousness isn't just
                physical, reality is complex, and individuals can experience this
                for themselves. This truth could transform the world, uniting
                science and spirituality. So why wasn't it common knowledge?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  textAlign: "justify",
                  fontWeight: 600,
                }}
              >
                In that moment, Joshua found his new mission in life.
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Section 5: The Mission */}
        <Box ref={section5Ref.ref} sx={{ mb: 8 }}>
          <Slide direction="up" in={section5Ref.inView} timeout={1000}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                backgroundColor: theme.palette.darkcard.main,
                color: theme.palette.darkcard.contrastText,
                borderRadius: 2,
                boxShadow: `0 4px 20px ${theme.palette.cardshadow.main}`,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                The Birth of Spiritual Data
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  textAlign: "justify",
                  mb: 3,
                }}
              >
                He had dedicated decades to a belief system without ever seeing
                the full scope of evidence. Psychology hadn't even existed at the
                time his religion was founded, and psychology is hardly taught in
                religion nor public schools. When it is taught, it's biased to
                the physical. How many others were still trapped in ideological
                bubbles as he had been, unaware of information that could change
                everything? To empower people with the knowledge to critically
                examine their beliefs and make informed spiritual choices, Joshua
                founded Spiritual Data, starting as a simple Discord server and a
                database for spiritual hypotheses.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  textAlign: "justify",
                  mb: 3,
                }}
              >
                This non-profit is dedicated to aggregating and transparently
                analyzing all the evidence on spiritual topics, no matter how
                controversial. By combining AI analysis with human-informed
                questions, Spiritual Data aims to become a multidisciplinary
                source of truth that anyone worldwide can contribute to and learn
                from. It will cut through misinformation and taboos, enabling
                every individual to explore the data for themselves. And
                importantly, it combines statistics with subjectivity and complex
                contextual factors, bringing science to humanity in a way no
                human could.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                Fueled by this purpose, Joshua began a PhD in Integral and
                Transpersonal Psychology in 2023 and became a certified
                hypnotherapist to deepen his expertise. He poured himself into
                growing the Spiritual Data community, connecting with
                researchers, experiencers, and seekers across the globe to
                collaboratively build the foundations of an evidence-based
                spiritual science.
              </Typography>
            </Box>
          </Slide>
        </Box>

        {/* Closing */}
        <Box sx={{ mb: 6 }}>
          <Fade in={section5Ref.inView} timeout={1500}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderTop: `4px solid ${theme.palette.primary.focus}`,
                borderBottom: `4px solid ${theme.palette.primary.focus}`,
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  color: theme.palette.primary.hero,
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Looking back, Joshua realized his whole life had prepared him for
                this calling.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  textAlign: "center",
                }}
              >
                His religious background taught him the power of beliefs and a
                principled approach to life. His faith crisis cracked him open to
                new truths. His technical and linguistic skills enabled him to
                pioneer a new approach to age-old questions. With intellectual
                humility, transparent data, and harnessing AI, Joshua believes
                this is how humanity will transcend divisions of belief to
                discover the truths that unite us. He has devoted his life to
                empowering every person with intellectual autonomy, because he
                knows that truth is a life or death matter.
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Final Message */}
        <Box>
          <Fade in={section5Ref.inView} timeout={2000}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: theme.palette.text.secondary,
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.8,
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Yet, as he tries to change the world, Joshua's internal hope is
              that one day he'll be able to help his loved ones to break free
              from the same limiting beliefs that held him for so long. A future
              where learning stories like his is not a sin. A future where
              everyone can speak openly and embrace uncertainty, together.
            </Typography>
          </Fade>
        </Box>
      </Container>
    </>
  );
};

export default OriginStory;

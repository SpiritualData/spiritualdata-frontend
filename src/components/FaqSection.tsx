import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Avatar,
  Collapse,
  Link as MuiLink,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useInView } from "../hooks/useInView";
import faqImage from "../assets/images/faq/faq.webp";
import { Link } from "react-router-dom";

const faqs: Array<{
  question: string;
  answer: string | React.ReactNode;
}> = [
  {
    question: "What is Spiritual Data?",
    answer:
      "Spiritual Data is a nonprofit project that aims to use all types of available data—including spiritual sources and scientific evidence—to calculate reliable, unbiased answers about reality and our existence.",
  },
  {
    question: "What's the chatbot for?",
    answer:
      "The chatbot lets you explore our data using natural language. You might ask how oneness appears in near-death experiences, or what scientific studies and reports exist on telepathy and related topics.",
  },
  {
    question: "Can anyone contribute to Spiritual Data?",
    answer:
      "Yes, absolutely. You can visit our Discord chat server to ask how to contribute, or submit your personal experiences, insights, original research, or hypotheses through the available community contribution channels.",
  },
  {
    question: "How do I join the Spiritual Data community?",
    answer: (
      <>
        You can join by subscribing to our newsletter, entering our official
        Discord server, or filling out the following team interest form:{" "}
        <MuiLink
          href="https://forms.gle/E6A9p3GgvUDoy2q18"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "primary.focus",
            textDecoration: "underline",
            fontWeight: 500,
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          https://forms.gle/E6A9p3GgvUDoy2q18
        </MuiLink>{" "}
        to get directly involved.
      </>
    ),
  },
  {
    question: "How can I donate to Spiritual Data?",
    answer: (
      <>
        To donate, please visit the Donations page located in the Discover
        section above. The direct link is{" "}
        <MuiLink
          component={Link}
          to="/donate"
          sx={{
            color: "primary.focus",
            textDecoration: "underline",
            fontWeight: 500,
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          spiritualdata.org/donate
        </MuiLink>
        . We welcome and appreciate your support in sustaining this mission.
      </>
    ),
  },
  {
    question: "Are you religious?",
    answer:
      "Spiritual Data is not affiliated with any religion. While some hypotheses explore religious themes, our project remains neutral and lets the available data guide all our conclusions and investigations forward.",
  },
];

const FaqSection = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<number | false>(false);
  const [copied, setCopied] = useState(false);

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("support@spiritualdata.org");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const CustomExpandIcon = ({ isOpen }: { isOpen: boolean }) => (
    <Typography
      sx={{
        fontSize: "1.5rem",
        fontWeight: 700,
        color: theme.palette.darkcard.contrastText,
        minWidth: "1.5rem",
      }}
    >
      {isOpen ? "×" : "+"}
    </Typography>
  );

  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, md: 24 },
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Grid container sx={{ justifyContent: "space-around" }}>
        {/* Left: Image and Contact */}
        <Grid item xs={12} md={6} component="div" {...({} as any)}>
          <Box
            sx={{
              position: "relative",
              height: "100%",
              minHeight: { xs: 300, md: "100%" },
              width: "100%",
              overflow: "hidden",
              borderRadius: 3,
            }}
          >
            <Box
              component="img"
              src={faqImage}
              alt="FAQ"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              onClick={handleCopyEmail}
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                backgroundColor: theme.palette.common.white,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 3,
                py: 2,
                boxShadow: theme.shadows[3],
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.primary.focus,
                  "& .MuiAvatar-root": {
                    bgcolor: theme.palette.common.white,
                  },
                  "& .MuiTypography-root": {
                    color: theme.palette.common.white,
                  },
                },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.focus,
                  width: 32,
                  height: 32,
                }}
              >
                <EmailIcon sx={{ color: theme.palette.text.primary }} />
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                }}
              >
                {copied ? "Copied!" : "support@spiritualdata.org"}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right: FAQs */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            ml: { xs: 2, md: 8 },
            py: { xs: 4, md: 0 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            width: { xs: "100%", md: "50%" },
          }}
          height={"100%"}
          width="50%"
          component="div"
          {...({} as any)}
        >
          <Box mt={5}>
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 600,
                letterSpacing: "3px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              FAQS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                fontSize: "3rem",
                mb: 4,
                color: theme.palette.text.primary,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              What do you want to know about Spiritual Data?
            </Typography>
          </Box>

          <Box>
            {faqs.map((faq, index) => {
              const { ref, inView } = useInView();

              return (
                <Box
                  key={index}
                  ref={ref}
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    mb: 1.5,
                    boxShadow: "none",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0px)" : "translateY(40px)",
                    transition: "all 0.6s ease-out",
                  }}
                >
                  <Accordion
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      backgroundColor: theme.palette.darkcard.main,
                      color: theme.palette.darkcard.contrastText,
                      "&:before": { display: "none" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <CustomExpandIcon isOpen={expanded === index} />
                      }
                      sx={{
                        px: 3,
                        py: 1.5,
                        minHeight: "auto",
                        "& .MuiAccordionSummary-content": {
                          margin: 0,
                        },
                      }}
                    >
                      <Typography fontWeight={600} fontSize={"1.1rem"}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>

                    <Collapse
                      in={expanded === index}
                      timeout="auto"
                      unmountOnExit
                    >
                      <AccordionDetails
                        sx={{
                          backgroundColor: theme.palette.common.white,
                          px: 4,
                          py: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 400,
                            lineHeight: 1.6,
                            fontSize: "1.09rem",
                            letterSpacing: 0.4,
                          }}
                        >
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Collapse>
                  </Accordion>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FaqSection;

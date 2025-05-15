import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { Add, East, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";
import imageSrc from "../../assets/faq.png";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [expanded, setExpanded] = useState<number>(-1);

  const faqs: FAQItem[] = [
    {
      question: "What is Spiritual Data?",
      answer:
        "Spiritual Data is a non-profit organization that seeks to leverage all available data to calculate reliable answers about reality, including spiritual sources of information and spiritual explanations.",
    },
    {
      question: "What's the chatbot for?",
      answer:
        "The chatbot allows you to interact with the data through natural language questions. For example, you could ask how oneness is described in near-death experiences, or what research there is on telepathy.",
    },
    {
      question: "Can anyone contribute to Spiritual Data?",
      answer:
        "Yes. Ask how at our Discord chat server, or submit your own experiences, research, or hypotheses.",
    },
    {
      question: "How do I join the Spiritual Data community?",
      answer:
        "You can subscribe to our newsletter, join our Discord server, or join the team using this form: https://forms.gle/E6A9p3GgvUDoy2q18",
    },
    {
      question: "How can I donate to Spiritual Data?",
      answer:
        "You can donate by visiting the Donations page from the Discover section above (spiritualdata.org/donations).",
    },
    {
      question: "Are you religious?",
      answer:
        "Spiritual Data is not associated with any particular religion. Some of our hypotheses are related to religious beliefs, but we let the data speak for itself.",
    },
  ];

  return (
    <Grid
          container
          sx={{
            background: "#F3F6F8",
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
          py={{ xs: 3, md: 8 }}
          px={"8%"}
        >
          <Grid size={{ xs: 12, md: 5.8 }} pr={{ xs: 0, md: 5 }}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                sx={{
                  mt: expanded !== -1 ? 0 : 1.8,
                  boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <>
                      {expanded === index ? (
                        <Remove
                          sx={{
                            color: "white",
                            bgcolor: (theme) => theme.palette.primary.focus,
                          }}
                        />
                      ) : (
                        <Add
                          sx={{
                            color: "white",
                            bgcolor: (theme) => theme.palette.primary.focus,
                          }}
                        />
                      )}
                    </>
                  }
                  aria-controls="panel-content"
                  id="panel-header"
                  onClick={() => setExpanded(expanded === index ? -1 : index)}
                >
                  <Typography sx={{ fontWeight: 500 }}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontSize: "14px" }}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid
            container
            size={{
            xs:12,
            md:5.8}}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Grid size={{xs:12}}  mt={{ xs: 2, md: 0 }} mb={1}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: (theme) => theme.palette.primary.focus,
                  fontWeight: "bold",
                }}
              >
                ASK QUESTIONS
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "22px", md: "30px" }, fontWeight: 550 }}
              >
                Frequently Asked Questions
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Discover quick answers to common questions about Spiritual Data.
              </Typography>
            </Grid>
    
            <Grid size={{xs:12}} >
              <img style={{ width: "100%" }} src={imageSrc} alt={""} />
            </Grid>
          </Grid>
    
          <Grid
            size={{xs:12}}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              height: "40px",
            }}
          >
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{
                  my: 3,
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "inherit",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.primary.focus,
                    fontSize: "16px",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Questions? Click here to send us a message.{" "}
                  <East sx={{ marginLeft: "4px", fontSize: "16px" }} />
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
  );
};

export default FAQ;

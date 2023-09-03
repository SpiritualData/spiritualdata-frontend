import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";

import imageSrc from "../../../assets/faq.png";
import { Add, East, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Spiritual Data?",
    answer:
      "Spiritual Data is a platform that fosters enlightenment and deeper understanding of spirituality.",
  },
  {
    question: "How does Spiritual Data work?",
    answer:
      "We combine insights and experiences from our community, presenting a vast range of spiritual perspectives.",
  },
  {
    question: "Can anyone contribute to Spiritual Data?",
    answer:
      "Yes, our platform encourages everyone to share their spiritual insights and experiences.",
  },
  {
    question: "How do I join the Spiritual Data community?",
    answer:
      "You can join by subscribing to our newsletter, participating in our programs, and contributing to our discussions.",
  },
  {
    question: "How can I donate to Spiritual Data?",
    answer:
      "You can support us by visiting our donations page from the discover section below and following the instructions provided.",
  },
  {
    question: "What does my donation to Spiritual Data do?",
    answer:
      "Your donations support the running of our platform, ensuring we can continue to explore life’s biggest questions.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(-1);

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
      <Grid item xs={12} md={5.8} pr={{ xs: 0, md: 5 }}>
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
        item
        container
        xs={12}
        md={5.8}
        sx={{ textAlign: { xs: "center", md: "left" } }}
      >
        <Grid item xs={12} mt={{ xs: 2, md: 0 }} mb={1}>
          <Typography
            sx={{
              fontSize: "16px",
              color: (theme) => theme.palette.primary.focus,
              fontWeight: "bold",
            }}
          >
            ASK QUESTION
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "22px", md: "30px" }, fontWeight: 550 }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            Discover quick answers to common questions about Spiritual Data. Our
            FAQs cover key aspects to enhance your knowledge journey.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <img style={{ width: "100%" }} src={imageSrc} alt={""} />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
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
              Do you have any question?{" "}
              <East sx={{ marginLeft: "4px", fontSize: "16px" }} />
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default FAQ;

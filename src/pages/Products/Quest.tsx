import { Box, Typography, Button, useTheme, Container } from "@mui/material";
import { useRef } from "react";
import Steps from "../../components/Quest/Steps";
import Features from "../../components/Quest/Features";
import UseCases from "../../components/Quest/UseCases";
import QuestHero from "../../components/Quest/QuestHero";
import { stepsData, featuresData, useCasesData } from "../../data/questData";
import { useNavigate } from "react-router-dom";

export default function Quest() {
  const theme = useTheme();
  const useCasesRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const scrollToUseCases = () => {
    useCasesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <QuestHero onScrollClick={scrollToUseCases} />
      <Features data={featuresData} />
      <Steps data={stepsData} />

      {/* Scroll Target */}
      <div
        ref={useCasesRef}
        style={{
          scrollMarginTop: "20px",
        }}
      >
        <UseCases data={useCasesData} />
      </div>

      <Container maxWidth="md">
        <Box textAlign="center" mb={6} mt={1}>
          <Typography variant="h4" fontWeight={700} mb={2} letterSpacing={1}>
            Ready to Begin Your <b style={{ color: theme.palette.primary.focus, textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}>Quest</b>...?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            mb={3}
            letterSpacing={1}
          >
            Add meaning to your life through clear direction and smart
            strategies. Your journey starts now.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/sign-up")}
            sx={{
              backgroundColor: theme.palette.primary.focus,
              color: theme.palette.primary.hero,
              borderRadius: 8,
              height: 42,
              px: 4,
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "uppercase",
              fontFamily: "Poppins, sans-serif",
              letterSpacing: 2,
              ml: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: theme.palette.primary.hero,
                color: theme.palette.primary.focus,
              },
            }}
          >
            Start Your First Quest
          </Button>
          <Typography variant="body2" mt={2} letterSpacing={1.5} lineHeight={2}>
            Free to try &nbsp;-&nbsp; $10 a month <br /> Your data stays private
          </Typography>
        </Box>
      </Container>
    </>
  );
}

import { Box, Typography, Button, useTheme } from "@mui/material";
import { useRef } from "react";
import Steps from "../../components/Quest/Steps";
import Features from "../../components/Quest/Features";
import UseCases from "../../components/Quest/UseCases";
import { stepsData, featuresData, useCasesData } from "../../data/questData";
import { useNavigate } from "react-router-dom";
import { questData } from "../../data/ProductData";
import ProductHero from "../../components/Products/ProductHero";

const Quest = () => {
  const theme = useTheme();
  const useCasesRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const scrollToUseCases = () => {
    useCasesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ProductHero
        content={questData}
        product="quest"
        onScrollClick={scrollToUseCases}
      />
      <Features data={featuresData} />
      <Steps data={stepsData} />
      <UseCases data={useCasesData} />

      {/* Scroll Target */}
      <div
        ref={useCasesRef}
        style={{
          scrollMarginTop: "150px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, white 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" fontWeight={700} mb={3} letterSpacing={2}>
            Ready to Begin Your{" "}
            <b
              style={{
                color: theme.palette.primary.focus,
                textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              Quest
            </b>
            ...?
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            mb={4}
            letterSpacing={2}
          >
            Add meaning to your life through clear direction and smart
            strategies.
            <br /> Your journey starts now.
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
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: theme.palette.primary.hero,
                color: theme.palette.primary.focus,
              },
            }}
          >
            Start Your First Quest
          </Button>

          <Typography variant="body2" mt={2} lineHeight={2} letterSpacing={1.5}>
            Free to try &nbsp;-&nbsp; $10 a month <br /> Your data stays private
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default Quest;

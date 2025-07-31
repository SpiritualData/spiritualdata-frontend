import { Box, Typography, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useInView } from "@/hooks/useInView";
import whyChooseUsImage from "../assets/images/WhyChooseUs/whyChooseUs.webp";

const reasons = [
  {
    title: "Unbiased Truth Estimation",
    description:
      "Our AI evaluates claims based on weighted evidence—not belief, authority, or popularity—giving you clarity without dogma.",
  },
  {
    title: "Data from All Perspectives",
    description:
      "We aggregate human experiences, scientific studies, and overlooked data sources to ensure no valuable insight is left behind.",
  },
  {
    title: "Transparency at Every Step",
    description:
      "All data, logic, and AI models are shared openly so you can see exactly how conclusions are reached—and decide for yourself.",
  },
  {
    title: "Mission-Driven, Not Institution-Funded",
    description:
      "We,re a nonprofit powered by people—not corporations—committed to truth, mental clarity, and spiritual autonomy.",
  },
];

const WhyChooseUs = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <Box
      ref={ref}
      id="why-choose-us-section"
      sx={{
        display: "flex",
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Conditionally render fixed image only while in view */}
      {inView && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "50vw",
            height: "100vh",
            backgroundImage: `url(${whyChooseUsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: theme.palette.primary.main,
            zIndex: -1,
          }}
        />
      )}

      {/* Left spacer to balance the layout */}
      <Box
        sx={{
          width: "50vw",
          minHeight: "100vh",
          flexShrink: 0,
        }}
      />

      {/* Right scrollable content */}
      <Box
        sx={{
          width: "50%",
          backgroundColor: theme.palette.primary.main,
          pl: { xs: 3, md: 20 },
          pr: { xs: 3, md: 20 },
          py: { xs: 6, md: 12 },
          zIndex: 1,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "4px",
            color: theme.palette.primary.hover,
            textTransform: "uppercase",
          }}
        >
          Why Choose Us
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: 8,
            color: theme.palette.primary.hover,
            lineHeight: 1.2,
            fontSize: "2.5rem",
          }}
        >
          Powered by Evidence
          <br />
          Built for Spiritual Clarity
        </Typography>

        {reasons.map((item, index) => (
          <Box
            key={index}
            sx={{
              mb: 4,
              pb: 3,
              borderBottom: "1px solid",
              borderColor: theme.palette.divider,
            }}
          >
            {/* Top Row: Icon + Title */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 1,
              }}
            >
              {/* Icon inside dark square box */}
              <Box
                sx={{
                  borderRadius: 1,
                  backgroundColor: theme.palette.text.primary,
                  p: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 18,
                  height: 25,
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: 30,
                  }}
                />
              </Box>

              {/* Heading */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  color: "#1F2540",
                  fontSize: 28,
                }}
              >
                {item.title}
              </Typography>
            </Box>

            {/* Bottom Row: Description */}
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.primary.dark,
                lineHeight: 1.6,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhyChooseUs;

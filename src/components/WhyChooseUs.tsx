import { Box, Typography, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useInView } from "../hooks/useInView";
import whyChooseUsImage from "../assets/images/whychooseus/whyChooseUs.webp";

const reasons = [
  {
    title: "Unbiased Truth Estimation",
    description:
      "Our AI evaluates claims based on weighted evidence—not belief, authority, or popularity—giving you clarity without dogma. We tackle bias by automating diverse expert perspectives on every data point.",
  },
  {
    title: "Data from All Perspectives",
    description:
      "We aggregate human experiences, scientific studies, and overlooked data sources to ensure no valuable insight is left behind, while critically evaluating reliability.",
  },
  {
    title: "Transparency at Every Step",
    description:
      "The algorithms and data used to reach conclusions are shared openly so you can review—and decide for yourself.",
  },
  {
    title: "Mission-Driven, Not Institution-Funded",
    description:
      "We're a nonprofit powered by people—not corporations—committed to truth and spiritual autonomy.",
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
        flexDirection: { xs: "column", md: "row" }, // ✅ stack on mobile, side by side on md+
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
            position: { xs: "relative", md: "fixed" }, // ✅ fixed only on md+, relative on mobile
            display: { xs: "none", md: "block" },
            top: 0,
            left: 0,
            width: { xs: "100%", md: "50vw" },
            height: { xs: "40vh", md: "100vh" },
            backgroundImage: `url(${whyChooseUsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: theme.palette.cosmic.primary,
            zIndex: -1,
          }}
        />
      )}

      {/* Left spacer to balance the layout (only needed on md+) */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: { md: "50vw" },
          minHeight: { md: "100vh" },
          flexShrink: 0,
        }}
      />

      {/* Right scrollable content */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundColor: "#FFEAA7",
          px: { xs: 3, md: 10, lg: 20 },
          py: { xs: 6, md: 12 },
          zIndex: 1,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "12px", md: "14px" },
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
            fontSize: { xs: "1.8rem", md: "2.5rem" },
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
                    fontSize: { xs: 24, md: 30 },
                  }}
                />
              </Box>

              {/* Heading */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  color: "#1F2540",
                  fontSize: { xs: 20, md: 28 },
                }}
              >
                {item.title}
              </Typography>
            </Box>

            {/* Bottom Row: Description */}
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: { xs: 14, md: 16 },
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

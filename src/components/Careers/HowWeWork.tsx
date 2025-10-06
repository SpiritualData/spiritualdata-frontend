import * as React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  Divider,
  Link,
  Fade,
  Slide,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import image from "../../assets/images/careers/careers7.webp";
import theme from "@/styles/theme";
import { useInView } from "@/hooks/useInView";

const HowWeWork = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        bgcolor: "background.default",
        py: { xs: 6, md: 10 },
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: 1200,
          mx: "auto",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT: Image */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{ flexBasis: "30%" }}
          component="div"
          {...({} as any)}
        >
          <Fade in={inView} timeout={600}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 300, md: 630 },
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={image}
                alt="Team collaboration"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: { xs: 2, md: "0 150px 0 150px" },
                }}
              />
            </Box>
          </Fade>
        </Grid>

        {/* RIGHT: Content */}
        <Grid
          item
          xs={12}
          md={9}
          sx={{ flexBasis: "67%" }}
          component="div"
          {...({} as any)}
        >
          <Stack spacing={2} sx={{ p: { xs: 3, md: 6 }, pl: 10 }}>
            <Slide in={inView} direction="up" timeout={700}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.15,
                  fontSize: { xs: 36, sm: 44, md: 52 },
                  letterSpacing: 2,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                How we work
              </Typography>
            </Slide>

            <Slide in={inView} direction="up" timeout={900}>
              <Typography variant="h6" color="text.secondary">
                We're builders with <strong>intellectual humility</strong> and a
                deep commitment to <strong>truth - seeking</strong>. You'll have
                real <strong>autonomy</strong> and clear{" "}
                <strong>ownership</strong> - no required hours, no required
                location, and rewards based on impact. We strive to operate from
                a place of <strong>unconditional love</strong> in how we
                collaborate and support each other.
              </Typography>
            </Slide>

            <Slide in={inView} direction="up" timeout={1100}>
              <Typography
                variant="body1"
                color="text.secondary"
                letterSpacing={1}
              >
                Read more about our principles on{" "}
                <Link
                  href="https://spiritualdata.notion.site/Learn-more-about-Spiritual-Data-1b40ed83d417801ebe34f6ffa015c0c0"
                  style={{
                    color: theme.palette.primary.hero,
                    fontWeight: "bold",
                    textDecoration: "none",
                    display: "inline-block",
                    textShadow: `0 0 6px ${theme.palette.primary.focus}`,
                  }}
                >
                  Notion
                </Link>
                .
              </Typography>
            </Slide>

            <Fade in={inView} timeout={1200}>
              <Divider />
            </Fade>

            <Slide in={inView} direction="up" timeout={1400}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ChevronRightIcon
                  sx={{ color: "text.primary", fontSize: 28 }}
                />
                <Typography
                  color="text.primary"
                  fontSize="1.5rem"
                  letterSpacing={1.5}
                  fontWeight={600}
                >
                  Collaboration & Support
                </Typography>
              </Box>
            </Slide>

            <Slide in={inView} direction="up" timeout={1600}>
              <Typography
                variant="body2"
                color="text.secondary"
                letterSpacing={1}
              >
                We work in small, autonomous teams that value transparency and
                mutual respect. Collaboration is encouraged through open
                communication and regular knowledge-sharing.
              </Typography>
            </Slide>

            <Fade in={inView} timeout={1700}>
              <Divider />
            </Fade>

            <Slide in={inView} direction="up" timeout={1900}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ChevronRightIcon
                  sx={{ color: "text.primary", fontSize: 28 }}
                />
                <Typography
                  color="text.primary"
                  fontSize="1.5rem"
                  letterSpacing={1.5}
                  fontWeight={600}
                >
                  Impact & Autonomy
                </Typography>
              </Box>
            </Slide>

            <Slide in={inView} direction="up" timeout={2100}>
              <Typography
                variant="body2"
                color="text.secondary"
                letterSpacing={1}
              >
                Every team member has ownership over their work and the
                flexibility to manage their time and location. Impact is
                measured by results, not hours spent.
              </Typography>
            </Slide>

            <Fade in={inView} timeout={2200}>
              <Divider />
            </Fade>

            <Fade in={inView} timeout={2400}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.primary.focus,
                  color: theme.palette.primary.hero,
                  borderRadius: 8,
                  height: 42,
                  px: 4,
                  py: 3.5,
                  fontWeight: 700,
                  fontSize: "18px",
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                  alignSelf: "flex-start",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.hero,
                    color: theme.palette.primary.focus,
                  },
                }}
              >
                Apply Now
              </Button>
            </Fade>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowWeWork;

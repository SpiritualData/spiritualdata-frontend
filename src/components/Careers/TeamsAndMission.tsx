import theme from "@/styles/theme";
import {
  Typography,
  Link as MUILink,
  Card,
  CardContent,
  Container,
  Box,
  Fade,
  Slide,
} from "@mui/material";
import React, { useMemo } from "react";
import { useInView } from "../../hooks/useInView";

const TEAMS_URL =
  "https://www.notion.so/spiritualdata/Spiritual-Data-Teams-1d20ed83d41780c291efcc754c4612ee";

const TEAMS = [
  {
    name: "Application Engineering",
    mission:
      "Enable intellectual autonomy and scientific collaboration across the world through building accessible product experiences.",
  },
  {
    name: "Product",
    mission:
      "Enable intellectual autonomy and scientific collaboration across the world through designing accessible product experiences.",
  },
  {
    name: "AI Platform",
    mission:
      "Develop a foundation for AI systems to uphold scientific rigor through automating diverse perspectives, including subjective accounts, statistically comparing alternative explanations, and justifying all assumptions.",
  },
  {
    name: "People",
    mission:
      "Build a healthy organization by maintaining best practices in HR and program management while empowering teams to achieve their full potential through clear policies, efficient systems, and supportive leadership.",
  },
  {
    name: "Growth",
    mission:
      "Fuel Spiritual Data’s global impact through strategic funding, partnerships, and sustainable growth.",
  },
  {
    name: "Science",
    mission:
      "Ensure Spiritual Data is a reliable source of truth through scientific collaboration, research, and evaluation.",
  },
  {
    name: "Impact",
    mission:
      "Bring Spiritual Data to the world, effectively impacting individuals’ personal growth, science, and education.",
  },
  { name: "DevOps", mission: "Enable Spiritual Data's technology, products, and staff productivity through technical infrastructure and support." },
];

const BACKGROUND_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23F2F3EB' stroke-width='0.3' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(23.1) translate(-956.71 -717.53)'%3E%3Cuse fill='%23f0f1e9' href='%23s' y='2'/%3E%3Cuse fill='%23f0f1e9' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23edeee6' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23edeee6' href='%23s'/%3E%3Cuse fill='%23ebece4' href='%23s' x='2'/%3E%3Cuse fill='%23ebece4' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(23.1) translate(-956.71 -717.53)'%3E%3Cg fill='%23e8e9e1'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(23.1) translate(-956.71 -717.53)'%3E%3Cg fill='%23e8e9e1'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(23.1) translate(-956.71 -717.53)'%3E%3Cg fill='%23e6e7df'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(23.1) translate(-956.71 -717.53)'%3E%3Cg fill='%23F2F3EB'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e3e4dc'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(23.1) translate(-956.71 -717.53)'%3E%3Cg fill='%23D3EB63'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(23.1) translate(-956.71 -717.53)'%3E%3Cg fill='%23D3EB63'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(23.1) translate(-956.71 -717.53)'%3E%3Cg fill='%23D3EB63'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E")`;

const containerSx = {
  pt: { xs: 6, sm: 8, md: 10 },
  pb: { xs: 8, sm: 12, md: 15 },
  px: { xs: 2, sm: 3, md: 4 },
  width: "100%",
  backgroundColor: theme.palette.cosmic.secondary,
} as const;

const gridSx = {
  px: { xs: 0, sm: 4, md: 24 },
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
  gap: { xs: 2, sm: 3 },
  alignItems: "stretch",
} as const;

const baseCardSx = {
  position: "relative",
  overflow: "hidden",
  bgcolor: "darkcard.main",
  color: "darkcard.contrastText",
  borderRadius: 3,
  px: { xs: 2, sm: 3 },
  py: 0.5,
  display: "flex",
  flexDirection: "column",
  boxShadow: `0 0px 10px ${theme.palette.primary.hero}`,
  transform: "translateZ(0) scale3d(1,1,1)",
  transformOrigin: "center",
  willChange: "transform",
  backfaceVisibility: "hidden" as const,
  contain: "paint" as const,
  transition: "transform 180ms cubic-bezier(.2,.8,.2,1)",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    boxShadow: `0 0px 30px ${theme.palette.primary.hero}`,
    opacity: 0,
    transition: "opacity 180ms cubic-bezier(.2,.8,.2,1)",
    pointerEvents: "none" as const,
  },
  ":hover": {
    transform: "scale3d(1.02,1.02,1)",
  },
  ":hover::after": {
    opacity: 1,
  },
} as const;

const useDelayStyle = (inView: boolean, delay: number) =>
  useMemo(
    () => ({ transitionDelay: inView ? `${delay}ms` : "0ms" }),
    [inView, delay]
  );

const TeamCard = React.memo(function TeamCard({
  team,
  delay,
  inView,
}: {
  team: { name: string; mission: string };
  delay: number;
  inView: boolean;
}) {
  const delayStyle = useDelayStyle(inView, delay);
  return (
    <Slide in={inView} direction="up" timeout={500} style={delayStyle}>
      <div style={{ display: "contents" }}>
        <Fade in={inView} timeout={700} style={delayStyle}>
          <Card sx={baseCardSx}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: { xs: "1rem", sm: "1.1rem" } }}
              >
                {team.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}
              >
                {team.mission}
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </div>
    </Slide>
  );
});

const TeamsAndMission = React.memo(function TeamsAndMission() {
  const { ref, inView } = useInView({ threshold: 0.25 });

  const headingDelay = 0;
  const subDelay = 120;
  const baseCardDelay = 240;
  const cardStep = 100;

  const delays = useMemo(
    () => TEAMS.map((_, idx) => baseCardDelay + idx * cardStep),
    [baseCardDelay, cardStep]
  );

  const headingDelayStyle = useDelayStyle(inView, headingDelay);
  const subDelayStyle = useDelayStyle(inView, subDelay);

  return (
    <Container maxWidth={false} ref={ref} sx={containerSx}>
      <Box textAlign="center" mb={8}>
        <Slide in={inView} direction="up" timeout={500}>
          <div>
            <Fade in={inView} timeout={800} style={headingDelayStyle}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  letterSpacing: 2,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                Teams & Missions
              </Typography>
            </Fade>
          </div>
        </Slide>

        <Slide in={inView} direction="up" timeout={500}>
          <div>
            <Fade in={inView} timeout={800} style={subDelayStyle}>
              <Typography
                variant="body1"
                sx={{
                  mb: 5,
                  maxWidth: 700,
                  mx: "auto",
                  letterSpacing: 1.5,
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                }}
              >
                Explore how each team advances our mission.
              </Typography>
            </Fade>
          </div>
        </Slide>
      </Box>

      <Box sx={gridSx}>
        {TEAMS.map((team, idx) => (
          <TeamCard
            key={team.name}
            team={team}
            delay={delays[idx]}
            inView={inView}
          />
        ))}
      </Box>
    </Container>
  );
});

export default TeamsAndMission;

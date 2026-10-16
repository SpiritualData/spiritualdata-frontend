import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import {
  menteeAudience,
  mentorAudience,
  mentorshipFinal,
  mentorshipGoal,
  mentorshipHero,
  mentorshipHeroCard,
  mentorshipModel,
  mentorshipPeople,
  mentorshipQuestions,
  mentorshipSteps,
} from "../data/mentorshipData";

/**
 * /mentorship: the registration door for the mentorship launch.
 *
 * Both CTAs go to the live Quest sign-up with a ref slug, so a mentor and a
 * mentee are counted separately with no new backend code. All copy lives in
 * src/data/mentorshipData.tsx. The look (warm paper, ink, Quest purple, pill
 * buttons) matches the Quest niche landing pages rather than the site theme,
 * so its colors are local constants here.
 */
const ink = "#16142a";
const purple = "#6655db";
const purpleDark = "#5545c7";
const paper = "#f7f6f3";
const muted = "#686675";
const line = "#e2dfe8";
const font = "Inter, system-ui, sans-serif";

const modelIcons: Record<string, React.ReactElement> = {
  wallet: <AccountBalanceWalletOutlinedIcon />,
  checkin: <EventAvailableOutlinedIcon />,
  record: <AutoStoriesOutlinedIcon />,
  ai: <AutoAwesomeRoundedIcon />,
};

const headingSx = {
  fontFamily: font,
  fontWeight: 650,
  letterSpacing: "-0.05em",
  lineHeight: 1.05,
  color: ink,
};

const eyebrowSx = {
  fontFamily: font,
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: purple,
};

const PillButton: React.FC<{ href: string; label: string; variant?: "solid" | "outline" | "light" }> = ({
  href,
  label,
  variant = "solid",
}) => {
  const styles = {
    solid: { bg: purple, color: "#fff", border: purple, hoverBg: purpleDark, shadow: `0 12px 30px -12px ${purple}` },
    outline: { bg: "transparent", color: ink, border: "#cfccd6", hoverBg: "#fff", shadow: "none" },
    light: { bg: "#fff", color: purple, border: "#fff", hoverBg: "#fff", shadow: "none" },
  }[variant];
  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        px: 3,
        py: 1.75,
        borderRadius: 999,
        fontFamily: font,
        fontSize: "14px",
        fontWeight: 600,
        textDecoration: "none",
        backgroundColor: styles.bg,
        color: styles.color,
        border: `1px solid ${styles.border}`,
        boxShadow: styles.shadow,
        transition: "all .25s ease",
        "&:hover": { transform: "translateY(-2px)", backgroundColor: styles.hoverBg },
      }}
    >
      {label}
      <NorthEastRoundedIcon sx={{ fontSize: 16 }} />
    </Box>
  );
};

/** The sample check-in a mentor would see: an illustration, not real data. */
const HeroCard: React.FC = () => {
  const card = mentorshipHeroCard;
  return (
    <Box sx={{ position: "relative", pb: { xs: 0, md: 6 } }}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "28px",
          border: `1px solid ${line}`,
          p: { xs: 3, md: 4 },
          boxShadow: "0 40px 90px -40px rgba(22,20,42,.45)",
          transform: { md: "rotate(1.5deg)" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
          <Typography sx={{ ...eyebrowSx, fontSize: "11px" }}>{card.eyebrow}</Typography>
          <Typography sx={{ fontFamily: font, fontSize: "13px", color: muted }}>{card.day}</Typography>
        </Box>
        <Typography sx={{ ...headingSx, fontSize: { xs: "22px", md: "26px" }, letterSpacing: "-0.03em", mb: 2.5 }}>
          {card.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
          <Box sx={{ flex: 1, height: 8, borderRadius: 99, backgroundColor: "#ecebf3" }}>
            <Box sx={{ width: `${card.progress}%`, height: "100%", borderRadius: 99, backgroundColor: purple }} />
          </Box>
          <Typography sx={{ fontFamily: font, fontWeight: 700, fontSize: "14px", color: ink }}>{card.progress}%</Typography>
        </Box>
        <Box sx={{ display: "grid", gap: 1 }}>
          {card.steps.map((step) => (
            <Box
              key={step.label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 1.5,
                py: 1.25,
                borderRadius: "14px",
                backgroundColor: step.now ? "#f0eefc" : "transparent",
              }}
            >
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: 99,
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  backgroundColor: step.done ? purple : "transparent",
                  border: step.done ? "none" : "1.5px solid #cfccd6",
                }}
              >
                {step.done && <CheckRoundedIcon sx={{ fontSize: 15, color: "#fff" }} />}
              </Box>
              <Typography
                sx={{
                  fontFamily: font,
                  fontSize: "15px",
                  fontWeight: step.now ? 600 : 400,
                  color: step.done ? "#9a98a6" : ink,
                  textDecoration: step.done ? "line-through" : "none",
                }}
              >
                {step.label}
              </Typography>
              {step.now && (
                <Box sx={{ ml: "auto", px: 1.25, py: 0.4, borderRadius: 99, backgroundColor: ink, color: "#fff", fontFamily: font, fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em" }}>
                  NEXT
                </Box>
              )}
            </Box>
          ))}
        </Box>
        <Typography sx={{ fontFamily: font, fontSize: "14px", fontStyle: "italic", color: muted, mt: 2.5, pt: 2.5, borderTop: `1px solid ${line}` }}>
          {card.reflection}
        </Typography>
      </Box>
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          left: { md: -32 },
          bottom: { md: 0 },
          mt: { xs: -2, md: 0 },
          mx: { xs: 2, md: 0 },
          maxWidth: 320,
          backgroundColor: ink,
          color: "#fff",
          borderRadius: "18px",
          p: 2.5,
          boxShadow: "0 24px 50px -20px rgba(22,20,42,.6)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <AutoAwesomeRoundedIcon sx={{ fontSize: 16, color: "#b9b0ff" }} />
          <Typography sx={{ ...eyebrowSx, fontSize: "10px", color: "#b9b0ff" }}>Quest AI</Typography>
        </Box>
        <Typography sx={{ fontFamily: font, fontSize: "14px", lineHeight: 1.6 }}>{card.aiMessage}</Typography>
      </Box>
    </Box>
  );
};

const Mentorship: React.FC = () => {
  const audiences = [mentorAudience, menteeAudience];
  const sectionPy = { xs: 9, md: 14 };

  return (
    <Box sx={{ backgroundColor: paper, color: ink, fontFamily: font, overflow: "hidden" }}>
      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 16, md: 22 }, pb: sectionPy }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 7, md: 10 }, alignItems: "center" }}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: 99, backgroundColor: "#ef6c4a" }} />
              <Typography sx={eyebrowSx}>{mentorshipHero.eyebrow}</Typography>
            </Box>
            <Typography component="h1" sx={{ ...headingSx, fontSize: { xs: "44px", sm: "56px", md: "68px" } }}>
              {mentorshipHero.headline.before}
              <Box component="span" sx={{ color: purple, fontStyle: "italic", fontWeight: 400 }}>
                {mentorshipHero.headline.accent}
              </Box>
              {mentorshipHero.headline.after}
            </Typography>
            <Typography sx={{ fontFamily: font, fontSize: { xs: "17px", md: "19px" }, lineHeight: 1.7, color: muted, mt: 3, maxWidth: 520 }}>
              {mentorshipHero.subtitle}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4.5 }}>
              <PillButton href={mentorAudience.ctaUrl} label={mentorAudience.ctaLabel} />
              <PillButton href={menteeAudience.ctaUrl} label={menteeAudience.ctaLabel} variant="outline" />
            </Box>
            <Typography sx={{ fontFamily: font, fontSize: "14px", color: muted, mt: 2.5 }}>{mentorshipHero.note}</Typography>
          </Box>
          <HeroCard />
        </Box>
      </Container>

      {/* The goal */}
      <Box sx={{ backgroundColor: ink, color: "#fff", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ ...eyebrowSx, color: "#b9b0ff", mb: 3 }}>{mentorshipGoal.eyebrow}</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", columnGap: { xs: 5, md: 8 }, rowGap: 3 }}>
            {mentorshipGoal.stats.map((stat) => (
              <Box key={stat.label}>
                <Typography sx={{ fontFamily: font, fontWeight: 650, letterSpacing: "-0.05em", lineHeight: 1, fontSize: { xs: "56px", md: "88px" } }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ fontFamily: font, fontSize: "16px", color: "rgba(255,255,255,.7)", mt: 1 }}>{stat.label}</Typography>
              </Box>
            ))}
            <Typography sx={{ fontFamily: font, fontSize: { xs: "18px", md: "22px" }, color: "#b9b0ff", pb: { md: 4.5 } }}>{mentorshipGoal.by}</Typography>
          </Box>
          <Typography sx={{ fontFamily: font, fontSize: "16px", color: "rgba(255,255,255,.75)", mt: 4, maxWidth: 640, lineHeight: 1.7 }}>
            {mentorshipGoal.line}
          </Typography>
        </Container>
      </Box>

      {/* Two audiences */}
      <Container maxWidth="lg" sx={{ py: sectionPy }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
          {audiences.map((audience, index) => (
            <Box
              key={audience.eyebrow}
              sx={{
                display: "flex",
                flexDirection: "column",
                p: { xs: 3.5, md: 5 },
                borderRadius: "28px",
                backgroundColor: index === 0 ? "#fff" : "#efedfb",
                border: `1px solid ${index === 0 ? line : "#dcd7f7"}`,
                transition: "transform .25s ease, box-shadow .25s ease",
                "&:hover": { transform: "translateY(-4px)", boxShadow: "0 30px 60px -35px rgba(22,20,42,.4)" },
              }}
            >
              <Typography sx={eyebrowSx}>{audience.eyebrow}</Typography>
              <Typography component="h2" sx={{ ...headingSx, fontSize: { xs: "30px", md: "36px" }, mt: 2 }}>
                {audience.title}
              </Typography>
              <Typography sx={{ fontFamily: font, fontSize: "15px", color: muted, lineHeight: 1.7, mt: 2 }}>{audience.who}</Typography>
              <Box sx={{ display: "grid", gap: 1.75, mt: 3.5, mb: 4.5 }}>
                {audience.points.map((point) => (
                  <Box key={point} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                    <Box sx={{ width: 24, height: 24, borderRadius: 99, backgroundColor: purple, display: "grid", placeItems: "center", flexShrink: 0, mt: "1px" }}>
                      <CheckRoundedIcon sx={{ fontSize: 16, color: "#fff" }} />
                    </Box>
                    <Typography sx={{ fontFamily: font, fontSize: "16px", lineHeight: 1.6, color: ink }}>{point}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2 }}>
                <PillButton href={audience.ctaUrl} label={audience.ctaLabel} />
                <Typography sx={{ fontFamily: font, fontSize: "14px", color: muted }}>{audience.footnote}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* How it works */}
      <Box sx={{ backgroundColor: "#edebe6", py: sectionPy }}>
        <Container maxWidth="lg">
          <Typography sx={eyebrowSx}>{mentorshipModel.eyebrow}</Typography>
          <Typography component="h2" sx={{ ...headingSx, fontSize: { xs: "36px", md: "52px" }, mt: 2, mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
            {mentorshipModel.title}
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 2.5 }}>
            {mentorshipModel.items.map((item) => (
              <Box
                key={item.title}
                sx={{
                  p: 3.5,
                  borderRadius: "24px",
                  backgroundColor: "#fff",
                  border: `1px solid ${line}`,
                  transition: "all .25s ease",
                  "&:hover": { borderColor: purple, transform: "translateY(-4px)" },
                  "&:hover .model-icon": { backgroundColor: purple, color: "#fff" },
                }}
              >
                <Box className="model-icon" sx={{ width: 48, height: 48, borderRadius: "16px", display: "grid", placeItems: "center", backgroundColor: "#f0eefc", color: purple, transition: "all .25s ease", mb: 3 }}>
                  {modelIcons[item.icon]}
                </Box>
                <Typography sx={{ ...headingSx, fontSize: "20px", letterSpacing: "-0.03em", lineHeight: 1.25 }}>{item.title}</Typography>
                <Typography sx={{ fontFamily: font, fontSize: "15px", lineHeight: 1.65, color: muted, mt: 1.25 }}>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Who you will meet */}
      <Container maxWidth="lg" sx={{ py: sectionPy }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 4, md: 10 }, alignItems: "center" }}>
          <Box>
            <Typography sx={eyebrowSx}>{mentorshipPeople.eyebrow}</Typography>
            <Typography component="h2" sx={{ ...headingSx, fontSize: { xs: "36px", md: "48px" }, mt: 2 }}>
              {mentorshipPeople.title}
            </Typography>
            <Typography sx={{ fontFamily: font, fontSize: "17px", lineHeight: 1.7, color: muted, mt: 2.5 }}>{mentorshipPeople.intro}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {mentorshipPeople.tags.map((tag, index) => (
              <Box
                key={tag}
                sx={{
                  px: 2.5,
                  py: 1.5,
                  borderRadius: 999,
                  fontFamily: font,
                  fontSize: "15px",
                  fontWeight: 500,
                  backgroundColor: index % 2 === 0 ? "#fff" : "#efedfb",
                  border: `1px solid ${index % 2 === 0 ? line : "#dcd7f7"}`,
                  color: ink,
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* What happens next */}
      <Container maxWidth="lg" sx={{ pb: sectionPy }}>
        <Typography sx={eyebrowSx}>What happens next</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 2, md: 0 }, mt: 4, position: "relative" }}>
          {mentorshipSteps.map((step, index) => {
            const last = index === mentorshipSteps.length - 1;
            return (
              <Box key={step.id} sx={{ position: "relative", pr: { md: 4 }, display: "flex", flexDirection: { xs: "row", md: "column" }, gap: { xs: 2.5, md: 0 } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: { md: 3 } }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 99,
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                      fontFamily: font,
                      fontWeight: 700,
                      fontSize: "18px",
                      backgroundColor: last ? purple : "#fff",
                      color: last ? "#fff" : purple,
                      border: `1.5px solid ${purple}`,
                    }}
                  >
                    {step.id}
                  </Box>
                  {!last && <Box sx={{ display: { xs: "none", md: "block" }, flex: 1, height: "1.5px", ml: 2, backgroundImage: `linear-gradient(to right, ${purple} 50%, transparent 50%)`, backgroundSize: "10px 1.5px" }} />}
                </Box>
                <Box>
                  <Typography sx={{ ...headingSx, fontSize: "22px", letterSpacing: "-0.03em", lineHeight: 1.25 }}>{step.title}</Typography>
                  <Typography sx={{ fontFamily: font, fontSize: "15px", lineHeight: 1.65, color: muted, mt: 1 }}>{step.desc}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>

      {/* Final call */}
      <Box sx={{ px: { xs: 2, md: 3 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 1200, mx: "auto", borderRadius: "32px", backgroundColor: purple, color: "#fff", px: { xs: 3.5, md: 8 }, py: { xs: 6, md: 8 }, position: "relative", overflow: "hidden" }}>
          <Box sx={{ position: "absolute", right: -80, top: -80, width: 320, height: 320, borderRadius: 999, border: "40px solid rgba(255,255,255,.08)" }} />
          <Box sx={{ position: "absolute", right: 40, bottom: -120, width: 240, height: 240, borderRadius: 999, border: "30px solid rgba(255,255,255,.06)" }} />
          <Box sx={{ position: "relative" }}>
            <Typography sx={{ ...eyebrowSx, color: "rgba(255,255,255,.65)" }}>{mentorshipFinal.eyebrow}</Typography>
            <Typography component="h2" sx={{ ...headingSx, color: "#fff", fontSize: { xs: "38px", md: "56px" }, mt: 2, maxWidth: 820 }}>
              {mentorshipFinal.heading}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4.5 }}>
              <PillButton href={mentorAudience.ctaUrl} label={mentorAudience.ctaLabel} variant="light" />
              <PillButton href={menteeAudience.ctaUrl} label={menteeAudience.ctaLabel} variant="light" />
            </Box>
            <Typography sx={{ fontFamily: font, fontSize: "14px", color: "rgba(255,255,255,.8)", mt: 3.5 }}>
              {mentorshipQuestions.text}{" "}
              <Box
                component="a"
                href={`mailto:${mentorshipQuestions.email}?subject=${encodeURIComponent(mentorshipQuestions.subject)}`}
                sx={{ color: "#fff", fontWeight: 700, textUnderlineOffset: "4px" }}
              >
                {mentorshipQuestions.email}
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mentorship;

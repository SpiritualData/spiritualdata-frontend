import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import planImage from "../assets/images/mentorship/quest-plan.webp";
import reflectionImage from "../assets/images/mentorship/daily-reflection.webp";
import {
  menteeAudience,
  mentorAudience,
  mentorshipConnection,
  mentorshipFaq,
  mentorshipFinal,
  mentorshipGoal,
  mentorshipHero,
  mentorshipModel,
  mentorshipPeople,
  mentorshipQuestions,
  mentorshipScreens,
  mentorshipSteps,
} from "../data/mentorshipData";
import { questPalette as q } from "../styles/questPalette";

/**
 * /mentorship: the registration door for the mentorship launch.
 *
 * Both CTAs go to the live Quest sign-up with a ref slug, so a mentor and a
 * mentee are counted separately with no new backend code. All copy lives in
 * src/data/mentorshipData.tsx. The look (warm paper, ink, Quest purple, pill
 * buttons) matches the Quest niche landing pages; App.tsx gives the navbar and
 * footer the same palette on this route.
 */
const font = "Inter, system-ui, sans-serif";

/** How long the hero card dwells on each of the three ways a mentor helps. */
const stepMs = 3200;
const fillBar = keyframes`from { transform: scaleX(0); } to { transform: scaleX(1); }`;
const fadeIn = keyframes`from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; }`;
const travel = keyframes`0% { left: 0%; } 50% { left: calc(100% - 10px); } 100% { left: 0%; }`;

const icons: Record<string, React.ReactElement> = {
  wallet: <AccountBalanceWalletOutlinedIcon fontSize="small" />,
  checkin: <EventAvailableOutlinedIcon fontSize="small" />,
  record: <AutoStoriesOutlinedIcon fontSize="small" />,
  ai: <AutoAwesomeRoundedIcon fontSize="small" />,
  check: <InsightsOutlinedIcon fontSize="small" />,
  talk: <ChatBubbleOutlineRoundedIcon fontSize="small" />,
  meet: <EventAvailableOutlinedIcon fontSize="small" />,
  mentor: <SelfImprovementOutlinedIcon fontSize="small" />,
  growth: <TrendingUpRoundedIcon fontSize="small" />,
  inquiry: <ScienceOutlinedIcon fontSize="small" />,
};

const headingSx = {
  fontFamily: font,
  fontWeight: 700,
  letterSpacing: "-0.04em",
  lineHeight: 1.08,
  color: q.ink,
};

const eyebrowSx = {
  fontFamily: font,
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: q.purple,
};

const bodySx = { fontFamily: font, fontSize: "16px", lineHeight: 1.65, color: q.muted };

const cardSx = {
  backgroundColor: "#fff",
  border: `1px solid ${q.line}`,
  borderRadius: "24px",
};

const IconTile: React.FC<{ name: string; size?: number }> = ({ name, size = 40 }) => (
  <Box
    className="icon-tile"
    sx={{
      width: size,
      height: size,
      borderRadius: "12px",
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      backgroundColor: q.lavender,
      color: q.purple,
      transition: "all .2s ease",
    }}
  >
    {icons[name]}
  </Box>
);

const PillButton: React.FC<{ href: string; label: string; variant?: "solid" | "outline"; compact?: boolean }> = ({
  href,
  label,
  variant = "solid",
  compact = false,
}) => {
  const solid = variant === "solid";
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
        px: compact ? 2 : 3,
        height: compact ? 46 : 48,
        flex: compact ? 1 : "none",
        borderRadius: 999,
        fontFamily: font,
        fontSize: compact ? "14px" : "15px",
        fontWeight: 600,
        textDecoration: "none",
        whiteSpace: "nowrap",
        backgroundColor: solid ? q.purple : "#fff",
        color: solid ? "#fff" : q.ink,
        border: `1px solid ${solid ? q.purple : q.line}`,
        transition: "all .2s ease",
        "&:hover": solid
          ? { backgroundColor: q.purpleDark, borderColor: q.purpleDark }
          : { borderColor: q.ink },
      }}
    >
      {label}
      {!compact && <NorthEastRoundedIcon sx={{ fontSize: 16 }} />}
    </Box>
  );
};

const Avatar: React.FC<{ initial: string; name: string; role: string; dark?: boolean }> = ({ initial, name, role, dark }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, minWidth: 0 }}>
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: 999,
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
        fontFamily: font,
        fontWeight: 700,
        fontSize: "17px",
        color: "#fff",
        backgroundColor: dark ? q.ink : q.purple,
      }}
    >
      {initial}
    </Box>
    <Box sx={{ minWidth: 0 }}>
      <Typography sx={{ fontFamily: font, fontWeight: 600, fontSize: "15px", color: q.ink, lineHeight: 1.2 }}>{name}</Typography>
      <Typography sx={{ fontFamily: font, fontSize: "12px", color: q.muted }}>{role}</Typography>
    </Box>
  </Box>
);

type Audience = "mentor" | "mentee";

/** The hero illustration: a mentor and a mentee connected through a shared quest. */
const ConnectionCard: React.FC<{ audience: Audience }> = ({ audience }) => {
  const c = mentorshipConnection;
  const activity = c.activity[audience];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setTimeout(() => setActive((active + 1) % activity.length), stepMs);
    return () => window.clearTimeout(timer);
  }, [active, paused, reducedMotion, activity.length]);

  useEffect(() => setActive(0), [audience]);

  return (
    <Box sx={{ ...cardSx, borderRadius: "28px", p: { xs: 2.5, sm: 3.5 }, boxShadow: "0 30px 80px -40px rgba(22,20,42,.35)" }}>
      {/* The two people, linked */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Avatar {...c.mentor} />
        <Box sx={{ flex: 1, position: "relative", height: 10, minWidth: 24, display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1, height: "2px", backgroundImage: `linear-gradient(to right, ${q.lavenderLine} 50%, transparent 50%)`, backgroundSize: "8px 2px" }} />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "calc(50% - 5px)",
              width: 10,
              height: 10,
              borderRadius: 99,
              backgroundColor: q.purple,
              boxShadow: `0 0 0 4px ${q.lavender}`,
              animation: reducedMotion ? "none" : `${travel} 3.2s ease-in-out infinite`,
            }}
          />
        </Box>
        <Avatar {...c.mentee} dark />
      </Box>

      {/* The quest they share */}
      <Box sx={{ mt: 3, p: 2.25, borderRadius: "18px", backgroundColor: q.paper }}>
        <Typography sx={{ ...eyebrowSx, fontSize: "10px" }}>{c.quest.label}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mt: 0.75 }}>
          <Typography sx={{ fontFamily: font, fontWeight: 600, fontSize: "16px", color: q.ink }}>{c.quest.title}</Typography>
          <Typography sx={{ fontFamily: font, fontWeight: 700, fontSize: "14px", color: q.ink }}>{c.quest.progress}%</Typography>
        </Box>
        <Box sx={{ height: 6, borderRadius: 99, backgroundColor: "#e4e1ee", mt: 1.5 }}>
          <Box sx={{ width: `${c.quest.progress}%`, height: "100%", borderRadius: 99, backgroundColor: q.purple }} />
        </Box>
      </Box>

      {/* How the mentor helps: one step at a time, on a loop */}
      <Box key={audience} sx={{ mt: 2, display: "grid", gap: 0.75, animation: reducedMotion ? "none" : `${fadeIn} .4s ease` }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {activity.map((item, index) => {
          const isActive = index === active;
          return (
            <Box
              key={item.kind}
              component="button"
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={isActive}
              sx={{
                all: "unset",
                boxSizing: "border-box",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                gap: 1.75,
                alignItems: "center",
                px: 1.75,
                py: 1.5,
                borderRadius: "16px",
                backgroundColor: isActive ? q.lavender : "transparent",
                opacity: isActive ? 1 : 0.55,
                transform: isActive ? "translateX(4px)" : "none",
                transition: "background-color .35s ease, opacity .35s ease, transform .35s ease",
                "&:hover": { opacity: 1 },
                "&:focus-visible": { outline: `2px solid ${q.purple}`, outlineOffset: 2 },
                "& .icon-tile": isActive ? { backgroundColor: q.purple, color: "#fff" } : {},
              }}
            >
              <IconTile name={item.kind} />
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontFamily: font, fontWeight: 600, fontSize: "14px", color: q.ink }}>{item.title}</Typography>
                <Typography sx={{ fontFamily: font, fontSize: "14px", color: q.muted, lineHeight: 1.5 }}>{item.text}</Typography>
              </Box>
              {isActive && !paused && !reducedMotion && (
                <Box
                  key={`bar-${active}`}
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "2px",
                    backgroundColor: q.purple,
                    transformOrigin: "left",
                    animation: `${fillBar} ${stepMs}ms linear forwards`,
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const SectionHeading: React.FC<{ eyebrow: string; title: string; maxWidth?: number }> = ({ eyebrow, title, maxWidth = 640 }) => (
  <Box sx={{ mb: { xs: 4, md: 6 } }}>
    <Typography sx={eyebrowSx}>{eyebrow}</Typography>
    <Typography component="h2" sx={{ ...headingSx, fontSize: { xs: "32px", md: "44px" }, mt: 1.5, maxWidth }}>
      {title}
    </Typography>
  </Box>
);

const ScreensSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const images: Record<string, string> = { plan: planImage, reflection: reflectionImage };
  const item = mentorshipScreens.items[active];
  return (
    <Box>
      <SectionHeading eyebrow={mentorshipScreens.eyebrow} title={mentorshipScreens.title} />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: ".8fr 1.2fr" }, gap: { xs: 3, md: 6 }, alignItems: "center" }}>
        <Box sx={{ display: "grid", gap: 1.5, order: { xs: 2, md: 1 } }}>
          {mentorshipScreens.items.map((screen, index) => {
            const isActive = index === active;
            return (
              <Box
                key={screen.key}
                component="button"
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                aria-pressed={isActive}
                sx={{
                  all: "unset",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  p: 3,
                  borderRadius: "20px",
                  backgroundColor: isActive ? "#fff" : "transparent",
                  border: `1px solid ${isActive ? q.lavenderLine : "transparent"}`,
                  boxShadow: isActive ? "0 20px 40px -28px rgba(22,20,42,.35)" : "none",
                  transition: "all .25s ease",
                  "&:hover": { backgroundColor: "#fff" },
                  "&:focus-visible": { outline: `2px solid ${q.purple}`, outlineOffset: 2 },
                }}
              >
                <Typography sx={{ ...eyebrowSx, color: isActive ? q.purple : q.muted }}>{screen.label}</Typography>
                <Typography sx={{ ...headingSx, fontSize: "20px", letterSpacing: "-0.02em", mt: 1 }}>{screen.title}</Typography>
                {isActive && <Typography sx={{ ...bodySx, fontSize: "15px", mt: 0.75 }}>{screen.desc}</Typography>}
              </Box>
            );
          })}
        </Box>
        <Box sx={{ order: { xs: 1, md: 2 }, borderRadius: "28px", overflow: "hidden", border: `1px solid ${q.line}`, boxShadow: "0 30px 80px -40px rgba(22,20,42,.45)", lineHeight: 0 }}>
          <Box key={item.key} component="img" src={images[item.key]} alt={item.alt} sx={{ width: "100%", display: "block", animation: `${fadeIn} .35s ease` }} />
        </Box>
      </Box>
    </Box>
  );
};

const FaqSection: React.FC = () => {
  const [open, setOpen] = useState(0);
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: ".8fr 1.2fr" }, gap: { xs: 3, md: 8 } }}>
      <Box>
        <Typography sx={eyebrowSx}>{mentorshipFaq.eyebrow}</Typography>
        <Typography component="h2" sx={{ ...headingSx, fontSize: { xs: "32px", md: "44px" }, mt: 1.5 }}>
          {mentorshipFaq.title}
        </Typography>
      </Box>
      <Box>
        {mentorshipFaq.items.map((item, index) => {
          const isOpen = open === index;
          return (
            <Box key={item.q} sx={{ borderTop: `1px solid ${q.line}`, ...(index === mentorshipFaq.items.length - 1 ? { borderBottom: `1px solid ${q.line}` } : {}) }}>
              <Box
                component="button"
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                sx={{
                  all: "unset",
                  boxSizing: "border-box",
                  width: "100%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  py: 2.5,
                  "&:focus-visible": { outline: `2px solid ${q.purple}`, outlineOffset: 2 },
                }}
              >
                <Typography sx={{ fontFamily: font, fontSize: "17px", fontWeight: 600, color: q.ink }}>{item.q}</Typography>
                <AddRoundedIcon sx={{ color: q.purple, flexShrink: 0, transition: "transform .25s ease", transform: isOpen ? "rotate(135deg)" : "none" }} />
              </Box>
              {isOpen && <Typography sx={{ ...bodySx, pb: 2.5, pr: 5 }}>{item.a}</Typography>}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const Mentorship: React.FC = () => {
  const [audience, setAudience] = useState<Audience>("mentor");
  const [showBar, setShowBar] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);
  const audiences = [mentorAudience, menteeAudience];
  const sectionPy = { xs: 8, md: 12 };
  const primary = audience === "mentor" ? mentorAudience : menteeAudience;
  const secondary = audience === "mentor" ? menteeAudience : mentorAudience;

  // The sticky bar shows once the hero buttons have scrolled away, and hides again at the closing call.
  useEffect(() => {
    if (!heroRef.current || !finalRef.current || typeof IntersectionObserver === "undefined") return;
    const seen = { hero: true, final: false };
    const update = () => setShowBar(!seen.hero && !seen.final);
    const heroObserver = new IntersectionObserver(([e]) => { seen.hero = e.isIntersecting; update(); });
    const finalObserver = new IntersectionObserver(([e]) => { seen.final = e.isIntersecting; update(); });
    heroObserver.observe(heroRef.current);
    finalObserver.observe(finalRef.current);
    return () => { heroObserver.disconnect(); finalObserver.disconnect(); };
  }, []);

  return (
    <Box sx={{ backgroundColor: q.paper, color: q.ink, fontFamily: font, overflow: "hidden" }}>
      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 15, md: 20 }, pb: sectionPy }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr .95fr" }, gap: { xs: 6, md: 8 }, alignItems: "center" }}>
          <Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.75,
                borderRadius: 999,
                backgroundColor: q.lavender,
                mb: 3,
              }}
            >
              <Box sx={{ width: 7, height: 7, borderRadius: 99, backgroundColor: q.purple }} />
              <Typography sx={{ ...eyebrowSx, fontSize: "11px" }}>{mentorshipHero.eyebrow}</Typography>
            </Box>
            <Typography component="h1" sx={{ ...headingSx, fontSize: { xs: "42px", sm: "52px", md: "62px" } }}>
              {mentorshipHero.headline.before}
              <Box component="span" sx={{ color: q.purple }}>
                {mentorshipHero.headline.accent}
              </Box>
              {mentorshipHero.headline.after}
            </Typography>
            {/* One switch: the subtitle, the card and the buttons follow the visitor's side */}
            <Box role="group" aria-label="I am a" sx={{ display: "inline-flex", p: 0.5, mt: 3, borderRadius: 999, backgroundColor: "#fff", border: `1px solid ${q.line}` }}>
              {(["mentor", "mentee"] as Audience[]).map((side) => {
                const isActive = audience === side;
                return (
                  <Box
                    key={side}
                    component="button"
                    type="button"
                    onClick={() => setAudience(side)}
                    aria-pressed={isActive}
                    sx={{
                      all: "unset",
                      boxSizing: "border-box",
                      cursor: "pointer",
                      px: { xs: 1.75, sm: 2.5 },
                      py: 1,
                      borderRadius: 999,
                      fontFamily: font,
                      fontSize: "14px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      color: isActive ? "#fff" : q.muted,
                      backgroundColor: isActive ? q.ink : "transparent",
                      transition: "all .25s ease",
                      "&:hover": { color: isActive ? "#fff" : q.ink },
                      "&:focus-visible": { outline: `2px solid ${q.purple}`, outlineOffset: 2 },
                    }}
                  >
                    {mentorshipHero.audiences[side].toggleLabel}
                  </Box>
                );
              })}
            </Box>
            <Typography key={audience} sx={{ ...bodySx, fontSize: { xs: "17px", md: "18px" }, mt: 2.5, maxWidth: 500, minHeight: { sm: 87 }, animation: `${fadeIn} .35s ease` }}>
              {mentorshipHero.audiences[audience].subtitle}
            </Typography>
            <Box ref={heroRef} sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 3 }}>
              <PillButton href={primary.ctaUrl} label={primary.ctaLabel} />
              <PillButton href={secondary.ctaUrl} label={secondary.ctaLabel} variant="outline" />
            </Box>
            <Typography sx={{ ...bodySx, fontSize: "14px", mt: 2 }}>{mentorshipHero.note}</Typography>

            {/* The goal, up front: the numbers Joshua asked to be stated */}
            <Box sx={{ mt: { xs: 4, md: 5 }, pt: { xs: 3, md: 4 }, borderTop: `1px solid ${q.line}` }}>
              <Typography sx={eyebrowSx}>{mentorshipGoal.eyebrow}</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", columnGap: { xs: 3, md: 5 }, rowGap: 1, mt: 1.5 }}>
                {mentorshipGoal.stats.map((stat) => (
                  <Box key={stat.label}>
                    <Typography sx={{ ...headingSx, fontSize: { xs: "36px", md: "44px" }, lineHeight: 1 }}>{stat.value}</Typography>
                    <Typography sx={{ ...bodySx, fontSize: "14px", mt: 0.5 }}>{stat.label}</Typography>
                  </Box>
                ))}
                <Typography sx={{ fontFamily: font, fontSize: "15px", fontWeight: 600, color: q.purple, pb: { xs: 0, sm: 3.25 } }}>{mentorshipGoal.by}</Typography>
              </Box>
              <Typography sx={{ ...bodySx, fontSize: "14px", mt: 1.5 }}>{mentorshipGoal.line}</Typography>
            </Box>
          </Box>
          <ConnectionCard audience={audience} />
        </Box>
      </Container>

      {/* Two audiences */}
      <Container maxWidth="lg" sx={{ py: sectionPy }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
          {audiences.map((audience) => (
            <Box key={audience.eyebrow} sx={{ ...cardSx, display: "flex", flexDirection: "column", p: { xs: 3.5, md: 5 } }}>
              <Typography sx={eyebrowSx}>{audience.eyebrow}</Typography>
              <Typography component="h2" sx={{ ...headingSx, fontSize: { xs: "28px", md: "32px" }, mt: 1.5 }}>
                {audience.title}
              </Typography>
              <Typography sx={{ ...bodySx, fontSize: "15px", mt: 1.5 }}>{audience.who}</Typography>
              <Box sx={{ display: "grid", gap: 1.5, mt: 3, mb: 4 }}>
                {audience.points.map((point) => (
                  <Box key={point} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                    <Box sx={{ width: 22, height: 22, borderRadius: 99, backgroundColor: q.lavender, display: "grid", placeItems: "center", flexShrink: 0, mt: "2px" }}>
                      <CheckRoundedIcon sx={{ fontSize: 15, color: q.purple }} />
                    </Box>
                    <Typography sx={{ fontFamily: font, fontSize: "16px", lineHeight: 1.6, color: q.ink }}>{point}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: "auto" }}>
                <PillButton href={audience.ctaUrl} label={audience.ctaLabel} />
                <Typography sx={{ ...bodySx, fontSize: "14px", mt: 1.5 }}>{audience.footnote}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Real Quest screens */}
      <Container maxWidth="lg" sx={{ pb: sectionPy }}>
        <ScreensSection />
      </Container>

      {/* How it works */}
      <Box sx={{ backgroundColor: "#fff", borderTop: `1px solid ${q.line}`, borderBottom: `1px solid ${q.line}`, py: sectionPy }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow={mentorshipModel.eyebrow} title={mentorshipModel.title} />
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 2 }}>
            {mentorshipModel.items.map((item) => (
              <Box
                key={item.title}
                sx={{
                  ...cardSx,
                  backgroundColor: q.paper,
                  border: `1px solid transparent`,
                  p: 3,
                  transition: "all .2s ease",
                  "&:hover": { borderColor: q.lavenderLine, backgroundColor: "#fff" },
                  "&:hover .icon-tile": { backgroundColor: q.purple, color: "#fff" },
                }}
              >
                <IconTile name={item.icon} size={44} />
                <Typography sx={{ ...headingSx, fontSize: "18px", letterSpacing: "-0.02em", lineHeight: 1.3, mt: 2.5 }}>{item.title}</Typography>
                <Typography sx={{ ...bodySx, fontSize: "15px", mt: 1 }}>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Who you will meet */}
      <Container maxWidth="lg" sx={{ py: sectionPy }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 4, md: 8 }, alignItems: "center" }}>
          <Box>
            <Typography sx={eyebrowSx}>{mentorshipPeople.eyebrow}</Typography>
            <Typography component="h2" sx={{ ...headingSx, fontSize: { xs: "32px", md: "44px" }, mt: 1.5 }}>
              {mentorshipPeople.title}
            </Typography>
            <Typography sx={{ ...bodySx, fontSize: "17px", mt: 2 }}>{mentorshipPeople.intro}</Typography>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1.5 }}>
            {mentorshipPeople.tags.map((tag) => (
              <Box key={tag.text} sx={{ ...cardSx, borderRadius: "18px", p: 2.25, display: "flex", alignItems: "center", gap: 1.5 }}>
                <IconTile name={tag.icon} size={36} />
                <Typography sx={{ fontFamily: font, fontSize: "15px", fontWeight: 500, color: q.ink, lineHeight: 1.4 }}>{tag.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* What happens next */}
      <Container maxWidth="lg" sx={{ pb: sectionPy }}>
        <SectionHeading eyebrow="What happens next" title="Three steps to your first check-in." maxWidth={820} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
          {mentorshipSteps.map((step, index) => {
            const last = index === mentorshipSteps.length - 1;
            return (
              <Box key={step.id} sx={{ ...cardSx, p: 3, display: "flex", gap: 2, alignItems: "flex-start", borderColor: last ? q.lavenderLine : q.line, backgroundColor: last ? q.lavender : "#fff" }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 99,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    fontFamily: font,
                    fontWeight: 700,
                    fontSize: "15px",
                    backgroundColor: last ? q.purple : q.lavender,
                    color: last ? "#fff" : q.purple,
                  }}
                >
                  {step.id}
                </Box>
                <Box>
                  <Typography sx={{ ...headingSx, fontSize: "18px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{step.title}</Typography>
                  <Typography sx={{ ...bodySx, fontSize: "15px", mt: 0.75 }}>{step.desc}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>

      {/* Questions */}
      <Container maxWidth="lg" sx={{ pb: sectionPy }}>
        <FaqSection />
      </Container>

      {/* Final call */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 12 } }}>
        <Box
          ref={finalRef}
          sx={{
            borderRadius: "28px",
            px: { xs: 3.5, md: 7 },
            py: { xs: 5, md: 7 },
            background: `linear-gradient(135deg, ${q.lavender} 0%, #e6e2fb 100%)`,
            border: `1px solid ${q.lavenderLine}`,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box>
            <Typography sx={eyebrowSx}>{mentorshipFinal.eyebrow}</Typography>
            <Typography component="h2" sx={{ ...headingSx, fontSize: { xs: "32px", md: "44px" }, mt: 1.5 }}>
              {mentorshipFinal.heading}
            </Typography>
            <Typography sx={{ ...bodySx, fontSize: "15px", mt: 1.5 }}>
              {mentorshipQuestions.text}{" "}
              <Box
                component="a"
                href={`mailto:${mentorshipQuestions.email}?subject=${encodeURIComponent(mentorshipQuestions.subject)}`}
                sx={{ color: q.purple, fontWeight: 600, textUnderlineOffset: "3px" }}
              >
                {mentorshipQuestions.email}
              </Box>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, flexShrink: 0 }}>
            <PillButton href={mentorAudience.ctaUrl} label={mentorAudience.ctaLabel} />
            <PillButton href={menteeAudience.ctaUrl} label={menteeAudience.ctaLabel} variant="outline" />
          </Box>
        </Box>
      </Container>

      {/* Sticky sign-up bar, phones and tablets only */}
      <Box
        aria-hidden={!showBar}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1100,
          gap: 1,
          px: 2,
          pt: 1.5,
          pb: "calc(12px + env(safe-area-inset-bottom))",
          backgroundColor: "rgba(247,246,243,.94)",
          backdropFilter: "blur(12px)",
          borderTop: `1px solid ${q.line}`,
          transform: showBar ? "none" : "translateY(110%)",
          visibility: showBar ? "visible" : "hidden",
          transition: "transform .3s ease, visibility .3s",
        }}
      >
        <PillButton compact href={mentorAudience.ctaUrl} label={mentorAudience.ctaShortLabel} />
        <PillButton compact href={menteeAudience.ctaUrl} label={menteeAudience.ctaShortLabel} variant="outline" />
      </Box>
    </Box>
  );
};

export default Mentorship;

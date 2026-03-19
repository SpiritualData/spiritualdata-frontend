import { useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { alpha } from "@mui/material/styles";
import type { WhyChooseUsData } from "../data/homeData";
import video1 from "../assets/images/products/ProcessClips/1.mp4";
import video2 from "../assets/images/products/ProcessClips/2.mp4";
import video3 from "../assets/images/products/ProcessClips/3.mp4";
import video4 from "../assets/images/products/ProcessClips/4.mp4";

type WhyChooseUsProps = {
  data: WhyChooseUsData;
};

const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAccordionHovering, setIsAccordionHovering] = useState(false);
  const [videoClipIndex, setVideoClipIndex] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.001 },
    );

    observer.observe(element);

    const rect = element.getBoundingClientRect();
    const initiallyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (initiallyVisible) {
      setIsInView(true);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => undefined);
      }
    } else {
      video.pause();
    }
  }, [isInView, videoClipIndex]);

  const { media, overline, heading, reasons } = data;
  const normalizedMedia =
    typeof media === "string"
      ? {
          src: media,
          type: /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(media) ? "video" : "image",
        }
      : media;
  const isVideo = normalizedMedia.type === "video";

  const [titleLine, ...supportLines] = heading
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const supportText = supportLines.join(" ") || reasons[0]?.description || " ";
  const isQuestStyle = isVideo;
  const questVideoPlaylist = [video1, video2, video3, video4];
  const phoneSteps = ["1", "2", "3", "4"];
  const activePhoneStep = videoClipIndex % phoneSteps.length;
  const currentVideoSrc =
    isQuestStyle && questVideoPlaylist.length > 0
      ? questVideoPlaylist[videoClipIndex]
      : normalizedMedia.src;
  const eyebrowText = isQuestStyle ? "HOW IT WORKS" : overline;
  const titleText = isQuestStyle ? overline : titleLine || heading;
  const descriptionText = isQuestStyle ? heading : supportText;
  const phonePrompt = isQuestStyle
    ? "What do you want to achieve?"
    : reasons[0]?.title || titleText;
  const stableAccordionHeight = { xs: 450, md: 400 };
  const accordionDetailHeight = isQuestStyle
    ? { xs: 150, md: 108 }
    : { xs: 220, md: 170 };

  useEffect(() => {
    setActiveIndex(0);
  }, [reasons.length]);

  useEffect(() => {
    setVideoClipIndex(0);
  }, [isQuestStyle, normalizedMedia.src]);

  useEffect(() => {
    if (reasons.length === 0 || isAccordionHovering) return;
    setActiveIndex(videoClipIndex % reasons.length);
  }, [videoClipIndex, reasons.length, isAccordionHovering]);

  return (
    <Box
      ref={sectionRef}
      id="why-choose-us-section"
      sx={{
        width: "100%",
        backgroundColor: theme.palette.cosmic.primary,
        py: { xs: 8, md: 18 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1220,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "320px minmax(0, 1fr)" },
          alignItems: "center",
          columnGap: { md: 11 },
          rowGap: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 308, md: 328 },
              height: { xs: 548, md: 638 },
              borderRadius: 11,
              overflow: "visible",
              backgroundColor: theme.palette.darkcard.main,
              boxShadow: `0 22px 48px ${alpha(theme.palette.common.black, 0.24)}`,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: 11,
                overflow: "hidden",
              }}
            >
              {isVideo ? (
                <Box
                  component="video"
                  ref={videoRef}
                  src={currentVideoSrc}
                  muted
                  loop={!isQuestStyle}
                  playsInline
                  onEnded={() => {
                    if (!isQuestStyle || questVideoPlaylist.length === 0)
                      return;
                    setVideoClipIndex(
                      (prev) => (prev + 1) % questVideoPlaylist.length,
                    );
                  }}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${normalizedMedia.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}
            </Box>

            <Box
              sx={{
                position: "absolute",
                right: -5,
                top: "25%",
                width: 6,
                height: 60,
                borderRadius: 999,
                zIndex: 2,
                bgcolor: alpha(theme.palette.text.primary, 0.72),
                boxShadow: `inset -1px 0 0 ${alpha(theme.palette.common.white, 0.22)}, 0 1px 4px ${alpha(theme.palette.common.black, 0.35)}`,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: -5,
                top: "20%",
                width: 6,
                height: 40,
                borderRadius: 999,
                zIndex: 2,
                bgcolor: alpha(theme.palette.text.primary, 0.72),
                boxShadow: `inset 1px 0 0 ${alpha(theme.palette.common.white, 0.22)}, 0 1px 4px ${alpha(theme.palette.common.black, 0.35)}`,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: -5,
                top: "28%",
                width: 6,
                height: 58,
                borderRadius: 999,
                zIndex: 2,
                bgcolor: alpha(theme.palette.text.primary, 0.72),
                boxShadow: `inset 1px 0 0 ${alpha(theme.palette.common.white, 0.22)}, 0 1px 4px ${alpha(theme.palette.common.black, 0.35)}`,
              }}
            />

            {isQuestStyle ? (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    left: -50,
                    top: "12%",
                    zIndex: 3,
                    height: 34,
                    px: 2.1,
                    borderRadius: 999,
                    display: "inline-flex",
                    alignItems: "center",
                    bgcolor: theme.palette.primary.focus,
                    color: theme.palette.primary.hover,
                    fontSize: 14,
                    fontWeight: 700,
                    boxShadow: `0 6px 14px ${alpha(theme.palette.common.black, 0.25)}`,
                  }}
                >
                  AI-powered ✦
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    right: -38,
                    bottom: "12%",
                    zIndex: 3,
                    height: 36,
                    width: 134,
                    borderRadius: 999,
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    overflow: "hidden",
                    bgcolor: alpha(theme.palette.common.white, 0.94),
                    boxShadow: `0 8px 18px ${alpha(theme.palette.common.black, 0.2)}`,
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: "25%",
                      borderRadius: 999,
                      bgcolor: theme.palette.primary.focus,
                      transform: `translateX(${activePhoneStep * 100}%)`,
                      transition:
                        "transform 360ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                  {phoneSteps.map((step, idx) => (
                    <Box
                      key={step}
                      onClick={() => {
                        setVideoClipIndex(idx);
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setVideoClipIndex(idx);
                        }
                      }}
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                        userSelect: "none",
                        fontSize: 14,
                        fontWeight: 700,
                        color:
                          idx === activePhoneStep
                            ? theme.palette.primary.hover
                            : alpha(theme.palette.text.secondary, 0.58),
                      }}
                    >
                      {step}
                    </Box>
                  ))}
                </Box>
              </>
            ) : null}
          </Box>
        </Box>

        <Box sx={{ pr: { md: 1 } }}>
          <Typography
            sx={{
              color: theme.palette.primary.focus,
              fontSize: { xs: 12, md: 16 },
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              mb: 1.8,
            }}
          >
            {eyebrowText}
          </Typography>

          <Typography
            sx={{
              color: theme.palette.primary.hover,
              fontSize: { xs: "2.55rem", sm: "3.2rem", md: "4.15rem" },
              lineHeight: { xs: 1.12, md: 1.05 },
              fontWeight: 700,
              mb: 1.5,
            }}
          >
            {titleText}
          </Typography>

          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: 17, md: 17 },
              lineHeight: 1.6,
              maxWidth: 640,
              mb: 4,
            }}
          >
            {descriptionText}
          </Typography>

          <Box
            sx={{
              borderTop: `1px solid ${alpha(theme.palette.text.secondary, 0.16)}`,
              minHeight: stableAccordionHeight,
            }}
          >
            {reasons.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <Box
                  key={item.title}
                  onMouseEnter={() => {
                    setIsAccordionHovering(true);
                    setActiveIndex(index);
                  }}
                  onMouseLeave={() => {
                    setIsAccordionHovering(false);
                    if (reasons.length > 0) {
                      setActiveIndex(videoClipIndex % reasons.length);
                    }
                  }}
                  sx={{
                    borderBottom: `1px solid ${alpha(theme.palette.text.secondary, 0.16)}`,
                    py: { xs: 2.2, md: 2.6 },
                  }}
                >
                  <Box
                    onClick={() => setActiveIndex(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveIndex(index);
                      }
                    }}
                    aria-expanded={isActive}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        width: 30,
                        flexShrink: 0,
                        color: isActive
                          ? theme.palette.primary.focus
                          : alpha(theme.palette.text.secondary, 0.4),
                        fontSize: { xs: 14, md: 17 },
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography
                      sx={{
                        color: isActive
                          ? theme.palette.primary.hover
                          : alpha(theme.palette.text.secondary, 0.65),
                        fontSize: { xs: 24, md: 21 },
                        lineHeight: 1.35,
                        fontWeight: 600,
                        flex: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        bgcolor: isActive
                          ? theme.palette.primary.focus
                          : alpha(theme.palette.text.secondary, 0.12),
                        color: isActive
                          ? theme.palette.primary.hover
                          : alpha(theme.palette.text.secondary, 0.5),
                      }}
                    >
                      {isActive ? (
                        <RemoveIcon sx={{ fontSize: 18 }} />
                      ) : (
                        <AddIcon sx={{ fontSize: 18 }} />
                      )}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      overflow: "hidden",
                      height: isActive ? accordionDetailHeight : 0,
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0px)"
                        : "translateY(-6px)",
                      transition:
                        "height 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: alpha(theme.palette.text.secondary, 0.92),
                        fontSize: { xs: 17, md: 17 },
                        lineHeight: 1.6,
                        mt: 1.4,
                        pl: { xs: "46px", md: "44px" },
                        pr: { xs: 0, md: 5 },
                        pb: 0.2,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;

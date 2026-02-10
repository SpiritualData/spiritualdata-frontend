import { Box, Container, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import whatItLooksLikeImg from "../../assets/images/Products/WhatItLooksLikeImg.webp";

type WhatItLooksLikeItem = {
  title: string;
  description: string;
  top: number;
  left?: number;
  right?: number;
};

type WhatItLooksLikeData = {
  eyebrow: string;
  title: string;
  description: string;
  leftItems: WhatItLooksLikeItem[];
  rightItems: WhatItLooksLikeItem[];
};

const WhatItLooksLike = ({ data }: { data: WhatItLooksLikeData }) => {
  const theme = useTheme();
  const accent = theme.palette.primary.focus || theme.palette.primary.main;
  const lineColor = theme.palette.cosmic.secondary;
  const ringColor = alpha(theme.palette.cosmic.secondary, 0.6);
  const iconSize = 46;
  const imageSize = 340;
  const innerRingInset = 36;
  const outerRingInset = 70;
  const desktopListHeight = imageSize + outerRingInset * 2;
  const clampPct = (value: number) => Math.max(0, Math.min(100, value));
  const getTopRange = (items: { top: number }[]) => {
    const tops = items.map((item) => item.top);
    const min = Math.min(...tops);
    const max = Math.max(...tops);
    return {
      start: clampPct(min),
      end: clampPct(max),
    };
  };
  const leftRange = getTopRange(data.leftItems);
  const rightRange = getTopRange(data.rightItems);

  const renderItem = (item: WhatItLooksLikeItem, align: "left" | "right") => {
    const isLeft = align === "left";
    const leftOffset = item.left === undefined ? "auto" : `${item.left}%`;
    const rightOffset = item.right === undefined ? "auto" : `${item.right}%`;
    const icon = (
      <Box
        sx={{
          width: iconSize,
          height: iconSize,
          borderRadius: "50%",
          backgroundColor: accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 0 6px ${ringColor}`,
          flexShrink: 0,
        }}
      >
        <CheckIcon sx={{ color: theme.palette.common.white, fontSize: 22 }} />
      </Box>
    );
    const mobileIcon = (
      <Box sx={{ display: { xs: "flex", md: "none" } }}>{icon}</Box>
    );
    const desktopIcon = (
      <Box sx={{ display: { xs: "none", md: "flex" } }}>{icon}</Box>
    );

    return (
      <Box
        key={item.title}
        sx={{
          position: { xs: "static", md: "absolute" },
          top: { md: `${item.top}%` },
          left: { xs: "auto", md: isLeft ? (leftOffset ?? "auto") : "auto" },
          right: { xs: "auto", md: isLeft ? "auto" : (rightOffset ?? "auto") },
          transform: { md: "translateY(-50%)" },
          display: "flex",
          alignItems: "center",
          justifyContent: isLeft
            ? { xs: "center", md: "flex-end" }
            : { xs: "center", md: "flex-start" },
          gap: 2,
          textAlign: { xs: "left", md: isLeft ? "right" : "left" },
          width: { xs: "100%", md: "auto" },
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {mobileIcon}
        {align === "right" ? desktopIcon : null}
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 0.5,
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.5,
            }}
          >
            {item.description}
          </Typography>
        </Box>
        {align === "left" ? desktopIcon : null}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, sm: 8, md: 12 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="overline"
            sx={{
              color: accent,
              letterSpacing: "3px",
              fontWeight: 600,
            }}
          >
            {data.eyebrow}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mt: 0.5,
              mb: 1.5,
            }}
          >
            {data.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 650,
              mx: "auto",
              lineHeight: 1.7,
              letterSpacing: 0.8,
            }}
          >
            {data.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr minmax(260px, 360px) 1fr",
            },
            alignItems: "center",
            gap: { xs: 5, md: 3 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: { xs: "flex", md: "block" },
              flexDirection: { xs: "column", md: "initial" },
              gap: { xs: 3, md: 0 },
              minHeight: { md: desktopListHeight },
              pr: { md: 4 },
              order: { xs: 2, md: 1 },
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: { md: `${leftRange.start}%` },
                bottom: { md: `${100 - leftRange.end}%` },
                right: { md: iconSize / 1 },
                width: { md: 150 },
                display: { xs: "none", md: "block" },
                pointerEvents: "none",
              }}
            >
              <Box
                component="svg"
                viewBox="0 0 170 100"
                preserveAspectRatio="none"
                sx={{ width: "100%", height: "100%" }}
              >
                <path
                  d="M165 0 C40 0, 40 100, 165 100"
                  fill="none"
                  stroke={lineColor}
                  strokeWidth="2"
                  strokeDasharray="4 10"
                  strokeLinecap="round"
                />
              </Box>
            </Box>
            {data.leftItems.map((item) => renderItem(item, "left"))}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              order: { xs: 1, md: 2 },
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "80%", sm: "60%", md: imageSize },
                maxWidth: 360,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: { xs: -26, md: -innerRingInset },
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.main,
                  zIndex: 0,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: { xs: -56, md: -outerRingInset },
                  borderRadius: "50%",
                  border: `1px solid ${ringColor}`,
                  zIndex: 0,
                  backgroundColor: theme.palette.primary.focus,
                  opacity: 0.05,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: `0 10px 30px ${theme.palette.cardshadow.main}`,
                  zIndex: 1,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${alpha(
                      theme.palette.cosmic.elevated,
                      0,
                    )} 58%, ${alpha(
                      theme.palette.cosmic.elevated,
                      0.55,
                    )} 78%, ${theme.palette.cosmic.elevated} 100%)`,
                    pointerEvents: "none",
                  },
                }}
              >
                <Box
                  component="img"
                  src={whatItLooksLikeImg}
                  alt="Quest preview"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              display: { xs: "flex", md: "block" },
              flexDirection: { xs: "column", md: "initial" },
              gap: { xs: 3, md: 0 },
              minHeight: { md: desktopListHeight },
              pl: { md: 4 },
              order: { xs: 3, md: 3 },
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: { md: `${rightRange.start}%` },
                bottom: { md: `${100 - rightRange.end}%` },
                left: { md: iconSize / 1 },
                width: { md: 150 },
                display: { xs: "none", md: "block" },
                pointerEvents: "none",
              }}
            >
              <Box
                component="svg"
                viewBox="0 0 170 100"
                preserveAspectRatio="none"
                sx={{ width: "100%", height: "100%" }}
              >
                <path
                  d="M5 0 C130 0, 130 100, 5 100"
                  fill="none"
                  stroke={lineColor}
                  strokeWidth="2"
                  strokeDasharray="4 10"
                  strokeLinecap="round"
                />
              </Box>
            </Box>
            {data.rightItems.map((item) => renderItem(item, "right"))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatItLooksLike;

import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

type UseCaseItem = {
  id: number;
  title: string;
};

type UseCasesProps = {
  data: UseCaseItem[];
};

const SCROLL_SPEED = 2;

const UseCases: React.FC<UseCasesProps> = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollRef = useRef<HTMLDivElement>(null);

  const fullData = [...data, ...data];

  useEffect(() => {
    const container = scrollRef.current;
    let frameId: number;

    const scroll = () => {
      if (container) {
        container.scrollTop += SCROLL_SPEED;
        if (container.scrollTop >= container.scrollHeight / 2) {
          container.scrollTop = 0;
        }
      }
      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <Box
      sx={{
        height: { xs: "auto", md: "700px" },
        width: "100%",
        overflowY: "hidden",
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, white 100%)`,
        position: "relative",
        // mb: 8,
        pt: { xs: 6, md: 0 },
        pb: { xs: 6, md: 0 },
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          width: { xs: "90%", md: "38%" },
          position: "absolute",
          zIndex: 2,
          mx: { xs: "auto", md: "unset" },
          right: { xs: "unset", md: 0 },
          pr: { xs: 0, md: 15 },
          pt: { xs: 0, md: 13 },
          textAlign: { xs: "center", md: "right" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 600,
            mb: 4,
            color: theme.palette.primary.focus,
            textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
          }}
        >
          Endless Possibilities <br /> for Growth
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            letterSpacing: 1,
            lineHeight: 1.7,
          }}
        >
          <b>
            Quest adapts to your goals – spiritual, personal, or practical.
            <br /> Guiding you with clarity, structure, and support.
          </b>
          <br />
          Whatever transformation you seek, <br />
          Quest is designed to walk <br /> alongside you.
        </Typography>
      </Box>

      {/* Scrolling Cards Section */}
      <Box
        ref={scrollRef}
        sx={{
          height: { xs: "600px", md: "250%" },
          width: { xs: "80%", sm: "60%", md: "30%" },
          overflowY: "hidden",
          position: "relative",
          transform: { xs: "none", md: "rotateX(51deg) rotateZ(-43deg)" },
          top: { xs: "unset", md: -450 },
          left: { xs: "auto", md: 350 },
          mx: { xs: "auto", md: "unset" },
          mt: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {fullData.map((item, index) => (
            <Box
              key={`${item.id}-${index}`}
              sx={{
                width: { xs: "100%", sm: 320, md: 380 },
                minHeight: 100,
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: 2,
                p: 3,
                m: 2,
                textAlign: "center",
                boxShadow: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                letterSpacing={1}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UseCases;

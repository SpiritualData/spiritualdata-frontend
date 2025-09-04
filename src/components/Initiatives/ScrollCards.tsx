import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import image from "../../assets/Images/Initiatives/EstimatingTruth/bgimage.gif";
import { useNavigate } from "react-router-dom";

interface CardData {
  title: string;
  desc: string;
  btn: string;
  img: string;
  link: string;
}

interface ScrollStackCardsProps {
  data: CardData[];
}

export default function ScrollStackCards({ data }: ScrollStackCardsProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: `calc(${data.length * 100}vh + 50vh)`,
        // backgroundColor: theme.palette.primary.main,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.4' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23D3EB63'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23D3EB63'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23D3EB63'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {data.map((card, i) => (
        <Box
          key={i}
          sx={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            pt: 4,
            zIndex: i + 1,
          }}
        >
          {/* angled back layer */}
          <Box
            sx={{
              position: "absolute",
              width: "90%",
              height: "70%",
              bgcolor: "transparent",
              transform: "skew(-8deg)",
              borderRadius: 2,
              zIndex: 0,
            }}
          />

          {/* angled front top layer */}
          <Box
            sx={{
              position: "absolute",
              width: "50%",
              height: "35%",
              top: 210,
              left: 150,
              bgcolor: theme.palette.primary.focus,
              boxShadow: "0px 0px 25px rgba(0,0,0,0.3)",
              transform: "skew(-8deg)",
              zIndex: 1,
              borderRadius: "50px 0 50px 0",
            }}
          />
          {/* angled front bottom layer */}
          <Box
            sx={{
              position: "absolute",
              width: "50%",
              height: "35%",
              bottom: 180,
              right: 150,
              bgcolor: theme.palette.primary.focus,
              boxShadow: "0px 0px 25px rgba(0,0,0,0.3)",
              transform: "skew(-8deg)",
              zIndex: 1,
              borderRadius: "50px 0 50px 0",
            }}
          />

          {/* main content card */}
          <Container
            sx={{
              position: "relative",
              zIndex: 2,
              backgroundColor: theme.palette.primary.hero,
              color: "white",
              borderRadius: "50px 0 50px 0",
              boxShadow: `0px 6px 25px ${theme.palette.primary.focus}`,
              p: { xs: 3, md: 8 },
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              maxWidth: "80%",
              minHeight: 480,
              transform: "skew(-8deg)",
            }}
          >
            {/* text left */}
            <Box flex={1}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {card.title}
              </Typography>
              {/* Small underline accent */}
              <Box
                sx={{
                  height: 5,
                  width:
                    card.title === "Background"
                      ? 200
                      : card.title === "Purpose"
                      ? 140
                      : card.title === "Approach"
                      ? 170
                      : "100%",
                  bgcolor: theme.palette.primary.focus,
                  borderRadius: 2,
                  mb: 5,
                }}
              />

              <Typography
                variant="body1"
                sx={{ mb: 7, letterSpacing: 1.5, lineHeight: 2 }}
              >
                {card.desc}
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate(`${card.link}`)}
                sx={{
                  backgroundColor: theme.palette.primary.focus,
                  color: theme.palette.primary.hero,
                  borderRadius: 8,
                  height: 42,
                  px: 3,
                  fontWeight: 700,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.hero,
                  },
                }}
              >
                {card.btn.toUpperCase()}
              </Button>
            </Box>

            {/* image right */}
            <Box
              component="img"
              src={card.img}
              alt={card.title}
              sx={{
                width: { xs: "100%", md: "40%" },
                borderRadius: 2,
                objectFit: "cover",
                border: `5px solid ${theme.palette.primary.main}`,
                boxShadow: "0px 6px 25px rgb(255,255,255,0.25)",
              }}
            />
          </Container>
        </Box>
      ))}
    </Box>
  );
}

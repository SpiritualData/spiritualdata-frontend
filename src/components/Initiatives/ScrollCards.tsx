import { Box, Container, Typography, Button, useTheme } from "@mui/material";
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
        height: { xs: "auto", md: `calc(${data.length * 100}vh + 50vh)` },
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.4' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23D3EB63'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23D3EB63'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(20.35) translate(-950.86 -713.14)'%3E%3Cg fill='%23D3EB63'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        backgroundSize: "cover",
      }}
    >
      {data.map((card, i) => (
        <Box
          key={i}
          sx={{
            top: { xs: -10, sm: 0 },
            position: "sticky",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 1.5, sm: 2, md: 2 },
            py: { xs: 6, md: 4 },
            zIndex: i + 1,
          }}
        >
          {/* main content card */}
          <Container
            sx={{
              position: "relative",
              zIndex: 2,
              background: `linear-gradient(to right, ${theme.palette.primary.hover} 0%,${theme.palette.primary.hero} 50%, ${theme.palette.text.secondary} 100%)`,
              color: "white",
              borderRadius: "50px 0 50px 0",
              boxShadow: {
                xs: `1.5rem 1.5rem 0px -0.5rem ${theme.palette.primary.focus},
                     -1.5rem -1.5rem 0px -0.5rem ${theme.palette.primary.focus},
                     0px 4px 15px ${theme.palette.primary.focus}`,
                sm: `3rem 3rem 0px -1rem ${theme.palette.primary.focus},
                     -3rem -3rem 0px -1rem ${theme.palette.primary.focus},
                     0px 5px 18px ${theme.palette.primary.focus}`,
                md: `6rem 6rem 0px -1.875rem ${theme.palette.primary.focus},
                     -6rem -6rem 0px -1.875rem ${theme.palette.primary.focus},
                     0px 6px 25px ${theme.palette.primary.focus}`,
              },
              p: { xs: 3, sm: 4, md: 8 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, md: 4 },
              maxWidth: { xs: "95%", sm: "90%", md: "80%" },
              minHeight: { xs: "auto", sm: 400, md: 480 },
              transform: { xs: "none", md: "skew(-8deg)" },
            }}
          >
            {/* text left */}
            <Box
              flex={1}
              sx={{
                textAlign: { xs: "center", md: "left" },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 3, md: 5 },
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem" },
                  display: "inline-block",
                  borderBottom: `4px solid ${theme.palette.primary.focus}`,
                  paddingBottom: "8px",
                }}
              >
                {card.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 4, md: 7 },
                  letterSpacing: { xs: 0.5, md: 1.5 },
                  lineHeight: { xs: 1.6, md: 2 },
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                }}
              >
                {card.desc}
              </Typography>

              <Button
                variant="contained"
                onClick={() => {
                  if (card.link.startsWith('http')) {
                    window.open(card.link, '_blank');
                  } else {
                    navigate(card.link);
                  }
                }}
                sx={{
                  backgroundColor: theme.palette.primary.focus,
                  color: theme.palette.primary.hero,
                  borderRadius: 8,
                  height: 42,
                  px: { xs: 2.5, md: 3 },
                  fontWeight: 700,
                  fontSize: { xs: "12px", md: "14px" },
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
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
                width: { xs: "100%", sm: "80%", md: "40%" },
                maxHeight: { xs: 220, sm: 280, md: "none" },
                borderRadius: "30px 0 30px 0",
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

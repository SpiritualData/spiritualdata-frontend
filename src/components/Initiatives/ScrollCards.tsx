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
        backgroundColor: theme.palette.text.primary, // brand navy, one step lighter than the cards
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
                xs: `1.5rem 1.5rem 0px -0.5rem #FFEAA7,
                     -1.5rem -1.5rem 0px -0.5rem #FFEAA7,
                     0px 4px 15px #FFEAA7`,
                sm: `3rem 3rem 0px -1rem #FFEAA7,
                     -3rem -3rem 0px -1rem #FFEAA7,
                     0px 5px 18px #FFEAA7`,
                md: `6rem 6rem 0px -1.875rem #FFEAA7,
                     -6rem -6rem 0px -1.875rem #FFEAA7,
                     0px 6px 25px #FFEAA7`,
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
                    backgroundColor: theme.palette.cosmic.primary,
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

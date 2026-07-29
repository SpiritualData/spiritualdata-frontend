import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface SubPageCard {
  id: number;
  eyebrow: string;
  title: string;
  desc: string;
  btn: string;
  link: string;
}

interface SubPageCardsProps {
  data: SubPageCard[];
  heading?: string;
  subheading?: string;
}

const SubPageCards = ({ data, heading, subheading }: SubPageCardsProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.darkcard.main,
        color: theme.palette.darkcard.contrastText,
        py: { xs: 8, md: 12 },
      }}
    >
      <Container>
        {heading && (
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Sansation, sans-serif",
              fontWeight: 700,
              display: "inline-block",
              borderBottom: `5px solid ${theme.palette.primary.focus}`,
              pb: "4px",
              mb: 2,
            }}
          >
            {heading}
          </Typography>
        )}
        {subheading && (
          <Typography
            sx={{
              maxWidth: 780,
              mb: { xs: 5, md: 7 },
              opacity: 0.85,
              lineHeight: 1.8,
            }}
          >
            {subheading}
          </Typography>
        )}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {data.map((card) => (
            <Box
              key={card.id}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                border: "1px solid rgba(255, 255, 255, 0.12)",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                transition: "border-color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  borderColor: theme.palette.primary.focus,
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontSize: "11px",
                  color: theme.palette.primary.focus,
                }}
              >
                {card.eyebrow}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Sansation, sans-serif",
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </Typography>
              <Typography
                sx={{
                  opacity: 0.8,
                  lineHeight: 1.7,
                  fontSize: "15px",
                  flexGrow: 1,
                }}
              >
                {card.desc}
              </Typography>
              <Box sx={{ pt: 1 }}>
                <Button
                  component={RouterLink}
                  to={card.link}
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.primary.focus,
                    color: theme.palette.primary.hero,
                    borderRadius: 8,
                    height: 40,
                    px: 3,
                    fontWeight: 700,
                    fontSize: "13px",
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
                  {card.btn}
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SubPageCards;

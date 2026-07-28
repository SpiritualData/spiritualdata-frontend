import { Box, Container, Typography, useTheme } from "@mui/material";
import type { CertificationStats } from "../../data/certifiedPsychicsData";
import { certificationLevels } from "../../data/certifiedPsychicsData";

interface CertificationStatsBandProps {
  stats: CertificationStats;
}

/**
 * Every number here is derived from the published record. Nothing is stated by
 * hand, so the band cannot drift away from what has actually been published.
 */
const CertificationStatsBand = ({ stats }: CertificationStatsBandProps) => {
  const theme = useTheme();

  const headlineStats = [
    {
      value: stats.totalAssessments,
      label: "Assessments published",
      note: "Completed sessions, whatever they showed",
      emphasised: false,
    },
    {
      value: stats.certifiedCount,
      label: "Certified",
      note: "Met the standard at one of the four levels",
      emphasised: false,
    },
    {
      value: stats.nullResultCount,
      label: "Null results published",
      note: "Sessions that demonstrated nothing, published anyway",
      emphasised: true,
    },
    {
      value: stats.abilitiesTested,
      label: "Distinct abilities tested",
      note: "Across the whole published record",
      emphasised: false,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.darkcard.main,
        color: theme.palette.darkcard.contrastText,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {headlineStats.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor: stat.emphasised
                  ? "rgba(255, 191, 0, 0.08)"
                  : "rgba(255, 255, 255, 0.04)",
                border: stat.emphasised
                  ? `1px solid ${theme.palette.primary.focus}`
                  : "1px solid rgba(255, 255, 255, 0.12)",
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Sansation, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "3rem", md: "3.5rem" },
                  lineHeight: 1,
                  color: stat.emphasised
                    ? theme.palette.primary.focus
                    : theme.palette.darkcard.contrastText,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  fontSize: "13px",
                  mt: 1,
                }}
              >
                {stat.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  lineHeight: 1.5,
                  opacity: 0.7,
                }}
              >
                {stat.note}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "12px",
              opacity: 0.7,
              mb: 2,
            }}
          >
            Certified at each level
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 2,
            }}
          >
            {certificationLevels.map((level) => (
              <Box
                key={level}
                sx={{
                  px: 2.5,
                  py: 2,
                  borderRadius: 2,
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Sansation, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.75rem",
                    lineHeight: 1,
                  }}
                >
                  {stats.byLevel[level]}
                </Typography>
                <Typography sx={{ fontSize: "13px", lineHeight: 1.4 }}>
                  {level}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CertificationStatsBand;

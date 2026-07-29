import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";
import HeaderSection from "../../../components/Initiatives/NestedInitiativesHeader";
import CertificationStatsBand from "../../../components/Initiatives/CertificationStatsBand";
import AssessmentCard from "../../../components/Initiatives/AssessmentCard";
import { certifiedHeaderData } from "../../../data/psychicAbilityCertificationData";
import {
  assessments,
  certificationLevels,
  getAssessmentYear,
  getCertificationStats,
  outcomeLabels,
  participantLabel,
} from "../../../data/certifiedPsychicsData";
import type { AssessmentOutcome } from "../../../data/certifiedPsychicsData";

const ALL = "all";

const outcomeOptions: AssessmentOutcome[] = [
  "certified",
  "not-demonstrated",
  "inconclusive",
];

const Certified: React.FC = () => {
  const theme = useTheme();

  const [ability, setAbility] = useState<string>(ALL);
  const [outcome, setOutcome] = useState<string>(ALL);
  const [level, setLevel] = useState<string>(ALL);
  const [year, setYear] = useState<string>(ALL);
  const [query, setQuery] = useState<string>("");

  const stats = useMemo(() => getCertificationStats(assessments), []);

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();

    return assessments.filter((assessment) => {
      if (ability !== ALL && assessment.ability !== ability) return false;
      if (outcome !== ALL && assessment.outcome !== outcome) return false;
      if (level !== ALL && assessment.level !== level) return false;
      if (year !== ALL && String(getAssessmentYear(assessment)) !== year)
        return false;
      if (!search) return true;

      // Search covers only what the participant consented to have shown:
      // participantLabel is anonymous unless identification was granted.
      const haystack = `${participantLabel(assessment)} ${
        assessment.protocol.summary
      }`.toLowerCase();
      return haystack.includes(search);
    });
  }, [ability, outcome, level, year, query]);

  const hasRecords = assessments.length > 0;
  const filtersActive =
    ability !== ALL ||
    outcome !== ALL ||
    level !== ALL ||
    year !== ALL ||
    query.trim() !== "";

  const clearFilters = () => {
    setAbility(ALL);
    setOutcome(ALL);
    setLevel(ALL);
    setYear(ALL);
    setQuery("");
  };

  const selectSx = {
    minWidth: { xs: "100%", md: 180 },
    flex: { xs: "1 1 100%", md: "0 1 auto" },
  };

  const primaryButtonSx = {
    backgroundColor: theme.palette.primary.focus,
    color: theme.palette.primary.hero,
    borderRadius: 8,
    height: 44,
    px: 4,
    fontWeight: 700,
    fontSize: "14px",
    textTransform: "uppercase",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.hero,
      color: theme.palette.primary.focus,
    },
  };

  const secondaryButtonSx = {
    backgroundColor: "transparent",
    color: theme.palette.primary.hero,
    border: `1px solid ${theme.palette.primary.hero}`,
    borderRadius: 8,
    height: 44,
    px: 4,
    fontWeight: 700,
    fontSize: "14px",
    textTransform: "uppercase",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.hero,
      color: theme.palette.primary.focus,
    },
  };

  return (
    <>
      <HeaderSection data={certifiedHeaderData} />

      <CertificationStatsBand stats={stats} />

      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.cosmic.primary,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container>
          <Typography
            component={RouterLink}
            to="/initiatives/psychic-ability-certification"
            sx={{
              display: "block",
              width: "fit-content",
              mb: 3,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: theme.palette.text.secondary,
              textDecoration: "none",
              "&:hover": { color: theme.palette.primary.hero },
            }}
          >
            ← Psychic Ability Certification
          </Typography>

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
            The published record
          </Typography>

          <Typography
            sx={{
              maxWidth: 820,
              color: theme.palette.text.secondary,
              lineHeight: 1.9,
              mb: { xs: 4, md: 6 },
            }}
          >
            Every completed assessment is published here in full, with accuracy
            rates, conditions, and methodology, including the assessments that
            demonstrate nothing. Publication is a condition of participating.
            Being named is not, so some records appear without identifying
            information.{" "}
            <Typography
              component={RouterLink}
              to="/initiatives/psychic-ability-certification/ethics"
              sx={{
                color: theme.palette.primary.hero,
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Read the ethics and testing protocol
            </Typography>
            .
          </Typography>

          {hasRecords && (
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3 },
                mb: 4,
                borderRadius: 2,
                border: `1px solid ${theme.palette.cosmic.secondary}`,
                backgroundColor: theme.palette.cosmic.elevated,
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
              }}
            >
              <TextField
                size="small"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search participant or protocol"
                sx={{ flex: { xs: "1 1 100%", md: "1 1 260px" } }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                select
                size="small"
                label="Ability"
                value={ability}
                onChange={(event) => setAbility(event.target.value)}
                sx={selectSx}
              >
                <MenuItem value={ALL}>All abilities</MenuItem>
                {stats.abilities.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                size="small"
                label="Outcome"
                value={outcome}
                onChange={(event) => setOutcome(event.target.value)}
                sx={selectSx}
              >
                <MenuItem value={ALL}>All outcomes</MenuItem>
                {outcomeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {outcomeLabels[option]}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                size="small"
                label="Level"
                value={level}
                onChange={(event) => setLevel(event.target.value)}
                sx={selectSx}
              >
                <MenuItem value={ALL}>All levels</MenuItem>
                {certificationLevels.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                size="small"
                label="Year"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                sx={selectSx}
              >
                <MenuItem value={ALL}>All years</MenuItem>
                {stats.years.map((option) => (
                  <MenuItem key={option} value={String(option)}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              {filtersActive && (
                <Button
                  onClick={clearFilters}
                  sx={{
                    fontWeight: 700,
                    fontSize: "13px",
                    textTransform: "uppercase",
                    color: theme.palette.primary.hero,
                  }}
                >
                  Clear filters
                </Button>
              )}
            </Paper>
          )}

          {hasRecords && (
            <Typography
              sx={{
                mb: 2,
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: theme.palette.text.secondary,
              }}
            >
              Showing {filtered.length} of {assessments.length} assessments
            </Typography>
          )}

          {hasRecords && filtered.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {filtered.map((assessment) => (
                <AssessmentCard key={assessment.id} assessment={assessment} />
              ))}
            </Box>
          )}

          {hasRecords && filtered.length === 0 && (
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 2,
                border: `1px solid ${theme.palette.cosmic.secondary}`,
                backgroundColor: theme.palette.cosmic.elevated,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontFamily: "Sansation, sans-serif" }}
              >
                No assessments match these filters.
              </Typography>
              <Typography sx={{ color: theme.palette.text.secondary, mt: 1 }}>
                Widen the filters to see the rest of the record.
              </Typography>
              <Button onClick={clearFilters} sx={{ ...primaryButtonSx, mt: 3 }}>
                Clear filters
              </Button>
            </Paper>
          )}

          {!hasRecords && (
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 6 },
                borderRadius: 2,
                border: `1px solid ${theme.palette.cosmic.secondary}`,
                borderTop: `6px solid ${theme.palette.primary.focus}`,
                backgroundColor: theme.palette.cosmic.elevated,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  color: theme.palette.text.secondary,
                  mb: 1.5,
                }}
              >
                What appears on this page
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Sansation, sans-serif",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  mb: 3,
                }}
              >
                An assessment is published once it has been earned, not once
                it has been claimed.
              </Typography>

              <Box sx={{ maxWidth: 780, display: "grid", gap: 2.5 }}>
                <Typography
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.9 }}
                >
                  The counts above are computed directly from the published
                  record rather than entered by hand, so they can only ever
                  reflect assessments that actually took place. Nothing on this
                  page is curated, summarised, or selected.
                </Typography>

                <Typography
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.9 }}
                >
                  An assessment reaches this page only after a session has been
                  completed under the published protocol, witnessed and
                  controlled as the protocol requires, independently reviewed by
                  PhD-level researchers, and reviewed with the participant. That
                  sequence takes time, and it is the reason the record can be
                  trusted.
                </Typography>

                <Typography
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.9 }}
                >
                  Every completed assessment appears here,
                  with its accuracy rates, conditions, and methodology,{" "}
                  <Box component="span" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    including the assessments that demonstrate nothing
                  </Box>
                  . A program that reports only its successes is not evidence of
                  anything, which is why the null-result count above is given the
                  same prominence as the certifications.
                </Typography>

                <Typography
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.9 }}
                >
                  Publication itself is a condition of participating, agreed in
                  writing before testing rather than after a result is known.
                  What stays optional is the participant's name, so an
                  assessment may appear here without identifying information.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  mt: 4,
                }}
              >
                <Button
                  component={RouterLink}
                  to="/initiatives/psychic-ability-certification/apply"
                  variant="contained"
                  sx={primaryButtonSx}
                >
                  Apply to be tested
                </Button>
                <Button
                  component={RouterLink}
                  to="/initiatives/psychic-ability-certification/ethics"
                  variant="outlined"
                  sx={secondaryButtonSx}
                >
                  Read the protocol
                </Button>
              </Box>
            </Paper>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Certified;

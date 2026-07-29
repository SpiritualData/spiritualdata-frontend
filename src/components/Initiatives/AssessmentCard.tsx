import { Box, Button, Chip, Paper, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { Assessment } from "../../data/certifiedPsychicsData";
import {
  formatAssessmentDate,
  participantLabel,
} from "../../data/certifiedPsychicsData";
import OutcomeChip from "./OutcomeChip";

interface AssessmentCardProps {
  assessment: Assessment;
}

const AssessmentCard = ({ assessment }: AssessmentCardProps) => {
  const theme = useTheme();
  const { participant, protocol } = assessment;

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 2,
        border: `1px solid ${theme.palette.cosmic.secondary}`,
        borderLeft: `6px solid ${
          assessment.outcome === "certified"
            ? theme.palette.primary.focus
            : theme.palette.cosmic.secondary
        }`,
        backgroundColor: theme.palette.cosmic.elevated,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 1,
        }}
      >
        <OutcomeChip outcome={assessment.outcome} />
        {assessment.outcome === "certified" && assessment.level && (
          <Chip
            label={assessment.level}
            size="small"
            sx={{
              fontWeight: 700,
              fontSize: "11px",
              borderRadius: 1,
              backgroundColor: "transparent",
              color: theme.palette.primary.hero,
              border: `1px solid ${theme.palette.primary.hero}`,
            }}
          />
        )}
        <Typography
          sx={{
            ml: { sm: "auto" },
            fontSize: "13px",
            color: theme.palette.text.secondary,
          }}
        >
          Session {formatAssessmentDate(assessment.sessionDate)}
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Sansation, sans-serif",
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          {assessment.ability}
        </Typography>
        <Typography sx={{ color: theme.palette.text.secondary, mt: 0.5 }}>
          {assessment.abilityDetail}
        </Typography>
      </Box>

      <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
        {participantLabel(assessment)}
        {participant.identified && participant.location
          ? `, ${participant.location}`
          : ""}
      </Typography>

      <Typography
        sx={{
          color: theme.palette.text.secondary,
          lineHeight: 1.7,
        }}
      >
        {protocol.summary}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 1.5, md: 3 },
          pt: 1,
          borderTop: `1px solid ${theme.palette.cosmic.secondary}`,
          fontSize: "13px",
          color: theme.palette.text.secondary,
        }}
      >
        <Typography sx={{ fontSize: "13px" }}>
          {protocol.witnessCount} witnesses
        </Typography>
        <Typography sx={{ fontSize: "13px" }}>
          Researcher witness: {protocol.researcherWitness ? "yes" : "no"}
        </Typography>
        <Typography sx={{ fontSize: "13px" }}>
          Independent witness: {protocol.independentWitness ? "yes" : "no"}
        </Typography>
        <Typography sx={{ fontSize: "13px" }}>
          Video: {protocol.videoUrl ? "available" : "not linked"}
        </Typography>
      </Box>

      <Box>
        <Button
          component={RouterLink}
          to={`/initiatives/psychic-ability-certification/certified/${assessment.id}`}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.hero,
            color: theme.palette.primary.focus,
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
              backgroundColor: theme.palette.primary.focus,
              color: theme.palette.primary.hero,
            },
          }}
        >
          View full assessment
        </Button>
      </Box>
    </Paper>
  );
};

export default AssessmentCard;

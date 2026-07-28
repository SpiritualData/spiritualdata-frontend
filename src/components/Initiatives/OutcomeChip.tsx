import { Chip, useTheme } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { AssessmentOutcome } from "../../data/certifiedPsychicsData";
import { outcomeLabels } from "../../data/certifiedPsychicsData";

interface OutcomeChipProps {
  outcome: AssessmentOutcome;
  size?: "small" | "medium";
}

/**
 * A null result is styled with the same weight as a certification, never as a
 * failure state. Publishing what did not work is the point of the record.
 */
const OutcomeChip = ({ outcome, size = "small" }: OutcomeChipProps) => {
  const theme = useTheme();

  const styles: Record<AssessmentOutcome, SxProps<Theme>> = {
    certified: {
      backgroundColor: theme.palette.primary.focus,
      color: theme.palette.primary.hero,
      border: `1px solid ${theme.palette.primary.focus}`,
    },
    "not-demonstrated": {
      backgroundColor: theme.palette.cosmic.secondary,
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.cosmic.secondary}`,
    },
    inconclusive: {
      backgroundColor: "transparent",
      color: theme.palette.text.secondary,
      border: `1px solid ${theme.palette.cosmic.secondary}`,
    },
  };

  return (
    <Chip
      label={outcomeLabels[outcome]}
      size={size}
      sx={{
        fontWeight: 700,
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        fontSize: size === "small" ? "11px" : "13px",
        borderRadius: 1,
        ...styles[outcome],
      }}
    />
  );
};

export default OutcomeChip;

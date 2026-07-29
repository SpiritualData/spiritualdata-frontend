import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import HeaderSection from "../../../components/Initiatives/NestedInitiativesHeader";
import OutcomeChip from "../../../components/Initiatives/OutcomeChip";
import { assessmentDetailHeaderData } from "../../../data/psychicAbilityCertificationData";
import {
  assessments,
  formatAssessmentDate,
  formatChanceProbability,
  getAssessmentById,
  participantLabel,
} from "../../../data/certifiedPsychicsData";

const RECORD_PATH = "/initiatives/psychic-ability-certification/certified";

interface DetailSectionProps {
  title: string;
  children: React.ReactNode;
}

/** A titled card. Each one is a thing a skeptic would ask to see. */
const DetailSection = ({ title, children }: DetailSectionProps) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 2,
        border: `1px solid ${theme.palette.cosmic.secondary}`,
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
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

const FactRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 0.25, sm: 2 },
        py: 1.25,
        borderBottom: `1px solid ${theme.palette.cosmic.secondary}`,
      }}
    >
      <Typography
        sx={{
          minWidth: { sm: 240 },
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        {label}
      </Typography>
      <Typography
        component="div"
        sx={{ color: theme.palette.text.secondary, fontSize: "15px", flex: 1 }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const AssessmentDetail: React.FC = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const assessment = getAssessmentById(id);

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

  const BackLink = (
    <Typography
      component={RouterLink}
      to={RECORD_PATH}
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
      ← Published assessments
    </Typography>
  );

  if (!assessment) {
    return (
      <>
        <HeaderSection data={assessmentDetailHeaderData} />
        <Box
          sx={{
            width: "100%",
            backgroundColor: theme.palette.cosmic.primary,
            py: { xs: 6, md: 10 },
          }}
        >
          <Container>
            {BackLink}
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
                variant="h4"
                sx={{
                  fontFamily: "Sansation, sans-serif",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                No assessment found at this address.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.9,
                  maxWidth: 720,
                }}
              >
                {assessments.length === 0
                  ? "This link does not point to an assessment in the published record. Every completed assessment is published there, including the assessments that demonstrate nothing."
                  : "The reference in this link does not match any published assessment. It may have been mistyped, or the reference may be out of date."}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 4 }}>
                <Button
                  component={RouterLink}
                  to={RECORD_PATH}
                  variant="contained"
                  sx={primaryButtonSx}
                >
                  Back to the record
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
          </Container>
        </Box>
      </>
    );
  }

  const { participant, protocol, results, review } = assessment;

  const documents: { label: string; url?: string }[] = [
    { label: "Pre-registration", url: protocol.preRegistrationUrl },
    { label: "Video recording", url: protocol.videoUrl },
    { label: "Signed witness statements", url: assessment.witnessStatementsUrl },
    { label: "Reviewer report", url: review.reportUrl },
    { label: "Participant profile", url: participant.identified ? participant.publicProfileUrl : undefined },
  ];
  const availableDocuments = documents.filter(
    (document): document is { label: string; url: string } =>
      typeof document.url === "string" && document.url.length > 0
  );

  const accuracy =
    results.trials && results.trials > 0 && typeof results.hits === "number"
      ? `${results.hits} of ${results.trials} (${(
          (results.hits / results.trials) *
          100
        ).toFixed(1)}%)`
      : undefined;

  return (
    <>
      <HeaderSection data={assessmentDetailHeaderData} />

      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.cosmic.primary,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container>
          {BackLink}

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              mb: 3,
              borderRadius: 2,
              border: `1px solid ${theme.palette.cosmic.secondary}`,
              borderTop: `6px solid ${
                assessment.outcome === "certified"
                  ? theme.palette.primary.focus
                  : theme.palette.cosmic.secondary
              }`,
              backgroundColor: theme.palette.cosmic.elevated,
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              <OutcomeChip outcome={assessment.outcome} size="medium" />
              {assessment.outcome === "certified" && assessment.level && (
                <Chip
                  label={assessment.level}
                  sx={{
                    fontWeight: 700,
                    fontSize: "13px",
                    borderRadius: 1,
                    backgroundColor: "transparent",
                    color: theme.palette.primary.hero,
                    border: `1px solid ${theme.palette.primary.hero}`,
                  }}
                />
              )}
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontFamily: "Sansation, sans-serif",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {assessment.ability}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                mt: 1,
                maxWidth: 820,
                lineHeight: 1.8,
              }}
            >
              {assessment.abilityDetail}
            </Typography>

            <Box sx={{ mt: 3 }}>
              <FactRow label="Participant" value={participantLabel(assessment)} />
              {participant.identified && participant.location && (
                <FactRow label="Location" value={participant.location} />
              )}
              <FactRow
                label="Session date"
                value={formatAssessmentDate(assessment.sessionDate)}
              />
              <FactRow
                label="Published"
                value={formatAssessmentDate(assessment.publishedDate)}
              />
              <FactRow label="Record reference" value={assessment.id} />
            </Box>
          </Paper>

          <Box sx={{ display: "grid", gap: 3 }}>
            <DetailSection title="Protocol">
              <Typography sx={{ lineHeight: 1.9, mb: 2 }}>
                {protocol.summary}
              </Typography>
              <FactRow label="Control" value={protocol.controlDescription} />
              <FactRow
                label="Witnesses present"
                value={`${protocol.witnessCount}`}
              />
              <FactRow
                label="Trained researcher witness"
                value={protocol.researcherWitness ? "Yes" : "No"}
              />
              <FactRow
                label="Independent witness (no close ties to researcher or participant)"
                value={protocol.independentWitness ? "Yes" : "No"}
              />
              <FactRow
                label="Pre-registration"
                value={
                  protocol.preRegistrationUrl ? (
                    <Typography
                      component="a"
                      href={protocol.preRegistrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.primary.hero,
                        fontWeight: 700,
                      }}
                    >
                      Procedure and success criteria recorded before the session
                    </Typography>
                  ) : (
                    "Not linked to this record"
                  )
                }
              />
            </DetailSection>

            <DetailSection title="Results and statistics">
              <Typography sx={{ lineHeight: 1.9, mb: 2 }}>
                {results.description}
              </Typography>
              {typeof results.trials === "number" && (
                <FactRow label="Trials" value={results.trials} />
              )}
              {accuracy && <FactRow label="Hits" value={accuracy} />}
              {typeof results.chanceProbability === "number" && (
                <FactRow
                  label="Probability against chance"
                  value={formatChanceProbability(results.chanceProbability)}
                />
              )}
              {typeof results.meetsThreshold === "boolean" && (
                <FactRow
                  label="Meets the published threshold"
                  value={
                    results.meetsThreshold
                      ? "Yes, better than one in one quadrillion"
                      : "No, the published threshold is better than one in one quadrillion"
                  }
                />
              )}
            </DetailSection>

            <DetailSection title="Independent review">
              <Box sx={{ mb: 2 }}>
                {review.reviewers.map((reviewer) => (
                  <FactRow
                    key={`${reviewer.name}-${reviewer.credential}`}
                    label={reviewer.name}
                    value={reviewer.credential}
                  />
                ))}
              </Box>
              <Typography
                sx={{
                  lineHeight: 1.9,
                  p: 2.5,
                  borderRadius: 2,
                  backgroundColor: theme.palette.cosmic.primary,
                  borderLeft: `4px solid ${theme.palette.primary.focus}`,
                }}
              >
                {review.verdict}
              </Typography>
            </DetailSection>

            <DetailSection title="Documents">
              {availableDocuments.length > 0 ? (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {availableDocuments.map((document) => (
                    <Button
                      key={document.label}
                      href={document.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      sx={secondaryButtonSx}
                    >
                      {document.label}
                    </Button>
                  ))}
                </Box>
              ) : (
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  No documents are linked to this record.
                </Typography>
              )}
            </DetailSection>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 4 }}>
            <Button
              component={RouterLink}
              to={RECORD_PATH}
              variant="contained"
              sx={primaryButtonSx}
            >
              Back to the record
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
        </Container>
      </Box>
    </>
  );
};

export default AssessmentDetail;

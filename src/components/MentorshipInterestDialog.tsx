import React, { FormEvent, useEffect, useState } from "react";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {
  menteeAudience,
  mentorAudience,
  mentorshipInterest,
  mentorshipInterestPath,
  questApiUrl,
} from "../data/mentorshipData";
import { questPalette as q } from "../styles/questPalette";

export type MentorshipSide = "mentor" | "mentee";

const font = "Inter, system-ui, sans-serif";
const copy = mentorshipInterest;
const topicMaxLength = 200;
const redirectDelayMs = 1400;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldSx = {
  width: "100%",
  boxSizing: "border-box" as const,
  fontFamily: font,
  fontSize: "16px",
  color: q.ink,
  backgroundColor: "#fff",
  border: `1px solid ${q.line}`,
  borderRadius: "14px",
  px: 2,
  py: 1.5,
  outline: "none",
  transition: "border-color .2s ease, box-shadow .2s ease",
  "&:focus": { borderColor: q.purple, boxShadow: `0 0 0 3px ${q.lavender}` },
  "&::placeholder": { color: "#9b99a8" },
};

const labelSx = { fontFamily: font, fontSize: "14px", fontWeight: 600, color: q.ink, display: "block", mb: 0.75 };
const errorSx = { fontFamily: font, fontSize: "13px", color: "#b3261e", mt: 0.75 };

/**
 * The short form behind every mentorship CTA: an email and one phrase about
 * what the visitor wants to mentor for, or wants mentorship for. It saves the
 * answer, then sends them on to Quest sign-up with the launch ref slug.
 */
const MentorshipInterestDialog: React.FC<{ side: MentorshipSide | null; onClose: () => void }> = ({ side, onClose }) => {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");

  // A reopened form starts clean, but keeps what the visitor typed if they switch side.
  useEffect(() => {
    if (side) setStatus("idle");
  }, [side]);

  if (!side) return null;
  const audience = side === "mentor" ? mentorAudience : menteeAudience;
  const text = copy[side];
  const emailValid = emailPattern.test(email.trim());
  const topicValid = topic.trim().length > 0;

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setTouched(true);
    if (!emailValid || !topicValid || status === "sending") return;
    setStatus("sending");
    try {
      const response = await fetch(`${questApiUrl}${mentorshipInterestPath}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          goal_text: topic.trim(),
          category_id: text.categoryId,
          category_name: text.categoryName,
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("done");
      window.setTimeout(() => window.location.assign(audience.ctaUrl), redirectDelayMs);
    } catch {
      setStatus("failed");
    }
  };

  return (
    <Dialog
      open
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{ sx: { borderRadius: "24px", backgroundColor: q.paper, backgroundImage: "none", m: 2, width: "calc(100% - 32px)" } }}
    >
      <Box sx={{ p: { xs: 3, sm: 4 }, position: "relative" }}>
        <IconButton aria-label="Close" onClick={onClose} size="small" sx={{ position: "absolute", top: 14, right: 14, color: q.muted }}>
          <CloseRoundedIcon fontSize="small" />
        </IconButton>

        {status === "done" ? (
          <Box sx={{ textAlign: "center", py: 3 }}>
            <Box sx={{ width: 52, height: 52, borderRadius: 99, backgroundColor: q.lavender, display: "grid", placeItems: "center", mx: "auto", mb: 2 }}>
              <CheckRoundedIcon sx={{ color: q.purple }} />
            </Box>
            <Typography role="status" sx={{ fontFamily: font, fontSize: "18px", fontWeight: 600, color: q.ink }}>
              {copy.successText}
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={submit} noValidate>
            <Typography
              component="h2"
              sx={{ fontFamily: font, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, fontSize: "26px", color: q.ink, pr: 4 }}
            >
              {text.title}
            </Typography>
            <Typography sx={{ fontFamily: font, fontSize: "15px", lineHeight: 1.55, color: q.muted, mt: 1, mb: 3 }}>{text.intro}</Typography>

            <Box sx={{ mb: 2.5 }}>
              <Box component="label" htmlFor="mentorship-email" sx={labelSx}>
                {copy.emailLabel}
              </Box>
              <Box
                component="input"
                id="mentorship-email"
                type="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                placeholder="you@example.com"
                aria-invalid={touched && !emailValid}
                sx={fieldSx}
              />
              {touched && !emailValid && <Typography sx={errorSx}>{copy.invalidEmail}</Typography>}
            </Box>

            <Box sx={{ mb: 2.5 }}>
              <Box component="label" htmlFor="mentorship-topic" sx={labelSx}>
                {text.topicLabel}
              </Box>
              <Box
                component="input"
                id="mentorship-topic"
                type="text"
                maxLength={topicMaxLength}
                value={topic}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTopic(event.target.value)}
                placeholder={text.topicPlaceholder}
                aria-invalid={touched && !topicValid}
                sx={fieldSx}
              />
              {touched && !topicValid && <Typography sx={errorSx}>{copy.topicRequired}</Typography>}
            </Box>

            <Box
              component="button"
              type="submit"
              disabled={status === "sending"}
              sx={{
                all: "unset",
                boxSizing: "border-box",
                cursor: status === "sending" ? "default" : "pointer",
                width: "100%",
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                fontFamily: font,
                fontSize: "15px",
                fontWeight: 600,
                color: "#fff",
                backgroundColor: q.purple,
                opacity: status === "sending" ? 0.7 : 1,
                transition: "background-color .2s ease",
                "&:hover": { backgroundColor: q.purpleDark },
                "&:focus-visible": { outline: `2px solid ${q.ink}`, outlineOffset: 2 },
              }}
            >
              {status === "sending" ? copy.sendingLabel : copy.submitLabel}
            </Box>

            {status === "failed" && (
              <Typography role="alert" sx={{ ...errorSx, fontSize: "14px", mt: 1.5 }}>
                {copy.errorText}{" "}
                <Box component="a" href={audience.ctaUrl} sx={{ color: q.purple, fontWeight: 600, textUnderlineOffset: "3px" }}>
                  {copy.skipLabel}
                </Box>
              </Typography>
            )}

            <Typography sx={{ fontFamily: font, fontSize: "13px", lineHeight: 1.5, color: q.muted, mt: 2, textAlign: "center" }}>{copy.privacy}</Typography>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default MentorshipInterestDialog;

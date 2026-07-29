import React from "react";
import { Box, Button, Container, Paper, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HeaderSection from "../../../components/Initiatives/NestedInitiativesHeader";
import { ethicsHeaderData } from "../../../data/psychicAbilityCertificationData";
import {
  certificationProtocolMeta,
  certificationProtocolSections,
} from "../../../data/certificationProtocolData";
import type { ProtocolBlock } from "../../../data/certificationProtocolData";

/** Body text is capped here so a long document keeps a readable line length. */
const DOC_MAX_WIDTH = 760;

/** Clears the fixed navbar when an in-page section link jumps to a heading. */
const ANCHOR_OFFSET = 100;

/**
 * Renders the inline markers used in the protocol data: **bold** runs and
 * [label](/path) internal links. Nothing else is interpreted.
 */
const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

const withLinks = (text: string, keyPrefix: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  for (const match of text.matchAll(LINK_PATTERN)) {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    nodes.push(
      <Typography
        key={`${keyPrefix}-link-${start}`}
        component={RouterLink}
        to={match[2]}
        sx={{
          color: "inherit",
          fontWeight: 700,
          textDecoration: "underline",
        }}
      >
        {match[1]}
      </Typography>
    );
    cursor = start + match[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
};

const richText = (text: string): React.ReactNode =>
  text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <Box key={index} component="strong" sx={{ fontWeight: 700 }}>
        {withLinks(part, `b${index}`)}
      </Box>
    ) : (
      <React.Fragment key={index}>{withLinks(part, `t${index}`)}</React.Fragment>
    )
  );

const Ethics: React.FC = () => {
  const theme = useTheme();

  const bodySx = {
    color: theme.palette.text.secondary,
    lineHeight: 1.9,
  };

  const renderBlock = (block: ProtocolBlock, index: number) => {
    if (block.kind === "subheading") {
      return (
        <Typography
          key={index}
          variant="h6"
          sx={{
            fontFamily: "Sansation, sans-serif",
            fontWeight: 700,
            color: theme.palette.text.primary,
            mt: 4,
            mb: 1.5,
          }}
        >
          {block.text}
        </Typography>
      );
    }

    if (block.kind === "list") {
      return (
        <Box
          key={index}
          component={block.ordered ? "ol" : "ul"}
          sx={{
            ...bodySx,
            m: 0,
            mb: 2.5,
            pl: 3,
            "& li": { mb: 1.25 },
            "& li::marker": {
              color: theme.palette.text.primary,
              fontWeight: 700,
            },
          }}
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{richText(item)}</li>
          ))}
        </Box>
      );
    }

    return (
      <Typography key={index} sx={{ ...bodySx, mb: 2.5 }}>
        {richText(block.text)}
      </Typography>
    );
  };

  return (
    <>
      <HeaderSection data={ethicsHeaderData} />

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
              mb: 1.5,
            }}
          >
            {certificationProtocolMeta.title}
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: theme.palette.text.secondary,
              mb: 3,
            }}
          >
            {certificationProtocolMeta.subtitle}
          </Typography>

          <Typography
            sx={{
              ...bodySx,
              maxWidth: DOC_MAX_WIDTH,
              mb: { xs: 4, md: 6 },
            }}
          >
            {certificationProtocolMeta.intro}
          </Typography>

          {/* In-page index: this is a seven-section document. */}
          <Paper
            elevation={0}
            component="nav"
            aria-label="Sections of this document"
            sx={{
              p: { xs: 2.5, md: 3.5 },
              mb: { xs: 5, md: 7 },
              maxWidth: DOC_MAX_WIDTH,
              borderRadius: 2,
              border: `1px solid ${theme.palette.cosmic.secondary}`,
              borderTop: `6px solid ${theme.palette.primary.focus}`,
              backgroundColor: theme.palette.cosmic.elevated,
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: theme.palette.text.secondary,
                mb: 1.5,
              }}
            >
              In this document
            </Typography>

            <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0 }}>
              {certificationProtocolSections.map((section) => (
                <Box component="li" key={section.id} sx={{ mb: 1 }}>
                  <Typography
                    component="a"
                    href={`#${section.id}`}
                    sx={{
                      display: "inline-flex",
                      gap: 1.5,
                      color: theme.palette.text.primary,
                      textDecoration: "none",
                      lineHeight: 1.7,
                      "&:hover": {
                        color: theme.palette.primary.hero,
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontFamily: "Sansation, sans-serif",
                        fontWeight: 700,
                        color: theme.palette.primary.focus,
                        textShadow: `0 0 1px ${theme.palette.primary.hero}`,
                        minWidth: 18,
                      }}
                    >
                      {section.number}
                    </Box>
                    <Box component="span">{section.title}</Box>
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>

          {/* The document body: normal page scroll, no inner scroll region. */}
          <Box component="article" sx={{ maxWidth: DOC_MAX_WIDTH }}>
            {certificationProtocolSections.map((section, sectionIndex) => (
              <Box
                key={section.id}
                component="section"
                id={section.id}
                sx={{
                  scrollMarginTop: `${ANCHOR_OFFSET}px`,
                  pt: sectionIndex === 0 ? 0 : { xs: 4, md: 5 },
                  mt: sectionIndex === 0 ? 0 : { xs: 4, md: 5 },
                  borderTop:
                    sectionIndex === 0
                      ? "none"
                      : `1px solid ${theme.palette.cosmic.secondary}`,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Sansation, sans-serif",
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    display: "inline-block",
                    borderBottom: `3px solid ${theme.palette.primary.focus}`,
                    pb: "6px",
                    mb: 2.5,
                  }}
                >
                  {section.number}. {section.title}
                </Typography>

                {section.blocks.map(renderBlock)}
              </Box>
            ))}

            <Typography
              sx={{
                mt: { xs: 4, md: 5 },
                fontSize: "14px",
                color: theme.palette.text.secondary,
              }}
            >
              {certificationProtocolMeta.footer}
            </Typography>
          </Box>

          <Box
            sx={{
              mt: { xs: 6, md: 9 },
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              backgroundColor: theme.palette.darkcard.main,
              color: theme.palette.darkcard.contrastText,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Sansation, sans-serif",
                fontWeight: 700,
                mb: 1,
              }}
            >
              This protocol is what you would be agreeing to
            </Typography>
            <Typography
              sx={{ opacity: 0.85, lineHeight: 1.9, maxWidth: 760, mb: 3 }}
            >
              Applying starts a conversation, not a test. Nothing is measured
              until you have had a screening conversation, read the written
              consent documentation, asked whatever you want to ask, and signed.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button
                component={RouterLink}
                to="/initiatives/psychic-ability-certification/apply"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.focus,
                  color: theme.palette.primary.hero,
                  borderRadius: 8,
                  height: 46,
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
                }}
              >
                How to apply
              </Button>
              <Button
                component={RouterLink}
                to="/initiatives/psychic-ability-certification/certified"
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  color: theme.palette.primary.focus,
                  border: `1px solid ${theme.palette.primary.focus}`,
                  borderRadius: 8,
                  height: 46,
                  px: 4,
                  fontWeight: 700,
                  fontSize: "14px",
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
                See the published record
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Ethics;

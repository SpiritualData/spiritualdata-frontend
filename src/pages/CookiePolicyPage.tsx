import React, { useEffect, useState, useRef } from "react";
import { Container, Card, CardContent, Typography, Box, CircularProgress } from "@mui/material";
import PageHeader from "../components/PageHeader";
import image from "../assets/policies.jpg";

/**
 * Termly Cookie Policy Configuration
 *
 * To enable auto-updating cookie policy:
 * 1. Go to Termly Dashboard → Policies → Cookie Policy → Embed
 * 2. Copy your policy UUID from the embed code
 * 3. Paste it below
 *
 * When UUID is empty, the static /cookies.html is displayed as fallback.
 * When UUID is set, Termly's auto-updating embed widget is used.
 */
const TERMLY_COOKIE_POLICY_UUID = "";

const CookiePolicyPage: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const termlyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If Termly UUID is configured, use the embed widget
    if (TERMLY_COOKIE_POLICY_UUID) {
      loadTermlyEmbed();
    } else {
      // Fallback: Load static HTML
      loadStaticHtml();
    }
  }, []);

  const loadTermlyEmbed = () => {
    setIsLoading(true);

    // Create and inject Termly embed script
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    script.onload = () => setIsLoading(false);
    script.onerror = () => {
      setError("Failed to load Termly policy. Please try again later.");
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  };

  const loadStaticHtml = () => {
    fetch("/cookies.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        setHtmlContent(html);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cookie policy:", err);
        setError(`Error loading content: ${err.message}`);
        setIsLoading(false);
      });
  };

  return (
    <>
      <PageHeader image={image} page="COOKIES" sx={{ mb: 4 }} />

      <Container maxWidth="md" sx={{ my: 8 }}>
        <Card
          variant="outlined"
          sx={{
            minHeight: "100vh",
            pt: 5,
            borderRadius: 1,
            boxShadow: `
              0px 2px 4px rgba(0,0,0,0.08),
              0px 4px 6px rgba(0,0,0,0.12),
              0px 1px 15px rgba(0,0,0,0.2),
              0px 3px 9px rgba(0,0,0,0.14)
            `,
          }}
        >
          <CardContent
            sx={{
              minHeight: "84%",
              overflowY: "auto",
              p: { xs: 4, md: 8 },
            }}
          >
            {isLoading && (
              <Box display="flex" justifyContent="center" alignItems="center" minHeight={400}>
                <CircularProgress />
              </Box>
            )}

            {error && (
              <Box display="flex" justifyContent="center" alignItems="center" minHeight={400}>
                <Typography color="error">{error}</Typography>
              </Box>
            )}

            {!isLoading && !error && (
              <Typography component="div">
                {TERMLY_COOKIE_POLICY_UUID ? (
                  // Termly auto-updating embed (name attribute required by Termly)
                  <div
                    ref={termlyContainerRef}
                    data-id={TERMLY_COOKIE_POLICY_UUID}
                    {...({ name: "termly-embed" } as React.HTMLAttributes<HTMLDivElement>)}
                  />
                ) : (
                  // Static HTML fallback
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                )}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default CookiePolicyPage;

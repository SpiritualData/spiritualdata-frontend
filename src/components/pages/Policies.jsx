import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

import image from "../../assets/policies.jpg";
import PageHeader from "../helpers/PageHeader";

const Policies = ({ fileName }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const filePath = `${fileName}`;
    fetch(filePath)
      .then((response) => response.text())
      .then((html) => {
        setHtmlContent(html);
      })
      .catch((error) => {
        console.error("Error fetching HTML content:", error);
      });
  }, [fileName]);

  const pageTitle = fileName
    .replace(/^\//, "")
    .replace(/\.html$/, "")
    .replace("-", " ")
    .toUpperCase();

  return (
    <>
      <PageHeader image={image} page={pageTitle} sx={{ mb: 4 }} />

      <Container maxWidth="md" sx={{ my: 8 }}>
        <Card
          variant="outlined"
          sx={{
            height: "100vh",
            pt:5,
            borderRadius: 1,
            boxShadow: `
      0px 2px 4px rgba(0,0,0,0.08), 
      0px 4px 6px rgba(0,0,0,0.12), 
      0px 1px 15px rgba(0,0,0,0.2), 
      0px 3px 9px rgba(0,0,0,0.14)
    `,
          }}
        >
          {" "}
          <CardContent
            sx={{
              height: "84%",
              overflowY: "auto",
              p: {xs: 4, md: 8},
            }}
          >
            <Typography component="div">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Policies;

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ChatSvg from "./ChatSvg";

const examples = [
  "How to use Tailwind CSS",
  "How to use Tailwind CSS with React",
  "How to use Tailwind CSS with Next.js",
  "How to use Tailwind CSS with Gatsby",
  "How to use Tailwind CSS with Svelte",
  "How to use Tailwind CSS with Vue",
  "How to use Tailwind CSS with Angular",
  "How to use Tailwind CSS with Ember",
];

const ChatMessages = ({ chat, containerRef, setInput }) => {
  return (
    <Box
      ref={containerRef}
      py={1}
      sx={{
        maxHeight: "75vh",
        overflow: "auto",
        display: "flex",
        justifyContent: chat?.length > 0 ? "flex-end" : "flex-start",
        "&::-webkit-scrollbar": {
          width: 0,
          height: 0,
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Grid container>
        {chat?.length > 0 ? (
          <Grid container sx={{ opacity: 0.9 }}>
            {chat.map((item, index) => (
              <Grid
                key={index}
                item
                container
                bgcolor={item.role === "user" ? "#353441" : "transparent"}
                px={{ xs: 2, md: 16 }}
                py={1.4}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Grid item xs={1.4}>
                  <ChatSvg item={item} />
                </Grid>
                <Grid item xs={10.4} pr={4}>
                  <Typography
                    style={{ whiteSpace: "break-spaces", fontSize: "15px" }}
                  >
                    {item.content}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            container
            px={{ xs: 2, md: 16 }}
            py={2}
            display="flex"
            justifyContent="center"
          >
            <Grid
              container
              display="flex"
              justifyContent="center"
              sx={{ gap: 3 }}
            >
              {examples.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={5}
                  xl={3}
                  textAlign="center"
                  sx={{
                    border: "1px solid #fff",
                    borderRadius: 2,
                    p: 1.6,
                    cursor: "pointer",
                  }}
                  onClick={() => setInput(item)}
                >
                  {item}
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ChatMessages;

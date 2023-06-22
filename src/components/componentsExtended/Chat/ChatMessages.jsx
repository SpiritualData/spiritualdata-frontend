import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import ChatSvg from "./ChatSvg";
import { Check, FileCopyOutlined } from "@mui/icons-material";

const examples = [
  "What is Spiritual Data used for?",
  "What are the benefits of using Spiritual Data?",
  "What are the main features of Spiritual Data?",
  "What are the advantages of Spiritual Data?",
  "What industries can benefit from Spiritual Data?",
  "What are some real-world examples of using Spiritual Data?",
  "What technologies are used in Spiritual Data?",
  "What are the potential applications of Spiritual Data?",
];

const ChatMessages = ({ chat, containerRef, setInput }) => {
  const [showTick, setShowTick] = useState(false);

  const handleCopy = () => {
    const chatContent = chat.map((item) => item.content).join("\n");
    navigator.clipboard.writeText(chatContent);
    setShowTick(true);

    setTimeout(() => {
      setShowTick(false);
    }, 2000);
  };

  return (
    <Box
      ref={containerRef}
      py={1}
      sx={{
        maxHeight: "75vh",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#D4D4D4",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#B8B8B8",
        },
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
                py={2}
                sx={{ display: "flex", gap: 1 }}
              >
                <Grid item xs={1.4}>
                  <ChatSvg item={item} />
                </Grid>
                <Grid item xs={10} pr={4}>
                  <Typography
                    sx={{ whiteSpace: "break-spaces", fontSize: "15px" }}
                  >
                    {item.content}
                  </Typography>
                </Grid>
                <Grid item xs={0.2}>
                  {item.role !== "user" && (
                    <IconButton
                      sx={{
                        pr: 2,
                        opacity: 0.7,
                        color: (theme) => theme.palette.text.secondary,
                      }}
                      onClick={handleCopy}
                    >
                      {showTick ? (
                        <Check sx={{ fontSize: "16px" }} />
                      ) : (
                        <FileCopyOutlined sx={{ fontSize: "16px" }} />
                      )}
                    </IconButton>
                  )}
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
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
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

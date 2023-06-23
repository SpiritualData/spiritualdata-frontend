import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowDownward, Check, FileCopyOutlined } from "@mui/icons-material";

import ChatSvg from "./ChatSvg";

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
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        setShowScrollButton(
          container.scrollTop + container.clientHeight < container.scrollHeight
        );
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      setShowScrollButton(
        container.scrollTop + container.clientHeight < container.scrollHeight
      );
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [containerRef]);

  const handleScrollToBottom = () => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };

  return (
    <Box
      ref={containerRef}
      py={1}
      sx={{
        maxHeight: "73vh",
        overflow: "auto",
        position: "relative",
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
              <ChatUi
                item={item}
                key={index}
                handleScrollToBottom={handleScrollToBottom}
              />
            ))}

            {showScrollButton && (
              <IconButton
                sx={{
                  position: "sticky",
                  color: "gray",
                  bottom: 0,
                  right: 0,
                  ml: "90%",
                }}
                onClick={handleScrollToBottom}
              >
                <ArrowDownward
                  sx={{
                    background: (theme) => theme.palette.text.primary,
                    borderRadius: 100,
                    fontSize: "16px",
                    p: 0.3,
                    "&:hover": {
                      color: (theme) => theme.palette.text.secondary,
                    },
                  }}
                />
              </IconButton>
            )}
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

const ChatUi = ({ item }) => {
  const [showTick, setShowTick] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.content);
    setShowTick(true);

    setTimeout(() => {
      setShowTick(false);
    }, 2000);
  };

  return (
    <Grid
      item
      container
      bgcolor={item.role === "user" ? "#353441" : "transparent"}
      px={{ xs: 1, md: 16 }}
      pt={2}
      sx={{ display: "flex", gap: 2 }}
    >
      <Grid item xs={1.4}>
        <ChatSvg item={item} />
      </Grid>
      <Grid item xs={8.4} sm={9} pr={4}>
        <Typography sx={{ whiteSpace: "break-spaces", fontSize: "15px" }}>
          {item.content}
        </Typography>
      </Grid>
      <Grid item xs={0.2}>
        {item.role !== "user" && (
          <Tooltip title="Copied!" open={showTick} placement="top" arrow>
            <IconButton
              sx={{
                opacity: 0.7,
                color: (theme) => theme.palette.text.secondary,
              }}
              onClick={handleCopy}
            >
              {showTick ? (
                <Check sx={{ fontSize: "16px", color: "lightgreen" }} />
              ) : (
                <FileCopyOutlined sx={{ fontSize: "16px" }} />
              )}
            </IconButton>
          </Tooltip>
        )}
      </Grid>
    </Grid>
  );
};

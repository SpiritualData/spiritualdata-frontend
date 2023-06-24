import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowDownward, Check, FileCopyOutlined, MoreVert } from "@mui/icons-material";
import TypeWriter from "react-typewriter";

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

const TypingSymbol = styled("span")`
  display: inline-block;
  font-family: monospace;
  font-size: 15px;
  line-height: 1;
  background-color: #f0f0f0;
  color: transparent;
  padding: 1px;
  animation: typing 1s infinite;

  @keyframes typing {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: transparent;
    }
  }
`;

const ChatMessages = ({
  chat,
  containerRef,
  setInput,
  showSideBar,
  loading,
  isTyping,
  setIsTyping,
}) => {
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
                loading={loading}
                showSideBar={showSideBar}
                isLastItem={index === chat.length - 1}
                isTyping={isTyping}
                showScrollButton={showScrollButton}
                setIsTyping={setIsTyping}
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

const ChatUi = ({
  item,
  loading,
  isLastItem,
  showSideBar,
  handleScrollToBottom,
  isTyping,
  setIsTyping,
  showScrollButton,
}) => {
  const [showTick, setShowTick] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  useEffect(() => {
    let intervalId;

    if (isTyping && !showScrollButton) {
      intervalId = setInterval(() => {
        handleScrollToBottom();
      }, 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTyping, showScrollButton, handleScrollToBottom]);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.content);
    setShowTick(true);

    setTimeout(() => {
      setShowTick(false);
    }, 2000);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <Grid
      item
      container
      bgcolor={item.role === "user" ? "#353441" : "transparent"}
      px={{ xs: 1, md: 16 }}
      py={2}
      sx={{ display: "flex", gap: 2 }}
    >
      <Grid item xs={1.4}>
        <ChatSvg item={item} />
      </Grid>
      <Grid item xs={8.4} sm={showSideBar ? 9 : 9.6} pr={4}>
        <Typography sx={{ whiteSpace: "break-spaces", fontSize: "15px" }}>
          {isLastItem && item.role !== "user" ? (
            <TypeWriter typing={40} onTypingEnd={() => setIsTyping(false)}>
              {item.content}
            </TypeWriter>
          ) : loading && isLastItem ? (
            <TypingSymbol>.</TypingSymbol>
          ) : (
            item.content
          )}
        </Typography>

        {item.db_results && (
          <Grid container mt={1}>
            <Grid item xs={12}>
              <Tooltip title="More Options">
                <IconButton
                  size="small"
                  onClick={handleMenuOpen}
                  sx={{
                    color: (theme) => theme.palette.text.secondary,
                  }}
                >
                  <MoreVert />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Typography variant="subtitle1">Hypotheses</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.db_results.hypotheses.map((hypothesis) => (
                      <div key={hypothesis.url}>
                        <a href={hypothesis.url}>{hypothesis.name}</a>
                        <br />
                        {hypothesis.snippet}
                      </div>
                    ))}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography variant="subtitle1">Experiences</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.db_results.experiences.map((experience) => (
                      <div key={experience.url}>
                        <a href={experience.url}>{experience.name}</a>
                        <br />
                        {experience.snippet}
                      </div>
                    ))}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography variant="subtitle1">Research</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.db_results.research.map((research) => (
                      <div key={research.url}>
                        <a href={research.url}>{research.name}</a>
                        <br />
                        {research.snippet}
                      </div>
                    ))}
                  </Typography>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        )}

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

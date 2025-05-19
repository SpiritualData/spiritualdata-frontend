import React, { useEffect, useState, RefObject } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import {
  ArrowDownward,
  Check,
  ExpandMore,
  FileCopyOutlined,
  Launch,
} from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";
import { Link as RouterLink, useLocation } from "react-router-dom";

import ChatSvg from "./ChatSvg";
import ChatSkeleton from "../ChatSkeleton";
import ErrorComponent from "./Error";
import { ChatMessage } from "../../pages/Chat";

const examples = [
  "Who are you?",
  "What evidence is there that near-death experiences are real?",
  "What research is there on telepathy?",
  "How do people describe oneness?",
  "Is there any research on mediums?",
  "What are common themes in near-death experiences?",
  "What do experiences say about the big bang or creation of the universe?",
  "Does it feel nice to be out of body?",
];

const TypingSymbol = styled("span")`
  display: inline-block;
  font-size: 15px;
  line-height: 1;
  background-color: #f0f0f0;
  color: transparent;
  padding: 1px;
  animation: typing 0.6s infinite;

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

interface ChatMessagesProps {
  chat: ChatMessage[];
  loading: boolean;
  selected: string | null;
  error: string | null;
  containerRef: RefObject<HTMLDivElement>;
  setInput: (input: string) => void;
  showSideBar: boolean;
  isTyping: boolean;
  setIsTyping: (isTyping: boolean) => void;
  fetchChat: (selected: string) => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  chat,
  loading,
  selected,
  error,
  containerRef,
  setInput,
  showSideBar,
  isTyping,
  setIsTyping,
  fetchChat,
}) => {
  const location = useLocation();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      setShowScrollButton(
        container.scrollTop + container.clientHeight <
          container.scrollHeight - 10
      );
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
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
      {loading ? (
        <ChatSkeleton />
      ) : error && selected ? (
        <center style={{ marginBottom: "30px" }}>
          <ErrorComponent errorFunction={() => fetchChat(selected)} />
        </center>
      ) : (
        <Grid container>
          {chat?.length > 0 ? (
            <Grid container sx={{ opacity: 0.9 }}>
              {chat.map((item, index) => (
                <ChatUi
                  item={item}
                  key={index}
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
                    color: "black",
                    bottom: 0,
                    right: 0,
                    ml: "90%",
                  }}
                  onClick={handleScrollToBottom}
                >
                  <ArrowDownward
                    sx={{
                      background: "#636363",
                      color: (theme) => theme.palette.chatbot.sidebar,
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
              px={location.pathname === "/chat" ? { xs: 2, md: 16 } : 2}
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
                    size={{ xs: 12, sm: 5, xl: 3 }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    sx={{
                      border: "1px solid grey",
                      color: "lightgrey",
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
      )}
    </Box>
  );
};

export default ChatMessages;

interface ChatUiProps {
  item: ChatMessage;
  isLastItem: boolean;
  showSideBar: boolean;
  handleScrollToBottom: () => void;
  isTyping: boolean;
  setIsTyping: (isTyping: boolean) => void;
  showScrollButton: boolean;
}

const ChatUi: React.FC<ChatUiProps> = ({
  item,
  isLastItem,
  showSideBar,
  handleScrollToBottom,
  isTyping,
  setIsTyping,
  showScrollButton,
}) => {
  const location = useLocation();
  const [showTick, setShowTick] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isTyping && !showScrollButton) {
      intervalId = setInterval(() => {
        handleScrollToBottom();
      }, 10);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isTyping, showScrollButton, handleScrollToBottom]);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.content);
    setShowTick(true);

    setTimeout(() => {
      setShowTick(false);
    }, 2000);
  };

  return (
    <Grid
      container
      bgcolor={
        item.role === "user"
          ? (theme) => theme.palette.chatbot.sidebar
          : "transparent"
      }
      px={location.pathname === "/chat" ? { xs: 1, md: 16 } : { xs: 1, md: 2 }}
      py={2}
      sx={{ display: "flex", gap: 2 }}
    >
      <Grid size={{ xs: 1.4 }}>
        <ChatSvg item={item} />
      </Grid>
      <Grid size={{ xs: 8.4, sm: showSideBar ? 9 : 9.6 }} pr={{ xs: 0, sm: 4 }}>
        <Typography
          sx={{
            whiteSpace: "break-spaces",
            fontSize: "15px",
            mb: item.role !== "user" ? 2 : 0,
          }}
        >
          {isLastItem && isTyping && item.role !== "user" ? (
            <>
              <Typewriter
                words={[item.content]}
                typeSpeed={40}
                onLoopDone={() => setIsTyping(false)}
              />
              <TypingSymbol>.</TypingSymbol>
            </>
          ) : (
            item.content
          )}
        </Typography>

        {item.db_results &&
        (item.db_results.hypotheses?.length > 0 ||
          item.db_results.research?.length > 0 ||
          item.db_results.experiences?.length > 0) ? (
          isLastItem && isTyping ? null : (
            <DataResults
              item={item}
              isLastItem={isLastItem}
              showScrollButton={showScrollButton}
              handleScrollToBottom={handleScrollToBottom}
            />
          )
        ) : null}
      </Grid>

      <Grid size={{ xs: 0.2 }}>
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

interface DbResult {
  url: string;
  name: string;
  snippet: string;
}

const renderItems = (items: DbResult[] | undefined) => {
  return items?.map((item) => (
    <div key={item.url} style={{ fontSize: "13px" }}>
      <b>
        {item.name}:{" "}
        <Tooltip title="Go to source website" placement="top">
          <Link
            component={RouterLink}
            to={item.url}
            color="inherit"
            underline="none"
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#4691B8",
              },
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Launch sx={{ mb: -0.4, fontSize: "16px" }} />
          </Link>
        </Tooltip>
      </b>
      <br />
      {item.snippet}
    </div>
  ));
};

interface DataResultsProps {
  item: ChatMessage;
  handleScrollToBottom: () => void;
  isLastItem: boolean;
  showScrollButton: boolean;
}

const DataResults: React.FC<DataResultsProps> = ({
  item,
  handleScrollToBottom,
  isLastItem,
  showScrollButton,
}) => {
  useEffect(() => {
    if (isLastItem && !showScrollButton) {
      handleScrollToBottom();
    }
  }, [isLastItem, showScrollButton, handleScrollToBottom]);

  return (
    <Accordion
      sx={{
        background: (theme) => theme.palette.chatbot.sidebar,
        color: "lightgray",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore sx={{ color: "lightgray" }} />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography variant="subtitle1" fontWeight="bold">
          Database Results:
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1.3} mb={3}>
          <Stack spacing={0.4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Hypotheses:
            </Typography>
            {item.db_results.hypotheses?.length > 0 ? (
              renderItems(item.db_results.hypotheses)
            ) : (
              <center>No results found</center>
            )}
          </Stack>

          <Stack spacing={0.4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Experiences:
            </Typography>
            5998
          </Stack>

          <Stack spacing={0.4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Research:
            </Typography>
            {item.db_results.research?.length > 0 ? (
              renderItems(item.db_results.research)
            ) : (
              <center>No results found</center>
            )}
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AutoAwesomeMosaic, ExpandMore, Menu } from "@mui/icons-material";
import { useAuth } from "@clerk/clerk-react";
import apiClient, { setToken } from "../utils/axios";
import SideBar, { StyledButton } from "../componentsExtended/Chat/SideBar";
import InputField from "../componentsExtended/Chat/Input";
import ChatMessages from "../componentsExtended/Chat/ChatMessages";
import ChatDrawer from "../componentsExtended/Chat/ChatDrawer";
import SnackbarAlert from "../helpers/SnackbarAlert";
import SettingsMenu from "../componentsExtended/Chat/Settings";
import Outcome from "../componentsExtended/Chat/Outcome";
import ChatSkeleton from "../helpers/ChatSkeleton";
import { useSearchParams } from "react-router-dom";

interface ChatMessage {
  role: string;
  content: string;
  db_results?: any[];
}

interface ChatHistoryItem {
  chat_id: string;
  title?: string;
  chat?: ChatMessage[];
}

interface OutcomeData {
  title?: string;
  additional_info?: string;
  ai_message?: string;
  db_results?: any[];
  chat_id?: string;
}

const OutcomeChat: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoaded, userId, getToken } = useAuth();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [selected, setSelected] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingList, setLoadingList] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [errorList, setErrorList] = useState<string | boolean>(false);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [saveChat, setSaveChat] = useState<boolean>(true);
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [outCome, setOutCome] = useState<OutcomeData>({});

  useEffect(() => {
    const successParam = params.get("success") === "true";
    const cancelParam = params.get("cancel") === "true";
    let timeOut: NodeJS.Timeout;

    if (successParam) {
      timeOut = setTimeout(() => {
        setParams({});
      }, 2000);
    } else if (cancelParam) {
      timeOut = setTimeout(() => {
        setParams({});
      }, 2000);
    }

    return () => clearTimeout(timeOut);
  }, [params, setParams]);

  const fetchChatHistory = async () => {
    setErrorList(false);
    setLoadingList(true);
    try {
      const response = await apiClient.get("/chat/list");
      setChatHistory(response.data);
      setLoadingList(false);
    } catch (error) {
      setLoadingList(false);
      if (error instanceof Error) {
        console.error("Error fetching chat list:", error.message);
      } else {
        console.error("Error fetching chat list:", error);
      }
      setErrorList(
        "An error occurred while fetching the chat list. Please check your connection."
      );
    }
  };

  const fetchChat = async (chatId: string) => {
    setError(null);
    setLoading(true);
    try {
      const response = await apiClient.get("/chat/get", {
        params: {
          chat_id: chatId,
        },
      });

      const chatIndex = chatHistory.findIndex(
        (item) => item.chat_id === chatId
      );

      const updatedChatHistory = [...chatHistory];
      if (chatIndex !== -1) {
        updatedChatHistory[chatIndex].chat = response.data.chat;
      }
      setChatHistory(updatedChatHistory);
      setChat(response.data.chat);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching chat:", error);
      setError(
        "An error occurred while fetching the chat. Please check your connection."
      );
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chat]);

  useEffect(() => {
    const fetchTokenAndPerformTasks = async () => {
      try {
        const token = await getToken();
        localStorage.setItem("user", JSON.stringify(token));
        if (token) {
          setToken(token);
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchTokenAndPerformTasks();
  }, [getToken]);

  useEffect(() => {
    setLoadingList(true);
    const fetchChatHistory = async () => {
      try {
        const response = await apiClient.get("/chat/list");
        setChatHistory(response.data);
        setLoadingList(false);
      } catch (error) {
        setLoadingList(false);
        if (error instanceof Error) {
          console.error("Error fetching chat list:", error.message);
        } else {
          console.error("Error fetching chat is of unknown type.", error);
        }
        setErrorList(
          "An error occurred while fetching the chat list. Please check your connection."
        );
      }
    };

    setTimeout(() => {
      fetchChatHistory();
    }, 10);
  }, [userId]);

  useEffect(() => {
    if (!selected) {
      setLoading(true);
      if (chatHistory.length > 0) {
        setSelected(chatHistory[0].chat_id);
        if (chatHistory[0].chat) {
          setChat(chatHistory[0].chat);
          setLoading(false);
        } else {
          fetchChat(chatHistory[0].chat_id);
        }
      } else {
        setSelected(undefined);
        setChat([]);
        setLoading(false);
      }
    }
  }, [chatHistory]);

  useEffect(() => {
    setLoading(true);
    const selectedChat = chatHistory.find((item) => item.chat_id === selected);
    if (selectedChat && selected) {
      if (selectedChat.chat?.length) {
        setChat(selectedChat.chat);
        setLoading(false);
      } else {
        fetchChat(selectedChat.chat_id);
      }
    } else {
      setLoading(false);
    }

    setInput("");
  }, [selected]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const msg = input;
    setInput("");
    setIsTyping(true);
    setError(null);

    if (input.trim()) {
      setChat([...chat, { role: "user", content: input }]);

      try {
        const res = await apiClient.post("/chat/response", {
          chat_id: selected || "",
          message: input.trim(),
          chat_type: "outcome",
          save: saveChat,
        });

        const response = res.data;
        setOutCome(response);
        setChat((prevChat) => [
          ...prevChat,
          {
            role: "ai",
            content: response?.ai_message,
            db_results: response?.db_results,
          },
        ]);

        if (!selected) {
          const newChatHistoryItem: ChatHistoryItem = {
            chat_id: response?.chat_id,
            title: response?.title,
            chat: [
              { role: "user", content: input },
              {
                role: "ai",
                content: response?.ai_message,
                db_results: response?.db_results || [],
              },
            ],
          };

          setChatHistory((prev) => [newChatHistoryItem, ...prev]);
          setSelected(newChatHistoryItem.chat_id);
        } else {
          setChatHistory((prev) => {
            const updated = prev?.map((item) =>
              item.chat_id === selected
                ? {
                    ...item,
                    chat: [
                      ...(item?.chat ?? []),
                      { role: "user", content: input },
                      {
                        role: "ai",
                        content: response?.ai_message,
                        db_results: response?.db_results,
                      },
                    ],
                  }
                : item
            );

            const selectedIndex = updated?.findIndex(
              (item) => item.chat_id === selected
            );
            if (selectedIndex > 0) {
              const selectedItem = updated?.splice(selectedIndex, 1)[0];
              updated?.unshift(selectedItem);
            }
            return updated;
          });
        }
      } catch (error: any) {
        console.error("Error:", error.code);
        setIsTyping(false);

        if (error?.code === "ERR_BAD_REQUEST") {
          setErrorResponse("Clerk session timed out, please log in again.");
        } else {
          setErrorResponse("An error occurred. Please check your connection.");
        }

        setTimeout(() => {
          setErrorResponse(null);
        }, 2000);

        setChat((prev) => prev.slice(0, prev.length - 1));
        setInput(msg);
      }
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        background: (theme) => theme.palette.chatbot.sidebar,
        color: (theme) => theme.palette.text.secondary,
      }}
    >
      <SnackbarAlert error={error} />
      <SnackbarAlert error={typeof errorList === "string" ? errorList : null} />
      <SnackbarAlert error={errorResponse} />

      <SideBar
        setChat={setChat}
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        selected={selected ?? null}
        loadingList={loadingList}
        errorList={errorList}
        setSelected={setSelected}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        fetchChatHistory={fetchChatHistory}
        handleDrawerToggle={handleDrawerToggle}
      />

      <ChatDrawer
        mobileOpen={mobileOpen}
        setChat={setChat}
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        selected={selected}
        setSelected={setSelected}
        fetchChatHistory={fetchChatHistory}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Grid
        item
        xs={12}
        md={showSideBar ? 9.4 : 12}
        lg={showSideBar ? 9.8 : 12}
        sx={{
          background: (theme) => theme.palette.chatbot.chatBox,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid
          pt={0.2}
          textAlign="center"
          sx={{ opacity: 0.8, display: "flex", flexDirection: "row" }}
        >
          <IconButton
            size="large"
            sx={{
              color: (theme) => theme.palette.text.secondary,
              display: { md: "none" },
            }}
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>

          {!showSideBar && (
            <StyledButton
              variant="outlined"
              sx={{
                background: (theme) => theme.palette.text.primary,
                m: 1,
                height: "36px",
                width: "36px",
              }}
              onClick={() => setShowSideBar(true)}
            >
              <AutoAwesomeMosaic />
            </StyledButton>
          )}

          <Stack width="100%">
            <p>Model: OpenAI GPT4o Mini</p>
          </Stack>

          <SettingsMenu saveChat={saveChat} setSaveChat={setSaveChat} />
        </Grid>

        {isSmallScreen && (
          <Grid item xs={12}>
            <Accordion
              sx={{
                mx: 2,
                background: (theme) => theme.palette.chatbot.sidebar,
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMore
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  />
                }
              >
                <Button
                  variant="text"
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Chat Outcome
                </Button>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ color: "white", padding: "16px" }}>
                  {!loading ? (
                    <Outcome
                      title={outCome?.title}
                      additional_info={outCome?.additional_info}
                    />
                  ) : (
                    <ChatSkeleton />
                  )}
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
        )}

        <Box bottom={0}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={9}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <ChatMessages
                chat={chat}
                loading={loading}
                selected={selected}
                error={error}
                isTyping={isTyping}
                setIsTyping={setIsTyping}
                showSideBar={showSideBar}
                containerRef={containerRef}
                fetchChat={fetchChat}
                setInput={setInput}
              />
              <InputField
                input={input}
                selected={selected}
                error={error}
                chatHistory={chatHistory}
                isTyping={isTyping}
                setInput={setInput}
                handleSend={handleSend}
              />
            </Grid>

            {!isSmallScreen && (
              <Grid item md={3} sx={{ pr: 2, pb: 6 }}>
                <Card
                  sx={{
                    backgroundColor: "#2f2f2f",
                    color: "white",
                    padding: "16px",
                    height: "80vh",
                    mr: "10px",
                    borderRadius: 10,
                  }}
                >
                  <br />
                  <b>
                    <center>Chat Outcome</center>
                  </b>
                  {!loading ? (
                    <Outcome
                      title={outCome?.title}
                      additional_info={outCome?.additional_info}
                    />
                  ) : (
                    <ChatSkeleton />
                  )}
                </Card>
              </Grid>
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OutcomeChat;

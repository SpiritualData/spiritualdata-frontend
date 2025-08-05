import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, IconButton, Stack } from "@mui/material";
import { AutoAwesomeMosaic, Menu } from "@mui/icons-material";
import { AxiosError } from "axios";

import apiClient from "../utils/axios";
import { useAuthToken } from "../hooks/useAuthToken";
import SideBar, { StyledButton } from "../components/Chat/SideBar";
import InputField from "../components/Chat/UserInput";
import ChatMessages from "../components/Chat/ChatMessages";
import ChatDrawer from "../components/Chat/ChatDrawer";
import SnackbarAlert from "../components/SnackbarAlert";
import SettingsMenu from "../components/Chat/Settings";

interface ChatMessage {
  role: string;
  content: string;
  db_results?: any;
}

interface ChatHistoryItem {
  chat_id: string;
  title: string;
  chat?: ChatMessage[];
}

export type { ChatMessage, ChatHistoryItem };

const Chat: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const { isLoaded, userId, isTokenSet, isLoading, refreshToken } =
    useAuthToken();

  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingList, setLoadingList] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [errorList, setErrorList] = useState<boolean>(false);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [saveChat, setSaveChat] = useState<boolean>(true);
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const fetchChatHistory = async () => {
    if (!isTokenSet) {
      console.log("Token not set, skipping chat history fetch");
      return;
    }

    setErrorList(false);
    setLoadingList(true);
    try {
      const response = await apiClient.get("/chat/list");
      setChatHistory(response.data);
      setLoadingList(false);
    } catch (error) {
      setLoadingList(false);
      console.error("Error fetching chat list:", (error as Error).message);

      // Try to refresh token if it's an auth error
      if ((error as AxiosError)?.response?.status === 401) {
        const refreshed = await refreshToken();
        if (refreshed) {
          // Retry the request
          fetchChatHistory();
          return;
        }
      }

      setErrorList(true);
    }
  };

  const fetchChat = async (chatId: string) => {
    if (!isTokenSet) {
      console.log("Token not set, skipping chat fetch");
      return;
    }

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
      updatedChatHistory[chatIndex].chat = response.data.chat;
      setChatHistory(updatedChatHistory);
      setChat(response.data.chat);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching chat:", error);

      // Try to refresh token if it's an auth error
      if ((error as AxiosError)?.response?.status === 401) {
        const refreshed = await refreshToken();
        if (refreshed) {
          // Retry the request
          fetchChat(chatId);
          return;
        }
      }

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
    if (isLoaded && !isLoading && isTokenSet) {
      fetchChatHistory();
    }
  }, [isLoaded, isLoading, isTokenSet]);

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
        setSelected(null);
        setChat([]);
        setLoading(false);
      }
    }
  }, [chatHistory]);

  useEffect(() => {
    setLoading(true);
    const selectedChat = chatHistory.find((item) => item.chat_id === selected);
    if (selectedChat && selected) {
      if (selectedChat.chat && selectedChat.chat.length > 0) {
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

    if (!isTokenSet) {
      setErrorResponse("Authentication required. Please log in again.");
      return;
    }

    let msg = input;
    setInput("");
    setIsTyping(true);
    setError(null);

    if (input.trim()) {
      setChat([...chat, { role: "user", content: input }]);

      try {
        const response = await apiClient.post("/chat/response", {
          chat_id: selected || "",
          message: input.trim(),
          save: saveChat,
        });

        let responseData = response.data;

        setChat((prevChat) => [
          ...prevChat,
          {
            role: "ai",
            content: responseData?.ai,
            db_results: responseData?.db_results,
          },
        ]);

        if (!selected) {
          const newChatHistoryItem = {
            chat_id: responseData?.chat_id,
            title: responseData?.title,
            chat: [
              { role: "user", content: input },
              {
                role: "ai",
                content: responseData?.ai,
                db_results: responseData?.db_results,
              },
            ],
          };

          setChatHistory((prevChatHistory) => [
            newChatHistoryItem,
            ...prevChatHistory,
          ]);

          setSelected(newChatHistoryItem.chat_id);
        } else {
          setChatHistory((prevChatHistory) => {
            const updatedChatHistory = prevChatHistory.map((item) =>
              item.chat_id === selected
                ? {
                    ...item,
                    chat: [
                      ...(item?.chat ?? []),
                      { role: "user", content: input },
                      {
                        role: "ai",
                        content: responseData?.ai,
                        db_results: responseData?.db_results,
                      },
                    ],
                  }
                : item
            );

            const selectedIndex = updatedChatHistory.findIndex(
              (item) => item.chat_id === selected
            );
            if (selectedIndex > 0) {
              const selectedItem = updatedChatHistory.splice(
                selectedIndex,
                1
              )[0];
              updatedChatHistory.unshift(selectedItem);
            }
            return updatedChatHistory;
          });
        }
      } catch (error: any) {
        console.error("Error sending message:", error);
        setIsTyping(false);

        // Try to refresh token if it's an auth error
        if (error?.response?.status === 401) {
          const refreshed = await refreshToken();
          if (refreshed) {
            // Retry the request
            handleSend(e);
            return;
          }
        }

        if (
          error?.code === "ERR_BAD_REQUEST" ||
          error?.response?.status === 401
        ) {
          setErrorResponse("Authentication expired. Please log in again.");
        } else if (error?.code === "ERR_NETWORK") {
          setErrorResponse("Network error. Please check your connection.");
        } else {
          setErrorResponse("An error occurred. Please try again.");
        }

        setTimeout(() => {
          setErrorResponse(null);
        }, 3000);

        setChat((prevChat) => prevChat.slice(0, prevChat.length - 1));
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

      <SnackbarAlert error={errorList} />

      <SnackbarAlert error={errorResponse} />

      <SideBar
        setChat={setChat}
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        selected={selected}
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
        loadingList={loadingList}
        errorList={errorList}
      />

      <Grid
        size={{
          xs: 12,
          md: showSideBar ? 9.4 : 12,
          lg: showSideBar ? 9.8 : 12,
        }}
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

        <Box bottom={0}>
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default Chat;

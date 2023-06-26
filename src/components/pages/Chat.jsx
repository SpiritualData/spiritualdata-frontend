import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, IconButton, Snackbar, Stack } from "@mui/material";
import { AutoAwesomeMosaic, Menu } from "@mui/icons-material";
import { useAuth } from "@clerk/clerk-react";

import axios, { setToken } from "../utils/axios";
import SideBar, { StyledButton } from "../componentsExtended/Chat/SideBar";
import InputField from "../componentsExtended/Chat/Input";
import ChatMessages from "../componentsExtended/Chat/ChatMessages";
import ChatDrawer from "../componentsExtended/Chat/ChatDrawer";
import { DummyChatHistory } from "../componentsExtended/Chat/DummyChat";

const Chat = () => {
  const containerRef = useRef(null);
  const { isLoaded, userId, getToken } = useAuth();

  const [chat, setChat] = useState();
  const [selected, setSelected] = useState();
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState(DummyChatHistory);
  const [showSideBar, setShowSideBar] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [chat]);

  useEffect(() => {
    const fetchTokenAndPerformTasks = async () => {
      try {
        const token = await getToken();
        localStorage.setItem("user", JSON.stringify(token));
        setToken(token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchTokenAndPerformTasks();
  }, [getToken]);

  useEffect(() => {
    if (!selected) {
      if (chatHistory.length > 0) {
        setSelected(chatHistory[0].chat_id);
        setChat(chatHistory[0].chat);
      } else {
        setSelected();
        setChat([]);
      }
    }
    // eslint-disable-next-line
  }, [chatHistory]);

  useEffect(() => {
    const selectedChat = chatHistory.find((item) => item.chat_id === selected);
    if (selectedChat) {
      setChat(selectedChat.chat);
    }
    setInput("");
    // eslint-disable-next-line
  }, [selected]);

  const handleSend = async (e) => {
    e.preventDefault();
    setIsTyping(true);

    if (input.trim()) {
      setChat([...chat, { role: "user", content: input }]);

      axios
        .post("/chat/response", { chat_id: selected || "", message: input })
        .then((res) => {
          let response = res.data;

          setChat((prevChat) => [
            ...prevChat,
            {
              role: "ai",
              content: response?.ai,
              db_results: response?.db_results,
            },
          ]);

          if (!selected) {
            const newChatHistoryItem = {
              chat_id: response?.chat_id,
              title: response?.title,
              chat: [
                { role: "user", content: input },
                {
                  role: "ai",
                  content: response?.ai,
                  db_results: response?.db_results,
                },
              ],
            };

            setChatHistory((prevChatHistory) => [
              newChatHistoryItem,
              ...prevChatHistory,
            ]);

            setSelected(newChatHistoryItem.chat_id);
          } else {
            setChatHistory((prevChatHistory) =>
              prevChatHistory.map((item) =>
                item.chat_id === selected
                  ? {
                      ...item,
                      chat: [
                        ...item.chat,
                        { role: "user", content: input },
                        {
                          role: "ai",
                          content: response?.ai,
                          db_results: response?.db_results,
                        },
                      ],
                    }
                  : item
              )
            );
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsTyping(false);
          setError("An error occurred. Please check your connection.");
          setChat((prevChat) => prevChat.slice(0, prevChat.length - 1));
        });

      setInput("");
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
        background: (theme) => theme.palette.text.primary,
        color: (theme) => theme.palette.text.secondary,
      }}
    >
      <Snackbar
        open={error !== null}
        autoHideDuration={5000}
        onClose={() => setError(null)}
        message={error}
      />

      <SideBar
        setChat={setChat}
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        selected={selected}
        setSelected={setSelected}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        handleDrawerToggle={handleDrawerToggle}
      />

      <ChatDrawer
        mobileOpen={mobileOpen}
        setChat={setChat}
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        selected={selected}
        setSelected={setSelected}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Grid
        item
        xs={12}
        md={showSideBar ? 9.4 : 12}
        sx={{
          background: "#454655",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
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
            <p>Model: Spiritual Data (1.0)</p>
          </Stack>
        </Grid>

        <Box bottom={0}>
          <ChatMessages
            chat={chat}
            isTyping={isTyping}
            setIsTyping={setIsTyping}
            showSideBar={showSideBar}
            containerRef={containerRef}
            setInput={setInput}
          />

          <InputField
            input={input}
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

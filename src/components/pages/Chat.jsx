import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, IconButton, Stack } from "@mui/material";
import { AutoAwesomeMosaic, Menu } from "@mui/icons-material";

import SideBar, { StyledButton } from "../componentsExtended/Chat/SideBar";
import InputField from "../componentsExtended/Chat/Input";
import ChatMessages from "../componentsExtended/Chat/ChatMessages";
import ChatDrawer from "../componentsExtended/Chat/ChatDrawer";
import { DummyChatHistory } from "../componentsExtended/Chat/DummyChat";

const Chat = () => {
  const containerRef = useRef(null);

  const [chat, setChat] = useState();
  const [selected, setSelected] = useState();
  const [showSideBar, setShowSideBar] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState(DummyChatHistory);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [chat]);

  useEffect(() => {
    if (!selected) {
      if (chatHistory.length > 0) {
        setSelected(chatHistory[0].id);
        setChat({chat: chatHistory[0].chat, db_results: chatHistory[0].db_results});
      } else {
        setSelected();
        setChat([]);
      }
    }
    // eslint-disable-next-line
  }, [chatHistory]);

  useEffect(() => {
    const selectedChat = chatHistory.find((item) => item.id === selected);
    if (selectedChat) {
      setChat({chat: selectedChat.chat, db_results: selectedChat.db_results});
    }
    setInput("");
    // eslint-disable-next-line
  }, [selected]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setIsTyping(true);

    if (input.trim()) {
      setChat([
        ...chat,
        { role: "user", content: input },
        { role: "ai", content: input },
      ]);

      if (!selected) {
        const words = input.trim().split(" ");
        const title = words.slice(0, 3).join(" ");

        const newChatHistoryItem = {
          id: Math.floor(Math.random() * 1000),
          title: title,
          chat: [
            { role: "user", content: input },
            { role: "ai", content: input },
          ],
        };

        setChatHistory((prevChatHistory) => [
          newChatHistoryItem,
          ...prevChatHistory,
        ]);

        setSelected(newChatHistoryItem.id);
      } else {
        setChatHistory((prevChatHistory) =>
          prevChatHistory.map((item) =>
            item.id === selected
              ? {
                  ...item,
                  chat: [...item.chat, { role: "user", content: input }],
                }
              : item
          )
        );
      }
      setInput("");
      // const response = await fetch("http://localhost:8000/api/chat", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     messages: [...chat, { role: "user", content: input }],
      //   }),
      // });

      // const readData = response.body
      //eslint-disable-next-line
      //   .pipeThrough(new TextDecoderStream())
      //   .getReader();
      // let aiRes = "";
      // while (true) {
      //   const { done, value } = await readData.read();
      //   if (done) {
      //     break;
      //   }
      //   aiRes += value;
      //   setChat([
      //     ...chat,
      //     { role: "user", content: input },
      //     { role: "assistant", content: aiRes },
      //   ]);
      // }

      //     if (!title) {
      //       const createTitle = await fetch("http://localhost:8000/api/title", {
      //         method: "POST",
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify({
      //           title: input,
      //         }),
      //       });

      //       const title = await createTitle.json();
      //       setTitle(title?.title);
      //       setChatHistory([...chatHistory, title]);
      //     }
    }
  };

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        background: (theme) => theme.palette.text.primary,
        color: (theme) => theme.palette.text.secondary,
      }}
    >
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
            loading={loading}
            isTyping={isTyping}
            setIsTyping={setIsTyping}
            showSideBar={showSideBar}
            containerRef={containerRef}
            setInput={setInput}
          />

          <InputField
            input={input}
            loading={loading}
            setInput={setInput}
            handleSend={handleSend}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Chat;

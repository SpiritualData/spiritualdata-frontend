import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, IconButton, Stack } from "@mui/material";
import { Menu } from "@mui/icons-material";

import SideBar from "../componentsExtended/Chat/SideBar";
import InputField from "../componentsExtended/Chat/Input";
import ChatMessages from "../componentsExtended/Chat/ChatMessages";
import ChatDrawer from "../componentsExtended/Chat/ChatDrawer";

const Chat = () => {
  const [chat, setChat] = useState();
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      title: "Test the chats",
      chat: [
        { role: "user", content: "Hi this is a message" },
        { role: "assistant", content: "Heres the response" },
      ],
    },
    {
      id: 2,
      title: "Test2",
      chat: [
        {
          role: "user",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis unde quae dolor obcaecati, sunt atque cumque voluptates hic veritatis placeat quam incidunt, consequuntur ex ducimus velit animi rerum fuga omnis?",
        },
        {
          role: "assistant",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis unde quae dolor obcaecati, sunt atque cumque voluptates hic veritatis placeat quam incidunt, consequuntur ex ducimus velit animi rerum fuga omnis?",
        },
      ],
    },
  ]);
  const [selected, setSelected] = useState();
  const [showSideBar, setShowSideBar] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [input, setInput] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [chat]);

  useEffect(() => {
    if (!selected) {
      if (chatHistory.length > 0) {
        setSelected(chatHistory[0].id);
        setChat(chatHistory[0].chat);
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
      setChat(selectedChat.chat);
    }
    setInput("");
    // eslint-disable-next-line
  }, [selected]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSend = async (e) => {
    e.preventDefault();
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

          <Stack width="100%">
            <p>Model: Spiritual Data (1.0)</p>
          </Stack>
        </Grid>

        <Box bottom={0}>
          <ChatMessages
            chat={chat}
            containerRef={containerRef}
            setInput={setInput}
          />

          <InputField
            input={input}
            setInput={setInput}
            handleSend={handleSend}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Chat;

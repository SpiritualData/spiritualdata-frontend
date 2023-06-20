import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";

import SideBar from "../componentsExtended/Chat/SideBar";
import ChatSvg from "../componentsExtended/Chat/ChatSvg";
import { inputTheme } from "../componentsExtended/Chat/Input";

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

const Chat = () => {
  const [chat, setChat] = useState([
    // { role: "user", content: "Hi this is a message" },
    // { role: "assistant", content: "Heres the response" },
  ]);
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "Test the chats" },
    { id: 2, title: "Test2" },
  ]);
  const [selected, setSelected] = useState();
  const [title, setTitle] = useState("");
  const [input, setInput] = useState("");

  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the container
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [chat]);

  const handleSend = async () => {
    if (input.trim()) {
      setChat([...chat, { role: "user", content: input }]);
      setInput("");
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...chat, { role: "user", content: input }],
        }),
      });

      const readData = response.body
        //eslint-disable-next-line
        .pipeThrough(new TextDecoderStream())
        .getReader();
      let aiRes = "";
      while (true) {
        const { done, value } = await readData.read();
        if (done) {
          break;
        }
        aiRes += value;
        setChat([
          ...chat,
          { role: "user", content: input },
          { role: "assistant", content: aiRes },
        ]);
      }

      if (!title) {
        const createTitle = await fetch("http://localhost:8000/api/title", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: input,
          }),
        });

        const title = await createTitle.json();
        setTitle(title?.title);
        setChatHistory([...chatHistory, title]);
      }
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
        setTitle={setTitle}
        chatHistory={chatHistory}
        selected={selected}
        setSelected={setSelected}
      />
      <Grid item xs={12} md={9.4} sx={{ background: "#454655" }}>
        <Grid item pt={0.2} textAlign="center" sx={{ opacity: 0.8 }}>
          <p>Model: Spiritual Data (1.0)</p>
        </Grid>

        <Box position="absolute" bottom={0}>
          <Box
            ref={containerRef}
            py={1}
            sx={{
              maxHeight: "100vh",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: 0,
                height: 0,
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <Grid container>
              {chat.length > 0 ? (
                <Grid container sx={{ opacity: 0.9 }}>
                  {chat.map((item, index) => (
                    <Grid
                      key={index}
                      item
                      container
                      bgcolor={item.role === "user" ? "#353441" : "transparent"}
                      px={{ xs: 2, md: 20 }}
                      py={1}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <ChatSvg item={item} />
                      <Typography
                        style={{ whiteSpace: "break-spaces", fontSize: "15px" }}
                      >
                        {item.content}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Grid
                  container
                  px={{ xs: 2, md: 20 }}
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

          <Grid
            container
            display="flex"
            justifyContent="center"
            px={{ xs: 2, md: 20 }}
            my={1}
          >
            <ThemeProvider theme={inputTheme}>
              <TextField
                sx={{
                  width: "80%",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "#41404F",
                }}
                placeholder="Type your message here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <>
                      <IconButton
                        // onClick={handleSend}
                        disabled={
                          // isLoading ||
                          !input
                        }
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                      >
                        <Send />
                      </IconButton>
                      {/* {isLoading && (
                    <CircularProgress
                      size={24}
                      color="primary"
                      sx={{ marginLeft: "10px" }}
                    />
                  )} */}
                    </>
                  ),
                }}
              />
            </ThemeProvider>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Chat;

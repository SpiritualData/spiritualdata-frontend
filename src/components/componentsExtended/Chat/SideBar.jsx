import { Button, Grid } from "@mui/material";
import React from "react";
import ChatHistory from "./PrevChats";

const SideBar = ({ setChat, setTitle, chatHistory, selected, setSelected }) => {
  return (
    <Grid item xs={0} md={2.6} py={3} px={1}>
      <Button
        variant="outlined"
        style={{
          width: "100%",
          marginBottom: "10px",
          borderColor: "gray",
          color: "#fff",
          opacity: 0.9,
        }}
        onClick={() => {
          setChat([]);
          setTitle("");
        }}
      >
        + New Chat
      </Button>
      <ChatHistory
        chatHistory={chatHistory}
        selected={selected}
        setSelected={setSelected}
      />
    </Grid>
  );
};

export default SideBar;

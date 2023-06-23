import { Button, Grid } from "@mui/material";
import React from "react";
import ChatHistory from "./PrevChats";

const SideBar = ({
  setChat,
  chatHistory,
  setChatHistory,
  selected,
  setSelected,
  showSideBar,
        setShowSideBar,
  handleDrawerToggle,
}) => {
  return (
    <Grid
      item
      sx={{ display: { xs: "none", md: showSideBar ? "block" : "none" } }}
      md={2.6}
      py={3}
      px={1}
    >
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
          setSelected();
        }}
      >
        + New Chat
      </Button>
      <ChatHistory
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        selected={selected}
        setSelected={setSelected}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Grid>
  );
};

export default SideBar;

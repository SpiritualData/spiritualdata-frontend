import React from "react";
import ChatHistory from "./PrevChats";
import { Box, Button, Drawer } from "@mui/material";

const ChatDrawer = ({
  setChat,
  mobileOpen,
  chatHistory,
  setChatHistory,
  selected,
  setSelected,
  handleDrawerToggle,
}) => {
  return (
    <Box>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "280px",
            background: (theme) => theme.palette.text.primary,
            color: (theme) => theme.palette.text.secondary,
            py: 2,
            px: 1,
          },
        }}
      >
        <Button
          variant="outlined"
          style={{
            width: "100%",
            marginBottom: "10px",
            borderColor: "black",
            color: "#fff",
            opacity: 0.9,
          }}
          onClick={() => {
            setChat([]);
            setSelected();
            handleDrawerToggle();
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
      </Drawer>
    </Box>
  );
};

export default ChatDrawer;

import React from "react";
import ChatHistory from "./PrevChats";
import { Box, Button, Drawer } from "@mui/material";

interface ChatDrawerProps {
  setChat: React.Dispatch<React.SetStateAction<any[]>>;
  mobileOpen: boolean;
  chatHistory: any[];
  setChatHistory: React.Dispatch<React.SetStateAction<any[]>>;
  selected: any;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  fetchChatHistory: () => void;
  handleDrawerToggle: () => void;
}

const ChatDrawer: React.FC<ChatDrawerProps> = ({
  setChat,
  mobileOpen,
  chatHistory,
  setChatHistory,
  selected,
  setSelected,
  fetchChatHistory,
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
            background: (theme) => theme.palette.chatbot.sidebar,
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
            setSelected(undefined);
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
          fetchChatHistory={fetchChatHistory}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Drawer>
    </Box>
  );
};

export default ChatDrawer;

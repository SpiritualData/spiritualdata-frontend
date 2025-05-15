import React from "react";
import ChatHistory from "./PrevChats";
import { Box, Button, Drawer } from "@mui/material";
import { ChatMessage, ChatHistoryItem } from "../../pages/Chat";

interface ChatItem {
  chat_id: string;
  title: string;
}

interface ChatDrawerProps {
  setChat: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  mobileOpen: boolean;
  chatHistory: ChatHistoryItem[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatHistoryItem[]>>;
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  fetchChatHistory: () => Promise<void>;
  handleDrawerToggle: () => void;
  loadingList: boolean;
  errorList: boolean;
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
  loadingList,
  errorList,
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
            setSelected(null);
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
          loadingList={loadingList}
          errorList={errorList}
        />
      </Drawer>
    </Box>
  );
};

export default ChatDrawer;

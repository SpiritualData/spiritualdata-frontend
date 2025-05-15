import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChatMessage, ChatHistoryItem } from "../../pages/Chat";
import ChatHistory from "./PrevChats";
import { AutoAwesomeMosaic } from "@mui/icons-material";

export const StyledButton = styled(Button)({
  minWidth: "auto",
  padding: "8px",
  borderRadius: "8px",
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

interface SideBarProps {
  setChat: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  chatHistory: ChatHistoryItem[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatHistoryItem[]>>;
  selected: string | null;
  loadingList: boolean;
  errorList: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  fetchChatHistory: () => Promise<void>;
  handleDrawerToggle: () => void;
}

const SideBar: React.FC<SideBarProps> = ({
  setChat,
  chatHistory,
  setChatHistory,
  selected,
  loadingList,
  errorList,
  setSelected,
  showSideBar,
  setShowSideBar,
  fetchChatHistory,
  handleDrawerToggle,
}) => {
  return (
    <Grid
      sx={{
        display: {
          xs: "none",
          md: showSideBar ? "block" : "none",
        },
      }}
      size={{ lg: 2.2, md: 2.6 }}
      pt={3}
      px={1}
    >
      <Stack direction="row" spacing={1}>
        <StyledButton
          variant="outlined"
          sx={{ width: "100%" }}
          onClick={() => {
            setChat([]);
            setSelected(null);
          }}
        >
          + New Chat
        </StyledButton>

        <StyledButton variant="outlined" onClick={() => setShowSideBar(false)}>
          <AutoAwesomeMosaic />
        </StyledButton>
      </Stack>
      <ChatHistory
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        selected={selected}
        loadingList={loadingList}
        errorList={errorList}
        setSelected={setSelected}
        fetchChatHistory={fetchChatHistory}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Grid>
  );
};

export default SideBar;

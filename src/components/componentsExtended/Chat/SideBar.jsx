import { Button, Grid, Stack, styled } from "@mui/material";
import React from "react";
import ChatHistory from "./PrevChats";
import { AutoAwesomeMosaic } from "@mui/icons-material";

export const StyledButton = styled(Button)`
  height: 100%;
  margin-bottom: 10px;
  border-color: black;
  color: #fff;
  opacity: 0.9;
  &:hover {
    border-color: black;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SideBar = ({
  setChat,
  chatHistory,
  setChatHistory,
  selected,
  loadingList,
  errorList,
  setSelected,
  showSideBar,
  setShowSideBar,
  handleDrawerToggle,
}) => {
  return (
    <Grid
      item
      sx={{
        display: {
          xs: "none",
          md: showSideBar ? "block" : "none",
        },
      }}
      md={2.6}
      pt={3}
      px={1}
    >
      <Stack direction="row" spacing={1}>
        <StyledButton
          variant="outlined"
          sx={{ width: "100%" }}
          onClick={() => {
            setChat([]);
            setSelected();
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
        handleDrawerToggle={handleDrawerToggle}
      />
    </Grid>
  );
};

export default SideBar;

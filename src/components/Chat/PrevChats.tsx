import { useState } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import {
  Check,
  Close,
  DeleteOutline,
  MessageOutlined,
} from "@mui/icons-material";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";

import axios from "../../utils/axios";
import { ListSkeleton } from "../ChatSkeleton";
import ErrorComponent from "./Error";

const StyledList = styled(List)`
  width: 100%;
  overflow: auto;
  margin-bottom: 1rem;
`;

const StyledListItem = styled(ListItem)`
  text-align: left;
  border-radius: 4px;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  opacity: 0.9;
`;

const StyledListItemIcon = styled(ListItemIcon)`
  margin-right: 8px;
  width: 24px;
  min-width: 24px;
`;

interface ChatItem {
  chat_id: string;
  title: string;
}

interface ChatHistoryProps {
  chatHistory: ChatItem[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatItem[]>>;
  selected: string | null;
  loadingList: boolean;
  errorList: boolean;
  setSelected: (id: string | null) => void;
  fetchChatHistory: () => void;
  handleDrawerToggle: () => void;
}

export default function ChatHistory({
  chatHistory,
  setChatHistory,
  selected,
  loadingList,
  errorList,
  setSelected,
  fetchChatHistory,
  handleDrawerToggle,
}: ChatHistoryProps) {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [deleteOptions, setDeleteOptions] = useState(false);

  const truncateTitle = (title: string): string => {
    if (title.length > 22) {
      return title.substring(0, 22) + "...";
    }
    return title;
  };

  const removeChatItem = (): void => {
    setLoading(true);
    axios
      .delete("/chat/delete", {
        params: {
          chat_id: selected || "",
        },
      })
      .then((res) => {
        const delResult = res.data;

        if (delResult.success) {
          setChatHistory((prevChatHistory: ChatItem[]) =>
            prevChatHistory.filter(
              (item: ChatItem) => item.chat_id !== selected
            )
          );
        } else {
          console.error("Chat Deletion failed");
        }

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
      });
  };

  return (
    <Stack height="89vh" justifyContent="space-between">
      {loadingList ? (
        <ListSkeleton />
      ) : errorList ? (
        <ErrorComponent errorFunction={fetchChatHistory} />
      ) : (
        <StyledList>
          {chatHistory.length > 0 ? (
            chatHistory.map((item, index) => (
              <StyledListItem
                key={index}
                onClick={() => {
                  setSelected(item.chat_id);
                  handleDrawerToggle();
                }}
                sx={{
                  background:
                    selected === item.chat_id
                      ? (theme) => theme.palette.chatbot.chatBox
                      : "transparent",
                  ...(selected !== item.chat_id && {
                    "&:hover": {
                      opacity: 0.6,
                    },
                  }),
                }}
              >
                <StyledListItemIcon>
                  <MessageOutlined
                    sx={{
                      fontSize: "20px",
                      color: (theme) => theme.palette.text.secondary,
                    }}
                  />
                </StyledListItemIcon>
                <ListItemText secondary={truncateTitle(item.title)} />
                {selected === item.chat_id && (
                  <>
                    {!deleteOptions && !loading && (
                      <DeleteOutline
                        sx={{
                          fontSize: "20px",
                          "&:hover": {
                            opacity: 0.6,
                          },
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteOptions(true);
                        }}
                      />
                    )}
                    {deleteOptions && (
                      <>
                        <Check
                          sx={{
                            fontSize: "18px",
                            "&:hover": {
                              opacity: 0.6,
                            },
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            removeChatItem();
                            setDeleteOptions(false);
                          }}
                        />
                        <Close
                          sx={{
                            fontSize: "18px",
                            ml: 0.6,
                            "&:hover": {
                              opacity: 0.6,
                            },
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeleteOptions(false);
                          }}
                        />
                      </>
                    )}
                    {loading && (
                      <CircularProgress
                        size={20}
                        sx={{
                          color: (theme) => theme.palette.text.secondary,
                        }}
                      />
                    )}
                  </>
                )}
              </StyledListItem>
            ))
          ) : (
            <center>
              <br />
              <small>No chats found.</small>
            </center>
          )}
        </StyledList>
      )}

      <Stack
        direction="row"
        spacing={2}
        sx={{
          color: "lightgray",
          borderTop: "0.8px solid grey",
          pt: 2,
          px: 1,
        }}
      >
        <UserButton afterSignOutUrl={"/sign-in"} />
        {!user?.fullName && (
          <Tooltip title="Click image for settings">
            <Typography sx={{ pt: 0.6 }}>Manage Account</Typography>
          </Tooltip>
        )}
      </Stack>
    </Stack>
  );
}

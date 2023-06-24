import { useState } from "react";
import {
  Check,
  Close,
  DeleteOutline,
  MessageOutlined,
  Settings,
} from "@mui/icons-material";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
} from "@mui/material";

const StyledList = styled(List)`
  width: 100%;
  overflow: auto;
  max-height: 70%;
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

export default function ChatHistory({
  chatHistory,
  setChatHistory,
  selected,
  setSelected,
  handleDrawerToggle,
}) {
  const [deleteOptions, setDeleteOptions] = useState(false);

  const truncateTitle = (title) => {
    if (title.length > 22) {
      return title.substring(0, 22) + "...";
    }
    return title;
  };

  const removeChatItem = () => {
    setChatHistory((prevChatHistory) =>
      prevChatHistory.filter((item) => item.id !== selected)
    );
  };

  return (
    <Stack height="89vh" justifyContent="space-between">
      <StyledList>
        {chatHistory.map((item, index) => (
          <StyledListItem
            key={index}
            onClick={() => {
              setSelected(item.id);
              handleDrawerToggle();
            }}
            sx={{
              background: selected === item.id ? "#353441" : "transparent",
              "&:hover": {
                opacity: selected !== item.id && 0.6,
              },
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
            {selected === item.id && (
              <>
                {!deleteOptions && (
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
              </>
            )}
          </StyledListItem>
        ))}
      </StyledList>

      <Button
        sx={{
          color: "lightgray",
          borderTop: "1px solid gray",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          py: 2,
          textTransform: "none",
        }}
      >
        <Settings sx={{ marginRight: "6px" }} /> Settings{" "}
      </Button>
    </Stack>
  );
}

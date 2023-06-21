import { MessageOutlined } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
  selected,
  setSelected,
  handleDrawerToggle,
}) {
  return (
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
              opacity: 0.7,
            },
          }}
        >
          <StyledListItemIcon>
            <MessageOutlined
              sx={{ color: (theme) => theme.palette.text.secondary }}
            />
          </StyledListItemIcon>
          <ListItemText primary={item.title} />
        </StyledListItem>
      ))}
    </StyledList>
  );
}

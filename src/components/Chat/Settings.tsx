import React, { useState } from "react";
import {
  IconButton,
  Menu,
  FormControlLabel,
  Switch,
  MenuItem,
  styled,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { SwitchProps } from "@mui/material/Switch";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 39,
  height: 22,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

interface SettingsMenuProps {
  saveChat: boolean;
  setSaveChat: (value: boolean) => void;
}

function SettingsMenu({ saveChat, setSaveChat }: SettingsMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-controls="settings-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          sx: { py: 0, background: (theme) => theme.palette.chatbot.sidebar },
        }}
      >
        <MenuItem
          sx={{
            paddingLeft: 0,
            background: (theme) => theme.palette.chatbot.sidebar,
            color: (theme) => theme.palette.text.secondary,
            "&:hover": {
              background: (theme) => theme.palette.chatbot.sidebar,
              color: (theme) => theme.palette.text.secondary,
            },
          }}
        >
          <FormControlLabel
            control={
              <IOSSwitch
                sx={{ m: 1 }}
                checked={saveChat}
                onChange={() => setSaveChat(!saveChat)}
              />
            }
            label="Save Chat"
            labelPlacement="start"
            sx={{ margin: 2 }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}

export default SettingsMenu;

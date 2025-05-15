import { Login, Input, Menu, Message } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import header_scrolled from "../assets/header_scrolled.png";

interface DrawerItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface DrawerItemsProps {
  tab: DrawerItem[];
  handleDrawerToggle: () => void;
}

const DrawerItems: React.FC<DrawerItemsProps> = ({
  tab,
  handleDrawerToggle,
}) => {
  const [userExists, setUserExists] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUserExists(!!user);
  }, []);

  const drawerTab: DrawerItem[] = [
    {
      label: userExists ? "Chat" : "Sign In",
      path: userExists ? "/chat" : "/sign-in",
      icon: userExists ? <Message /> : <Login />,
    },
    {
      label: "Sign Up",
      path: "/sign-up",
      icon: <Input />,
    },
  ];

  if (userExists) {
    drawerTab.pop();
  }

  return (
    <>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row">
            <img
              src={undefined}
              alt=""
              style={{
                width: "50px",
                height: "40px",
                marginTop: 10,
                marginLeft: -14,
              }}
              onClick={handleDrawerToggle}
            />
            <Link style={{ textDecoration: "none" }} to="/">
              <IconButton size="large">
                <img
                  src={header_scrolled}
                  alt="Spiritual Data Logo"
                  style={{ width: "200px", marginTop: "4px" }}
                />
              </IconButton>
            </Link>
          </Stack>
          <Stack mt={0.6} mr={{ xs: -2, sm: -3 }} justifySelf="flex-end">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <Menu />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
      <Divider />
      <List sx={{ py: 0 }}>
        {tab.concat(drawerTab).map((data, index) => (
          <ListItem
            disablePadding
            key={index}
            component={data.path.startsWith("http") ? "a" : Link}
            to={data.path.startsWith("http") ? undefined : data.path}
            href={data.path.startsWith("http") ? data.path : undefined}
            target={data.path.startsWith("http") ? "_blank" : undefined}
            rel={
              data.path.startsWith("http") ? "noopener noreferrer" : undefined
            }
            sx={{ color: (theme) => theme.palette.text.primary }}
            onClick={handleDrawerToggle}
          >
            <ListItemButton>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText
                sx={{ ml: -2 }}
                primaryTypographyProps={{ fontSize: 13, fontWeight: "bold" }}
                primary={data.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerItems;

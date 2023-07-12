import { Login, Input, Menu } from "@mui/icons-material";
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
import React from "react";
import { Link } from "react-router-dom";

import header_scrolled from "../../assests/header_scrolled.png";

const DrawerItems = ({ tab, handleDrawerToggle }) => {
  const drawerTab = [
    {
      label: "Login",
      path: "/login",
      icon: <Login />,
    },
    {
      label: "Signup",
      path: "/signup",
      icon: <Input />,
    },
  ];

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
              src={""}
              alt=""
              style={{
                width: "50gitpx",
                height: "40px",
                marginTop: 10,
                marginLeft: -14,
              }}
              onClick={handleDrawerToggle}
              component={Link}
              to={"/home"}
            />{" "}
            <Link style={{ textDecoration: "none" }} to="/">
              <IconButton size="large">
                <img
                  src={header_scrolled}
                  alt=""
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
            component={Link}
            to={data.path}
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

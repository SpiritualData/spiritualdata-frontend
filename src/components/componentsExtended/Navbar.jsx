import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  styled,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import { Domain, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

import DrawerItems from "./Drawer";

export const drawerWidth = 280;

const StyledTab = styled(Tab)(({ theme }) => ({
  //   color: "#dbc895",
  textDecoration: "none",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const tab = [
  {
    label: "Home",
    path: "home",
  },
  {
    label: "Data Discovery",
    path: "data-discovery",
  },
  {
    label: "Blog",
    path: "blog",
  },
  {
    label: "Contact",
    path: "contact",
    value: "4",
  },
  {
    label: "About",
    path: "about",
  },
];

function Navbar(props) {
  //   const { window, onClickCreateData, onClickDashboard } = props;
  const [value, setValue] = useState("0");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //   const container =
  //     window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: "#black",
            },
          }}
        >
          <DrawerItems tab={tab}/>
        </Drawer>
      </Box>

      <AppBar
        sx={{
          background: "none",
        }}
        position="static"
      >
        <StyledToolbar>
          <Stack
            direction="row"
            display={{ xs: "none", sm: "none", md: "flex" }}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => setValue(0)}
            >
              <IconButton
                sx={{ color: "black" }}
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
              >
                <Domain />
              </IconButton>
            </Link>

            <Tabs
              ml="auto"
              mr="auto"
              value={value}
              onChange={(e, value) => setValue(value)}
              textColor="primary"
              TabIndicatorProps={{
                sx: { backgroundColor: "#013F5D" },
              }}
              aria-label="secondary tabs example"
            >
              {tab.map(({ label, path }, index) => (
                <StyledTab
                  key={index}
                  label={label}
                  value={index}
                  component={Link}
                  to={path}
                  disableRipple
                />
              ))}
            </Tabs>

            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                sx={{ textTransform: "none" }}
                LinkComponent={Link}
                to={"/logIn"}
                onClick={() => setValue(4)}
              >
                Log In
              </Button>
              <Button
                sx={{
                  background: "#013F5D",
                  color: "white",
                  textTransform: "none",
                  px: 1,
                  "&:focus": {
                    background: "#013F5D",
                    color: "white",
                  },
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </Stack>

          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, color: "#222", display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

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
import {
  Book,
  Call,
  DataObject,
  Domain,
  Home,
  Info,
  Menu,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

import DrawerItems from "./Drawer";

export const drawerWidth = 280;

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  display: "none",
  color: "gray",
  "&.Mui-selected": {
    color: theme.palette.text.primary,
  },
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
    path: "/home",
    icon: <Home />,
  },
  {
    label: "Data Discovery",
    path: "/data-discovery",
    icon: <DataObject />,
  },
  {
    label: "Blog",
    path: "/blog",
    icon: <Book />,
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <Call />,
  },
  {
    label: "About",
    path: "/about",
    icon: <Info />,
  },
];

function Navbar(props) {
  //   const { window, onClickCreateData, onClickDashboard } = props;
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
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
              color: "textPrimary",
            },
          }}
        >
          <DrawerItems tab={tab} handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Box>

      <AppBar
        sx={{
          background: "none",
          boxShadow: { md: "none" },
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
              onClick={() => setValue("/home")}
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
              // textColor="primary"
              TabIndicatorProps={{
                sx: { backgroundColor: (theme) => theme.palette.primary.main },
              }}
              aria-label="secondary tabs example"
            >
              {tab.map(({ label, path }, index) => (
                <StyledTab
                  key={index}
                  label={label}
                  value={path}
                  component={Link}
                  to={path}
                  disableRipple
                />
              ))}
            </Tabs>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              sx={{ minWidth: "156px" }}
            >
              {location.pathname !== "/login" && (
                <Button
                  variant="outlined"
                  sx={{ textTransform: "none" }}
                  component={Link}
                  to={"/login"}
                  onClick={() => setValue("/login")}
                >
                  Log In
                </Button>
              )}
              {location.pathname !== "/signup" && (
                <Button
                  sx={{
                    background: (theme) => theme.palette.primary.main,
                    color: "white",
                    textTransform: "none",
                    px: 1,
                    "&:focus": {
                      background: (theme) => theme.palette.primary.main,
                      color: "white",
                    },
                  }}
                  onClick={() => setValue("/signup")}
                  component={Link}
                  to={"/signup"}
                >
                  Sign Up
                </Button>
              )}
            </Stack>
          </Stack>

          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{
              mr: 2,
              color: (theme) => theme.palette.text.primary,
              display: { md: "none" },
            }}
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

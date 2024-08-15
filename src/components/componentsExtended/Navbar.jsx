import { useEffect, useState } from "react";
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
import { Book, Call, DataObject, Home, Info, Menu } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

import DrawerItems from "./Drawer";
import header from "../../assets/header.png";
import header_scrolled from "../../assets/header_scrolled.png";

export const drawerWidth = 280;

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  display: "none",
  "&:hover": {
    color: theme.palette.primary.hover,
  },
  "&.Mui-selected": {
    color: theme.palette.primary.focus,
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
    path: "/",
    icon: <Home />,
  },
  {
    label: "Data Discovery",
    path: "/data-discovery",
    icon: <DataObject />,
  },
  {
    label: "Newsletter",
    path: "https://spiritualdata.beehiiv.com/",
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
  const [value, setValue] = useState(location.pathname || "/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserExists(true);
    } else {
      setUserExists(false);
    }
  }, []);

  useEffect(() => {
    const match = tab.some((item) => item.path === location.pathname);
    setValue(match ? location.pathname : false);
  }, [location.pathname]);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setScrolled(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else if (window.innerWidth > 900) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
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
          background: scrolled
            ? (theme) => theme.palette.text.secondary
            : "none",
          color: scrolled ? (theme) => theme.palette.text.primary : "none",
          position: "fixed",
          zIndex: 4,
          py: 0.6,
          transition: "0.32s ease-in-out",
          boxShadow: { md: !scrolled && "none" },
        }}
        position="static"
      >
        <StyledToolbar>
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

          <Stack
            direction="row"
            display={{ xs: "flex", md: "none" }}
            justifyContent="center"
            pr={2}
            width="100%"
          >
            <Link style={{ textDecoration: "none" }} to="/">
              <IconButton size="large">
                <img
                  src={scrolled ? header_scrolled : header}
                  alt=""
                  style={{ width: "200px" }}
                />
              </IconButton>
            </Link>
          </Stack>

          <Stack
            direction="row"
            display={{ xs: "none", sm: "none", md: "flex" }}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Link style={{ textDecoration: "none" }} to="/">
              <IconButton size="large">
                <img
                  src={scrolled ? header_scrolled : header}
                  alt=""
                  style={{ width: "200px" }}
                />
              </IconButton>
            </Link>

            <Stack direction="row" spacing={1} alignItems="center">
              <Tabs
                value={value}
                TabIndicatorProps={{
                  sx: {
                    backgroundColor: "transparent",
                  },
                }}
                sx={{ paddingTop: 1 }}
              >
                {tab.map(({ label, path }, index) => (
                  <StyledTab
                    sx={{ color: scrolled ? "#222222" : "#fff" }}
                    key={index}
                    label={label}
                    value={path.startsWith("http") ? undefined : path}
                    component={path.startsWith("http") ? "a" : Link}
                    to={path.startsWith("http") ? undefined : path}
                    href={path.startsWith("http") ? path : undefined}
                    target={
                      path.startsWith("http") && label !== "Newsletter"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      path.startsWith("http") && label !== "Newsletter"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    disableRipple
                  />
                ))}
              </Tabs>

              <Button
                sx={{
                  background: scrolled
                    ? (theme) => theme.palette.primary.focus
                    : "#fff",
                  color: scrolled
                    ? "white"
                    : (theme) => theme.palette.primary.focus,
                  textTransform: "none",
                  height: "42px",
                  minWidth: "150px",
                  px: 6,
                  borderRadius: 20,
                  "&:hover": {
                    background: (theme) => theme.palette.primary.hover,
                    color: "white",
                    opacity: 0.9,
                  },
                }}
                component={Link}
                to={userExists ? "/chat" : "/sign-in"}
              >
                {userExists ? "Chat" : "Sign In"}
              </Button>
            </Stack>
          </Stack>
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

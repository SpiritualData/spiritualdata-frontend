import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Popper,
  Paper,
  Box,
  useTheme,
  ClickAwayListener,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  ListItemButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import navbarLogo from "../../assets/images/Navbar/navbarLogo.webp";

interface DropdownItem {
  name: string;
  path: string;
}

interface DropdownMenu {
  label: string;
  link: string;
  items: DropdownItem[];
}

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const productsRef = useRef<HTMLDivElement>(null!);
  const initiativesRef = useRef<HTMLDivElement>(null!);

  const [openMenu, setOpenMenu] = useState<"products" | "initiatives" | null>(
    null
  );
  const [userExists, setUserExists] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const refMap: Record<string, React.RefObject<HTMLDivElement>> = {
    Products: productsRef,
    Initiatives: initiativesRef,
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkUser = () => {
      const user = localStorage.getItem("user");
      setUserExists(!!user && user !== "null" && user !== "undefined");
    };

    checkUser();
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleNav = useCallback(
    (path: string) => {
      navigate(path);
      setOpenMenu(null);
      setDrawerOpen(false);
    },
    [navigate]
  );

  const dropdownMenus: DropdownMenu[] = [
    {
      label: "Products",
      link: "/products",
      items: [
        { name: "Quest", path: "/products/quest" },
        { name: "Concept AI", path: "/products/concept-ai" },
      ],
    },
    {
      label: "Initiatives",
      link: "/initiatives",
      items: [
        { name: "Estimating Truth", path: "/initiatives/estimating-truth" },
        {
          name: "Wikipedia Advocacy",
          path: "/initiatives/wikipedia-advocacy",
        },
        {
          name: "Psychic Ability Certification",
          path: "/initiatives/psychic-ability-certification",
        },
      ],
    },
  ];

  const staticLinks = [
    { label: "Research", path: "/data-discovery" },
    { label: "Donate", path: "/donations" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const navLinkStyles = {
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "uppercase",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "0.5px",
    cursor: "pointer",
    px: 1.5,
    py: 1,
    transition: "all 0.3s ease",
    color: theme.palette.primary.hero ?? "#000",
    "&:hover": { color: theme.palette.primary.focus ?? "#333" },
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? theme.palette.primary.main
            : "transparent",
          boxShadow: scrolled
            ? `0px 0.05px 7px ${theme.palette.primary.hero}`
            : "none",
          transition: "all 0.3s ease",
          px: { xs: 2, md: 20 },
          py: 1.5,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", flexWrap: "wrap" }}
        >
          {isMobile ? (
            <>
              {/* Mobile: Left = Hamburger */}
              <IconButton
                onClick={() => setDrawerOpen(true)}
                edge="start"
                sx={{ color: theme.palette.primary.hero }}
              >
                <MenuIcon />
              </IconButton>

              {/* Mobile: Center = Logo */}
              <Box
                onClick={() => handleNav("/")}
                sx={{ cursor: "pointer", mx: "auto" }}
              >
                <Box
                  component="img"
                  src={navbarLogo}
                  alt="Logo"
                  sx={{ height: { xs: 40, md: 50 }, objectFit: "contain" }}
                />
              </Box>

              {/* Mobile: Right = Sign In */}
              <Button
                onClick={() => handleNav(userExists ? "/chat" : "/sign-in")}
                sx={{
                  backgroundColor: theme.palette.primary.hero,
                  color: theme.palette.primary.focus,
                  borderRadius: 8,
                  height: 42,
                  px: 3,
                  fontWeight: 700,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.focus,
                    color: theme.palette.primary.hero,
                  },
                }}
              >
                {userExists ? "Chat" : "Sign In"}
              </Button>
            </>
          ) : (
            <>
              {/* Desktop Navbar */}
              <Box onClick={() => handleNav("/")} sx={{ cursor: "pointer" }}>
                <Box
                  component="img"
                  src={navbarLogo}
                  alt="Logo"
                  sx={{ height: 40, objectFit: "contain" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.2, md: 1.8 },
                }}
              >
                {dropdownMenus.map((menu) => (
                  <Box
                    key={menu.label}
                    ref={refMap[menu.label]}
                    onMouseEnter={() =>
                      setOpenMenu(menu.label.toLowerCase() as any)
                    }
                    onMouseLeave={() => setOpenMenu(null)}
                    sx={{ position: "relative" }}
                  >
                    <Box
                      onClick={() => handleNav(menu.link)}
                      sx={{
                        ...navLinkStyles,
                        display: "flex",
                        alignItems: "center",
                      }}
                      aria-haspopup="true"
                    >
                      {menu.label}
                      <ArrowDropDownIcon sx={{ ml: 0.5, fontSize: "20px" }} />
                    </Box>
                    <Popper
                      open={openMenu === menu.label.toLowerCase()}
                      anchorEl={refMap[menu.label].current}
                      placement="bottom-start"
                      style={{ zIndex: 1200 }}
                    >
                      <ClickAwayListener onClickAway={() => setOpenMenu(null)}>
                        <Paper
                          elevation={2}
                          sx={{
                            mt: 1,
                            borderRadius: 1.5,
                            backgroundColor: theme.palette.primary.main,
                            py: 1,
                            minWidth: 220,
                          }}
                        >
                          {menu.items.map((item) => (
                            <Box
                              key={item.name}
                              onClick={() => handleNav(item.path)}
                              sx={{
                                px: 3,
                                py: 1.2,
                                fontSize: "13px",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                cursor: "pointer",
                                color: theme.palette.primary.hero,
                                letterSpacing: "0.5px",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  color: theme.palette.primary.focus,
                                  backgroundColor: "transparent",
                                },
                              }}
                            >
                              {item.name}
                            </Box>
                          ))}
                        </Paper>
                      </ClickAwayListener>
                    </Popper>
                  </Box>
                ))}
                {staticLinks.map(({ label, path }) => (
                  <Box
                    key={label}
                    onClick={() => handleNav(path)}
                    sx={navLinkStyles}
                  >
                    {label}
                  </Box>
                ))}
                <Button
                  onClick={() => handleNav(userExists ? "/chat" : "/sign-in")}
                  sx={{
                    backgroundColor: theme.palette.primary.hero,
                    color: theme.palette.primary.focus,
                    borderRadius: 8,
                    height: 42,
                    px: 4,
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "0.5px",
                    ml: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.focus,
                      color: theme.palette.primary.hero,
                    },
                  }}
                >
                  {userExists ? "Chat" : "Sign In"}
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box width={350} role="presentation" sx={{ mt: 2 }}>
          <List>
            {dropdownMenus.map((menu) => (
              <Box key={menu.label}>
                <ListItemButton
                  onClick={() =>
                    setExpanded(expanded === menu.label ? null : menu.label)
                  }
                >
                  <ListItemText
                    primary={menu.label}
                    sx={{
                      color: "black",
                      "&:hover": {
                        opacity: 0.8,
                        cursor: "pointer",
                      },
                    }}
                  />
                  {expanded === menu.label ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={expanded === menu.label}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {menu.items.map((item) => (
                      <ListItemButton
                        key={item.name}
                        sx={{ pl: 4 }}
                        onClick={() => handleNav(item.path)}
                      >
                        <ListItemText
                          primary={item.name}
                          sx={{
                            color: "black",
                            "&:hover": {
                              opacity: 0.8,
                              cursor: "pointer",
                            },
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ))}
            <Divider />
            {staticLinks.map(({ label, path }) => (
              <ListItemButton key={label} onClick={() => handleNav(path)}>
                <ListItemText
                  primary={label}
                  sx={{
                    color: "black",
                    "&:hover": {
                      opacity: 0.8,
                      cursor: "pointer",
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

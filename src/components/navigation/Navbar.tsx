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
  ListItemText,
  Divider,
  Collapse,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import navbarLogo from "../../assets/images/Navbar/navbarLogo.webp";
import productIcon from "../../assets/Images/Navbar/icons-product.gif";
import initiativesIcon from "../../assets/Images/Navbar/icons-initiatives.gif";
import aboutIcon from "../../assets/Images/Navbar/icons-about.gif";
import researchIcon from "../../assets/Images/Navbar/icons-research.gif";
import donateIcon from "../../assets/Images/Navbar/icons-donate.gif";
import contactIcon from "../../assets/Images/Navbar/icons-contact.gif";
import questIcon from "../../assets/Images/Navbar/icons-quest.gif";
import conceptAiIcon from "../../assets/Images/Navbar/icons-concept-ai.gif";
import estimatingTruthIcon from "../../assets/Images/Navbar/icons-estimating.gif";
import wikipediaIcon from "../../assets/Images/Navbar/icons-wikipedia.gif";
import psychicIcon from "../../assets/Images/Navbar/icons-psychic.gif";
import closeIcon from "../../assets/Images/Navbar/icons-close.gif";
import loginIcon from "../../assets/Images/Navbar/icons-loginout.gif";

interface DropdownItem {
  name: string;
  path: string;
  icon: string;
}

interface DropdownMenu {
  label: string;
  link: string;
  icon: string;
  items: DropdownItem[];
}

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:1330px)");
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
      icon: productIcon,
      items: [
        { name: "Quest", path: "/products/quest", icon: questIcon },
        {
          name: "Concept AI",
          path: "/products/concept-ai",
          icon: conceptAiIcon,
        },
      ],
    },
    {
      label: "Initiatives",
      link: "/initiatives",
      icon: initiativesIcon,
      items: [
        {
          name: "Estimating Truth",
          path: "/initiatives/estimating-truth",
          icon: estimatingTruthIcon,
        },
        {
          name: "Wikipedia Advocacy",
          path: "/initiatives/wikipedia-advocacy",
          icon: wikipediaIcon,
        },
        {
          name: "Psychic Ability Certification",
          path: "/initiatives/psychic-ability-certification",
          icon: psychicIcon,
        },
      ],
    },
  ];

  const staticLinks = [
    { label: "Research", path: "/data-discovery", icon: researchIcon },
    { label: "Donate", path: "/donations", icon: donateIcon },
    { label: "About", path: "/about", icon: aboutIcon },
    { label: "Contact", path: "/contact", icon: contactIcon },
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
        PaperProps={{
          sx: {
            background: `linear-gradient(135deg,  ${theme.palette.primary.focus} 0%,${theme.palette.primary.main} 29%,${theme.palette.primary.main} 87%,${theme.palette.primary.focus} 100%)`,
          },
        }}
      >
        <Box
          onClick={() => handleNav("/")}
          sx={{ cursor: "pointer", mx: "auto", mt: 4 }}
        >
          <Box
            onClick={() => setDrawerOpen(false)}
            component="img"
            src={closeIcon}
            alt="close"
            sx={{
              height: 20,
              objectFit: "contain",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          />
          <Box
            component="img"
            src={navbarLogo}
            alt="Logo"
            sx={{ height: { xs: 40, md: 50 }, objectFit: "contain" }}
          />
        </Box>

        <Box
          width={300}
          role="presentation"
          sx={{
            mt: 2,
            fontFamily: "Sansation, sans-serif",
            px: { xs: 2, sm: 2 },
          }}
        >
          <List>
            {/* Dropdown Menus */}
            {dropdownMenus.map((menu) => (
              <>
                <Box key={menu.label}>
                  <ListItemButton
                    onClick={() =>
                      setExpanded(expanded === menu.label ? null : menu.label)
                    }
                  >
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <Box
                        component="img"
                        src={menu.icon}
                        alt={menu.label}
                        sx={{ height: 25, objectFit: "contain" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={menu.label}
                      sx={{ color: "black" }}
                    />
                    {expanded === menu.label ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  {/* Submenus */}
                  <Collapse
                    in={expanded === menu.label}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {menu.items.map((item) => (
                        <ListItemButton
                          key={item.name}
                          sx={{ pl: 6 }}
                          onClick={() => handleNav(item.path)}
                        >
                          <ListItemIcon sx={{ minWidth: "40px" }}>
                            <Box
                              component="img"
                              src={item.icon}
                              alt={item.name}
                              sx={{ height: 25, objectFit: "contain" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item.name}
                            sx={{ color: "black" }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
                <Divider />
              </>
            ))}

            {/* Static Links */}
            {staticLinks.map(({ label, path, icon }) => (
              <ListItemButton key={label} onClick={() => handleNav(path)}>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <Box
                    component="img"
                    src={icon}
                    alt={label}
                    sx={{ height: 25, objectFit: "contain" }}
                  />
                </ListItemIcon>
                <ListItemText primary={label} sx={{ color: "black" }} />
              </ListItemButton>
            ))}
          </List>
        </Box>

        <Box
          sx={{
            mx: "auto",
            my: 4,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Divider sx={{ width: "100%", mb: 2 }} />
          <Button
            onClick={() => handleNav(userExists ? "/sign-out" : "/sign-in")}
            sx={{
              background: theme.palette.primary.focus,
              color: theme.palette.primary.hero,
              borderRadius: 3,
              width: 280,
              height: 50,
              px: 3,
              fontWeight: 900,
              border: "1px solid rgba(0, 0, 0, 0.14)",
              fontSize: "14px",
              fontFamily: "sansation-bold, sans-serif",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: theme.palette.primary.hero,
                color: theme.palette.primary.focus,
              },
            }}
          >
            <Box
              component="img"
              src={loginIcon}
              alt={userExists ? "Sign Out" : "Sign In"}
              sx={{ height: 25, objectFit: "contain", mr: 1 }}
            />
            {userExists ? "Sign Out" : "Sign In"}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

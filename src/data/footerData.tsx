interface MenuLink {
  name: string;
  path: string;
}

interface MenuItem {
  title: string;
  links: MenuLink[];
}

interface SocialLinks {
  linkedin: string;
  twitter: string;
  youtube: string;
  discord: string;
}

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    links: [
      // { name: "Search", path: "/" },
      // { name: "Quick Search", path: "/" },
      { name: "What's New", path: "https://spiritualdata.beehiiv.com/" },
      { name: "Chatbot", path: "/chat" },
    ],
  },
  {
    title: "About Us",
    links: [{ name: "About Us", path: "/about-us" }],
  },
  {
    title: "Contact",
    links: [
      { name: "Contact page", path: "/contact" },
      { name: "support@spiritualdata.org", path: "/contact" },
    ],
  },
];

export const links: SocialLinks = {
  linkedin: "https://www.linkedin.com/company/spiritual-data",
  twitter: "https://twitter.com/spiritual_data",
  youtube: "https://www.youtube.com/channel/UCIiKo5K5DOXcSun5xhZcd6A",
  discord: "https://discord.com/invite/thQNvPGcJF",
};

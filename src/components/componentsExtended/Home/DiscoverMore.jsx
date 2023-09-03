import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import donation from "../../../assets/donation.png";
import dataDiscovery from "../../../assets/data.jpeg";
import blog from "../../../assets/blog.png";
import { Link } from "react-router-dom";

const DiscoverMore = () => {
  const data = [
    {
      label: "Donations",
      image: donation,
      description:
        "Support Spiritual Data in exploring life's biggest questions. Your donations empower our community to dive deeper into the realms of spirituality, fostering growth, understanding, and unity.",
      path: "/donations",
    },
    {
      label: "Data Discovery",
      image: dataDiscovery,
      description:
        "Explore the uncharted territories of spirituality with Spiritual Data's Discovery page. Here, we pool knowledge, experiences, and insights, helping you to navigate your personal spiritual journey with more clarity and confidence.",
      path: "/data-discovery",
    },
    {
      label: "Our Blog",
      image: blog,
      description:
        "Embark on a thought-provoking journey with the Spiritual Data Blog. It's a space where we explore various facets of spirituality, reflect on profound questions, and share insights that spark enlightenment and foster deeper understanding.",
      path: "https://spiritualdata.beehiiv.com/",
    },
  ];
  return (
    <Grid
      container
      item
      sx={{
        background: "#F3F6F8",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        gap: { xs: 6, md: 2 },
      }}
      pt={{ xs: 4, md: 8 }}
      pb={{ xs: 8, md: 12 }}
      px={{ xs: 2, sm: 6 }}
    >
      <Stack px={{ xs: "10%", md: "24%" }} mb={{ xs: 0, md: 2 }}>
        <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h4">
          Discover More
        </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: "16px", color: "gray" }}>
          Dive deeper into Spiritual Data and contribute to our growth. Your
          exploration aids our collective enlightenment journey.
        </Typography>
      </Stack>

      {data.map((item, index) => {
        const LinkComponent = item.label === "Our Blog" ? "a" : Link;
        const linkProps =
          item.label === "Our Blog"
            ? { href: item.path, target: "_blank", rel: "noreferrer noopener" }
            : { to: item.path };

        return (
          <Grid item xs={12} sm={5.5} md={3.5} key={index}>
            <LinkComponent {...linkProps} style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                  pb: 4,
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    "& Button": {
                      background: (theme) => theme.palette.primary.hover,
                      color: "white",
                      opacity: 0.9,
                    },
                    "& h5": {
                      color: (theme) => theme.palette.primary.hover,
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={item.image}
                  alt={item.label}
                />
                <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      lineHeight: "2.4rem",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {item.description}
                  </Typography>
                </CardContent>
                <Button
                  sx={{
                    background: "gray",
                    color: (theme) => theme.palette.text.secondary,
                    textTransform: "none",
                    height: "42px",
                    width: "200px",
                    px: 6,
                    borderRadius: 20,
                  }}
                >
                  Learn More
                </Button>
              </Card>
            </LinkComponent>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DiscoverMore;

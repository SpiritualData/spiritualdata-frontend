import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import donation from "../../../assets/donation.png";
import dataDiscovery from "../../../assets/data.jpeg";
import blog from "../../../assets/blog.png";

interface DiscoverItem {
  label: string;
  image: string;
  description: string;
  path: string;
}

const DiscoverMore = () => {
  const data: DiscoverItem[] = [
    {
      label: "Donate",
      image: donation,
      description:
        "Spiritual Data is a US-based nonprofit. Your donations fund refining our methods for calculating truth, gathering more data, and the free use of our chatbot.",
      path: "/donations",
    },
    {
      label: "Review the Data",
      image: dataDiscovery,
      description:
        "Click here to see the data for yourself at our Notion databases. You'll find experiences, research papers, hypotheses, and current and future data sources.",
      path: "/data-discovery",
    },
    {
      label: "Follow our Newsletter",
      image: blog,
      description:
        "Stay up to date on Spiritual Data's journey, new product features, and the latest insights from our truth analysis.",
      path: "https://spiritualdata.beehiiv.com",
    },
  ];

  return (
    <Grid
      container
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
        <Typography sx={{ fontWeight: 400, fontSize: "16px", color: "black" }}>
          Dive deeper into Spiritual Data and contribute to our growth.
        </Typography>
      </Stack>

      {data.map((item, index) => {
        const LinkComponent = "a";
        // item.path.startsWith('http') ? 'a' : Link;
        const linkProps = {
          href: item.path,
        };
        // item.path.startsWith('http')
        //   ? { href: item.path, target: "_blank", rel: "noreferrer noopener" }
        //   : { to: item.path };

        return (
          <Grid size={{ xs: 12, sm: 5.5, md: 3.5 }} key={index}>
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
                  <Typography variant="body2" sx={{ color: "black" }}>
                    {item.description}
                  </Typography>
                </CardContent>
                <Button
                  sx={{
                    background: "black",
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

import {
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import women from "../../../assets/woman2.jpg";
import orange from "../../../assets/orange.png";

const NewsletterGrid = styled(Grid)(({ theme }) => ({
  color: "#fff",
  maxHeight: "58vh",
  padding: 46,
  position: "relative",
  backgroundImage: `url(${women})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left",
  backgroundSize: "57% auto",
  "&:before": {
    content: '""',
    position: "absolute",
    right: 0,
    top: 0,
    width: "68%",
    height: "100%",
    backgroundImage: `url(${orange})`,
    backgroundSize: "fit",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
  },
  [theme.breakpoints.down("sm")]: {
    padding: 30,
    backgroundImage: "none",
    backgroundColor: theme.palette.primary.hover,
  },
}));

const NewsLetter = () => {
  return (
    <NewsletterGrid container justifyContent="center" alignItems="center">
      <Grid item xs={0} sm={6}></Grid>
      <Grid
        item
        xs={12}
        sm={6}
        zIndex={2}
        p={{ xs: 1, md: 4 }}
        pr={{ xs: 1, md: 0 }}
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", sm: "flex-start" }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            textAlign: { xs: "center", sm: "left" },
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Join our newsletter
        </Typography>

        <Stack sx={{ width: { xs: "100%", lg: "80%" } }}>
          <iframe
            title="Newsletter"
            src="https://embeds.beehiiv.com/51f0c52b-4966-4cde-8f8d-e761d1b07095?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            width="100%"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </Stack>

        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "14px",
            textAlign: { xs: "center", sm: "left" },
            fontWeight: 400,
            mt: "10px",
            pr: { xs: 0, md: "34%" },
            wordWrap: "break-word",
          }}
        >
          Spiritual Data's Newsletter- We seek Board Members
        </Typography>
      </Grid>
    </NewsletterGrid>
  );
};

export default NewsLetter;

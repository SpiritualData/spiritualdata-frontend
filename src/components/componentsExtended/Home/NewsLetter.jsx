import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import women from "../../../assests/woman2.jpg";
import orange from "../../../assests/orange.png";

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

const StyledNewLetterText = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
    "& input": {
      caretColor: "#fff",
    },
  },
  input: {
    WebkitBoxShadow: "0 0 0 1000px #323233 inset",
    WebkitTextFillColor: "#fff",
    borderRadius: "40px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: "#fff",
  color: theme.palette.primary.focus,
  textTransform: "none",
  padding: theme.spacing(0, 5),
  borderRadius: 30,
  "&:hover": {
    background: theme.palette.primary.hover,
    color: "white",
    opacity: 0.9,
  },
}));

const NewsLetter = () => {
  return (
    <NewsletterGrid container justifyContent="center" alignItems="center">
      <Grid xs={0} sm={6}></Grid>
      <Grid
        item
        xs={12}
        sm={6}
        zIndex={2}
        p={{ xs: 1, md: 4 }}
        pr={{ xs: 1, md: 0 }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            textAlign: { xs: "center", md: "left" },
            fontWeight: "bold",
          }}
        >
          Join our newsletter
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          mt={2}
          alignItems="flex-end"
        >
          <StyledNewLetterText
            sx={{
              border: "none",
              color: "#fff",
              backgroundColor: "#333",
              borderRadius: "30px",
              padding: { xs: "1px", md: "3px" },
            }}
            type="email"
            size="small"
            placeholder="Enter your email here"
            fullWidth
          />
          <StyledButton
            variant="contained"
            sx={{
              width: "160px",
              height: { xs: "32px", sm: "40px", md: "44px" },
            }}
          >
            Subscribe
          </StyledButton>
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
          Stay updated with our weekly updates regarding the bot and research
          programmes.
        </Typography>
      </Grid>
    </NewsletterGrid>
  );
};

export default NewsLetter;

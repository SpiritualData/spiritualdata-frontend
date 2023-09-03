import { Fab, styled, useScrollTrigger, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const StyledFab = styled(Fab)(({ theme }) => ({
  color: theme.palette.primary.focus,
  backgroundColor: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: theme.palette.primary.focus,
    color:  theme.palette.text.secondary,
  },
}));

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // at what scroll position (in px) the button should become visible
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <StyledFab
        size="small"
        aria-label="scroll back to top"
        onClick={handleClick}
        style={{ position: "fixed", bottom: "50px", right: "24px" }}
      >
        <KeyboardArrowUp />
      </StyledFab>
    </Zoom>
  );
};

export default ScrollToTop;

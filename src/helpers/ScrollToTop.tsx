import { Fab, styled, useScrollTrigger, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Theme } from "@mui/material/styles";
import React from "react";

const StyledFab = styled(Fab)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.primary.focus,
  backgroundColor: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: theme.palette.primary.focus,
    color: theme.palette.text.secondary,
  },
}));

const ScrollToTop: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, 
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const anchor = (
      (event.target as HTMLElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

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

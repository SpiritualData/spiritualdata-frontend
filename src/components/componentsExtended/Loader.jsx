import { Box } from "@mui/material";

const ButtonLoader = () => {
  return (
    <Box
      sx={{
        fontWeight: "bold",
        display: "inline-block",
        // fontFamily: "monospace",
        clipPath: "inset(0 2ch 0 0)",
        animation: "l 1s steps(4) infinite",
        "@keyframes l": {
          to: {
            clipPath: "inset(0 -1ch 0 0)",
          },
        },
      }}
    >
      ...
    </Box>
  );
};

export default ButtonLoader;
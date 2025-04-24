import { Box, SxProps } from "@mui/material";

const ButtonLoader: React.FC = () => {
  const loaderStyles: SxProps = {
    fontWeight: "bold",
    display: "inline-block",
    clipPath: "inset(0 2ch 0 0)",
    animation: "l 1s steps(4) infinite",
    "@keyframes l": {
      to: {
        clipPath: "inset(0 -1ch 0 0)",
      },
    },
  };

  return <Box sx={loaderStyles}>...</Box>;
};

export default ButtonLoader;

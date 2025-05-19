import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";

interface CircularProgressWithLabelProps {
  value: number;
  sx?: SxProps;
}

const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = (
  props
) => {
  const { value, ...other } = props;

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        variant="determinate"
        thickness={6}
        size={150}
        value={100}
        sx={{
          color: "white",
          position: "absolute",
          ...other.sx,
        }}
      />
      <CircularProgress
        variant="determinate"
        thickness={6}
        size={150}
        value={value}
        sx={{
          color: "#4691A8",
          ...other.sx,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

interface CircularWithValueLabelProps {
  value: number;
}

const CircularWithValueLabel: React.FC<CircularWithValueLabelProps> = ({
  value,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgressWithLabel value={value} />
    </Box>
  );
};

export default CircularWithValueLabel;

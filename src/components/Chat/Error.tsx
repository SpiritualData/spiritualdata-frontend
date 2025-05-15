import { Replay } from "@mui/icons-material";
import { Button } from "@mui/material";

interface ErrorComponentProps {
  errorFunction: () => void;
}

const ErrorComponent = ({ errorFunction }: ErrorComponentProps) => {
  return (
    <center>
      <br />
      <small>An error occurred</small>
      <br />
      <Button
        variant="contained"
        sx={{
          marginTop: 2,
          color: (theme) => theme.palette.text.secondary,
          background: "#4691A8",
          textTransform: "none",
          "&:hover": {
            background: "#4691B8",
          },
        }}
        startIcon={<Replay />}
        onClick={errorFunction}
      >
        Reload
      </Button>
    </center>
  );
};

export default ErrorComponent;

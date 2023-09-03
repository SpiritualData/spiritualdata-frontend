import React, { useEffect, useState } from "react";
import MuiAlert from "@mui/material/Alert";
import { Slide, Snackbar } from "@mui/material";

export const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

const SnackbarAlert = ({ error }) => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line
  const [transition, setTransition] = useState(() => TransitionUp);

  useEffect(() => {
    if (error) {
      setIsOpen(true);
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  return (
    <Snackbar
      key={error}
      open={isOpen}
      autoHideDuration={5000}
      TransitionComponent={transition}
      onClose={() => setIsOpen(false)}
    >
      <Alert severity="error" onClose={() => setIsOpen(false)}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;

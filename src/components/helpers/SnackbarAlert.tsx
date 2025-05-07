import React, { useEffect, useState } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Slide, Snackbar, SlideProps } from "@mui/material";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

export function TransitionUp(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

interface SnackbarAlertProps {
  error: string | null;
}

const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transition] = useState(() => TransitionUp);

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

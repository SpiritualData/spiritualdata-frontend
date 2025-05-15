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
  error: string | boolean | null;
}

const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ error }) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {typeof error === "string" ? error : "An error occurred"}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;

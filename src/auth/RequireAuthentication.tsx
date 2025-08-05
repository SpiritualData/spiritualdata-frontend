import { ReactNode } from "react";
import { useRefresh } from "../hooks/useRefresh";
import { Navigate } from "react-router-dom";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface RequireAuthenticationProps {
  children: ReactNode;
}

const RequireAuthentication = ({ children }: RequireAuthenticationProps) => {
  const { isLoaded } = useAuth();
  useRefresh();

  // Show loading spinner while Clerk is initializing
  if (!isLoaded) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
        gap={2}
      >
        <CircularProgress />
        <Typography variant="body2" color="text.secondary">
          Loading authentication...
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to={"/sign-in"} replace />
      </SignedOut>
    </>
  );
};

export default RequireAuthentication;

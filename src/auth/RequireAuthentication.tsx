import { ReactNode } from "react";
import { useRefresh } from "../hooks/useRefresh";
import { Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

interface RequireAuthenticationProps {
  children: ReactNode;
}

const RequireAuthentication = ({ children }: RequireAuthenticationProps) => {
  useRefresh();
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to={"/sign-in"} />
      </SignedOut>
    </>
  );
};

export default RequireAuthentication;

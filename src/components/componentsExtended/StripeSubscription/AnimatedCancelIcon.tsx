import React from "react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

interface Styles {
  wrapper: React.CSSProperties;
  icon: React.CSSProperties;
  keyframes: string;
}

const AnimatedCancelIcon: React.FC = () => {
  const styles: Styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
    },
    icon: {
      color: "red",
      animation: "pulse 1.0s infinite ease-in-out",
      height: "100%",
    },
    keyframes: `
      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.8; }
        100% { transform: scale(1); opacity: 1; }
      }
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div style={styles.wrapper}>
        <CancelRoundedIcon
          style={{ ...styles.icon, fontSize: "60px" }}
          fontSize="large"
        />
      </div>
    </>
  );
};

export default AnimatedCancelIcon;

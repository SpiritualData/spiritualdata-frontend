import React from "react";
import { Modal, Box } from "@mui/material";
import ConfirmationCard from "./ConfirmationCard";
import gitGif from "../../../assets/git-right.gif";
import GifImage from "../../helpers/GifImage";
import AnimatedCancelIcon from "./AnimatedCancelIcon";

const ConfirmationModal = ({ isOpen, setOpen, box }) => {
  return (
    <Modal
      open={isOpen}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "transparent",
        backdropFilter: isOpen ? "blur(2px)" : "none",
        transition: "backdrop-filter 0.3s ease",
        opacity: isOpen ? 1 : 0,
      }}
    >
      <Box
        sx={{
          outline: "none",
          animation: "fadeIn 0.3s ease-in-out",
        }}
      >
        {box === "success" && (
          <ConfirmationCard
            title="Subscription Successful!"
            description="Thank you for subscribing. Enjoy chatting!"
            btnIcon={<GifImage path={gitGif} />}
          />
        )}
        {box === "cancel" && (
          <ConfirmationCard
            title="Payment Not Completed"
            description="Subscription incomplete. Try again anytime."
            btnIcon={<AnimatedCancelIcon />}
          />
        )}
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;

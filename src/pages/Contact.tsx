import React from "react";
import { Grid } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import PageHeader from "../components/PageHeader";
import image from "../assets/contact.webp";
import PageDef from "../components/PageDef";
import ContactForm from "../components/Contact/ContactForm";
import SocialLinks from "../components/Contact/SocialLinks";

const Contact: React.FC = () => {
  {/*
  const gridItemStyles: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  */}
  return (
    <Grid container>
      <PageHeader image={image} page={"Contact"} />
      <PageDef
        title={"CONTACT US"}
        heading={"We'd love to hear from you!"}
        details={
          "Your voice matters at Spiritual Data. Get involved, share experiences, critique our methods. Spiritual Data is community-driven."
        }
      />
      <ContactForm />
      <SocialLinks />
    </Grid>
  );
};

export default Contact;

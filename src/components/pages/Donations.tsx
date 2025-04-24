import { Grid } from "@mui/material";
import React from "react";

import image from "../../assets/donation.png";
import skill from "../../assets/skill.jpeg";
import PageHeader from "../helpers/PageHeader";
import PageDef from "../helpers/PageDef";
import DonationMethod from "../componentsExtended/Donations/DonationsMethod";
import Questions from "../componentsExtended/Donations/Questions";
import ContentSection from "../componentsExtended/Home/ContentSection";

const Donations: React.FC = () => {
  return (
    <Grid container>
          <PageHeader image={image} page={"Donations"} sx={{ mb: 4 }} />
    
          <PageDef
            title={"Donations"}
            heading={"Why choose us?"}
            details={
              "We're fundamentally changing science in general. Spiritual Data's approach is to focus on methods for calculating truth and unbiased ways to analyze evidence, because we know that the solution can scale once it's done right and once we demonstrate the value to people like you. Because of this approach, your donations are well used because once our solution is solid, it can change the world."
            }
          />
    
          <DonationMethod />
    
          <ContentSection
            imageSrc={skill}
            heading={"Donate Your Skills"}
            subText={
              "Help us grow by becoming part of Spiritual Data's non-profit mission to calculate truth with AI and move society beyond limiting biases. You can choose how you'd like to contribute and what skills you'd like to use."
            }
            buttonText={"Join Now"}
            path={
              "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdy6G90oR1lgRv1BqPd3jkbVG11xOlWptQ88IXfKtb2R3lmyg/viewform?usp=send_form"
            }
          />
    
          <Questions />
        </Grid>
  );
};

export default Donations;

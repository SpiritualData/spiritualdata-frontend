import { Grid } from "@mui/material";
import React from "react";

import image from "../assets/donation.png";
import skill from "../assets/skill.jpeg";
import PageHeader from "../components/PageHeader";
import PageDef from "../components/PageDef";
import DonationMethod from "../components/Donations/DonationsMethod";
import Questions from "../components/Donations/Questions";
import ContentSection from "../components/Home/ContentSection";

const Donations: React.FC = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"Donations"} sx={{ mb: 4 }} />
      
      <Grid container spacing={{ xs: 4, md: 6 }} direction="column" p={{ xs: 5, md: 15 }}>
        <Grid>
          <PageDef
            title={"Donations"}
            heading={"Why choose us?"}
            details={
              "We're fundamentally changing science in general. Spiritual Data's approach is to focus on methods for calculating truth and unbiased ways to analyze evidence, because we know that the solution can scale once it's done right and once we demonstrate the value to people like you. Because of this approach, your donations are well used because once our solution is solid, it can change the world."
            }
          />
        </Grid>

        <Grid>
          <DonationMethod />
        </Grid>

        <Grid container justifyContent="center" sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Grid size={{ xs: 12 }}>
            <ContentSection
              imageSrc={skill}
              heading={"Donate Your Skills"}
              description={
                "Help us grow by becoming part of Spiritual Data's non-profit mission to calculate truth with AI and move society beyond limiting biases. You can choose how you'd like to contribute and what skills you'd like to use."
              }
              buttonText={"Join Now"}
              buttonLink={
                "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdy6G90oR1lgRv1BqPd3jkbVG11xOlWptQ88IXfKtb2R3lmyg/viewform?usp=send_form"
              }
              imagePosition="right"
            />
          </Grid>
        </Grid>

        <Grid>
          <Questions />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Donations;

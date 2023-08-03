import { Grid } from "@mui/material";

import image from "../../assets/donation.png";
import skill from "../../assets/skill.jpeg";
import PageHeader from "../helpers/PageHeader";
import PageDef from "../helpers/PageDef";
import DonationMethod from "../componentsExtended/Donations/DonationsMethod";
import Questions from "../componentsExtended/Donations/Questions";
import ContentSection from "../componentsExtended/Home/ContentSection";

const Donations = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"Donations"} sx={{ mb: 4 }} />

      <PageDef
        title={"Donations"}
        heading={" Why choose us?"}
        details={
          "Embark on a transformative journey with Spiritual Data through your generous donations. Fuel our relentless pursuit of profound spiritual insights, growth, and unity, and be an integral part of our impactful global community."
        }
      />

      <DonationMethod />

      <ContentSection
        imageSrc={skill}
        heading={"Donate Your Skills"}
        subText={
          "Help us grow, become part of Spiritual Data's non-profit mission to explore spirituality and empower seekers worldwide. Contribute your skills and insights to foster growth, understanding, and unity among our community. Together, we make a meaningful impact on the spiritual journey of countless individuals."
        }
        buttonText={"Join Now"}
        path={"/contact"}
      />

      <Questions />
    </Grid>
  );
};

export default Donations;

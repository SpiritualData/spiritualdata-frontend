import { Grid } from "@mui/material";

import image from "../../assets/donation.png";
import PageHeader from "../helpers/PageHeader";
import PageDef from "../componentsExtended/PageDef";

const Donations = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"Donations"} sx={{ mb: 4 }} />

      <PageDef
        title={"Donations"}
        heading={"Support Our Spiritual Exploration"}
        details={
          "Join us in unveiling life's biggest questions. Your generous contributions empower our community, fostering growth, understanding, and unity in spirituality"
        }
      />
    </Grid>
  );
};

export default Donations;

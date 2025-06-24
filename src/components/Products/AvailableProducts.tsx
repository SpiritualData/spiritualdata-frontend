import { useEffect } from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import ProductCards from "./ProductCards";
import productData from "./Data/ProductData";
import { height, textAlign } from "@mui/system";
import { WrapText } from "@mui/icons-material";

const styles = {
  Heading: {
    fontSize: { xs: "20px", lg: "37px" },
    fontFamily: "Dosis,sans-serif",
    fontWeight: "500",
    color: "#F9A11A",
    textAlign: "center",
  },
  Description: {
    fontSize: { xs: "12px", sm: "16px" },
    textAlign: "justify",
    fontWeight: 400,
    marginX: "15%",
    marginTop: "1%",
    wordWrap: "break-word",
    justifyContent: "center",
    alignItems: "center",
    
  },
};

const AvailableProducts = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", pt: "30px" }}>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ width: "90%", marginTop: "20px", display: "contents" }}>
          <Box sx={{ width: "90%", marginTop: "20px" }}>
            <Typography sx={styles.Heading}>Our Products</Typography>
            <Typography sx={styles.Description}>
              Discover Our Suite of Intelligent AI Solutions Our AI-driven
              products are designed to solve real-world problems across
              industries—from business communication and research assistance to
              mental well-being. Whether you're looking to boost productivity,
              streamline workflows, or offer personalized support, our tools are
              crafted to empower you with cutting-edge artificial intelligence
              capabilities tailored to your unique needs.
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              background: "white",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              gap: { xs: 4, md: 6 },
            }}
            columnSpacing={0}
            pt={{ xs: 4, md: 1 }}
            pb={{ xs: 8, md: 12 }}
            mt={5}
          >
            {Array.isArray(productData) &&
              productData.map((item, index) => (
                <ProductCards item={item} index={index} key={index} />
              ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default AvailableProducts;

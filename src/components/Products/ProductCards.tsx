import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  item: {
    name: string;
    label: string;
    path: string;
    description: string;
    logo1: string;
    logo2: string;
    logo3: string;
  };
  index: number;
}

const ProductCards: React.FC<ProductCardProps> = ({ item, index }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: { xs: "100%", sm: "41.6%", md: "29.6%", lg: "20%" },
      }}
    >
      <Card
        onClick={() => navigate(`/products/${item.name}`)}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #EBEBEB",
          boxShadow: "none",
          borderRadius: "1rem",
          width: "100%",
          maxWidth: 250,
          height: "100%",
          pb: 1,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "10px 10px 20px 0px rgba(20, 101, 95, 0.17)",
            cursor: "pointer",
            "& Button": {
              background: "#fc3c3c",
              color: "white",
              opacity: 1,
            },
            "& h5": {
              color: (theme) => theme.palette.primary.hover,
            },
          },
        }}
      >
        <Box
          sx={{
            borderRadius: "1rem",
            pt: "40px",
            pb: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src={item.path}
            alt={item.label}
            style={{
              cursor: "pointer",
              width: "140px",
              height: "50px",
              objectFit: "scale-down",
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1, pb: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: "black",
              textAlign: "center",
              lineHeight: "1.5rem",
              maxHeight: "auto",
              mb: "10px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              height: "100px",
            }}
          >
            {item.description}
          </Typography>
          <Typography
            sx={{
              color: "#B6B3B3",
              fontSize: "14px",
              fontWeight: "400",
              textTransform: "capitalize",
              lineHeight: "48px",
              margin: "10px 0",
            }}
          >
            Stack
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "-34px 0px 0px 0px",
            }}
          >
            <span
              style={{
                marginRight: "50px",
                width: "31%",
                height: "1px",
                backgroundColor: "#B6B3B3",
              }}
            ></span>
            <span
              style={{
                marginLeft: "50px",
                width: "31%",
                height: "1px",
                backgroundColor: "#B6B3B3",
              }}
            ></span>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mt: 4,
            }}
          >
            <img
              src={item.logo1}
              alt={item.label}
              style={{ cursor: "pointer", width: "20px", height: "20px" }}
            />
            <img
              src={item.logo2}
              alt={item.label}
              style={{ cursor: "pointer", width: "20px", height: "20px" }}
            />
            <img
              src={item.logo3}
              alt={item.label}
              style={{ cursor: "pointer", width: "20px", height: "20px" }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCards;

{
  /* <li
  style={{
    listStyle: "none",
    width: "200%",
    height: "200%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "3px",
    borderRadius: "1rem",
  }}
>{`Hello ${item.name}`}</li>; */
}

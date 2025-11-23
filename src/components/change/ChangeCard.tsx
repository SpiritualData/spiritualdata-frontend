import theme from "../../styles/theme";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import React from "react";
import { useInView } from "../../hooks/useInView";
import { useNavigate } from "react-router-dom";

type ChangeCardItem = {
  title: string;
  desc: string;
  link: string;
  linkText: string;
};

type ChangeCardProps = {
  item: ChangeCardItem;
  index: number;
};

const ChangeCard: React.FC<ChangeCardProps> = ({ item, index }) => {
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  return (
    <Grid
      item
      xs={12}
      md={4}
      width={"100%"}
      component="div"
      ref={ref}
      {...({} as any)}
    >
      <Slide direction="up" in={inView} timeout={700}>
        <Card
          sx={{
            backgroundColor: "darkcard.main",
            color: "darkcard.contrastText",
            boxShadow: 6,
            height: "100%",
            px: 4,
            pt: 3,
            mb: 2,
            display: "flex",
            flexDirection: "column",
            borderRadius: 5,
          }}
        >
          <CardContent sx={{ flexGrow: 1, justifyContent: "space-between" }}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body2" mb={6}>
              {item.desc}
            </Typography>
            <Button
              onClick={() => navigate(item.link)}
              sx={{
                backgroundColor: theme.palette.primary.hero,
                color: theme.palette.primary.focus,
                borderRadius: 8,
                height: 42,
                px: 4,
                fontWeight: 700,
                fontSize: {xs:"9px",md:"14px"},
                textTransform: "uppercase",
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "0.5px",
                border: `1px solid ${theme.palette.primary.focus}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.primary.focus,
                  color: theme.palette.primary.hero,
                  scale: 1.04
                },
              }}
            >
              {item.linkText}
            </Button>
          </CardContent>
        </Card>
      </Slide>
    </Grid>
  );
};

export default ChangeCard;

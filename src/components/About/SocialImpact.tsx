import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import image1 from "../../assets/Images/initiatives/initiativeCard1.webp";
import image2 from "../../assets/Images/initiatives/initiativeCard2.webp";
import image3 from "../../assets/Images/initiatives/initiativeCard3.webp";
import { useInView } from "../../hooks/useInView";

const data = [
  {
    id: 1,
    title: "Personal Growth",
    description:
      "Provide every individual intellectual autonomy through access to undeniable evidence for spiritual answers and truth that may affect their decisions and accelerate personal growth.",
    image: image1,
    link: "/impact/personal-growth",
    author: "Spiritual Data",
    buttonText: "Help Individuals Grow",
  },
  {
    id: 2,
    title: "Science",
    description:
      "Personalize science to individual subjective experience. Unblock all areas of science by overcoming bias and considering spiritual explanations.",
    image: image2,
    link: "/impact/science",
    author: "Spiritual Data",
    buttonText: "Advance Spiritual Science",
  },
  {
    id: 3,
    title: "Education",
    description:
      "Teach evidence-based spiritual knowledge and spiritual science in standard education systems. Enable a culture of sharing spiritual experiences in society and education.",
    image: image3,
    link: "/impact/education",
    author: "Spiritual Data",
    buttonText: "Transform Education",
  },
];

const SocialImpact: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Animation for title
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.2 });

  return (
    <Container sx={{ py: 20 }}>
      <Slide direction="up" in={titleInView} timeout={600}>
        <Typography
          ref={titleRef}
          variant="h4"
          fontWeight="600"
          sx={{
            color: isDark ? "white" : "primary.hero",
            textShadow: `0 0 10px ${theme.palette.primary.focus}`,
            letterSpacing: 2,
            textAlign: "center",
            mb: 15,
            fontSize: { xs: "26px", md: "50px" },
            fontWeight: 600,
          }}
        >
          Our Social Impact
        </Typography>
      </Slide>

      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {data.map((item, index) => {
          const { ref, inView } = useInView({ threshold: 0.3 });

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.title}
              component="div"
              maxWidth={"385px"}
              height={"50vh"}
              ref={ref}
              {...({} as any)}
            >
              <Slide
                direction="up"
                in={inView}
                timeout={{ enter: 500 + index * 500 }}
              >
                <div>
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: 4,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      maxWidth: "390px",
                      backgroundColor: isDark ? "#1e1e1e" : "#f7f8f3",
                      transition: "all 0.3s ease",
                      "&:hover .initiative-image": {
                        transform: "scale(1.06) rotateZ(1.2deg)",
                      },
                    }}
                  >
                    {/* Image Container */}
                    <Box
                      sx={{
                        position: "relative",
                        height: 200,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        className="initiative-image"
                        sx={{
                          height: "100%",
                          width: "100%",
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        p: 4,
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{
                          color: isDark ? "white" : "text.primary",
                          mb: 3,
                          letterSpacing: 2,
                          textAlign: "center",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        lineHeight={1.6}
                        letterSpacing={1}
                        textAlign={"justify"}
                        minHeight={115}
                      >
                        {item.description || ""}
                      </Typography>
                    </Box>
                  </Card>
                </div>
              </Slide>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default SocialImpact;

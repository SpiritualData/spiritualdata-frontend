import React from "react";
import { Box, Typography, Grid, styled, useTheme } from "@mui/material";
import theme from "@/styles/theme";
import image from "../../assets/Images/Achievments/ag.webp";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

interface SellingPointsProps {
  data: Step[];
}

// Styled card with background slice
const CardContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgX" && prop !== "bgY",
})<{ bgX: string; bgY: string }>(({ bgX, bgY }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: 12,
  height: 250,
  width: 250,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "translateY(-6px)",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${image})`,
    backgroundSize: "1565px 400px", 
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${bgX} ${bgY}`,
    opacity: 0.25,
    zIndex: 0,
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
  },
}));

const SellingPoints: React.FC<SellingPointsProps> = ({ data = [] }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 13 },
        textAlign: "center",
        backgroundColor: "#F2F3EB",
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='2000' viewBox='0 0 800 800'%3E%3Cg fill='none' %3E%3Cg stroke='%23FFFFFF' stroke-width='17'%3E%3Cline x1='-8' y1='-8' x2='808' y2='808'/%3E%3Cline x1='-8' y1='792' x2='808' y2='1608'/%3E%3Cline x1='-8' y1='-808' x2='808' y2='8'/%3E%3C/g%3E%3Cg stroke='%23fefefe' stroke-width='16'%3E%3Cline x1='-8' y1='767' x2='808' y2='1583'/%3E%3Cline x1='-8' y1='17' x2='808' y2='833'/%3E%3Cline x1='-8' y1='-33' x2='808' y2='783'/%3E%3Cline x1='-8' y1='-783' x2='808' y2='33'/%3E%3C/g%3E%3Cg stroke='%23fdfdfc' stroke-width='15'%3E%3Cline x1='-8' y1='742' x2='808' y2='1558'/%3E%3Cline x1='-8' y1='42' x2='808' y2='858'/%3E%3Cline x1='-8' y1='-58' x2='808' y2='758'/%3E%3Cline x1='-8' y1='-758' x2='808' y2='58'/%3E%3C/g%3E%3Cg stroke='%23fdfdfb' stroke-width='14'%3E%3Cline x1='-8' y1='67' x2='808' y2='883'/%3E%3Cline x1='-8' y1='717' x2='808' y2='1533'/%3E%3Cline x1='-8' y1='-733' x2='808' y2='83'/%3E%3Cline x1='-8' y1='-83' x2='808' y2='733'/%3E%3C/g%3E%3Cg stroke='%23fcfcfa' stroke-width='13'%3E%3Cline x1='-8' y1='92' x2='808' y2='908'/%3E%3Cline x1='-8' y1='692' x2='808' y2='1508'/%3E%3Cline x1='-8' y1='-108' x2='808' y2='708'/%3E%3Cline x1='-8' y1='-708' x2='808' y2='108'/%3E%3C/g%3E%3Cg stroke='%23fbfbf9' stroke-width='12'%3E%3Cline x1='-8' y1='667' x2='808' y2='1483'/%3E%3Cline x1='-8' y1='117' x2='808' y2='933'/%3E%3Cline x1='-8' y1='-133' x2='808' y2='683'/%3E%3Cline x1='-8' y1='-683' x2='808' y2='133'/%3E%3C/g%3E%3Cg stroke='%23fafaf7' stroke-width='11'%3E%3Cline x1='-8' y1='642' x2='808' y2='1458'/%3E%3Cline x1='-8' y1='142' x2='808' y2='958'/%3E%3Cline x1='-8' y1='-158' x2='808' y2='658'/%3E%3Cline x1='-8' y1='-658' x2='808' y2='158'/%3E%3C/g%3E%3Cg stroke='%23f9faf6' stroke-width='10'%3E%3Cline x1='-8' y1='167' x2='808' y2='983'/%3E%3Cline x1='-8' y1='617' x2='808' y2='1433'/%3E%3Cline x1='-8' y1='-633' x2='808' y2='183'/%3E%3Cline x1='-8' y1='-183' x2='808' y2='633'/%3E%3C/g%3E%3Cg stroke='%23f8f9f5' stroke-width='9'%3E%3Cline x1='-8' y1='592' x2='808' y2='1408'/%3E%3Cline x1='-8' y1='192' x2='808' y2='1008'/%3E%3Cline x1='-8' y1='-608' x2='808' y2='208'/%3E%3Cline x1='-8' y1='-208' x2='808' y2='608'/%3E%3C/g%3E%3Cg stroke='%23f8f8f4' stroke-width='8'%3E%3Cline x1='-8' y1='567' x2='808' y2='1383'/%3E%3Cline x1='-8' y1='217' x2='808' y2='1033'/%3E%3Cline x1='-8' y1='-233' x2='808' y2='583'/%3E%3Cline x1='-8' y1='-583' x2='808' y2='233'/%3E%3C/g%3E%3Cg stroke='%23f7f7f2' stroke-width='7'%3E%3Cline x1='-8' y1='242' x2='808' y2='1058'/%3E%3Cline x1='-8' y1='542' x2='808' y2='1358'/%3E%3Cline x1='-8' y1='-558' x2='808' y2='258'/%3E%3Cline x1='-8' y1='-258' x2='808' y2='558'/%3E%3C/g%3E%3Cg stroke='%23f6f7f1' stroke-width='6'%3E%3Cline x1='-8' y1='267' x2='808' y2='1083'/%3E%3Cline x1='-8' y1='517' x2='808' y2='1333'/%3E%3Cline x1='-8' y1='-533' x2='808' y2='283'/%3E%3Cline x1='-8' y1='-283' x2='808' y2='533'/%3E%3C/g%3E%3Cg stroke='%23f5f6f0' stroke-width='5'%3E%3Cline x1='-8' y1='292' x2='808' y2='1108'/%3E%3Cline x1='-8' y1='492' x2='808' y2='1308'/%3E%3Cline x1='-8' y1='-308' x2='808' y2='508'/%3E%3Cline x1='-8' y1='-508' x2='808' y2='308'/%3E%3C/g%3E%3Cg stroke='%23f4f5ef' stroke-width='4'%3E%3Cline x1='-8' y1='467' x2='808' y2='1283'/%3E%3Cline x1='-8' y1='317' x2='808' y2='1133'/%3E%3Cline x1='-8' y1='-333' x2='808' y2='483'/%3E%3Cline x1='-8' y1='-483' x2='808' y2='333'/%3E%3C/g%3E%3Cg stroke='%23f4f4ed' stroke-width='3'%3E%3Cline x1='-8' y1='342' x2='808' y2='1158'/%3E%3Cline x1='-8' y1='442' x2='808' y2='1258'/%3E%3Cline x1='-8' y1='-458' x2='808' y2='358'/%3E%3Cline x1='-8' y1='-358' x2='808' y2='458'/%3E%3C/g%3E%3Cg stroke='%23f3f4ec' stroke-width='2'%3E%3Cline x1='-8' y1='367' x2='808' y2='1183'/%3E%3Cline x1='-8' y1='417' x2='808' y2='1233'/%3E%3Cline x1='-8' y1='-433' x2='808' y2='383'/%3E%3Cline x1='-8' y1='-383' x2='808' y2='433'/%3E%3C/g%3E%3Cg stroke='%23F2F3EB' stroke-width='1'%3E%3Cline x1='-8' y1='392' x2='808' y2='1208'/%3E%3Cline x1='-8' y1='-408' x2='808' y2='408'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
backgroundAttachment: "fixed",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{
          textShadow: `0px 4px 8px ${theme.palette.primary.focus}`,
          mb: 12,
          letterSpacing: 3,
        }}
        gutterBottom
      >
        Unique Selling Points
      </Typography>

      {/* Cards */}
      <Grid container spacing={4} justifyContent="center" mt={4}>
        {data.length > 0 ? (
          data.map((step, index) => {
            const col = index % 4; // 4 per row
            const row = Math.floor(index / 5);
            const bgX = `-${col * 250}px`;
            const bgY = "-50px";

            return (
              <Grid
                item
                xs={6}
                sm={4}
                md={2.5}
                key={index}
                component="div"
                {...({} as any)}
              >
                <CardContainer
                  bgX={bgX}
                  bgY={bgY}
                  sx={{ background: step.gradient }}
                >
                  {step.icon}
                </CardContainer>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  maxWidth={200}
                  mx="auto"
                  mt={1}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.8, maxWidth: 200, mx: "auto" }}
                >
                  {step.description}
                </Typography>
              </Grid>
            );
          })
        ) : (
          <Typography variant="body2" color="text.secondary">
            No selling points available.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default SellingPoints;

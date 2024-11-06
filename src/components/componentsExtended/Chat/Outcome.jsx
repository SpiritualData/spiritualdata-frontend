import React from "react";
import { BarChart } from "@mui/x-charts";
import {
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  Container,
} from "@mui/material";

const Outcome = () => {
  const outcomeGoal = "I want to improve my mental health";
  const currentState = [
    "Feeling stressed often",
    "Not sleeping well",
    "Skipping meals",
  ];
  const suggestions = [
    "Try meditation for 10 minutes daily",
    "Establish a consistent sleep schedule",
    "Plan and prepare healthy meals in advance",
  ];

  const chartData = [
    { label: "Week 1", value: 10 },
    { label: "Week 2", value: 15 },
    { label: "Week 3", value: 20 },
    { label: "Week 4", value: 25 },
  ];

  return (
    <Box display="flex">
      <Box width={320} overflow="auto" maxHeight={"72vh"}>
        <Box
          p={{ xs: 0, md: 2 }}
          mt={{ xs: 0, md: 2 }}
          component={Container}
          spacing={3}
        >
          <Box mb={2}>
            <Typography fontWeight="bold">Outcome Goal</Typography>
            <Divider />
            <Divider />
            <Typography color="textSecondary">
              <small>{outcomeGoal}</small>
            </Typography>
          </Box>

          <Box my={2}>
            <Typography fontWeight="bold">Current State</Typography>
            <List dense>
              {currentState.map((item, index) => (
                <ListItem key={index} sx={{ padding: 0 }}>
                  <Typography color="textSecondary">
                    <small>• {item}</small>
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box my={2}>
            <Typography fontWeight="bold">Suggestions</Typography>
            <List dense>
              {suggestions.map((item, index) => (
                <ListItem key={index} sx={{ padding: 0 }}>
                  <Typography color="textSecondary">
                    <small>• {item}</small>
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>

          
        </Box>
      </Box>
    </Box>
  );
};

export default Outcome;

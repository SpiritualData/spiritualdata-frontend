import React, { useEffect, useState } from "react";
import ProgressBar from '../../helpers/ProgressBar';
import {
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  Container,
  IconButton
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import AdjustIcon from '@mui/icons-material/Adjust';

var infoTracking = false;
const Outcome = ({ title, additional_info }) => {
  const [open, setOpen] = useState(false);
  const suggestions = additional_info?.plan?.map(([task, status]) => `${task} (${status})`);

  useEffect(() => {
    if (additional_info?.plan || additional_info?.plan?.length === 0) {
      if (!infoTracking) setOpen(true);
    } else {
      infoTracking = true;
    }
  }, [additional_info]);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Box
        width={{ xs: '100%', md: 320 }}
        overflow="auto"
        maxHeight={{ xs: 'none', md: "72vh" }}
        sx={{
          transition: 'max-height 0.5s ease-in-out, opacity 0.2s ease-in-out',
          opacity: 1,
        }}
      >
        <Box
          p={{ xs: 2, md: 1 }}
          mt={{ xs: 1, md: 2 }}
          component={Container}
          spacing={3}
          sx={{
            animation: 'slideUp 0.5s ease-in-out',
            '@keyframes slideUp': {
              '0%': { transform: 'translateY(20px)', opacity: 0 },
              '100%': { transform: 'translateY(0)', opacity: 1 },
            },
          }}
        >
          {/* Title (Main Heading) */}
          <Box mb={2}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                animation: 'slideIn 1.3s ease-in-out',
                '@keyframes slideIn': {
                  '0%': { transform: 'translateY(10px)', opacity: 0 },
                  '100%': { transform: 'translateY(0)', opacity: 1 },
                },
                textAlign: "center"
              }}
            >
              {title || "No Title"}
            </Typography>
          </Box>

          {/* Additional Info Heading (Secondary Heading) */}
          <Box mb={2} display="flex" alignItems="center">
            <InfoIcon />
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ marginLeft: 1, flex: 1, cursor: 'pointer' }}
            >
              Additional Info
            </Typography>
            <IconButton onClick={() => setOpen(!open)}>
              <ExpandMoreIcon sx={{ color: "white", transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease-in-out" }} />
            </IconButton>
            <Divider />
          </Box>
          <Box
            sx={{
              display: open ? "block" : "none",
              transition: "height 0.3s ease-in-out, opacity 0.3s ease-in-out",
            }}
          >
            {/* Outcome Goal (Subheading under Additional Info) */}
            <Box my={2}>
              <Box mt={2} display="flex" alignItems="center">
                <EmojiFlagsIcon />
                <Typography variant="body2" fontWeight="bold" sx={{ marginLeft: 1 }}>
                  Outcome Goal
                </Typography>
              </Box>
              {
                additional_info ? (
                  <Typography color="textSecondary" sx={{ marginLeft: 2 }}>
                    <small>• {additional_info?.outcome}</small>
                  </Typography>
                ) : (
                  <Typography color="textSecondary" sx={{
                    fontSize: 12,
                    textAlign: "center"
                  }}>
                    <small>No Results</small>
                  </Typography>
                )
              }
            </Box>
            {/* Current State (Subheading under Additional Info) */}
            <Box my={2}>
              <Box mt={2} display="flex" alignItems="center"
              >
                <AdjustIcon />
                <Typography variant="body2" fontWeight="bold" sx={{ marginLeft: 1 }}>
                  Current State
                </Typography>
              </Box>
              <List dense>
                {additional_info ? (
                  additional_info.current_state.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        padding: 0,

                      }}
                    >
                      <Typography color="textSecondary" sx={{ marginLeft: 2 }}>
                        <small>• {item || "No Results"}</small>
                      </Typography>
                    </ListItem>
                  ))
                ) : (
                  <ListItem
                    sx={{
                      padding: 0,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography color="textSecondary" sx={{
                      fontSize: 12
                    }}>
                      <small>No Results</small>
                    </Typography>
                  </ListItem>
                )
                }
              </List>
            </Box>

            {/* Plan (Subheading under Additional Info) */}
            <Box my={2}>
              <Box mt={2} display="flex" alignItems="center">
                <AssignmentIcon />
                <Typography variant="body2" fontWeight="bold" sx={{ marginLeft: 1 }}>
                  Plan
                </Typography>
              </Box>
              <List dense>
                {suggestions ? (
                  suggestions?.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        padding: 0,
                      }}
                    >
                      <Typography color="textSecondary" sx={{ marginLeft: 2 }}>
                        <small>• {item || "No Result"}</small>
                      </Typography>
                    </ListItem>
                  ))
                ) : (
                  <ListItem
                    sx={{
                      padding: 0,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography color="textSecondary" sx={{
                      fontSize: 12
                    }}>
                      <small>No Result</small>
                    </Typography>
                  </ListItem>
                )}
              </List>
            </Box>

          </Box>
          {/* Progress (Subheading under Additional Info) */}
          <Box my={2}>
            <Box my={4} display="flex" alignItems="center">
              <CheckCircleIcon />
              <Typography variant="body1" fontWeight="bold" sx={{ marginLeft: 1 }}>
                Progress
              </Typography>
            </Box>
            <Box
              height={{ xs: 100, md: 200 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginTop={2}
              sx={{
                animation: 'scaleIn 4.3s ease-in-out',
                '@keyframes scaleIn': {
                  '0%': { transform: 'scale(0.9)', opacity: 0 },
                  '100%': { transform: 'scale(1)', opacity: 1 },
                },
              }}
            >
              <ProgressBar value={additional_info?.progress || 0} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Outcome;

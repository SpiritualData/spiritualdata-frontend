import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
    return (
        <Box
            sx={{
                position: "relative",
                display: "inline-flex",
            }}
        >
            {/* Thicker CircularProgress with a custom size */}
            <CircularProgress
                variant="determinate"
                thickness={6}
                size={150}
                value={100}
                sx={{
                    color: "white",
                    position: "absolute"
                }}
            />
            <CircularProgress
                variant="determinate"
                thickness={6}
                size={150}
                {...props}
                sx={{
                    color: "#4691A8",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Percentage text styled to match */}
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                    }}
                >
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel({ value }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgressWithLabel value={value} />
        </Box>
    );
}

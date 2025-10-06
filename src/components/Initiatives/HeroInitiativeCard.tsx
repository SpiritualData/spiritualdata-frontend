import theme from"../../styles/theme";
import { Grid, Box, Typography } from "@mui/material";

interface InitiativeData {
  icon: string;
  title: string;
  description: string;
}

interface InitiativeCardProps {
  data: InitiativeData;
  idx: number;
  headSx?: any;
  bodySx?: any;
}

function HeroInitiativeCard({ data, idx, headSx, bodySx }: InitiativeCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} key={idx} component="div" {...({} as any)}>
      <Box
        sx={{
          border: "1px solid #e6e8e6",
          backgroundColor: idx % 2 === 0 ? "#f4f6ee" : "#ffffff",
          p: 6,
          minHeight: 260,
          maxWidth: 340,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.08)",
            transform: "translateY(-4px)",
          },
        }}
      >
        {/* Top Content Row */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="left"
          gap={1.5}
          mb={2}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              backgroundColor: theme.palette.primary.hero,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={data.icon}
              alt={data.title}
              sx={{ width: 55, height: 55 }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: "#1F2540",
              textAlign: "left",
              ...(headSx || {})
            }}
          >
            {data.title}
          </Typography>
        </Box>

        {/* Bottom Description Row */}
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            lineHeight: 1.7,
            mt: "auto",
            ...(bodySx || {})
          }}
        >
          {data.description}
        </Typography>
      </Box>
    </Grid>
  );
}

export default HeroInitiativeCard
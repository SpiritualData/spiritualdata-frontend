import React from "react";
import { Skeleton, Stack } from "@mui/material";

const ChatSkeleton = () => {
  return (
    <Stack
      spacing={{ xs: 2, md: 3 }}
      mb={1}
      sx={{ opacity: 4, pr: { xs: 0, md: 5 } }}
    >
      <Stack direction="row" spacing={2} width="100%" justifyContent="center">
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="rounded" width={"60%"} height={140} />
      </Stack>

      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2 }}
        width="100%"
        justifyContent="center"
      >
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="rounded" width={"60%"} height={60} />
      </Stack>

      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2 }}
        width="100%"
        justifyContent="center"
      >
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="rounded" width={"60%"} height={120} />
      </Stack>

      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2 }}
        width="100%"
        justifyContent="center"
      >
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="rounded" width={"60%"} height={80} />
      </Stack>
    </Stack>
  );
};

export default ChatSkeleton;

export const ListSkeleton = () => {
  return (
    <Stack spacing={2} mt={2} px={1}>
      <Skeleton variant="rounded" height={50} sx={{ background: "#363636" }} />
      <Skeleton variant="rounded" height={50} sx={{ background: "#363636" }} />
      <Skeleton variant="rounded" height={50} sx={{ background: "#363636" }} />
      <Skeleton variant="rounded" height={50} sx={{ background: "#363636" }} />
    </Stack>
  );
};

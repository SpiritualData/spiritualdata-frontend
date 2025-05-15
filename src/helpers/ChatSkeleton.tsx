import React from "react";
import { Skeleton, Stack, SxProps } from "@mui/material";

const ChatSkeleton: React.FC = () => {
  const skeletonStyle: SxProps = {
    background: "gray",
  };

  return (
    <Stack
      spacing={{ xs: 2, md: 3 }}
      mb={1}
      sx={{ opacity: 0.4, pr: { xs: 0, md: 5 } }}
    >
      <Stack direction="row" spacing={2} width="100%" justifyContent="center">
        <Skeleton
          variant="circular"
          width={60}
          height={60}
          sx={{ background: "gray" }}
        />
        <Skeleton
          variant="rounded"
          width={"60%"}
          height={140}
          sx={{ background: "gray" }}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2 }}
        width="100%"
        justifyContent="center"
      >
        <Skeleton
          variant="circular"
          width={60}
          height={60}
          sx={{ background: "gray" }}
        />
        <Skeleton
          variant="rounded"
          width={"60%"}
          height={60}
          sx={{ background: "gray" }}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2 }}
        width="100%"
        justifyContent="center"
      >
        <Skeleton
          variant="circular"
          width={60}
          height={60}
          sx={{ background: "gray" }}
        />
        <Skeleton
          variant="rounded"
          width={"60%"}
          height={120}
          sx={{ background: "gray" }}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2 }}
        width="100%"
        justifyContent="center"
      >
        <Skeleton
          variant="circular"
          width={60}
          height={60}
          sx={{ background: "gray" }}
        />
        <Skeleton
          variant="rounded"
          width={"60%"}
          height={80}
          sx={{ background: "gray" }}
        />
      </Stack>
    </Stack>
  );
};

export default ChatSkeleton;

export const ListSkeleton: React.FC = () => {
  const listSkeletonStyle: SxProps = {
    background: "#363636",
  };

  return (
    <Stack spacing={2} mt={2} px={1}>
      <Skeleton variant="rounded" height={50} sx={{ background: "#363636" }} />
      <Skeleton variant="rounded" height={50} sx={{ background: "#363636" }} />
      <Skeleton variant="rounded" height={50} sx={{ background: "#363636" }} />
      <Skeleton variant="rounded" height={50} sx={{ background: "#363636" }} />
    </Stack>
  );
};

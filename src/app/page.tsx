import { Box } from "@/components/ui";
import {
  DEFAULT_FILTERS,
  DEFAULT_OFFSET,
  DEFAULT_LIMIT,
} from "@/constants/globals";
import { ServerProvider } from "@/config/server-provider";
import { ServerQuery } from "@/config/server-query";
import { dehydrate } from "@tanstack/react-query";
import { fetchPosts } from "./tanstack-query-example/fetch-posts";
import dynamic from "next/dynamic";

const TanstackExamplePosts = dynamic(() => import("./tanstack-query-example/posts"))

export default async function Home() {
  const queryServer = new ServerQuery();

  await queryServer.prefetchQuery({
    queryKey: ["posts", DEFAULT_LIMIT, DEFAULT_OFFSET, DEFAULT_FILTERS],
    queryFn: () => fetchPosts(DEFAULT_LIMIT, DEFAULT_OFFSET, DEFAULT_FILTERS),
  });

  return (
    <ServerProvider state={dehydrate(queryServer)}>
      <Box className="flex min-h-screen flex-col items-center justify-between px-24">
        <TanstackExamplePosts />
      </Box>
    </ServerProvider>
  );
}

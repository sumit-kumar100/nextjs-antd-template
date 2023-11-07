import TanstackExamplePosts from "./tanstack-query-example/posts";
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

export default async function Home() {
  const queryServer = new ServerQuery();

  await queryServer.prefetchQuery({
    queryKey: ["posts", DEFAULT_FILTERS, DEFAULT_OFFSET, DEFAULT_LIMIT],
    queryFn: () => fetchPosts(DEFAULT_FILTERS, DEFAULT_OFFSET, DEFAULT_LIMIT),
  });

  return (
    <ServerProvider state={dehydrate(queryServer)}>
      <Box className="flex min-h-screen flex-col items-center justify-between px-24">
        <TanstackExamplePosts />
      </Box>
    </ServerProvider>
  );
}

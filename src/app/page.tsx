import NextImage from "@/components/next-image";
import TanstackExamplePosts from "./tanstack-query-example/posts";
import { DEFAULT_FILTERS, DEFAULT_OFFSET, DEFAULT_LIMIT } from "@/constants/globals";
import { ServerProvider } from "@/config/server-provider";
import { ServerQuery } from "@/config/server-query";
import { dehydrate } from "@tanstack/react-query";
import { fetchPosts } from "./tanstack-query-example/fetch-posts";

export default async function Home() {

  const queryServer = new ServerQuery();

  await queryServer.prefetchQuery({
    queryKey: ["posts", DEFAULT_FILTERS, DEFAULT_OFFSET, DEFAULT_LIMIT],
    queryFn: () => fetchPosts(DEFAULT_FILTERS, DEFAULT_OFFSET, DEFAULT_LIMIT)
  });

  return (
    <ServerProvider state={dehydrate(queryServer)}>
      <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10">
        <NextImage src="/next.svg" alt="Next.js Logo" style={{ width: 100 }} />
        <TanstackExamplePosts />
      </main>
    </ServerProvider>

  );
}

import NextImage from "@/components/next-image";
import TanstackExamplePosts from "./tanstack-query-example/posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10">
      <NextImage src="/next.svg" alt="Next.js Logo" style={{ width: 100 }} />
      <TanstackExamplePosts />
    </main>
  );
}

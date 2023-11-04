import Image from "next/image";
import TanstackExamplePosts from "./tanstack-query-example/posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={150}
        height={37}
        priority
      />
      <TanstackExamplePosts />
    </main>
  );
}

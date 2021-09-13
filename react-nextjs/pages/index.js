import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta keyword="My blo powered by Next.js" />
      </Head>
      <h1>Welcome to My Blog</h1>
    </div>
  );
}

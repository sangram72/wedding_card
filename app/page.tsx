
"use client";

import dynamic from "next/dynamic";

const WeddingBook = dynamic(
  () => import("./components/WeddingBook"),
  {
    ssr: false,
    loading: () => (
      <main className="loading-screen">
        <div>
          <span className="loading-ornament">✧</span>
          <p>Preparing your invitation book...</p>
        </div>
      </main>
    ),
  }
);

export default function Home() {
  return <WeddingBook />;
}

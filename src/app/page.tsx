import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white text-slate-900">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
        <div className="h-full w-full flex flex-col items-center gap-4">
          <Link href="/">
            <Image src="/rabbit.jpg" alt="rabbit" width={150} height={150} />
          </Link>

          <Link href="/">
            <h1 className="tracking-tight text-4xl sm:text-6xl font-bold">
              RabbitHole
            </h1>
          </Link>

          <p className="max-w-xl text-center text-lg text-slate-700">
            A beautifully designed search engine that searches rare results.
          </p>

          <div className="mx-auto mt-4 w-full max-w-2xl flex flex-col">
            <Suspense fallback={<div>Loading...</div>}>
              <SearchBar />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

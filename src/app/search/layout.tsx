import type { Metadata } from "next";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { Suspense } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RabbitHole",
  description: "The best browser",
};

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 pt-4 pb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
          <Link href="/" className="flex flex-row items-center sm:items-center">
            <Image
              src="/rabbit.jpg"
              alt="rabbit"
              width={80}
              height={80}
              className="mb-2"
            />
            <h1 className="text-2xl font-bold">RabbitHole</h1>
          </Link>
          <div className="w-full sm:w-96">
            <Suspense fallback={<div>Loading...</div>}>
              <SearchBar />
            </Suspense>
          </div>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}

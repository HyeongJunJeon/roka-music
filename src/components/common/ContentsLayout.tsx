"use client";
import { sideBarStore } from "@/stores";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen } = sideBarStore();

  return (
    <article
      className={`flex-1 max-w-[1478px] mx-auto pl-12 pr-20 mobile:px-4 overflow-auto ${
        isOpen ? "mobile:opacity-80" : ""
      }`}
    >
      {children}
    </article>
  );
}

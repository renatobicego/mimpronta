"use client";

import { NextUIProvider } from "@nextui-org/react";
import { PostsProvider } from "./postsContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <PostsProvider>{children}</PostsProvider>
    </NextUIProvider>
  );
}

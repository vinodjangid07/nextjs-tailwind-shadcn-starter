"use client";

import dynamic from "next/dynamic";

// Dynamically import the Raycast background with no SSR
const RaycastBackground = dynamic(
  () => import("@/components/raycast-animated-background").then((mod) => mod.Component),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
  }
);

export default RaycastBackground;

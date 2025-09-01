"use client";

import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import ClientRaycastBackground from "@/components/client-raycast-background";

export default function HeroSection() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <ClientRaycastBackground />
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/95 -z-10"></div>
      
      {/* Content with proper spacing for floating navbar */}
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-40 sm:pb-32 lg:px-8 lg:py-48 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-inset ring-white/10">
              <Star className="h-4 w-4 text-primary" fill="currentColor" />
              <span className="text-primary font-semibold">Latest Next.js 15</span>
              <span className="text-white/60">•</span>
              <span>Production Ready</span>
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build 
            <span className="bg-gradient-to-r from-primary via-pink-500 to-orange-500 bg-clip-text text-transparent"> Modern</span>
            <br />
            Web Apps
          </h1>
          <p className="mt-6 text-lg leading-7 text-white/80 max-w-2xl mx-auto">
            The most advanced starter template featuring Next.js 15, TypeScript, Tailwind CSS, and ShadCN/UI. 
            Crafted for developers who demand excellence in their web applications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 hover:shadow-primary/40"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://github.com/vinodjangid07/nextjs-tailwind-shadcn-starter"
              className="inline-flex items-center gap-2 text-sm font-medium leading-6 text-white/90 hover:text-white transition-all duration-200 px-6 py-3 rounded-lg hover:bg-white/5 border border-white/10 hover:border-white/20"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>Production Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>TypeScript First</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>Mobile Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

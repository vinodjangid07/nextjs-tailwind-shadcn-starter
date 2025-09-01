"use client";

import { Check, Code, Layers, Rocket, Shield, Sparkles } from "lucide-react";

const features = [
  {
    name: "Next.js 15 App Router",
    description: "Built with the latest Next.js featuring the new App Router, Server Components, and enhanced performance for lightning-fast applications.",
    icon: Rocket,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "TypeScript First",
    description: "Fully typed codebase with strict TypeScript configuration for better developer experience, code quality, and enterprise-grade reliability.",
    icon: Code,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Tailwind CSS & ShadCN/UI",
    description: "Beautiful, accessible components built with Tailwind CSS and ShadCN/UI for rapid development and consistent design systems.",
    icon: Layers,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Modern Tooling",
    description: "ESLint, Prettier, Turbopack, and advanced development tools configured for the best developer experience and productivity.",
    icon: Sparkles,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Production Ready",
    description: "Optimized build configuration, SEO-friendly, performance optimized, and ready for deployment on any modern platform.",
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Developer Experience",
    description: "Hot reload, path aliases, intelligent IntelliSense, and modern development workflows for maximum productivity and efficiency.",
    icon: Check,
    gradient: "from-indigo-500 to-blue-500",
  },
];

export default function FeaturesSection() {
  return (
    <div id="features" className="bg-black py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 px-3 py-1 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Everything Included</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built with 
            <span className="bg-gradient-to-r from-primary via-pink-500 to-orange-500 bg-clip-text text-transparent"> Modern</span> Web Standards
          </h2>
          <p className="mt-6 text-lg leading-7 text-white/80 max-w-3xl mx-auto">
            This premium starter template includes all the advanced tools and configurations you need to build 
            scalable, maintainable, and high-performance web applications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="group relative">
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-6 ring-1 ring-inset ring-white/10 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 hover:shadow-xl hover:shadow-primary/5">
                  <dt className="text-lg font-semibold leading-7 text-white mb-3">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div>{feature.name}</div>
                  </dt>
                  <dd className="text-sm leading-6 text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-xl bg-white/5 backdrop-blur-xl px-6 py-3 ring-1 ring-inset ring-white/10 border border-white/5">
            <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 ring-2 ring-white/20"></div>
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ring-2 ring-white/20"></div>
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 ring-2 ring-white/20"></div>
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 ring-2 ring-white/20"></div>
            </div>
            <span className="text-white/80 text-sm font-medium">Trusted by developers worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
}

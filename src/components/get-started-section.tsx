"use client";

import { Copy, Download, Terminal, CheckCircle, Rocket } from "lucide-react";
import { useState } from "react";

const installSteps = [
  {
    title: "Clone the Repository",
    description: "Get started by cloning the repository to your local development environment",
    command: "git clone https://github.com/vinodjangid07/nextjs-tailwind-shadcn-starter.git",
    icon: Download,
  },
  {
    title: "Install Dependencies",
    description: "Navigate to the project directory and install all required dependencies",
    command: "cd nextjs-tailwind-shadcn-starter && npm install",
    icon: Terminal,
  },
  {
    title: "Start Development",
    description: "Launch the development server and start building your luxury application",
    command: "npm run dev",
    icon: Rocket,
  },
];

function CodeBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden group-hover:border-primary/30 transition-all duration-300">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20"
            title="Copy to clipboard"
          >
            {copied ? (
              <>
                <CheckCircle className="h-3 w-3 text-green-400" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy
              </>
            )}
          </button>
        </div>
        <pre className="p-6 overflow-x-auto">
          <code className="text-sm text-white/90 font-mono">{command}</code>
        </pre>
      </div>
    </div>
  );
}

export default function GetStartedSection() {
  return (
    <div id="get-started" className="bg-gradient-to-b from-black via-gray-900/50 to-black py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,34,34,0.1)_0%,transparent_50%)]"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 px-3 py-1 text-sm font-medium text-primary mb-4">
            <Rocket className="h-4 w-4" />
            <span>Quick Start</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get up and running
            <span className="bg-gradient-to-r from-primary via-pink-500 to-orange-500 bg-clip-text text-transparent"> in minutes</span>
          </h2>
          <p className="mt-6 text-lg leading-7 text-white/80 max-w-3xl mx-auto">
            Follow these simple steps to get your new project started with all the modern tools and 
            configurations ready for development.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {installSteps.map((step, index) => (
              <div key={step.title} className="group relative">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300">
                      {index + 1}
                    </div>
                    {index < installSteps.length - 1 && (
                      <div className="absolute top-16 left-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent transform -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base text-white/70 mb-4 max-w-2xl">
                      {step.description}
                    </p>
                    <CodeBlock command={step.command} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-sm text-white/60">⚡ Ready in</div>
              <div className="text-lg font-bold text-primary">~2 minutes</div>
              <div className="text-sm text-white/60">with zero config</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

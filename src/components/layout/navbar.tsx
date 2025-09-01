"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Star } from "lucide-react";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Get Started", href: "#get-started" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
        <nav className="bg-black/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 shadow-2xl" aria-label="Global">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="NextJS Pro Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-md"
                />
                <span className="text-xl font-medium">
                  NextJS Pro
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
              <Link
                href="https://github.com/vinodjangid07/nextjs-tailwind-shadcn-starter"
                className="inline-flex items-center gap-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group h-10"
              >
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Star on GitHub</span>
              </Link>
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200 hover:shadow-primary/40 h-10"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/90 backdrop-blur-xl px-6 py-6 sm:max-w-sm border-l border-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="NextJS Pro Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-md"
                />
                <span className="text-xl font-medium">
                  NextJS Pro
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-lg p-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Link
                    href="https://github.com/vinodjangid07/nextjs-tailwind-shadcn-starter"
                    className="flex rounded-lg px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 items-center gap-3 bg-white/5 border border-white/10 hover:border-white/20"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Star className="h-5 w-5 text-yellow-400" />
                    Star on GitHub
                  </Link>
                  <Link
                    href="#get-started"
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-white bg-primary hover:bg-primary/90 text-center transition-all duration-200 shadow-lg shadow-primary/25"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

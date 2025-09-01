import { Github, Heart, Star, Coffee } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 relative">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:col-span-1">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="NextJS Pro Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-md"
                />
                <span className="text-xl font-medium">NextJS Pro</span>
              </div>
              <p className="mt-4 text-base text-white/80 max-w-md leading-relaxed">
                The most advanced starter template built with Next.js 15,
                TypeScript, Tailwind CSS, and ShadCN/UI. Crafted for developers
                who demand excellence.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/vinodjangid07/nextjs-tailwind-shadcn-starter"
                className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com/Vinod_Jangid07"
                className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8 max-w-md">
              <div>
                <h3 className="text-base font-semibold leading-6 text-white mb-4">
                  Navigation
                </h3>
                <ul role="list" className="space-y-3">
                  <li>
                    <Link
                      href="#features"
                      className="text-sm leading-6 text-white/70 hover:text-white transition-colors duration-300"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#get-started"
                      className="text-sm leading-6 text-white/70 hover:text-white transition-colors duration-300"
                    >
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold leading-6 text-white mb-4">
                  Community
                </h3>
                <div className="space-y-3">
                  <Link
                    href="https://github.com/vinodjangid07/nextjs-tailwind-shadcn-starter"
                    className="inline-flex items-center gap-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>Star on GitHub</span>
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Coffee className="h-4 w-4" />
                    <span>Built with passion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm leading-5 text-white/60">
              &copy; 2025 NextJS Pro Starter Template. Built with{" "}
              <Heart
                className="inline h-4 w-4 text-primary mx-1"
                fill="currentColor"
              />{" "}
              by{" "}
              <Link
                href="https://github.com/vinodjangid07"
                className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
              >
                vinodjangid07
              </Link>
            </p>
            <p className="text-sm leading-5 text-white/60">
              Open source and free to use. MIT Licensed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

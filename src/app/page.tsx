import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import GetStartedSection from "@/components/get-started-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <GetStartedSection />
      <Footer />
    </main>
  );
}

import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedServices } from "@/components/FeaturedServices";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { ProviderCTA } from "@/components/ProviderCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />

      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedServices />
        <HowItWorks />
        <ProviderCTA />
        <Stats />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

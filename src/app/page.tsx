import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedWebsites } from "@/components/FeaturedWebsites";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWebsites />
        <SystemsNominal />
      </main>
      <Footer />
    </>
  );
}

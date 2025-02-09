import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Resources } from "@/components/sections/Resources";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-aurora-darker text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Resources />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Token } from "@/components/Token";
import { Roadmap } from "@/components/Roadmap";
import { Social } from "@/components/Social";
import { Newsletter } from "@/components/Newsletter";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Navigation />
      <Hero />
      <About />
      <Token />
      <Roadmap />
      <Social />
      <Newsletter />
    </div>
  );
};

export default Index;
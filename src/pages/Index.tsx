import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Token } from "@/components/Token";
import { Roadmap } from "@/components/Roadmap";
import { Social } from "@/components/Social";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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
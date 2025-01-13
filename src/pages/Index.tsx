import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Token } from "@/components/Token";
import { Roadmap } from "@/components/Roadmap";
import { Social } from "@/components/Social";
import { Newsletter } from "@/components/Newsletter";
import { Navigation } from "@/components/Navigation";
import { LiveStream } from "@/components/LiveStream";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Navigation />
      <Hero />
      <LiveStream />
      <About />
      <Token />
      <Roadmap />
      <Social />
      <Newsletter />
    </div>
  );
};

export default Index;
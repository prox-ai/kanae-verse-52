import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-kanae-primary/20 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-kanae-primary rounded-full text-kanae-text">
            Welcome to Kanae's World
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-kanae-text">
            Experience the Future of Digital Entertainment
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Join Kanae on a journey through technology, music, and innovation
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#token"
              className="px-8 py-3 bg-kanae-secondary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Explore KNE Token
            </a>
            <a
              href="#about"
              className="px-8 py-3 border border-kanae-secondary text-kanae-secondary rounded-lg hover:bg-kanae-secondary hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-kanae-primary/20 rounded-full filter blur-3xl animate-float"></div>
            <img
              src="/lovable-uploads/094fc8fd-0b49-4207-b524-8cc1812a087b.png"
              alt="Kanae"
              className="relative z-10 w-full h-auto rounded-3xl shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
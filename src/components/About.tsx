import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-kanae-primary rounded-full text-kanae-text">
            About Kanae
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kanae-text">
            Virtual Personality from Tokyo
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            A tech-savvy virtual personality who combines creativity with innovation to inspire a global audience. Passionate about music, technology, and creating immersive digital experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-kanae-accent rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Technology</h3>
              <p className="text-gray-600">Exploring VR, AI, and immersive digital experiences</p>
            </div>
            <div className="p-6 bg-kanae-accent rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Music</h3>
              <p className="text-gray-600">Creating innovative sounds inspired by modern artists</p>
            </div>
            <div className="p-6 bg-kanae-accent rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building a vibrant global community of creators</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
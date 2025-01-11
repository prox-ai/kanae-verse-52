import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates about Kanae and KNE token.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-kanae-primary rounded-full text-kanae-text">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kanae-text">
            Never Miss an Update
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to receive the latest news about Kanae and KNE token
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-kanae-secondary"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-kanae-secondary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
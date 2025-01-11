import { motion } from "framer-motion";
import { Youtube, MessageCircle, Twitter } from "lucide-react";

export const Social = () => {
  const socials = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@KanaeVtuber",
      color: "hover:text-red-600",
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      url: "https://t.me/+15djMBwBVeM2MTFl",
      color: "hover:text-blue-500",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/kanedotlive",
      color: "hover:text-gray-800",
    },
  ];

  return (
    <section className="py-20 bg-kanae-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-kanae-primary rounded-full text-kanae-text">
            Connect with Kanae
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-kanae-text">
            Join Our Community
          </h2>

          <div className="flex justify-center gap-8">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-4 bg-white rounded-xl shadow-sm transition-transform hover:-translate-y-1 ${social.color}`}
              >
                <social.icon className="w-8 h-8 transition-colors" />
                <span className="block mt-2 text-sm font-medium text-gray-600 group-hover:text-gray-900">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
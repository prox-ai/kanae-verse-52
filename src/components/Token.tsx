import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export const Token = () => {
  const tokenDetails = [
    { 
      label: "Name & Symbol",
      value: "Kanae ($KNE)",
      description: "The native token powering Kanae's digital entertainment ecosystem"
    },
    { 
      label: "Total Supply",
      value: "1B KNE",
      description: "Fixed supply to ensure long-term value preservation"
    },
    { 
      label: "Launch Platform",
      value: "Groupump.fun",
      link: "https://groupump.fun",
      description: "Join our fair launch on Groupump.fun"
    },
    { 
      label: "Contract Address",
      value: "Coming Soon",
      description: "Solana blockchain contract address will be revealed at launch"
    },
  ];

  return (
    <section id="token" className="py-20 bg-gradient-to-br from-kanae-primary to-kanae-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-kanae-text"
            >
              Token Information
            </motion.h2>
          </div>

          <div className="bg-white/90 backdrop-blur-lg rounded-xl p-8">
            <ul className="space-y-6">
              {tokenDetails.map((detail, index) => (
                <motion.li
                  key={detail.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-kanae-secondary/20 last:border-b-0 pb-6 last:pb-0"
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-kanae-text/60">{detail.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold text-kanae-text">{detail.value}</span>
                      {detail.link && (
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-kanae-secondary hover:text-kanae-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <span className="text-sm text-kanae-text/70 mt-1">{detail.description}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
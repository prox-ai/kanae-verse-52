import { motion } from "framer-motion";
import { Coins, ExternalLink, FileCode } from "lucide-react";

export const Token = () => {
  const tokenDetails = [
    { 
      label: "Name & Symbol", 
      value: "Kanae ($KNE)", 
      icon: <Coins className="w-6 h-6" />,
      description: "The native token powering Kanae's digital entertainment ecosystem"
    },
    { 
      label: "Total Supply", 
      value: "1B KNE", 
      icon: <Coins className="w-6 h-6" />,
      description: "Fixed supply to ensure long-term value preservation"
    },
    { 
      label: "Launch Platform", 
      value: "Groupump.fun", 
      icon: <ExternalLink className="w-6 h-6" />,
      link: "https://groupump.fun",
      description: "Join our fair launch on Groupump.fun"
    },
    { 
      label: "Contract Address", 
      value: "Coming Soon", 
      icon: <FileCode className="w-6 h-6" />,
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 mb-4 text-sm font-medium bg-gradient-to-r from-kanae-primary to-kanae-secondary rounded-full text-kanae-text"
            >
              Token Details
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-kanae-text"
            >
              KNE Token Information
            </motion.h2>
          </div>

          <div className="grid gap-6">
            {tokenDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/90 backdrop-blur-lg rounded-xl border border-kanae-secondary/20 hover:border-kanae-secondary/40 transition-all duration-300 shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-kanae-primary to-kanae-secondary rounded-lg text-kanae-text">
                      {detail.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-kanae-text/80 mb-1">{detail.label}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-semibold text-kanae-text">{detail.value}</p>
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
                    </div>
                  </div>
                  <p className="text-sm text-kanae-text/70">{detail.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
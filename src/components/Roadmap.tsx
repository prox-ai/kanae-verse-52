import { motion } from "framer-motion";

export const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q1 + Q2",
      items: [
        "Launch Telegram Chatbot with KNE token integration",
        "X Agent Account activation",
        "Vtuber Persona debut with live-streaming",
      ],
    },
    {
      quarter: "Q3",
      items: [
        "Release first music single",
        "Launch digital photo collection as NFTs",
      ],
    },
    {
      quarter: "Q4",
      items: [
        "Release full music album",
        "Launch interactive game with KNE integration",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-kanae-primary/10 to-white" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 mb-4 text-sm font-medium bg-kanae-primary rounded-full text-kanae-text">
            Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-kanae-text bg-clip-text text-transparent bg-gradient-to-r from-kanae-secondary to-kanae-primary">
            Our Journey Ahead
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {roadmapItems.map((phase, index) => (
            <motion.div
              key={phase.quarter}
              variants={itemVariants}
              className="relative flex items-center mb-16 last:mb-0"
            >
              {/* Timeline line */}
              {index !== roadmapItems.length - 1 && (
                <div className="absolute left-[2.5rem] top-[4rem] bottom-[-4rem] w-0.5 bg-gradient-to-b from-kanae-secondary/50 to-kanae-primary/50" />
              )}

              <div className="flex-1">
                <div className="relative pl-20">
                  {/* Quarter circle */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-kanae-secondary to-kanae-primary flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {phase.quarter}
                    </span>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-8 rounded-2xl shadow-xl border border-kanae-primary/20 hover:border-kanae-secondary/40 transition-colors"
                  >
                    <ul className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.2 }}
                          viewport={{ once: true }}
                          className="flex items-start group"
                        >
                          <span className="w-2 h-2 mt-2.5 mr-3 bg-kanae-secondary rounded-full group-hover:scale-150 transition-transform" />
                          <span className="text-gray-600 group-hover:text-kanae-text transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
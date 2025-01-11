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

  return (
    <section className="py-20 relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapItems.map((phase, index) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Quarter Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-kanae-secondary to-kanae-primary text-white px-6 py-2 rounded-full shadow-lg">
                  {phase.quarter}
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl p-8 pt-12 border border-kanae-primary/20 hover:border-kanae-secondary/40 transition-all duration-300"
              >
                <ul className="space-y-4">
                  {phase.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 group"
                    >
                      <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-kanae-secondary rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-gray-600 group-hover:text-kanae-text transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
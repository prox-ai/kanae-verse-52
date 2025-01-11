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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-kanae-primary rounded-full text-kanae-text">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kanae-text">
            Our Journey Ahead
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((phase, index) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              <div className="flex-1">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-kanae-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-kanae-secondary">
                    {phase.quarter}
                  </h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-2 bg-kanae-secondary rounded-full"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
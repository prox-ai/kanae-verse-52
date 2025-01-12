import { motion } from "framer-motion";
import { Milestone, Check } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2024",
      items: [
        { text: "Kanae Launch", isLaunched: true },
        { text: "Launch Telegram Chatbot with KNE token integration", isLaunched: false },
        { text: "X Agent Account activation", isLaunched: false },
      ],
    },
    {
      quarter: "Q2 2024",
      items: [
        { text: "Vtuber Persona debut with live-streaming", isLaunched: false },
      ],
    },
    {
      quarter: "Q3 2024",
      items: [
        { text: "Release first music single", isLaunched: false },
        { text: "Launch digital photo collection as NFTs", isLaunched: false },
      ],
    },
    {
      quarter: "Q4 2024",
      items: [
        { text: "Release full music album", isLaunched: false },
        { text: "Launch interactive game with KNE integration", isLaunched: false },
      ],
    },
    {
      quarter: "2025",
      items: [
        { text: "Global expansion and partnerships", isLaunched: false },
        { text: "Advanced AI features integration", isLaunched: false },
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
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

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-kanae-primary via-kanae-secondary to-kanae-primary/50" />
          
          <div className="space-y-16">
            {roadmapItems.map((phase, index) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-white rounded-full border-4 border-kanae-secondary flex items-center justify-center">
                      <Milestone className="w-6 h-6 text-kanae-secondary" />
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-xl p-8 border border-kanae-primary/20 hover:border-kanae-secondary/40 transition-all duration-300"
                  >
                    <div className="text-xl font-bold text-kanae-secondary mb-4">
                      {phase.quarter}
                    </div>
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
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              checked={item.isLaunched}
                              className="data-[state=checked]:bg-kanae-secondary data-[state=checked]:border-kanae-secondary"
                              disabled
                            />
                            <span className={`text-gray-600 group-hover:text-kanae-text transition-colors ${
                              item.isLaunched ? 'line-through text-kanae-secondary' : ''
                            }`}>
                              {item.text}
                            </span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
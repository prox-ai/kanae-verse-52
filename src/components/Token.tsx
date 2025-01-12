import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Coins, Wallet, Globe2, Rocket, ExternalLink } from "lucide-react";

export const Token = () => {
  const tokenDetails = [
    { 
      label: "Token Name", 
      value: "Kanae ($KNE)", 
      icon: <Coins className="w-6 h-6" />,
      description: "The native token powering Kanae's digital entertainment ecosystem"
    },
    { 
      label: "Blockchain", 
      value: "Solana (SOL)", 
      icon: <Wallet className="w-6 h-6" />,
      description: "Built on Solana for fast, secure, and low-cost transactions"
    },
    { 
      label: "Total Supply", 
      value: "10 billion KNE", 
      icon: <Globe2 className="w-6 h-6" />,
      description: "Fixed supply to ensure long-term value preservation"
    },
    { 
      label: "Launch Platform", 
      value: "Groupump.fun", 
      icon: <Rocket className="w-6 h-6" />,
      link: "https://groupump.fun",
      description: "Join our fair launch on Groupump.fun"
    },
  ];

  const allocation = [
    { name: "Community & Ecosystem", value: 60, color: "#8B5CF6" },
    { name: "Marketing & Partnerships", value: 20, color: "#D6BCFA" },
    { name: "Liquidity & Reserves", value: 10, color: "#F1F0FB" },
    { name: "Team", value: 5, color: "#1A1F2C" },
    { name: "Advisors", value: 5, color: "#6D28D9" },
  ];

  return (
    <section id="token" className="py-20 bg-gradient-to-br from-[#1A1F2C] to-[#2D3748]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 mb-4 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white"
            >
              Token Details
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
            >
              KNE Token Information
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {tokenDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                      {detail.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-purple-200 mb-1">{detail.label}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-semibold text-white">{detail.value}</p>
                        {detail.link && (
                          <a 
                            href={detail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{detail.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Token Allocation</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocation}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name} (${value}%)`}
                  >
                    {allocation.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        className="hover:opacity-80 transition-opacity duration-300"
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(26, 31, 44, 0.9)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Legend 
                    formatter={(value) => <span className="text-white">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
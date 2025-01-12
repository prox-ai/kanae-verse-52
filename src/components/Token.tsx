import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export const Token = () => {
  const tokenDetails = [
    { label: "Token Name", value: "Kanae (KNE)" },
    { label: "Blockchain", value: "Solana (SOL)" },
    { label: "Total Supply", value: "10 billion KNE" },
    { label: "Launch Platform", value: "Groupump.fun" },
  ];

  const allocation = [
    { name: "Community & Ecosystem", value: 60, color: "#FFD6E0" },
    { name: "Marketing & Partnerships", value: 20, color: "#FF8FAB" },
    { name: "Liquidity & Reserves", value: 10, color: "#FF69B4" },
    { name: "Team", value: 5, color: "#FF1493" },
    { name: "Advisors", value: 5, color: "#DB7093" },
  ];

  return (
    <section id="token" className="py-20 bg-kanae-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-kanae-primary rounded-full text-kanae-text">
              Token Details
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kanae-text">
              KNE Token Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {tokenDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow-sm"
              >
                <h3 className="text-sm font-medium text-gray-500 mb-2">{detail.label}</h3>
                <p className="text-xl font-semibold text-kanae-text">{detail.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Token Allocation</h3>
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
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
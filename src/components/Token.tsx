import { motion } from "framer-motion";

export const Token = () => {
  const tokenDetails = [
    { label: "Token Name", value: "Kanae (KNE)" },
    { label: "Blockchain", value: "Solana (SOL)" },
    { label: "Total Supply", value: "10 billion KNE" },
    { label: "Launch Platform", value: "Groupump.fun" },
  ];

  const allocation = [
    { category: "Community & Ecosystem", percentage: 60 },
    { category: "Marketing & Partnerships", percentage: 20 },
    { category: "Liquidity & Reserves", percentage: 10 },
    { category: "Team", percentage: 5 },
    { category: "Advisors", percentage: 5 },
  ];

  return (
    <section id="token" className="py-20 bg-kanae-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
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

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Token Allocation</h3>
            <div className="space-y-4">
              {allocation.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">{item.category}</span>
                    <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-kanae-secondary rounded-full h-2"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
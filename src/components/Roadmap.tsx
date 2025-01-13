import React from "react";
import { Check } from "lucide-react";

export const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      items: [
        { text: "Global expansion and partnerships", isLaunched: false },
        { text: "Advanced AI features integration", isLaunched: false },
        { text: "Livestream Session #1", isLaunched: true, link: "https://www.youtube.com/live/zgXS0PeY_XA" },
      ],
    },
    {
      quarter: "Q2 2025",
      items: [
        { text: "Metaverse integration", isLaunched: false },
        { text: "Cross-chain expansion", isLaunched: false },
      ],
    },
    {
      quarter: "Q3 2025",
      items: [
        { text: "Mobile app launch", isLaunched: false },
        { text: "Community governance implementation", isLaunched: false },
      ],
    },
    {
      quarter: "Q4 2025",
      items: [
        { text: "Global marketing campaign", isLaunched: false },
        { text: "Strategic partnerships expansion", isLaunched: false },
      ],
    },
    {
      quarter: "2026",
      items: [
        { text: "Web3 gaming platform", isLaunched: false },
        { text: "Ecosystem expansion", isLaunched: false },
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Roadmap</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roadmapItems.map((phase, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-4">{phase.quarter}</h3>
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-center space-x-2 ${
                      item.isLaunched ? "text-gray-500 line-through" : ""
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`w-5 h-5 rounded-full border ${
                          item.isLaunched
                            ? "bg-green-500 border-green-500"
                            : "border-gray-300"
                        } flex items-center justify-center`}
                      >
                        {item.isLaunched && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                    </div>
                    <span className="flex-1">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 underline"
                        >
                          {item.text}
                        </a>
                      ) : (
                        item.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
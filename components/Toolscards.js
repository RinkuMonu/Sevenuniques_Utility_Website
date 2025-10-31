import React from "react";


const ToolscardsContent  = ({ cardsData }) => {
  return (
    <section className="max-w-8xl px-6 py-10 space-y-6">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-center md:items-stretch hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-full p-6 md:p-8">
            <h2 className="text-2xl font-semibold bg-[#1f718a] p-3 rounded-lg text-gray-200 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ToolscardsContent;

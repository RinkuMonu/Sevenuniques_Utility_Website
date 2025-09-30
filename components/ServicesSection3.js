import React from 'react';

// Bullet + text
const FeatureListItem = ({ children }) => (
  <li className="relative flex items-start">
    {/* Blue square bullet */}
    <span className="relative z-10 flex-shrink-0 w-2.5 h-2.5 bg-sky-500 mt-2 mr-4 rounded-sm" />
    <p className="text-[#5D5D5D]">{children}</p>
  </li>
);

// Main section
const ServicesSection3 = ({ data }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* Left Column */}
        <div className="">
          <p className="text-base font-semibold text-[#0C3D4C] tracking-wider">
            {data.subheading}
          </p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold text-[#0C3D4C]"
          >
            {data.heading}
          </h2>
          <p className="mt-6 text-[#5D5D5D] leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Right Column */}
        <div className=" mt-6 md:mt-0 relative">
          {/* Full vertical line */}
          <span className="absolute left-[4.5px] top-0 bottom-0 w-0.5 bg-sky-100" />

          <ul className="space-y-5 relative">
            {data.features.map((feature, index) => (
              <FeatureListItem key={index}>{feature}</FeatureListItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection3;

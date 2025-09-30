import Image from 'next/image';
import React from 'react';

const FeatureListItem = ({ children }) => (
  <li className="relative flex items-start ">
    <span className="relative z-10 flex-shrink-0 w-2.5 h-2.5 bg-sky-500 mt-2 mr-4 rounded-sm" />
    <p className="text-[#5D5D5D]">{children}</p>
  </li>
);

const EligibilityAeps = ({ data }) => {
  if (!data) return null;

  return (
    <section className=" py-12 md:py-20 max-w-7xl mx-auto px-4 lg:px-0 ">
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0C3D4C]">
        {data.heading}
      </h2>
      <p className="mt-10 text-2xl font-semibold text-[#5D5D5D]">
        Retailers
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 items-center">
        <div className="mt-6 md:mt-0 relative">
          <span className="absolute md:left-[4.5px] top-0 bottom-0 w-0.5 bg-sky-100" />
          <ul className="space-y-16 relative">
            {data.features.map((feature, index) => (
              <FeatureListItem key={index}>{feature}</FeatureListItem>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/aeps/e1.png"
            className="rounded-lg px-5 md:px-0"
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div className="mt-6 md:mt-0 relative">
          <span className="absolute left-[4.5px] top-0 bottom-0 w-0.5 bg-sky-100" />
          <ul className="space-y-16 relative">
            {data.features.map((feature, index) => (
              <FeatureListItem key={index}>{feature}</FeatureListItem>
            ))}
          </ul>
        </div>
      </div>
       <p className="mt-20 text-2xl font-semibold text-[#5D5D5D]">
        Distributor
      </p>
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 items-center pt-5">
        <div className="mt-6 md:mt-0 relative">
          <span className="absolute left-[4.5px] top-0 bottom-0 w-0.5 bg-sky-100" />
          <ul className="space-y-16 relative">
            {data.features.map((feature, index) => (
              <FeatureListItem key={index}>{feature}</FeatureListItem>
            ))}
          </ul>
        </div>
          <div className="mt-6 md:mt-0 relative">
          <span className="absolute left-[4.5px] top-0 bottom-0 w-0.5 bg-sky-100" />
          <ul className="space-y-16 relative">
            {data.features.map((feature, index) => (
              <FeatureListItem key={index}>{feature}</FeatureListItem>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/aeps/e2.png"
            className="rounded-lg  px-5 md:px-0"
            width={400}
            height={400}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default EligibilityAeps;

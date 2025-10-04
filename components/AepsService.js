import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Cash Withdraw",
    description:
      "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odioducimus Odio",
    icon: "/icons/a1.png",
  },
  {
    title: "Balance Enquiry",
    description:
      "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odioducimus Odio",
    icon: "/icons/a2.png",
  },
  {
    title: "Mini Statement",
    description:
      "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odioducimus Odio",
    icon: "/icons/a3.png",
  },
  {
    title: "Find Transfer",
    description:
      "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odioducimus Odio",
    icon: "/icons/a4.png",
  },
  {
    title: "Aadhaar Pay",
    description:
      "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odioducimus Odio",
    icon: "/icons/a5.png",
  }
];



const AepsService = () => {
  return (
    <section className="bg-[#E6F4FA] py-16">
 
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold text-[#0C3D4C] tracking-wide">Services</p>
        <h2 className="mt-2 text-2xl md:text-4xl font-bold text-[#0C3D4C] leading-snug">
          Our Services make payments and banking <br />
          faster, safer, and easier
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
       
         <div key={index} className="relative">

  <div className="shape p-8 text-left">
    <h3 className="text-2xl font-semibold text-[#0C3D4C]">
      {service.title}
    </h3>
    <hr className="my-4 h-px text-cyan-100" />
    <p className="text-gray-500 leading-relaxed">{service.description}</p>
  </div>

  <div className="absolute w-16 h-16 top-0 -right-1 bg-white rounded-full p-3 z-50 shadow-md">
    <Image
      width={40}
      height={40}
      src={service.icon}
      alt={service.title}
      className="w-10 h-10 object-contain"
    />
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default AepsService;
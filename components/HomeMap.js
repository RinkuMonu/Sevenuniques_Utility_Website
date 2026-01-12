import React from "react";
import Image from "next/image";


const LocationPin = ({ top, left, name }) => (
  <div className="absolute flex flex-col items-center group z-10"
    style={{ top, left }} >
    <Image
      src="/image/sevenunique-logo1.png"
      alt={name}
      width={26}
      height={26}
      className="drop-shadow-lg animate-pulse"
    />
    <span className="mt-1 px-2 py-0.5 text-[11px] rounded-md bg-black/70 text-white opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
      {name}
    </span>
  </div>
);
const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-yellow-400 shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-6.05a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);
const StatCard = ({ value, label }) => (
  <div className="flex items-start gap-3 p-5  bg-white/10   transition">
    <MapPinIcon />
    <div>
      <p className="text-xl font-bold text-gray-300">{value}</p>
      <p className="text-sm text-gray-300 leading-snug">{label}</p>
    </div>
  </div>
);
const HomeMap = () => {
  const stats = [
    { value: "5000+", label: "Distributors across India" },
    { value: "10 Lakhs+", label: "Happy clients using our financial services" },
    { value: "1.2 Lakhs+", label: "Active retailers nationwide" },
  ];
  const locations = [
    { name: "Itawah", top: "24%", left: "34%" },
    { name: "Lucknow", top: "29%", left: "36%" },
    { name: "Ahmedabad", top: "44%", left: "22%" },
    { name: "Vadodara", top: "45%", left: "19%" },
    { name: "Valsad", top: "49%", left: "20%" },
    { name: "Bihar", top: "33%", left: "43%" },
    { name: "Tamil Nadu", top: "86%", left: "35%" },
    { name: "Bhilwara", top: "41%", left: "28%" },
    { name: "Jaipur", top: "34%", left: "30%" },
    { name: "Madhya Pradesh", top: "44%", left: "30%" },
    { name: "Madhya Pradesh", top: "50%", left: "27%" },
    { name: "Madhya Pradesh", top: "46%", left: "35%" },
  ];
  return (
    <section className="relative w-full py-6 overflow-hidden">
      <Image
        src="/home/map.png"
        alt="Network Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:pl-10 grid md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Our Network Across India 🇮🇳
          </h2>
          <p className="text-gray-200 mb-10 max-w-lg">
            We are building one of India’s fastest growing retailer and
            distributor networks delivering secure digital financial services.
          </p>
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
        </div>
        <div className="relative w-full h-[350px] md:h-[480px]">
          <Image
            src="/image/map-india.png"
            alt="India Network Map"
            fill
            className="object-contain"
            priority
          />
          {locations.map((loc, i) => (
            <LocationPin key={i} {...loc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMap;

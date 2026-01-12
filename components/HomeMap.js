import React from "react";
import Image from "next/image";


const LocationPin = ({ top, left, name }) => (
  <div className="absolute flex flex-col items-center group z-10"
    style={{ top, left }} >
    <Image
      src="/image/sevenunique-logo1.png"
      alt={name}
      width={18}
      height={18}
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
      <p className="text-2xl font-bold text-gray-300">{value}</p>
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
    //up
    { name: "Itawah", top: "28%", left: "34%" },
    { name: "Lucknow", top: "32%", left: "38%" },
   
    { name: "Bihar", top: "38%", left: "53%" },

    //rajasthan
    { name: "Bhilwara", top: "38%", left: "24%" },
    { name: "Jaipur", top: "32%", left: "28%" },

    //gujrat
    { name: "Ahmedabad", top: "44%", left: "16%" },
    { name: "Vadodara", top: "47%", left: "20%" },
    { name: "Valsad", top: "51%", left: "22%" },
    { name: "Anand", top: "48%", left: "18%" },
    { name: "Vapi", top: "48%", left: "14%" },
    { name: "Dhoraji", top: "43%", left: "14%" },

    // MP
    { name: "Ratlam", top: "44%", left: "30%" },
    { name: "Satna", top: "50%", left: "27%" },
    { name: "Morena", top: "40%", left: "35%" },
    { name: "Narsinghgarh", top: "46%", left: "35%" },
    { name: "Sanawad", top: "42%", left: "40%" },
    { name: "Pipariya", top: "50%", left: "38%" },
    { name: "Sarni", top: "51%", left: "35%" },

    //Tamil nadu
     { name: "Madurai", top: "86%", left: "33%" },
    { name: "Vellore", top: "84%", left: "36%" },
    { name: "Palani", top: "87%", left: "29%" },
    { name: "Sivaganga", top: "89%", left: "33%" },
    { name: "Sirkali", top: "94%", left: "31%" },
    { name: "Sattur", top: "90%", left: "32%" },

    //jharkhand
     { name: "Narsinghgarh", top: "46%", left: "48%" },
    { name: "Ranchi", top: "43%", left: "49%" },
    { name: "Ramgarh", top: "48%", left: "47%" },
    { name: "Dumka", top: "50%", left: "45%" },

    //chattisgarh
    { name: "Bilaspur", top: "56%", left: "42%" },
    { name: "Chirmiri", top: "53%", left: "44%" },
    { name: "Mungeli", top: "51%", left: "41%" },
    { name: "Sakti", top: "61%", left: "42%" },

    //west bengal
    { name: "Santipur", top: "46%", left: "56%" },
    { name: "Habra", top: "46%", left: "60%" },
    { name: "Jhargram", top: "43%", left: "58%" },
    { name: "Memari", top: "50%", left: "57%" },
    
   //telangana
    { name: "Jagtial", top: "76%", left: "35%" },
    { name: "Palwancha", top: "75%", left: "30%" },
    { name: "Sircilla", top: "67%", left: "35%" },
    { name: "Memari", top: "72%", left: "35%" },

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
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4 text-center">
            Our Network Across India In
          </h2>
          <p className="text-gray-200 mb-10 max-w-lg text-center md:ml-12">
            We are building one of India’s fastest growing retailer and
            distributor networks delivering secure digital financial services.
          </p>
          <div className="w-[60vh] max-w-4xl bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden md:ml-27">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 text-start">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
        </div>
        <div className="relative w-full h-[350px] md:h-[480px]">
          <Image
            src="/image/india-mapp.png"
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

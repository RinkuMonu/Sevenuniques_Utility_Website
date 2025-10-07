import React from 'react';

// --- Data for the partner cards ---
const partners = [
  {
    name: 'Distributor',
    imageUrl: '/home/homeP1.png',
  },
  {
    name: 'Retailer',
    imageUrl: '/home/homeP2.png',
  },
  {
    name: 'User',
    imageUrl: '/home/homeP3.png',
  },
  {
    name: 'WhiteLabel',
    imageUrl: '/home/homeP4.png',
  },
];

// --- Partner Card Component ---
const PartnerCard = ({ name, imageUrl , index }) => (
  <div
  className={`relative overflow-hidden rounded-xl shadow-lg group h-84 ${
    index % 2 == 0 ? "bg-[#018EDE] text-white" : "bg-white text-[#018EDE]"
  }`}
>

   <div>
     <img
      src={imageUrl}
      alt={name}
      className="w-full h-full object-cover mt-3"
    />
    <div className="absolute top-0 left-0 p-4">
      <h3 className=" text-2xl pt-5 font-bold">{name}</h3>
    </div>
   </div>
  </div>
);

// --- Main Partners Section Component ---
const HomePartners = () => {
  return (
    <div className=" bg-[#E6F6FF] ">
      <div className=" mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#24576C] tracking-widest">PARTNERS WITH US</p>
          <h3 className="mt-2 text-3xl md:text-5xl font-bold text-[#0C3D4C]">
            Open up Unlimited Growth
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            We, at Sevenunique, realize that successful business development depends on effective partnerships. By partnering with us, you can tap into numerous opportunities that can fuel the development of the digital financial sector exponentially. 
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto ">
          {partners.map((partner , index) => (
            <PartnerCard key={index} {...partner} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePartners;


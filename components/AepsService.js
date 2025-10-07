import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Cash Withdraw",
    description:
      "Get instant cash in your Aadhaar-linked bank account with simple verification of your fingerprint. You do not need debit cards or PINs, and you have secure and convenient banking at your fingertips.",
    icon: "/icons/a1.png",
  },
  {
    title: "Balance Enquiry",
    description:
      "Aadhaar authentication will allow you to check your bank account balance instantly. You can also receive real-time updates on available balance without having to visit the bank or use internet banking.",
    icon: "/icons/a2.png",
  },
  {
    title: "Mini Statement",
    description:
      "Get an immediate mini statement of your 10 most recent transactions. With AePS service, it is easy to keep track of your account activity as well as keep track of your financial transactions.",
    icon: "/icons/a3.png",
  },
  {
    title: "Fund Transfer",
    description:
      "Send money safely to any bank account that is linked to Aadhaar through biometric authentication. The service is instant, safe, and reliable, and it allows transferring money between the accounts of various banks.",
    icon: "/icons/a4.png",
  },
  {
    title: "Aadhaar Pay",
    description:
      "Pay your merchants directly out of your bank account linked to your Aadhaar through fingerprint identification. Safe and easy online payments do not require cash or cards.",
    icon: "/icons/a5.png",
  },
    {
    title: "Bill Payments",
    description:
      "Pay your utility bills, cell phone charges, DTH, and other services with AEPS. One and the same payment system that handles all your payment requirements and is absolutely secure and real-time.",
    icon: "/icons/a2.png",
  }

];



const AepsService = () => {
  return (
    <section className="bg-[#E6F4FA] py-16">

      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold text-[#0C3D4C] tracking-wide">Services</p>
        <h2 className="mt-2 text-2xl md:text-4xl font-bold text-[#0C3D4C] leading-snug">
          We make payments and banking faster, safer, and easier through our services.
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
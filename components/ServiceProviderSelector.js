"use client";

import Image from "next/image";
import { useState } from "react";

const providerGroups = {
  mobile: [
    { name: "Airtel", image: "/recharge/r3.png" },
    { name: "BSNL", image: "/recharge/r6.png" },
    { name: "Jio", image: "/recharge/r4.png" },
    { name: "Vi", image: "/recharge/r2.png" },
  ],
  fastag: [
    { name: "Axis Bank", image: "/bank/axisbank.png" },
    { name: "ICICI Bank", image: "/bank/icici.png" },
    { name: "IDFC FIRST", image: "/bank/idfc-first.png" },
    { name: "Kotak Bank", image: "/bank/kotak.png" },
    { name: "YES BANK", image: "/bank/yes-bank.png" },
  ],
  dth: [
    { name: "Tata Play", image: "/service-providers/tata-play.svg" },
    { name: "Airtel Digital TV", image: "/allservices/airtel.webp" },
    { name: "Dish TV", image: "/allservices/dishtv.webp" },
    { name: "Sun Direct", image: "/allservices/sundirect.png" },
    { name: "d2h", image: "/allservices/d2h-logo.jpg" },
  ],
  electricity: [
    { name: "Jaipur Vidyut Vitran Nigam (JVVNL)", image: "/service-providers/jvvnl.png" },
    { name: "Ajmer Vidyut Vitran Nigam (AVVNL)", image: "/service-providers/avvnl.jpg" },
    { name: "Jodhpur Vidyut Vitran Nigam (JDVVNL)", image: "/service-providers/jdvvnl.jpg" },
    { name: "BSES Rajdhani Power", image: "/service-providers/bses-rajdhani.png" },
    { name: "Tata Power", image: "/service-providers/tata-power.png" },
  ],
  "loan-emi": [
    { name: "Bajaj Finserv", image: "/bank/bajaj-finserv.png" },
    { name: "Tata Capital", image: "/bank/tata-capital.png" },
    "Bank Loan",
    "NBFC Loan",
  ],
  insurance: [
    { name: "LIC", image: "/service-providers/lic.png" },
    { name: "New India Assurance", image: "/service-providers/new-india-assurance.svg" },
    { name: "Axis Max Life Insurance", image: "/service-providers/axis-max-life.svg" },
  ],
  "piped-gas": [
    { name: "Indraprastha Gas", image: "/allservices/igl-logo.png" },
    { name: "Mahanagar Gas", image: "/allservices/mahanagar-gas.jpeg" },
    { name: "Gujarat Gas", image: "/allservices/gujarat-gas.webp" },
    { name: "Adani Total Gas", image: "/allservices/Adani  Gas.avif" },
  ],
  cylinder: [
    { name: "Indane Gas", image: "/allservices/Indane.jpg" },
    { name: "Bharatgas", image: "/allservices/bharat-gas.png" },
    { name: "HP Gas", image: "/allservices/hp-gas.jpg" },
  ],
  water: [
    { name: "PHED Rajasthan", image: "/service-providers/phed-rajasthan.png" },
    { name: "Delhi Jal Board", image: "/service-providers/delhi-jal-board.png" },
    { name: "Hyderabad Water Board", image: "/service-providers/hmwssb.jpg" },
  ],
  broadband: [
    { name: "Airtel", image: "/allservices/airtel.webp" },
    { name: "JioFiber", image: "/allservices/jio-fiber.webp" },
    { name: "BSNL", image: "/recharge/r6.png" },
    { name: "ACT Fibernet", image: "/allservices/ACT-Fibernet.jpg" },
    "Local Broadband",
  ],
  challan: [
    { name: "Parivahan eChallan", image: "/service-providers/challan/parivahan-echallan.png" },
    { name: "Delhi Traffic Police", image: "/service-providers/challan/delhi-traffic-police.png" },
    { name: "Government eChallan", image: "/service-providers/challan/government-of-india.png" },
  ],
  nps: [
    { name: "NPS Trust", image: "/allservices/NPS_trust.jpg" },
    { name: "Protean CRA", image: "/allservices/protean.webp" },
    { name: "KFintech CRA", image: "/allservices/KFintech-Logo.jpg" },
  ],
  "cable-tv": [
    { name: "Hathway", image: "/service-providers/hathway.svg" },
    { name: "DEN Networks", image: "/service-providers/den-networks.png" },
    { name: "Siti Networks", image: "/service-providers/siti-networks.jpg" },
    "Local Cable Operator",
  ],
  "prepaid-meter": [
    { name: "JVVNL", image: "/service-providers/jvvnl.png" },
    { name: "AVVNL", image: "/service-providers/avvnl.jpg" },
    { name: "JDVVNL", image: "/service-providers/jdvvnl.jpg" },
    { name: "BSES Rajdhani Power", image: "/service-providers/bses-rajdhani.png" },
    { name: "Tata Power", image: "/service-providers/tata-power.png" },
  ],
  "credit-card-bill": [
    { name: "Axis Bank", image: "/bank/axisbank.png" },
    { name: "ICICI Bank", image: "/bank/icici.png" },
    { name: "HDFC Bank", image: "/service-providers/hdfc-bank.svg" },
    { name: "SBI Card", image: "/service-providers/sbi-card.svg" },
    { name: "Kotak Bank", image: "/bank/kotak.png" },
  ],
  "recurring-deposit": [
    { name: "Axis Bank", image: "/bank/axisbank.png" },
    { name: "ICICI Bank", image: "/bank/icici.png" },
    { name: "HDFC Bank", image: "/service-providers/hdfc-bank.svg" },
    { name: "Kotak Bank", image: "/bank/kotak.png" },
    { name: "IDFC FIRST Bank", image: "/bank/idfc-first.png" },
  ],
  "rental-payment": [
    { name: "NoBroker", image: "/service-providers/rental/nobroker.png" },
    { name: "Housing.com", image: "/service-providers/rental/housing.png" },
    { name: "Magicbricks", image: "/service-providers/rental/magicbricks.png" },
    { name: "RentoMojo", image: "/service-providers/rental/rentomojo.png" },
  ],
  subscription: [
    { name: "Netflix", image: "/service-providers/subscription/netflix.svg" },
    { name: "Prime Video", image: "/service-providers/subscription/prime-video.png" },
    { name: "Spotify", image: "/service-providers/subscription/spotify.svg" },
    { name: "YouTube", image: "/service-providers/subscription/youtube.svg" },
  ],
  "education-fees": [
    { name: "University of Delhi", image: "/service-providers/education/delhi-university-hd.png" },
    { name: "CBSE", image: "/service-providers/education/cbse.png" },
  ],
  ncmc: [
    { name: "SBI NCMC", image: "/service-providers/sbi-card.svg" },
    { name: "Airtel Payments Bank", image: "/allservices/airtel.webp" },
    { name: "Paytm Payments Bank", image: "/service-providers/ncmc/paytm.svg" },
  ],
  "housing-society": [
    { name: "MyGate", image: "/service-providers/housing/mygate-hd.webp" },
    { name: "NoBrokerHood", image: "/service-providers/housing/nobrokerhood.png" },
    { name: "ApnaComplex", image: "/service-providers/housing/apnacomplex.png" },
  ],
  "club-fees": [
    { name: "Rotary International", image: "/service-providers/clubs/rotary.png" },
    { name: "Toastmasters International", image: "/service-providers/clubs/toastmasters.png" },
    { name: "BNI", image: "/service-providers/clubs/bni-hd.png" },
  ],
  municipal: [
    { name: "Jaipur Municipal Corporation", image: "/service-providers/municipal/jaipur-municipal.png" },
    { name: "Municipal Corporation of Delhi", image: "/service-providers/municipal/mcd.png" },
    { name: "Surat Municipal Corporation", image: "/service-providers/municipal/surat-municipal-hd.png" },
  ],
  donation: [
    { name: "CRY", image: "/service-providers/donation/cry.png" },
    { name: "UNICEF", image: "/service-providers/donation/unicef.png" },
    { name: "The Akshaya Patra Foundation", image: "/service-providers/donation/akshaya-patra-hd.png" },
  ],
  "gift-card": [
    "Shopping Gift Cards",
    "Food & Dining Gift Cards",
    "Entertainment Gift Cards",
    "Travel & Experience Gift Cards",
  ],
  "car-insurance": [
    { name: "New India Assurance", image: "/service-providers/new-india-assurance.svg" },
    { name: "Supported Motor Insurer", image: "/image/car-insurance.jpg", photo: true },
    { name: "Other Available Insurer", image: "/insurance/v1.jpg", photo: true },
  ],
  "bike-insurance": [
    { name: "New India Assurance", image: "/service-providers/new-india-assurance.svg" },
    { name: "Supported Motor Insurer", image: "/image/bike-ins-banner.JPG", photo: true },
    { name: "Other Available Insurer", image: "/insurance/b1.png", photo: true },
  ],
  "taxi-insurance": [
    { name: "New India Assurance", image: "/service-providers/new-india-assurance.svg" },
    { name: "Supported Commercial Motor Insurer", image: "/image/taxi.png", photo: true },
    { name: "Other Available Insurer", image: "/insurance/v3.jpg", photo: true },
  ],
  "commercial-vehicle-insurance": [
    { name: "New India Assurance", image: "/service-providers/new-india-assurance.svg" },
    { name: "Supported Commercial Motor Insurer", image: "/image/truck.png", photo: true },
    { name: "Other Available Insurer", image: "/insurance/i1.png", photo: true },
  ],
  "bus-booking": [
    { name: "Available Bus Operators", image: "/service-providers/booking/bus-booking.jpg", photo: true },
    { name: "Intercity Bus Services", image: "/booking/b1.png", photo: true },
    { name: "Volvo & Premium Buses", image: "/booking/b2.png", photo: true },
    { name: "Sleeper Bus Services", image: "/booking/b3.png", photo: true },
  ],
  "train-booking": [
    { name: "Available Train Services", image: "/service-providers/booking/train-booking.jpg", photo: true },
    { name: "Reserved Classes", image: "/booking/t1.png", photo: true },
    { name: "Express & Superfast Trains", image: "/booking/t2.png", photo: true },
  ],
  "flight-booking": [
    { name: "Domestic Flights", image: "/service-providers/booking/flight-booking.jpg", photo: true },
    { name: "International Flights", image: "/booking/s1.png", photo: true },
    { name: "Available Airlines", image: "/booking/s2.png", photo: true },
  ],
  "hotel-booking": [
    { name: "Budget Hotels", image: "/service-providers/booking/hotel-booking.jpg", photo: true },
    { name: "Business Hotels", image: "/booking/h1.png", photo: true },
    { name: "Premium Hotels", image: "/booking/h2.png", photo: true },
    { name: "Resorts & Stays", image: "/booking/h3.png", photo: true },
  ],
};

const headingByService = {
  mobile: "Select an Operator",
  fastag: "Select a FASTag Bank",
  dth: "Select a DTH Operator",
  insurance: "Select an Insurance Provider",
  electricity: "Select an Electricity Board",
  water: "Select a Water Board",
  broadband: "Select a Service Provider",
  cylinder: "Select an LPG Provider",
  challan: "Select a Challan Authority",
  "prepaid-meter": "Select an Electricity Board",
  "recurring-deposit": "Select a Bank",
  "rental-payment": "Select a Rental Platform",
  subscription: "Select a Subscription Service",
  "education-fees": "Select an Educational Institution",
  ncmc: "Select an NCMC Issuer",
  "housing-society": "Select a Housing Society Platform",
  "club-fees": "Select a Club or Association",
  municipal: "Select a Municipal Corporation",
  donation: "Select a Donation Organisation",
  "gift-card": "Select a Gift Card Category",
  "car-insurance": "Select a Car Insurance Provider",
  "bike-insurance": "Select a Bike Insurance Provider",
  "taxi-insurance": "Select a Taxi Insurance Provider",
  "commercial-vehicle-insurance": "Select a Commercial Vehicle Insurance Provider",
  "bus-booking": "Explore Bus Options",
  "train-booking": "Explore Train Options",
  "flight-booking": "Explore Flight Options",
  "hotel-booking": "Explore Hotel Options",
};

const fallbackImageByService = {
  electricity: "/icons/lightbulb.png",
  "loan-emi": "/icons/lr.png",
  insurance: "/icons/insurance.png",
  water: "/icons/water.png",
  broadband: "/icons/bp.png",
  challan: "/icons/e-chalan.png",
  "prepaid-meter": "/icons/meter.png",
  "credit-card-bill": "/icons/cc.png",
  "recurring-deposit": "/icons/rd.png",
  "rental-payment": "/icons/rent.png",
  subscription: "/icons/sub.png",
  "education-fees": "/icons/ef.png",
  ncmc: "/icons/ncmc.png",
  "housing-society": "/icons/hsp.png",
  "club-fees": "/icons/caf.png",
  municipal: "/icons/ms.png",
  donation: "/icons/donate.png",
};

const badgeColors = ["#e8f7fb", "#eef5ff", "#eaf8f2", "#fff4e5", "#f3efff"];

export default function ServiceProviderSelector({ service }) {
  const [selected, setSelected] = useState("");
  const providers = providerGroups[service] || [];

  if (!providers.length) return null;

  return (
    <div className="mt-6 w-full rounded-[1.375rem] border border-[#d9edf2] bg-white p-5 shadow-[0_12px_30px_rgba(12,61,76,0.07)] sm:p-7">
      <h2 className="text-lg font-extrabold text-[#0C3D4C]">
        {headingByService[service] || "Select a Provider"}
      </h2>

      <div className="mt-5 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {providers.map((provider, index) => {
          const item = typeof provider === "string" ? { name: provider } : provider;
          const active = selected === item.name;
          const displayImage = item.image || fallbackImageByService[service];

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelected(item.name)}
              className={`flex min-w-[7.375rem] flex-col items-center rounded-xl border px-3 py-4 text-center transition ${active ? "border-[#00a8e8] bg-[#e9f8fb] shadow-sm" : "border-transparent hover:border-[#c5e9f1] hover:bg-[#f7fbfc]"}`}
            >
              <span
                className="grid h-20 w-20 place-items-center overflow-hidden rounded-full border border-[#d8e8ec] text-xl font-extrabold text-[#026381]"
                style={{ backgroundColor: badgeColors[index % badgeColors.length] }}
              >
                {displayImage ? (
                  <Image
                    src={displayImage}
                    alt={item.name}
                    width={76}
                    height={76}
                    className={item.photo ? "h-full w-full object-cover" : "h-full w-full bg-white p-1.5 object-contain"}
                  />
                ) : (
                  item.name.split(" ").map((word) => word[0]).join("").slice(0, 3).toUpperCase()
                )}
              </span>
              <span className="mt-3 text-xs font-semibold leading-4 text-slate-700">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

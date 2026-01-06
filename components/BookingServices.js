"use client";
import Image from "next/image";
import Link from "next/link";

const bookingServices = [
  {
    id: "bus-booking",
    title: "Bus Booking",
    desc: "Reserve bus tickets across multiple routes and operators...",
    img: "/aeps/bus.png",
    points: [
      "Multiple bus operators & routes",
      "Affordable fares with seat selection",
      "Instant booking confirmation",
      "Comfortable & hassle-free travel",
    ],
  },
  {
    id: "flight-booking",
    title: "Flight Booking",
    desc: "Book domestic and international flights with ease...",
    img: "/aeps/flight-booking.png",
    points: [
      "Domestic & international flight bookings",
      "Best fare comparison across airlines",
      "Fast, safe & secure online payments",
      "Instant ticket confirmation",
    ],
  },
  {
    id: "train-booking",
    title: "Train Booking",
    desc: "Book train tickets quickly with real-time availability...",
    img: "/aeps/train-booking.png",
    points: [
      "Live seat & train availability",
      "Quick and easy ticket booking",
      "PNR generation & confirmation",
      "Secure and reliable payments",
    ],
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    desc: "Discover and book hotels across destinations...",
    img: "/aeps/hotel-booking.png",
    points: [
      "Budget to luxury hotel options",
      "Verified hotels & safe booking",
      "Easy reservations anytime",
      "Comfortable stays worldwide",
    ],
  },
];



export default function BookingServicesSection() {
    return (
        <section className="bg-white">
            {bookingServices.map((item, i) => (
               <div
  key={i}
  id={item.id}
  className={`py-16 scroll-mt-24 ${i % 2 === 0 ? "bg-[#F4FBFD]" : "bg-white"}`}
>

                    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* Image */}
                        <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                            <div className="relative w-full h-[200px] md:h-[280px] overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#026381]">
                                {item.title}
                            </h2>

                            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
                                {item.desc}
                            </p>

                            <ul className="mt-4 space-y-2">
                                {item.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                        <span className="mt-1 w-2 h-2 bg-[#026381] rounded-full"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>



                           <div className="mt-4">
                             <Link href="https://utility.finuniques.in/" className="px-6 py-3 rounded-full border border-[#026381] text-[#026381] font-semibold hover:bg-[#026381] hover:text-white transition">
                                Book Now
                            </Link>
                           </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

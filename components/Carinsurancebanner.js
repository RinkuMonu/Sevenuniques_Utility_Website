"use client";
import Image from "next/image";
import Link from "next/link";



export default function CarInsuranceBannerSection() {
  return (
    <section className="w-full bg-white"
      style={{
        backgroundImage: `

      url('/image/insurance-bg.png')
    ` }}>
      <div className="max-w-7xl mx-auto px-6 py-6 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <p className="uppercase tracking-widest text-sm font-semibold text-sky-700 mb-3">
            BUY CAR INSURANCE ONLINE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Drive Safe, <br className="hidden md:block" />
            Peace of Mind Ke Saath
          </h1>

          <p className="text-slate-600 max-w-xl mb-8">
            Compare plans and get instant coverage for your car against accidents, theft, and natural events.
          </p>

          <Link
            href="/fastag-recharge"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-white font-semibold shadow-md hover:bg-slate-800 transition"
          >
            Recharge Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[230px] md:h-[300px] lg:h-[370px]">
          <Image
            src="/image/car-insurance.jpg"
            alt="FASTag Recharge"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

      </div>
    </section>
  );
}

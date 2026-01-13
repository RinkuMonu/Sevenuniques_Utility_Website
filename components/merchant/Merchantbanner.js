"use client";
import Image from "next/image";
import Link from "next/link";

export default function MerchantBannerSection() {
  return (
    <section className="w-full bg-white  shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-18 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm font-semibold text-sky-700 mb-3">
            MERCHANTS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Our <br className="hidden md:block" />
            Merchants
          </h1>
          <p className="text-slate-600 max-w-xl mb-8">
            Top up your FASTag instantly and experience hassle-free, cashless toll payments on all national highways. Skip the queues, monitor your transactions in real time, and make every journey smooth and convenient.
          </p>
          <Link
            href="/fastag-recharge"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-white font-semibold shadow-md hover:bg-slate-800 transition"
          >
            Recharge Now
          </Link>
        </div>
        <div className="relative w-full h-[220px] md:h-[300px] lg:h-[320px]">
          <Image
            src="/image/merchant-banner.jpg"
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

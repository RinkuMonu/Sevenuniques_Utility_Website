"use client";
import React from "react";
import Image from "next/image";

const ServiceSection = ({
  eyebrow,
  title,
  desc,
  imageSrc,
  icons = ["⚡", "📡"],
  blobs = ["bg-rose-100/70", "bg-emerald-100/70", "bg-sky-100/70"],
  frame = "#8B4A16",
  accent = "#135e90",
  reverse = false,
}) => {
  return (
    <section className="px-4 lg:px-0 py-12">
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold text-slate-500">{eyebrow}</p>

            <h2
              className="mt-3 text-3xl sm:text-4xl font-extrabold"
              style={{ color: accent }}
            >
              {title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 max-w-xl">
              {desc}
            </p>
          </div>

          {/* Right visual */}
          <div className="relative min-h-[320px] lg:min-h-[420px] flex items-center justify-end">
            {/* soft icon background */}
            <div className="absolute inset-0">
              <div className={`absolute left-10 top-16 h-20 w-20 rounded-2xl ${blobs[0]}`} />
              <div className={`absolute left-44 top-28 h-24 w-24 rounded-3xl ${blobs[1]}`} />
              <div className={`absolute left-28 bottom-16 h-28 w-28 rounded-3xl ${blobs[2]}`} />

              <div className="absolute left-20 top-20 grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <span className="text-xl">{icons[0]}</span>
              </div>
              <div className="absolute left-52 bottom-20 grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <span className="text-xl">{icons[1]}</span>
              </div>
            </div>

            {/* phone mockup */}
            <div className="relative z-10 w-[240px] sm:w-[280px] lg:w-[320px]">
              <div
                className="rounded-[2.2rem] border-[6px] shadow-[0_30px_70px_rgba(2,6,23,0.25)] w-[250px]"
                style={{ borderColor: frame, backgroundColor: frame }}
              >
                <div className="rounded-[1.8rem] bg-white p-2">
                  <Image
                    src={imageSrc}
                    alt={`${title} screen`}
                    width={900}
                    height={1200}
                    className="h-[380px] sm:h-[420px] lg:h-[460px] w-full rounded-[1.4rem] object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* divider like sample */}
        <div className="mt-10 border-t border-slate-100" />
      </div>
    </section>
  );
};

export default function AllServices() {
  const sections = [
    {
      eyebrow: "Service",
      title: "Recharges",
      desc:
        "Finunique BBPS makes mobile and DTH recharges quick and effortless. Users can easily recharge their phones and TV connections, ensuring uninterrupted communication and entertainment. This service is designed to simplify access to essential digital payments, especially for users in rural and semi-urban areas.",
      imageSrc: "/allservices/recharge.png",
      icons: ["⚡", "📡"],
      blobs: ["bg-rose-100/70", "bg-emerald-100/70", "bg-sky-100/70"],
      frame: "#0184be",
      accent: "#135e90",
    },
    {
      eyebrow: "Service",
      title: "Banking",
      desc:
        "Finunique BBPS offers digital banking services that let users check account balances, transfer funds, and manage their accounts directly from their mobile phones. This minimizes the need for branch visits and long waiting lines, making banking more convenient especially in remote areas. With instant access to transaction history and alerts, users can monitor their spending and keep their finances secure.",
      imageSrc: "/allservices/Banking.png",
      icons: ["🏦", "🔒"],
      blobs: ["bg-indigo-100/70", "bg-emerald-100/70", "bg-sky-100/70"],
      frame: "#0C3D4C",
      accent: "#125e8f",
    },
    {
      eyebrow: "Service",
      title: "Booking",
      desc:
        "Finunique BBPS enables users to book services online with quick and instant confirmation. This helps save time, reduces unnecessary travel, and makes scheduling more reliable. With features like reminders and simple rescheduling, users can plan ahead smoothly and avoid last-minute inconvenience.",
      imageSrc: "/allservices/Booking.png",
      icons: ["📅", "✅"],
      blobs: ["bg-amber-100/70", "bg-rose-100/70", "bg-emerald-100/70"],
      frame: "#0184be",
      accent: "#E07A1A",
    },
    {
      eyebrow: "Service",
      title: "Financial",
      desc:
        "Finunique BBPS offers digital financial services that help users handle payments, monitor expenses, and maintain records in one secure place. This gives better visibility into monthly spending and helps users make informed financial decisions. With timely payments and organized transaction history, users can stay in better control of their finances.",
      imageSrc: "/allservices/finance.png",
      icons: ["📊", "💳"],
      blobs: ["bg-sky-100/70", "bg-violet-100/70", "bg-emerald-100/70"],
      frame: "#0C3D4C",
      accent: "#0C3D4C",
    },
  ];

  return (
    <div>
      {sections.map((s, idx) => (
        <ServiceSection
          key={s.title}
          {...s}
          reverse={idx % 2 === 1}
        />
      ))}
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Rocket, Settings, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Launch Your Own Brand",
    desc: "Start your own digital financial service platform with your branding, logo, and domain."
  },
  {
    icon: ShieldCheck,
    title: "100% Secure & Compliant",
    desc: "RBI & NPCI aligned infrastructure with enterprise-grade security."
  },
  {
    icon: Settings,
    title: "Full Admin Control",
    desc: "Manage retailers, distributors, commissions, and services from one powerful dashboard."
  },
  {
    icon: BarChart3,
    title: "High Revenue Potential",
    desc: "Earn from every transaction across your complete network."
  }
];

const WhiteLabelSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#050B1E] text-white">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#018EDE]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-10 lg:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-xs tracking-widest">
            WHITE LABEL SOLUTION
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Build Your Own <span className="text-[#29B6FF]">Fintech Brand</span>
          </h2>
          <p className="mt-5 text-white/80 max-w-xl">
            Launch a complete digital payment and banking service platform under your own brand.
            We provide technology, compliance, and support — you focus on growth.
          </p>    
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="text-[#29B6FF] mb-3" size={28} />
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="border border-white/30 hover:bg-white/10 transition px-8 py-3 rounded-full font-semibold"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative">
            <Image
              src="/image/white-label-man.PNG" 
              alt="White label dashboard"
              width={600}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelSection;

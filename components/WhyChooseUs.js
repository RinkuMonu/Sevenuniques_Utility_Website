"use client";

import React from "react";
import {
  Wrench,
  RefreshCw,
  Tag,
  PackageCheck,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";

const WrenchIcon = (props) => (
  <Wrench className="h-4 w-4 text-[#0C3D4C]" {...props} />
);
const RefreshCwIcon = (props) => (
  <RefreshCw className="h-4 w-4 text-[#0C3D4C]" {...props} />
);
const TagIcon = (props) => (
  <Tag className="h-4 w-4 text-[#0C3D4C]" {...props} />
);
const PackageCheckIcon = (props) => (
  <PackageCheck className="h-4 w-4 text-[#0C3D4C]" {...props} />
);
const ShieldIcon = (props) => (
  <Shield className="h-4 w-4 text-[#0C3D4C]" {...props} />
);
const UsersIcon = (props) => (
  <Users className="h-4 w-4 text-[#0C3D4C]" {...props} />
);

const FeatureCard = ({ icon, title, description, className = "" }) => (
  <div className={`group relative bg-white/80 backdrop-blur-sm border border-[#cccc] rounded-md p-4 hover:border-[#0C3D4C]/30 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] ${className}`}>
    <div className="absolute inset-0 bg-linear-to-br from-white/60 to-blue-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10 flex flex-col ">
      <div className="relative mb-6 p-4 bg-linear-to-br from-[#E6F6FF] to-[#B2ECFF] rounded-md group-hover:shadow-2xl group-hover:shadow-[#018EDE]/25 border-2 border-[#018EDE]/20 w-20 h-20 lg:w-10 lg:h-10 flex items-center justify-center transition-all">
        <div className="group-hover:scale-110 transition-transform">{icon}</div>
      </div>
      <h3 className="text-xl lg:text-[14px] font-bold text-[#0C3D4C] mb-1 bg-linear-to-r from-[#0C3D4C] to-[#018EDE] bg-clip-text group-hover:scale-105 transition-all">
        {title}
      </h3>
      <p className="text-zinc-600 leading-relaxed max-w-md lg:text-[12px]">
        {description}
      </p>

      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all w-2 h-2 rounded-full bg-[#018EDE] ring-2 ring-[#018EDE]/30" />
    </div>
  </div>
);

export default function WhyChooseUs() {
  const features = [
    {
      icon: <WrenchIcon />,
      title: "Complete Transparency",
      description:
        "Simple commission structures with assured and timely settlements.",
    },
    {
      icon: <RefreshCwIcon />,
      title: "Quick & Hassle-Free Onboarding",
      description:
        "Activate services easily and start working directly from your shop.",
    },
    {
      icon: <TagIcon />,
      title: "Affordable Micro ATM Solutions",
      description:
        "Get Micro ATM devices at just ₹1,300 + GST, making digital banking accessible.",
    },
    {
      icon: <PackageCheckIcon />,
      title: "Dedicated Support, Anytime",
      description:
        "Our support team is available 24/7 to assist you whenever required.",
    },
    {
      icon: <ShieldIcon />,
      title: "Advanced & Secure Technology",
      description:
        "Smooth, reliable, and secure digital transactions powered by the latest technology.",
    },
    {
      icon: <UsersIcon />,
      title: "Trusted Across India",
      description:
        "A growing network of thousands of retailers and distributors nationwide.",
    },
  ];

  return (
    <section className="py-24 lg:py-20 bg-linear-to-b from-slate-50/70 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-20 lg:mb-12">
          <h2 className="text-lg lg:text-3xl font-black bg-linear-to-r from-[#0C3D4C] via-[#0C3D4C] to-[#018EDE] bg-clip-text text-transparent mb-3 leading-tight">
            Why Partner with Finunique
          </h2>
          <p className="text-xl lg:text-lg text-zinc-600  mx-auto leading-relaxed">
            We offer everything you need to grow your digital services business
            with trust, support, and technology you can rely on.
          </p>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12">
          <FeatureCard
            icon={features[0].icon}
            title={features[0].title}
            description={features[0].description}
          />
          <FeatureCard
            icon={features[1].icon}
            title={features[1].title}
            description={features[1].description}
          />
          <FeatureCard
            icon={features[2].icon}
            title={features[2].title}
            description={features[2].description}
          />

          <FeatureCard
            icon={features[3].icon}
            title={features[3].title}
            description={features[3].description}
          />
          <FeatureCard
            icon={features[4].icon}
            title={features[4].title}
            description={features[4].description}
          />
          <FeatureCard
            icon={features[5].icon}
            title={features[5].title}
            description={features[5].description}
          />
          <div className="lg:col-span-2 col-span-1">
            <div className="relative w-full h-64 lg:h-40 ">
              <Image 
                src="/about/whyus.webp" 
                alt="Why choose us" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

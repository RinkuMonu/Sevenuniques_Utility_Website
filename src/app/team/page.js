"use client";
import React from "react";
import Image from "next/image";
import { FaHeart, FaShieldAlt, FaBolt, FaUsers, FaLightbulb } from "react-icons/fa";
import ServiceBanner from "../../../components/ServiceBanner";
import IntegrationOrbit from "../../../components/IntegrationOrbit";

const TeamCard = ({ name, role, bio, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-md  bg-white ">
      <div className="relative h-[260px] w-full bg-white">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain object-top"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
        <div className="absolute inset-x-3 bottom-3 bg-linear-to-t from-[#125e8f78] via-[#00186b]/35 to-transparent
                  blur-[0px]">
          <div className="rounded-xl px-3 py-2 text-white">
            <p className="text-[15px] font-semibold leading-tight">{name}</p>
            <p className="mt-0.5 text-xs text-white/85">{role}</p>
          </div>
        </div>
      </div>
      {bio && (
        <div className="p-4">
          <p className="text-xs leading-relaxed text-slate-500">{bio}</p>
        </div>
      )}
    </div>
  );
};


function TeamGridSection({ label, title, members }) {
  return (
    <section className="px-4 lg:px-0 py-14 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-bold tracking-[0.28em] text-slate-500">{label}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <TeamCard key={`${m.name}-${idx}`} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
const ValueCard = ({ title, desc, Icon, tone = "stone" }) => {
  const toneClasses =
    tone === "amber"
      ? "border-amber-200 bg-amber-50/70 text-amber-700"
      : tone === "blue"
        ? "border-blue-200 bg-blue-50/70 text-blue-700"
        : tone === "emerald"
          ? "border-emerald-200 bg-emerald-50/70 text-emerald-700"
          : tone === "violet"
            ? "border-violet-200 bg-violet-50/70 text-violet-700"
            : "border-slate-200 bg-white text-slate-700";

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className={`inline-flex items-center gap-2 rounded-2xl border px-3 py-2 ${toneClasses}`}>
        <Icon className="h-4 w-4" />
        <span className="text-xs font-extrabold tracking-[0.18em]">CORE VALUE</span>
      </div>

      <h3 className="mt-4 text-xl font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
};

function CoreValuesSection() {
  const values = [
    {
      title: "Customer First",
      desc: "Every decision starts with what creates the best experience for the user.",
      Icon: FaHeart,
      tone: "amber",
    },
    {
      title: "Integrity",
      desc: "Build trust through transparency, clear communication, and doing the right thing.",
      Icon: FaShieldAlt,
      tone: "blue",
    },
    {
      title: "Speed & Ownership",
      desc: "Move fast, take responsibility, and ship improvements consistently.",
      Icon: FaBolt,
      tone: "violet",
    },
    {
      title: "One Team",
      desc: "Collaborate across roles, share context early, and win together.",
      Icon: FaUsers,
      tone: "emerald",
    },
    {
      title: "Innovation",
      desc: "Stay curious, test ideas quickly, and keep raising the quality bar.",
      Icon: FaLightbulb,
      tone: "stone",
    },
  ];

  return (
    <section className="px-4 lg:px-0 py-14 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-slate-500">CORE VALUES</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              What drives the team
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              A few principles that guide how the product is built, supported, and improved.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default function TeamSection() {
  const technicalTeam = [
    { name: "Rajyvardhan Singh", role: "Sr. MERN Stack Developer", image: "/teams/lucky.jpg", accent: "stone" },
    { name: "Ranjay Kumar", role: "Sr. MERN Stack Developer", image: "/teams/ranjay.jpg", accent: "slate" },
    { name: "Vijay Singh", role: "Jr. MERN Stack Developer", image: "/teams/vijay.jpg", accent: "amber" },
    { name: "Niranjan Kumawat", role: "Jr. Full Stack Developer", image: "/teams/niranjan.jpg", accent: "stone" },
    { name: "Sourav Singh Bhati", role: "Flutter developer", image: "/teams/sourav.png", accent: "stone" },
    { name: "Vinod Sain", role: "Flutter developer", image: "/teams/vinod.png", accent: "stone" },
    { name: "Nandini Lodha", role: "Sr. Front-end Developer", image: "/teams/nandini.jpg", accent: "stone" },
    { name: "Devika Chhipa", role: "Front-end Developer", image: "/teams/devika.jpg", accent: "stone" },
    { name: "Kanak Sharma", role: "Ui-Ux Designer", image: "/teams/kanak.jpg", accent: "stone" },
  ];

  const salesTeam = [
    { name: "Akshay Yogi", role: "Sales Manager", image: "/teams/akshay.jpg", accent: "stone" },
    { name: "Anish Sharma", role: "Business Analyst", image: "/teams/anish.jpg", accent: "amber" },
    { name: "Rekha Kirad", role: "Sr. Relationship Manager", image: "/teams/rekha.jpg", accent: "stone" },
    { name: "Anchal Kumari", role: "Relationship Manager", image: "/teams/anchal.jpg", accent: "stone" },
    { name: "Kusum Joshi", role: "Relationship Manager", image: "/teams/kusum.png", accent: "stone" },
    { name: "Deepa Lalwani", role: "Relationship Manager", image: "/teams/deepa.jpg", accent: "stone" },
    { name: "Nisha Rajput", role: "Relationship Manager", image: "/teams/nisha.png", accent: "stone" },
    { name: "Riya Mahawar", role: "Relationship Manager", image: "/teams/riya.jpg", accent: "stone" },
  ];

  const data = {
    id: 1,
    subheading: 'OUR TEAM',
    // heading: 'Angootha Lagao, Transaction Pao',
    heading: 'Our Most Valuable Team Members',
    // description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable Domestic Money Transfer service.',
    description: '',
    bgImage: '/teams/teambg.png',
    centerImage: '/teams/teamvector.png',
  }
  const section2data = {
    title: '/teams/title.png',
    img2: '/teams/team.png',
    color: "#FFF3C8"
  }

  return (
    <>
      <ServiceBanner data={data} />
      <div style={{ backgroundColor: section2data.color }}>
        <div className='max-w-7xl mx-auto lg:pt-8 px-4 lg:px-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='flex items-center'>
              <Image src={section2data.title} width={400} height={0} alt=' logo' />
            </div>
            <div>
              <Image src={section2data.img2} width={600} height={400} alt=' image' className=' ' />
            </div>
          </div>
        </div>
      </div>
      <TeamGridSection label="TECHNICAL TEAM" title="Engineerings" members={technicalTeam} />
      <TeamGridSection label="SALES TEAM" title="Sales Team" members={salesTeam} />
      <CoreValuesSection />
      <IntegrationOrbit />
    </>
  );
}

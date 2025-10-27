"use client";
import React from "react";

export default function PanGuidelines({ title,sub, sections }) {
  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Dynamic title passed as prop */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0C3D4C] mb-10">
          {title}
        </h1>
       { {sub} ?    <p className="text-xl md:text-2xl  text-center text-[#0C3D4C] mb-6">
          {sub}
        </p> :""}

        <div className="space-y-4">
          {sections.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
            >
              {/* Header */}
              <div className="w-full flex justify-between items-center px-6 py-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[#e0f7fa] text-[#0077b6]">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0C3D4C]">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Always visible content */}
              <div className="px-6 pb-6 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

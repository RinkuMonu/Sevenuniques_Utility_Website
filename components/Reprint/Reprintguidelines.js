
"use client"
import React from "react";

export default function Reprintguide({points = []}) {
console.log(points);


  return (
    <section className="pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Vertical line */}
        <div className="absolute -left-4 top-0 w-[2px] h-full bg-[#0c3d4c]"></div>

        <div className="space-y-10 relative">
          {points.map((points, index) => (

            <div
              key={index}
              className="relative flex items-start gap-5 pl-10 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Connector dot */}
              <div className="absolute left-[7px] top-7 w-3 h-3 bg-[#0077b6] rounded-full shadow-md"></div>

              {/* Icon */}
              <div className="p-3 rounded-xl bg-[#f1f9fa] flex items-center justify-center shrink-0">
                {points.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold text-[#0C3D4C] mb-2">
                  {points.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{points.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

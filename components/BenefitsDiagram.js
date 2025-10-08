import React from "react";

const benefitsTop = [
    { label: "Instant Transfer", icon: "🚀" },
    { label: "High Security", icon: "🔒" },
    { label: "Easy Access", icon: "🎯" },
];
const benefitsBottom = [
    { label: "Low Cost", icon: "💵" },
    { label: "Wide Reach", icon: "🌐" },
    { label: "24/7 Service", icon: "⏰" },
];

export default function BenefitsDiagram() {
    return (
        <div className="relative w-full max-w-3xl mx-auto min-h-[520px] py-20 flex justify-center items-center">
            {/* Top row of cards */}
            <div className="absolute top-0 left-0 flex w-full justify-between px-6">
                {benefitsTop.map((b, i) => (
                    <div key={b.label} className="w-40 h-28 bg-blue-100 rounded-xl shadow-md flex flex-col items-center justify-center relative">
                        <span className="text-2xl mb-2">{b.icon}</span>
                        <span className="font-medium text-blue-700">{b.label}</span>
                        {/* Line to center */}
                        <div className="absolute left-1/2 top-full w-0 h-12 border-l-2 border-blue-300"></div>
                    </div>
                ))}
            </div>
            {/* Center round label */}
            <div className="relative flex justify-center items-center w-[340px] h-[100px] mx-auto my-8 p-4 left-0 top-1/2   z-10 ">
                {/* Top left curve */}
                
                {/* Main button */}
                <button
                    className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold text-2xl shadow flex items-center justify-center relative z-10"
                    style={{ letterSpacing: '1px' }}
                >
                    BENEFITS
                </button>
            </div>
            {/* Bottom row of cards */}
            <div className="absolute bottom-0 left-0 flex w-full justify-between px-6">
                {benefitsBottom.map((b, i) => (
                    <div key={b.label} className="w-40 h-28 bg-blue-100 rounded-xl shadow-md flex flex-col items-center justify-center relative">
                        <span className="text-2xl mb-2">{b.icon}</span>
                        <span className="font-medium text-blue-700">{b.label}</span>
                        {/* Line to center */}
                        <div className="absolute left-1/2 bottom-full w-0 h-12 border-l-2 border-blue-300"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

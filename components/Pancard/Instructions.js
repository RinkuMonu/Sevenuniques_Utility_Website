"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Instructions({ items }) {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f8fbff] to-[#fdfaf6] flex flex-col items-center py-12 px-6 relative">


            <div className="max-w-7xl w-full">
                <h1 className="text-4xl font-bold text-[#0C3D4C] mb-4 text-center">
                    Instructions
                </h1>
                <p className="text-gray-600 mb-12 text-center text-lg">
                    To maintain a friendly and respectful environment, please follow these simple guidelines.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#8fb6c2] to-[#0C3D4C] rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner mb-4 text-[#0C3D4C] font-bold">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

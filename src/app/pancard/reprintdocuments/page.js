"use client"
import React from "react"
import Reprintguide from "../../../../components/Reprint/Reprintguidelines";
import { Zap, Lightbulb, PenTool } from "lucide-react";

export default function Reprintguideline() {


     const documentpoints = [
    {
      icon: <Zap size={22} className="text-[#0077b6]" />,
      question: "Douuuuuuuuuuu yound?",
      answer:
        " consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <Lightbulb size={22} className="text-[#00b4d8]" />,
      question: "Can I try free trial now?",
      answer:
        "Eget dolor morbi non arcu risus quis. Tincidunt dui ut ornare lectus sit amet est placerat. Vestibulum lorem sed risus ultricies.",
    },
    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "How can I reach support?",
      answer:
        "Enim praesent elementum facilisis leo. Diam donec adipiscing tristique risus nec feugiat in fermentum. Non diam phasellus.",
    },
    {
      icon: <Zap size={22} className="text-[#0077b6]" />,
      question: "Will it work for me?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <Lightbulb size={22} className="text-[#00b4d8]" />,
      question: "How much does it cost?",
      answer:
        "Eget dolor morbi non arcu risus quis. Tincidunt dui ut ornare lectus sit amet est placerat. Vestibulum lorem sed risus ultricies.",
    },
    {
      icon: <PenTool size={22} className="text-[#9b5de5]" />,
      question: "How to change profile pics?",
      answer:
        "Enim praesent elementum facilisis leo. Diam donec adipiscing tristique risus nec feugiat in fermentum. Non diam phasellus.",
    },
  ];



  return (
    <>
      <main className="min-h-screen bg-[#f9fcfd]">
        <div className="py-10">
          <h1 className="text-4xl font-bold text-center text-[#0C3D4C] mb-12">
           documents
          </h1>
          <Reprintguide points={documentpoints} />
        </div>
      </main>
    </>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slide = {
  image: "/loan/loan3.png",
  heading: (
    <>
      At Sevenunique, <br />
      how to secure  <br />
      a <span className="text-blue-300">business</span> loan.
    </>
  ),
  sliderData: [
    {
      step: 1,
      title: "Apply Online",
      image: "/loan/loan4.png",
      cta: "Request Calculations",
      details: [
        "The business loan platform of Visit Sevenunique.",
        "You will need to fill in your basic details: name, mobile number, Aadhaar, and PAN.",
        "Select the type of loan (business loan, working capital, expansion loan, etc.).",
        "Ask to calculate a loan in order to verify your eligibility.",
      ],
    },
    {
      step: 2,
      title: "Upload Documents",
      image: "/loan/loan12.png",
      cta: "Submit Docs",
      details: [
        "Add the required documents: PAN Card, Aadhaar Card, business financials, and income proof (bank statements or tax returns).",
        "Your documents will be instantly checked by our system, which will then be processed much faster.",
      ],
    },
    {
      step: 3,
      title: "Receive Your Loan",
      image: "/loan/loan13.png",
      cta: "Get Money Now",
      details: [
        "Upon the loan approval, the funds of the business loan will be transferred to your business account.",
        "You can get money within a few hours and use it immediately for the business.",
      ],
    },
  ],
};

// --- Main Component ---
const VerticalSlider = () => {
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef(null);

  // --- Effect to handle scroll logic ---
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollY = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const progress = Math.max(
        0,
        Math.min(1, (scrollY - containerTop) / (containerHeight - viewportHeight))
      );

      const newStep = Math.floor(progress * slide.sliderData.length);
      setActiveStep(Math.min(newStep, slide.sliderData.length - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentContent = slide.sliderData[activeStep];

  return (
    <div className="">
      <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:gap-x-4 relative">
        {/* --- LEFT (Sticky Image Panel) --- */}
        <div className="sticky top-20 flex h-[70vh] sm:h-[80vh] items-center p-4 md:p-8">
          <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-[#014D78] to-[#1DADFF] text-white shadow-2xl flex flex-col justify-between p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug max-w-sm z-20">
              {slide.heading}
            </h2>
           <div className="relative hidden md:flex justify-center md:block mt-6 md:mt-0">
  <Image
    src={slide.image}
    width={400}
    height={400}
    alt="Happy customer with loan"
    className="w-48 h-64 sm:w-64 sm:h-72 md:w-[510px] md:h-[450px] object-cover md:absolute md:-bottom-8 md:left-40 z-10"
  />
</div>
          </div>
        </div>

        {/* --- RIGHT (Scrollable Content Panel) --- */}
        <div
          ref={scrollContainerRef}
          className="relative bg-white md:-z-50"
          style={{ height: `${slide.sliderData.length * 100}vh` }}
        >
          <div className="sticky top-20 flex h-[70vh] sm:h-[80vh]  items-center p-4 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentContent.step}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative h-full w-full overflow-hidden rounded-2xl bg-[#E6F6FF] p-6 sm:p-8"
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-t from-[#018EDE] to-[#8FD7FF] text-2xl sm:text-4xl font-bold text-white shadow-md">
                      {currentContent.step}
                    </div>
                    <h3 className="mb-3 mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#24576C]">
                      {currentContent.title}
                    </h3>
                    <ul className="list-disc space-y-2 text-sm sm:text-base md:text-lg text-[#5D5D5D] ps-5 pt-4">
                      {currentContent.details.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* <Link href="/" className="mt-6 inline-flex w-fit items-center justify-center gap-2 self-end whitespace-nowrap rounded-lg bg-[#007bff] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-md transition-all hover:bg-[#0056b3]">
                    <span>{currentContent.cta}</span>
                    <ArrowRight size={18} className="sm:size-5" />
                  </Link> */}
                </div>
                <div className="absolute right-2 sm:right-4 bottom-10 sm:bottom-20 opacity-30">
                  <Image
                    src={currentContent.image}
                    width={120}
                    height={120}
                    alt="Background symbol"
                    className="w-20 sm:w-28 md:w-36 h-auto"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSlider;

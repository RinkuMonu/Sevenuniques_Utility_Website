"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  { id: 1, name: " Ravi Kumar - Retailer", text: "Sevenunique helped me to make my small store a service center online. The commissions have been quite supportive in boosting my monthly income, and the support team is outstanding!", date: "25 July 2024", avatar: "/image/p5.jpg", rating: 5 },
  { id: 2, name: "Raghu Sharma - Distributor", text: " The Adhikari network of Sevenunique helped me to grow my business easily. The site was easy to navigate, and the staff was available and accommodating in terms of helping me climb at a better pace than I had imagined.", date: "26 July 2025", avatar: "/image/p2.jpg", rating: 5 },
  { id: 3, name: "RadheyShyam - User", text: "Paying off bills and transferringmoney has never been easy. The app is fast and secure, and it has not let us down. It's a real game-changer", date: "27 July 2025", avatar: "/image/p7.jpg", rating: 4 },
  { id: 4, name: "Amit Verma - Retailer", text: "Sevenunique assisted me in receiving online payments in my village. It has become the standard option among all the people here, and it has revolutionized the way we conduct transactions considerably.", date: "28 July 2025", avatar: "/image/p1.jpg", rating: 5 },
];

// --- Star Rating Component ---
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>);
  }
  return <div className="flex justify-center">{stars}</div>;
};

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1); // xs
      else if (window.innerWidth < 1024) setSlidesToShow(1); // md
      else setSlidesToShow(3); // lg+ unchanged
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // initial
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setTimeout(handleNext, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full" style={{ background: "linear-gradient(90deg, #01202A 0%, #01202A 25%, #0B4051 50%, #095C8C 75%, #095C8C 100%)" }}>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Left Image Panel */}
        <div className="hidden md:block w-full md:w-1/2 lg:w-1/2 mt-8 md:mt-0 relative">
          <Image src="/home/homefarmer.png" width={850} height={535} alt="Happy" className="rounded-lg md:absolute bottom-0 -left-20" style={{ width: "850px", height: "527px" }} />
        </div>

        {/* Right Slider Panel */}
        <div className="w-full md:w-5/12 lg:w-9/12 flex items-center justify-center py-10 lg:p-16 relative overflow-x-hidden">
          <div className="relative w-full max-w-4xl h-[28rem] sm:h-80 flex items-center justify-center overflow-x-hidden md:overflow-x-visible">
            {testimonials.map((testimonial, index) => {
              let position = "hidden";
              const distance = (index - currentIndex + testimonials.length) % testimonials.length;

              if (slidesToShow === 1) {
                position = index === currentIndex ? "center" : "hidden";
              } else if (slidesToShow === 3) {
                if (distance === 0) position = "center";
                else if (distance === 1 || distance === -(testimonials.length - 1)) position = "right";
                else if (distance === testimonials.length - 1 || distance === -1) position = "left";
              }

              const getStyle = () => {
                switch (position) {
                  case "center":
                    return { transform: "translateX(0) scale(1.05)", opacity: 1, zIndex: 10 };
                  case "left":
                    return { transform: "translateX(-50%) scale(0.8)", opacity: 0.6, zIndex: 5 };
                  case "right":
                    return { transform: "translateX(50%) scale(0.8)", opacity: 0.6, zIndex: 5 };
                  default:
                    return { transform: "scale(0.7)", opacity: 0, zIndex: 0 };
                }
              };

              return (
                <div key={testimonial.id} className="absolute top-0 w-full max-w-md transition-all duration-500 ease-in-out lg:pt-10 px-4 sm:px-2" style={getStyle()}>
                  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 pt-16 relative">
                    {/* <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full absolute -top-10 left-1/2 -translate-x-1/2" /> */}
                    <div className="text-center">
                      <h3 className="font-bold text-lg sm:text-xl text-[#0B4A73]">{testimonial.name}</h3>
                      <div className="flex justify-center my-2">
                        <StarRating rating={testimonial.rating} />
                      </div>
                      <p className="text-[#0B4A73] my-4 text-xs sm:text-sm md:text-base leading-relaxed">{testimonial.text}</p>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

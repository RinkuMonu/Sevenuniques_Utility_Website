"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function FAQ({ faqs, subheading }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? 0 : index)
  }

  return (
    <section id="faq" className="py-16 min-h-screen ">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left content */}
          <div className="md:col-span-2 space-y-8  ">
            <div>
              <p className="text-[#00b4d8] font-semibold mb-2 uppercase tracking-wide text-sm">
                Got Questions?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b4f] mb-4 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 leading-relaxed">{subheading}</p>
            </div>
            <div className="relative overflow-hidden ">
              <Image
                src="/bbps/faq.jpg"
                alt="FAQ illustration"
                width={500}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </div>

          {/* FAQ accordions */}
         <div className="md:col-span-3 space-y-5 pr-2 ">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                 <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 pt-4 flex items-center justify-between text-left font-semibold text-[#0d3b4f] hover:text-[#00b4d8] transition-colors"
                >
                  <span className="">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-[#00b4d8]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

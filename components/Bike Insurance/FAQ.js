"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function FAQ({ faqs , subheading }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 ">
              <div className="mb-12">
          <p className="text-[#00b4d8] font-semibold mb-2 uppercase tracking-wide text-sm">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b4f] mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 leading-relaxed">
         {subheading}
          </p>
        </div>
        <div className="flex justify-center">
            <Image
              src="/bbps/faq.jpg" 
              alt="FAQ illustration"
              width={500}
              height={400}
              className=" object-cover"
            />
        </div>
          </div>

          <div className="md:col-span-3  space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-[#0d3b4f] hover:text-[#00b4d8] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

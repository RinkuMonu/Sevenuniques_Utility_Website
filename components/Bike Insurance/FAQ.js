"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"



export function FAQ({faqs}) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#00b4d8] font-semibold mb-2 uppercase tracking-wide text-sm">Got Questions?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b4f] mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Find answers to common questions about bike insurance. Can't find what you're looking for? Contact our
            support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-[#0d3b4f] hover:text-[#00b4d8] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
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
    </section>
  )
}

"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What does bike insurance cover?",
    answer:
      "Bike insurance covers damages to your vehicle due to accidents, theft, fire, natural calamities, and third-party liabilities. Comprehensive plans also include personal accident cover for the rider and passengers.",
  },
  {
    question: "Is bike insurance mandatory in India?",
    answer:
      "Yes, third-party bike insurance is mandatory as per the Motor Vehicles Act, 1988. However, comprehensive insurance is recommended for complete protection of your bike and yourself.",
  },
  {
    question: "How is the premium calculated?",
    answer:
      "Premium is calculated based on factors like bike model, age, cubic capacity, location (IDV), add-on covers selected, and your claim history. Our smart calculator provides instant quotes.",
  },
  {
    question: "What is IDV in bike insurance?",
    answer:
      "IDV (Insured Declared Value) is the current market value of your bike. It is the maximum amount you can claim in case of total loss or theft. IDV decreases with the age of the vehicle.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "You can file a claim by calling our 24/7 helpline, through our mobile app, or website. For cashless claims, visit any of our 5000+ network garages. Our team will guide you through the entire process.",
  },
  {
    question: "Can I transfer my insurance to a new bike?",
    answer:
      "No, bike insurance is vehicle-specific and cannot be transferred to a new bike. However, if you sell your bike, the insurance can be transferred to the new owner with proper documentation.",
  },
  {
    question: "What are add-on covers?",
    answer:
      "Add-on covers are optional coverages like zero depreciation, engine protection, roadside assistance, consumables cover, and return to invoice. These enhance your basic policy coverage.",
  },
  {
    question: "How long does claim settlement take?",
    answer:
      "For cashless claims at network garages, approval is instant. For reimbursement claims, we settle 95% of claims within 7 days after receiving all required documents.",
  },
]

export function FAQ() {
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
            Find answers to common questions about bike insurance. Can&apos;t find what you&apos;re looking for? Contact our
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

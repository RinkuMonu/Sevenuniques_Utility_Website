
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Shield, FileText, UserCheck, Repeat, AlertTriangle, Clock, Lock, Gavel, PhoneCall, Users, CheckCircle , ClipboardList , HelpCircle } from "lucide-react";

const kycSections = [
  {
    id: "purpose",
    title: "Purpose",
    icon: <Shield />,
    content:
      "The Chargeback Policy of SevenUnique Tech Solutions Private Limited outlines the standards and procedures for handling chargebacks initiated by customers, distributors, retailers, or white-label partners. It aims to provide fair, transparent, and mutually respectful resolution of disputes related to unauthorized or disputed transactions. This policy applies to all digital and utility services provided through www.sevenuniques.com, including BBPS bill payments, AEPS/DMT transactions, mobile/DTH/data card recharges, loan applications, insurance, credit card bill payments, PAN applications, subscriptions, and any other digital financial or utility service offered on the platform.",
  },
  {
    id: "scope",
    title: "Scope of Chargeback Policy",
    icon: <FileText />,
    content:
      "This policy covers all types of chargebacks, including unauthorized transactions, duplicate payments, disputed services, and technical or system errors. It applies to all users, distributors, retailers, and white-label partners, defining their rights and responsibilities when disputing a transaction.",
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    icon: <UserCheck />,
    content:
      "Before initiating a chargeback, users must contact SevenUnique Support at info@7unique.in or 0141-4511098, provide complete transaction details, allow adequate resolution time, and act in good faith. Failure to follow these steps may delay or invalidate the claim.",
  },
  {
    id: "company-responsibilities",
    title: "Company Responsibilities",
    icon: <Repeat />,
    content:
      "SevenUnique ensures transparent investigation, prompt response (within 24–48 hours), detailed documentation, cooperation with payment providers, and regular resolution updates throughout the chargeback process.",
  },
  {
    id: "chargeback-procedures",
    title: "Chargeback Procedures",
    icon: <AlertTriangle />,
    content:
      "Users must submit written requests to info@7unique.in with transaction details. The company verifies transactions, checks service delivery, reviews communication logs, and consults third parties if needed. Approved chargebacks are refunded within 5–10 business days, while invalid claims are denied with written reasons.",
  },
  {
    id: "unnotified-chargebacks",
    title: "Consequences of Unnotified Chargebacks",
    icon: <Gavel />,
    content:
      "Initiating a chargeback without prior contact violates service terms. Such accounts may face suspension, restrictions, or permanent bans. Repeated violations may result in legal action to recover damages.",
  },
  {
    id: "timeline",
    title: "Timeline for Chargeback Resolution",
    icon: <Clock />,
    content:
      "Acknowledgement: within 24–48 hours. Investigation: typically 5–10 business days. Final Resolution: written confirmation and refund details provided post-verification.",
  },
  {
    id: "special-considerations",
    title: "Special Considerations for Utility and Digital Services",
    icon: <AlertTriangle />,
    content:
      "Real-time services like BBPS, AEPS/DMT, mobile/DTH recharges, and PAN applications are non-reversible once executed. Refunds may only occur in case of technical failures. Subscription cancellations apply to future cycles; completed periods are non-refundable unless otherwise stated.",
  },
  {
    id: "data-security",
    title: "Data Security and Privacy",
    icon: <Lock />,
    content:
      "SevenUnique ensures all chargeback and transaction data is encrypted, securely stored, access-controlled, and used solely for verification and compliance purposes, following IT Act 2000 and relevant privacy laws.",
  },
  {
    id: "legal-standing",
    title: "Legal Standing",
    icon: <Gavel />,
    content:
      "This policy is governed by Indian law. All disputes fall under the jurisdiction of Jaipur, Rajasthan. SevenUnique may amend or update the policy as required by regulatory or operational needs.",
  },
  {
    id: "communication-support",
    title: "Communication & Support",
    icon: <PhoneCall />,
    content:
      "For assistance, contact info@7unique.in or call 0141-4511098 (Mon–Sat, 10:00 AM – 6:30 PM IST). Include transaction ID, registered mobile number, service type, and issue description for faster resolution.",
  },
  {
    id: "user-partner-responsibilities",
    title: "Responsibilities of Users and Partners",
    icon: <Users />,
    content:
      "Provide accurate information during dispute submission, use official channels, avoid malicious chargebacks, and cooperate during the investigation process.",
  },
  {
    id: "company-responsibilities-2",
    title: "Responsibilities of SevenUnique Tech Solutions",
    icon: <CheckCircle />,
    content:
      "Review requests fairly, maintain proper documentation, guide users throughout the process, and process approved refunds promptly and securely.",
  },
  {
    id: "conclusion",
    title: "Conclusion",
    icon: <Shield />,
    content:
      "This Chargeback Policy ensures fair, transparent, and accountable dispute handling for all users and partners of SevenUnique. It fosters trust, compliance, and operational integrity through clear procedures and continuous review.",
  },
];

export default function KycPolicy() {
  const [activeSection, setActiveSection] = useState("data-security");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      <div className="">
        <section className="">
          <div className="bg-[#F4FCFF] rounded-2xl shadow-lg">
            <section>
              <div className="max-w-8xl mx-auto px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Table of Contents */}
                  <div className="lg:w-1/4">
                    <div className="sticky top-32 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <ClipboardList className="w-5 h-5 mr-2 text-[#115D8E]" />
                        Policy Sections
                      </h3>
                      <ul className="space-y-2">
                        {kycSections.map((section, index) => (
                          <li key={index}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer ${
                                activeSection === section.id
                                  ? "bg-[#115D8E] bg-opacity-10 text-white font-medium"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`}
                            >
                              <section
                                                            className={`w-4 h-4 mr-4
                                                                 ${activeSection === section.id
                                                            ? "bg-opacity-10 text-white font-medium"
                                                            : "text-gray-600 hover:bg-gray-100"
                                                            }`}
                                                        >
                                                            {section.icon}
                                                        </section>
                              {section.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:w-3/4">
                    <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                      <div className="text-center mb-10">
                        <div className="mb-6">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#358EBA] to-[#24576C] rounded-full flex items-center justify-center">
                            <Image
                              src="/privacy/kyc-img.png"
                              alt="KYC Policy Icon"
                              width={40}
                              height={40}
                              className="filter invert"
                            />
                          </div>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                          KYC Policy & Onboarding Process
                        </div>
                        {/* <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-4">
                          We follow a strict KYC policy to verify identity and ensure compliance
                        </h3> */}
                        <div className="h-1 w-20 bg-gradient-to-r from-[#358EBA] to-[#24576C] mx-auto mb-6 rounded-full"></div>
                        <p className="text-gray-600 text-start text-lg leading-relaxed">
                          <span className="font-bold">SevenUnique Tech Solutions Private Limited </span><br />
<span className="font-bold"> Website:</span> www.sevenuniques.com<br />
 <span className="font-bold">Email:</span> info@7unique.in<br />
  <span className="font-bold">Phone:</span> 0141-4511098<br />
   <span className="font-bold">Effective Date:</span> 03 June 2025

                        </p>
                      </div>
                    </div>

                    {kycSections.map((section, index) => (
                      <div
                        key={index}
                        id={section.id}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className="bg-white p-8 rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-start mb-4">
                          <div className="text-2xl mr-4 bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white p-2 rounded-lg">
                           <section className="w-4 h-5 mr-2 text-white">
                            {section.icon}
                          </section>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {section.title}
                          </h3>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>
                        <p className="text-gray-600 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}

                    {/* Summary Card */}
                    <div className="bg-gradient-to-r from-[#115D8E] to-[#777777] p-1 rounded-2xl shadow-lg mt-10">
                      <div className="bg-white rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <FileText className="w-5 h-5 mr-2 text-[#115D8E]" />
                          Policy Summary
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>✔ All user identities must be verified</li>
                          <li>✔ Data is secured under global standards</li>
                          <li>✔ Compliance with AML & GDPR</li>
                          <li>✔ Transparent onboarding process</li>
                        </ul>
                        <button className="bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-md mt-4">
                          Contact Support
                        </button>
                      </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm mt-10">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <HelpCircle className="w-5 h-5 mr-2 text-[#115D8E]" />
                        Frequently Asked Questions
                      </h3>
                      <div className="space-y-4">
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2">
                            Why is KYC required?
                          </h4>
                          <p className="text-gray-600">
                            KYC is required to comply with regulatory standards, prevent fraud,
                            and ensure user trust in our services.
                          </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2">
                            What documents are needed?
                          </h4>
                          <p className="text-gray-600">
                            Government-issued ID, proof of address, and in some cases, income or
                            business verification documents may be required.
                          </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2">
                            How long does verification take?
                          </h4>
                          <p className="text-gray-600">
                            Verification typically takes 24–48 hours, depending on the accuracy
                            of the documents submitted.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

    </>
  );
}


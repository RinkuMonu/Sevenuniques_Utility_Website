
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  Shield,
  FileText,
  UserCheck,
  Building2,
  RefreshCw,
  Ban,
  Clock,
  AlertTriangle,
  Lock,
  Gavel,
  PhoneCall,
  Users,
  CheckCircle,
} from "lucide-react";

// SVG Icons as React Components
const CreditCardIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 7H2V11H22V7Z" fill="currentColor" />
    <path d="M2 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CancelIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const RefundIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
    <path d="M12 15.5L15.5 12L12 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 12H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExceptionIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 3L3 7.5L12 12L21 7.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 19H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PolicySectionsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="9" cy="12" r="1" fill="currentColor" />
    <circle cx="9" cy="16" r="1" fill="currentColor" />
  </svg>
);

const SummaryIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14Z" fill="currentColor" />
    <path d="M8 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 18H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 22H14C17.3137 22 20 19.3137 20 16V8C20 4.68629 17.3137 2 14 2H10C6.68629 2 4 4.68629 4 8V16C4 19.3137 6.68629 22 10 22Z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const FAQIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17.5C12.2761 17.5 12.5 17.2761 12.5 17C12.5 16.7239 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.7239 11.5 17C11.5 17.2761 11.7239 17.5 12 17.5Z" fill="currentColor" />
    <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const chargeSections = [
  {
    id: "purpose",
    title: "Purpose",
    icon: <Shield />,
    content: (
      <>
        The Chargeback Policy of SevenUnique Tech Solutions Private Limited outlines the procedures for handling chargebacks initiated by customers, distributors, retailers, or white-label partners. It ensures fair, transparent, and respectful dispute resolution for unauthorized or disputed transactions. This policy applies to all digital and utility services offered on <strong>www.sevenuniques.com</strong>, including:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>BBPS bill payments (electricity, gas, water, etc.)</li>
          <li>AEPS/DMT transactions (Aadhaar Enabled Payment System & Domestic Money Transfer)</li>
          <li>Mobile, DTH, and data card recharges</li>
          <li>Loan applications and processing</li>
          <li>Insurance services</li>
          <li>Credit card bill payments</li>
          <li>pancard applications</li>
          <li>Subscription-based services</li>
          <li>Any other digital financial or utility service offered on the platform</li>
        </ul>
      </>
    ),
  },
  {
    id: "scope",
    title: "Scope of Chargeback Policy",
    icon: <FileText />,
    content: (
      <>
        This policy covers all types of chargebacks, including:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Unauthorized transactions: initiated without user consent or approval.</li>
          <li>Duplicate transactions: payments mistakenly processed multiple times.</li>
          <li>Disputed transactions: services not delivered or not as promised.</li>
          <li>Technical or system errors: failed transactions due to server downtime, API errors, or third-party integration issues.</li>
        </ul>
        It applies to all users, distributors, retailers, and white-label partners, outlining their rights and responsibilities when disputing a transaction.
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    icon: <UserCheck />,
    content: (
      <>
        Before initiating a chargeback, users must:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Contact SevenUnique Support at <strong>info@7unique.in</strong> or <strong>0141-4511098</strong> to resolve the issue directly.</li>
          <li>Provide complete information including Transaction ID, registered mobile number, service type, date, and description of the issue.</li>
          <li>Allow adequate time for the company to investigate and resolve the issue.</li>
          <li>Act in good faith; malicious or false claims may lead to account suspension, flagging, or legal action.</li>
        </ul>
        Failure to comply may result in delays or denial of chargeback claims.
      </>
    ),
  },
  {
    id: "company-responsibilities",
    title: "Company Responsibilities",
    icon: <Building2 />,
    content: (
      <>
        SevenUnique is committed to:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Transparent Investigation: All chargeback requests reviewed fairly and thoroughly.</li>
          <li>Prompt Response: Users receive acknowledgment within 24–48 hours.</li>
          <li>Documentation: Maintains detailed records of transactions, communications, and service delivery.</li>
          <li>Cooperation with Payment Providers: Provides necessary evidence and documentation for chargebacks through banks or payment gateways.</li>
          <li>Resolution Updates: Users are informed at every stage of the investigation.</li>
        </ul>
      </>
    ),
  },
  {
    id: "chargeback-procedures",
    title: "Chargeback Procedures",
    icon: <RefreshCw />,
    content: (
      <>
<span className="font-bold">5.1 Initiating a Chargeback</span>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Users must first submit a written request to info@7unique.in, providing all relevant details of the disputed transaction.
</li>
          <li>The support team will review the request and verify the transaction against internal records and third-party service confirmations.</li>
          <li>If required, additional documentation or clarification may be requested from the user.</li>

        </ul>
<span className="font-bold mt-2">5.2 Verification Process</span>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Transaction Confirmation: The transaction will be verified against the payment gateway, bank, or third-party provider records.

</li>
          <li>Service Delivery Check: Verification of whether the requested service was delivered, partially delivered, or failed.</li>
          <li>Communication Logs: Review of prior communication between the user and the company to understand the context of the dispute.</li>
          <li>Third-Party Consultation: If the service is dependent on a third-party API, bank, or utility provider, verification may involve coordination with them.
</li>

        </ul>
        <span className="font-bold mt-2">5.3 Resolution</span>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Approved Chargebacks: If the chargeback is valid, a refund will be processed to the original payment method within 5–10 business days, subject to banking and payment gateway timelines.

</li>
          <li>Denied Chargebacks: If the chargeback is found invalid or unsupported, the user will be notified in writing with the reasons for denial.</li>
          <li>Partial Chargebacks: In cases where partial services were delivered, a pro-rated resolution may be provided.</li>

        </ul>
      </>
    ),
  },
  {
    id: "unnotified-chargebacks",
    title: "Consequences of Unnotified Chargebacks",
    icon: <Ban />,
    content: (
      <>

        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Initiating a chargeback without contacting SevenUnique constitutes a policy violation</li>
          <li>Accounts may be suspended, restricted, or permanently banned.</li>
          <li>Repeated offenses may result in legal action to recover losses or damages.</li>
        </ul>
      </>
    ),
  },
  {
    id: "timeline",
    title: "Timeline for Chargeback Resolution",
    icon: <Clock />,
    content: (
      <>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Initial Acknowledgment: 24–48 hours from receipt of dispute.</li>
          <li>Investigation Period: Typically 5–10 business days depending on complexity.</li>
          <li>Final Resolution: Users receive written confirmation of outcome and refund timeline.</li>
        </ul>
      </>
    ),
  },
  {
    id: "special-considerations",
    title: "Special Considerations for Utility and Digital Services",
    icon: <AlertTriangle />,
    content: (
      <>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Real-time BBPS, AEPS/DMT, mobile/DTH recharges, and PAN applications are non-reversible once executed.</li>
          <li>Refunds or chargebacks only for technical failures or system errors.</li>
          <li>Subscription services: future cycles may be canceled, prepaid amounts for completed periods are non-refundable unless explicitly stated.</li>
          <li>Third-party dependencies like banks, APIs, and utility providers may affect timing and resolution.</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data Security and Privacy",
    icon: <Lock />,
    content: (
      <>
        All chargeback and transaction data is:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Encrypted and securely stored in compliance with IT Act 2000 and privacy laws.</li>
          <li>Access-controlled, limited to authorized personnel.</li>
          <li>Used solely for dispute resolution, verification, and regulatory compliance.</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-standing",
    title: "Legal Standing",
    icon: <Gavel />,
    content: (
      <>
        This policy is governed by Indian law under the jurisdiction of Jaipur, Rajasthan. SevenUnique may amend the policy to comply with legal, regulatory, or operational changes without prior notice.
      </>
    ),
  },
  {
    id: "communication-support",
    title: "Communication & Support",
    icon: <PhoneCall />,
    content: (
      <>
        Users can contact support:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Email: info@7unique.in</li>
          <li>Phone: 0141-4511098 (Mon–Sat, 10:00 AM–6:30 PM IST)</li>
          <li>Include Transaction ID, registered mobile number, service type, and issue description for faster resolution.</li>
        </ul>
      </>
    ),
  },
  {
    id: "user-partner-responsibilities",
    title: "Responsibilities of Users and Partners",
    icon: <Users />,
    content: (
      <>
        Users must:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Provide accurate and complete information during dispute submission.</li>
          <li>Follow official channels for chargeback requests.</li>
          <li>Avoid unnotified or malicious chargebacks.</li>
          <li>Cooperate during the investigation process.</li>
        </ul>
      </>
    ),
  },
  {
    id: "company-duties",
    title: "Responsibilities of SevenUnique Tech Solutions",
    icon: <CheckCircle />,
    content: (
      <>
        SevenUnique must:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Review chargeback requests fairly and transparently.</li>
          <li>Maintain documentation and evidence for all transactions.</li>
          <li>Provide guidance and support throughout the dispute process.</li>
          <li>Process approved chargebacks securely and promptly.</li>
        </ul>
      </>
    ),
  },
  {
    id: "conclusion",
    title: "Conclusion",
    icon: <Shield />,
    content: (
      <>
        This Chargeback Policy ensures fairness, transparency, and accountability in dispute handling across SevenUnique’s services. Following these procedures helps maintain trust, operational integrity, and compliance.
      </>
    ),
  },
];


export default function ChargebackPolicy() {
  const [activeSection, setActiveSection] = useState("chargeback-process");
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
      <div className=" ">
        <section className="bg-white min-h-screen">
          <div className="bg-[#F4FCFF] rounded-2xl shadow-lg">
            <section>
              <div className="max-w-8xl mx-auto px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Sidebar Navigation */}
                  <div className="lg:w-1/4">
                    <div className="sticky top-32 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <PolicySectionsIcon className="w-5 h-5 mr-2" />
                        Policy Sections
                      </h3>
                      <ul className="space-y-2">
                        {chargeSections.map((section, index) => (
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
                                                                 ${
                                                                   activeSection ===
                                                                   section.id
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
                    {/* Hero */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                      <div className="text-center mb-10">
                        <div className="mb-6">
                         <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#358EBA] to-[#0C3D4C] rounded-full flex items-center justify-center">
                          <FileText className="w-10 h-10 text-white" />
                        </div>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                          Chargeback Policy
                        </div>
                        {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-4">
                          Cancellations must be requested within the allowed period for eligibility
                        </h1> */}
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

                    {/* Sections */}
                    {chargeSections.map((section, index) => (
                      <div
                        key={index}
                        id={section.id}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className="bg-white p-8 rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-start mb-4">
                          <div className="text-2xl mr-4 bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white p-3 rounded-lg flex items-center justify-center">
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
                          <SummaryIcon className="w-5 h-5 mr-2" />
                          Policy Summary
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Chargebacks should be raised via your bank
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Contact support first for faster resolution
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Refunds processed within 5–10 business days
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Non-refundable services include used or customized items
                          </li>
                        </ul>
                        <button className="bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-md mt-4 flex items-center">
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Contact Support
                        </button>
                      </div>
                    </div>

                    {/* FAQ */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm mt-10">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <FAQIcon className="w-5 h-5 mr-2" />
                        Frequently Asked Questions
                      </h3>
                      <div className="space-y-4">
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                            <svg className="w-4 h-4 text-[#115D8E] mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                              <path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <path d="M12 17.5C12.2761 17.5 12.5 17.2761 12.5 17C12.5 16.7239 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.7239 11.5 17C11.5 17.2761 11.7239 17.5 12 17.5Z" fill="currentColor" />
                            </svg>
                            How do I request a chargeback?
                          </h4>
                          <p className="text-gray-600">
                            Chargebacks must be requested through your payment provider.
                            However, reaching out to us first may resolve the issue faster.
                          </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                            <svg className="w-4 h-4 text-[#115D8E] mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                              <path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <path d="M12 17.5C12.2761 17.5 12.5 17.2761 12.5 17C12.5 16.7239 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.7239 11.5 17C11.5 17.2761 11.7239 17.5 12 17.5Z" fill="currentColor" />
                            </svg>
                            What if I cancel after the allowed window?
                          </h4>
                          <p className="text-gray-600">
                            Cancellations after the eligibility window are not refundable,
                            except in rare technical or service failure cases.
                          </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                            <svg className="w-4 h-4 text-[#115D8E] mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                              <path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <path d="M12 17.5C12.2761 17.5 12.5 17.2761 12.5 17C12.5 16.7239 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.7239 11.5 17C11.5 17.2761 11.7239 17.5 12 17.5Z" fill="currentColor" />
                            </svg>
                            How long until I receive my refund?
                          </h4>
                          <p className="text-gray-600">
                            Approved refunds take 5–10 business days to reflect in your account,
                            depending on your bank or payment provider.
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

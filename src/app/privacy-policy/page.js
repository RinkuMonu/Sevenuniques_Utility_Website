"use client";

import { useState, useRef, useEffect } from "react";
import {
  Shield,
  Database,
  UserCheck,
  Share2,
  Lock,
  Clock,
  User,
  Cookie,
  Link,
  Child,
  Phone,
  RefreshCw,
  FileText,
} from "lucide-react";

const SecurityIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L4 6V11C4 16.52 7.58 21.74 12 23C16.42 21.74 20 16.52 20 11V6L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="8" r="1" fill="currentColor" />
  </svg>
);

const CollectionIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 10H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const UsageIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="3"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 21H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 17V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CookiesIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <circle cx="10" cy="10" r="1" fill="currentColor" />
    <circle cx="14" cy="14" r="1" fill="currentColor" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
  </svg>
);

const RightsIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M5.5 21C5.5 17.6863 8.18629 15 11.5 15H12.5C15.8137 15 18.5 17.6863 18.5 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 16V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 8H12.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// ==== PRIVACY SECTIONS WITH SVG ICONS ====

const privacySections = [
  {
    id: "introduction",
    icon: <Shield />,
    title: "Introduction",
    content: [
      "Sevenunique Tech Solutions Private Limited (“Company”, “we”, “our”, or “us”) values the privacy of its users and is fully committed to safeguarding personal data. This Privacy Policy outlines how we collect, use, store, and protect your information when you access or use our services, including but not limited to Bharat Bill Payment System (BBPS), Aadhaar Enabled Payment System (AEPS), Domestic Money Transfer (DMT), Mobile/DTH Recharges, Utility Bill Payments, and other financial technology solutions offered by us.",
      "Our goal is to ensure that your personal and financial information is handled responsibly, securely, and in compliance with applicable laws and regulatory guidelines, including those prescribed by the Reserve Bank of India (RBI), National Payments Corporation of India (NPCI), and Unique Identification Authority of India (UIDAI).",
      "By using our services, you consent to the collection and use of your information in accordance with this Privacy Policy. We only gather information that is essential to provide seamless transactions, meet compliance obligations, and enhance user experience. We do not sell or rent your personal data to unauthorized third parties.",
      "We encourage all users to read this policy carefully to understand how we handle your information and to exercise your rights effectively."
    ]
  },
  {
    id: "information-we-collect",
    icon: <Database />,
    title: "Information We Collect",
    content: [
      "At Sevenunique Tech Solutions Private Limited, we are committed to collecting only such information that is necessary for providing our financial and utility services in a safe, secure, and legally compliant manner. The categories of information we may collect include:",
      "Personal Information — such as your full name, contact details, Aadhaar, PAN, and KYC-related data.",
      "Financial Information — including bank details, UPI IDs, wallet data, and transaction history.",
      "Technical Information — like IP address, device details, and usage logs.",
      "Service-Related Information — including transaction IDs, AEPS logs, and bill payment records.",
      "Disclaimer: All information collected is used only for lawful, service-related, and regulatory purposes."
    ],
  },
  {
    id: "how-we-use-your-information",
    icon: <Shield />,
    title: "How We Use Your Information",
    content: [
      "Your information is used solely to deliver secure and compliant services.",
      "Processing Transactions — For BBPS, AEPS, DMT, and other payments.",
      "Identity Verification — For KYC and AML compliance under RBI/NPCI/UIDAI.",
      "Security & Fraud Prevention — To detect and prevent unauthorized access.",
      "Customer Support — For grievance handling and dispute resolution.",
      "Notifications — To send alerts, updates, and confirmations.",
      "Service Improvement — To enhance reliability and user experience.",
      "Disclaimer: Your data is never sold or misused beyond the purposes stated herein."
    ],
  },
  {
    id: "data-sharing",
    icon: <UserCheck />,
    title: "Data Sharing and Disclosure",
    content: [
      "We do not sell or rent user data. However, your data may be shared:",
      "With Regulators — RBI, NPCI, UIDAI, and other authorities for compliance.",
      "With Service Providers — Banks, payment gateways, and telecom partners for processing transactions.",
      "For Legal Obligations — When required by law or court orders.",
      "During Business Transfers — In mergers or acquisitions, under this same policy.",
      "Disclaimer: We ensure that any third party receiving data maintains equivalent protection standards."
    ],
  },
  {
    id: "data-security",
    icon: <Share2 />,
    title: "Data Security",
    content: [
      "We prioritize the confidentiality and integrity of all user information.",
      "Encryption — All sensitive data is encrypted and transmitted securely.",
      "Access Controls — Only authorized personnel can access data.",
      "Fraud Monitoring — Continuous surveillance for suspicious activities.",
      "Infrastructure Protection — Firewalls, intrusion detection, and audits.",
      "Data Minimization — We retain only what’s necessary for compliance.",
      "User Responsibility — Users must safeguard login and OTP credentials.",
      "Disclaimer: Despite all measures, no system is 100% secure; usage implies consent."
    ]
  },
  {
    id: "data-retention",
    icon: <Lock />,
    title: "Data Retention",
    content: [
      "We retain data only as long as required for business or legal reasons.",
      "Legal Compliance — RBI, NPCI, and UIDAI mandate certain retention periods.",
      "Support — Retained for grievance resolution and dispute handling.",
      "Security Logs — Stored for fraud monitoring and compliance.",
      "Data Minimization — Deleted or anonymized once no longer required.",
      "User Rights — Deletion requests are honored unless restricted by law.",
      "Disclaimer: Retention is governed by Indian regulations and may override user requests."
    ],
  },
  {
    id: "user-rights",
    icon: <Clock />,
    title: "Your Rights",
    content: [
      "You have the right to:",
      "Access — View personal and financial data we hold about you.",
      "Correct — Request updates to inaccurate or outdated information.",
      "Delete — Request deletion of personal data (subject to legal limits).",
      "Opt-Out — Restrict non-essential communications.",
      "Raise Concerns — Contact our Grievance Officer for any issues.",
      "Disclaimer: Some rights may be limited under Indian financial laws."
    ],
  },
  {
    id: "cookies",
    icon: <User />,
    title: "Cookies and Tracking",
    content: [
      "We use cookies and similar technologies to improve service functionality and security.",
      "Purpose — To enhance navigation, analytics, personalization, and fraud detection.",
      "Types — Essential, performance, functional, and analytical cookies.",
      "Control — Users may block cookies, though it may limit platform functionality.",
      "Disclaimer: By continuing to use our platform, you consent to our cookie usage."
    ],
  },
  {
    id: "third-party-links",
    icon: <Lock />,
    title: "Third-Party Links",
    content: "Our services may contain links to third-party websites or payment gateways. We are not responsible for their privacy practices. Please review their respective policies before sharing data. Interaction with third-party platforms is at your own discretion.",
  },
  {
    id: "childrens-privacy",
    icon: <Clock />,
    title: "Children’s Privacy",
    content: "Our services are intended only for users aged 18 and above. We do not knowingly collect data from minors. Parents or guardians may contact us to have such information removed.",
  },
  {
    id: "grievance-officer",
    icon: <User />,
    title: "Grievance Officer",
    content:

      ["In compliance with Indian law, we have appointed a Grievance Officer to address privacy-related concerns.",
        "Grievance Officer",
        "Sevenunique Tech Solutions Private Limited",
        "Email: support@7unique.in / info@7unique.in",
        "Phone: 0141-4511098",
        "All complaints will be acknowledged and resolved promptly.",]
  },
  {
    id: "policy-updates",
    icon: <Link />,
    title: "Policy Updates",
    content: "This Privacy Policy may be updated periodically to reflect changes in laws or technology. The latest version will always be available on our website with the effective date. Continued use of our services indicates acceptance of the revised policy.",
  },
];

export default function Privacy() {
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
      <section className="bg-white min-h-screen ">
        <div className="bg-[#F4FCFF] rounded-2xl shadow-lg">
          <section>
            <div className="max-w-8xl mx-auto px-4 py-12">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4">
                  <div className="sticky top-32 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#0C3D4C] mb-4 flex items-center">
                      <InfoIcon className="w-5 h-5 mr-2" />
                      Contents
                    </h3>
                    <ul className="space-y-2">
                      {privacySections.map((section, index) => (
                        <li key={index}>
                          <button
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer ${activeSection === section.id
                              ? "bg-gradient-to-r from-[#358EBA] to-[#0C3D4C] text-white font-medium"
                              : "text-gray-600 hover:bg-gray-600"
                              }`}
                          >
                            <section
                              className={`w-4 h-4 mr-4
                                                                 ${activeSection ===
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
                  <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                    <div className="text-center mb-10">
                      <div className="mb-6">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#358EBA] to-[#0C3D4C] rounded-full flex items-center justify-center">
                          <FileText className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="inline-block bg-gradient-to-r from-[#358EBA] to-[#0C3D4C] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                        Privacy Policy
                      </div>
                      {/* <h3 className="text-3xl md:text-4xl font-bold text-[#0C3D4C] mb-6 mt-4">
                                                    We value your privacy and are committed to protecting your personal information
                                                </h3> */}
                      <div className="h-1 w-20 bg-gradient-to-r from-[#358EBA] to-[#0C3D4C] mx-auto mb-6 rounded-full"></div>
                      <p className="text-[#0C3D4C] text-start text-lg leading-relaxed">
                        <span className="font-bold">Effective Date:</span>{" "}
                        28-09-2025 <br />
                        <span className="font-bold">Company:</span> Sevenunique
                        Tech Solutions Private Limited <br />
                        <span className="font-bold">
                          Registered Office:
                        </span>{" "}
                        Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer,
                        Jagatpura, Jaipur, Rajasthan, India - 302017 <br />
                        <span className="font-bold">
                          Corporate Office:
                        </span>{" "}
                        Office No. 101/2, ‘Vakratunda Corporate Park Premise
                        Co-operative Society Limited, Off. Aarey Road, Goregaon
                        (East), Mumbai - 400 063
                      </p>
                    </div>
                  </div>

                  {privacySections.map((section, index) => (
                    <div
                      key={index}
                      id={section.id}
                      ref={(el) => (sectionRefs.current[index] = el)}
                      className="bg-white p-8 rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-start mb-4">
                        <div className="text-2xl mr-4 bg-gradient-to-r from-[#358EBA] to-[#0C3D4C] text-white p-3 rounded-lg flex items-center justify-center">
                          {/* <section.icon className="w-6 h-6" /> */}
                          <section className="w-4 h-5 mr-2 text-white">
                            {section.icon}
                          </section>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {section.title}
                        </h3>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>
                      {Array.isArray(section.content) ? (
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {section.content.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 leading-relaxed">{section.content}</p>
                      )}
                    </div>
                  ))}

                  {/* Additional Info Card */}
                  <div className="bg-gradient-to-r from-[#0C3D4C] to-[#777777] p-1 rounded-2xl shadow-lg mt-10">
                    <div className="bg-white rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <InfoIcon className="w-5 h-5 mr-2" />
                        Need More Information?
                      </h3>
                      <p className="text-gray-600 mb-4">
                        If you have any questions about our privacy practices or
                        how we handle your data, please do not hesitate to
                        contact our privacy team.
                      </p>
                      <button className="bg-gradient-to-r from-[#358EBA] to-[#0C3D4C] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-md">
                        Contact Privacy Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

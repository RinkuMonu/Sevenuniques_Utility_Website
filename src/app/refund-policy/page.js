"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  XCircle,
  RotateCcw,
  AlertTriangle,
  Scale,
  Mail,
  ClipboardList,
  FileText,
  Globe,
  Ban,
  RotateCcwIcon,
  XOctagon,
  Clock,
  Divide,
  Slash,
  CreditCard,
  Phone,
  AlertTriangleIcon,
} from "lucide-react";


const refundSections = [
  {
    id: "cancellation-process",
    title: "Cancellation and Refund Policy",
    icon: <XCircle className="w-5 h-5" />,
    content: [
      "1. Overview\nThis Cancellation and Refund Policy of SevenUnique Tech Solutions Private Limited explains the terms under which customers can cancel a service or request a refund for payments made through our digital platform www.sevenuniques.com. Our objective is to ensure complete transparency, fairness, and customer satisfaction while maintaining compliance with applicable laws, industry standards, and the policies of our third-party service providers.",

      "We provide multiple digital services, including bill payments, AEPS, DMT, recharges, loan applications, insurance, pancard processing, and other utility-based financial services. Once a service or transaction is successfully completed, it cannot be cancelled as our systems operate in real time with partner institutions. However, in certain cases such as failed, duplicate, or incomplete transactions, customers may be eligible for a refund.",

      "Refund requests must be submitted within 7 days of the transaction by emailing info@7unique.in with complete transaction details. Approved refunds will be processed within 5–10 business days to the original payment method used.",

      "At SevenUnique Tech Solutions Private Limited, we strive to maintain honesty, efficiency, and customer trust by ensuring a transparent process for handling cancellations and refunds."
    ]
  },
  {
    id: "scope-of-services",
    title: "Scope of Services",
    icon: <Globe className="w-5 h-5" />,
    content: [
      "2. Scope of Services\nThis Cancellation and Refund Policy applies to all services provided by SevenUnique Tech Solutions Private Limited through its official website www.sevenuniques.com and mobile application. The policy covers every transaction and digital service offered to customers, ensuring clarity in all engagements and payments.",

      "Our platform provides a wide range of digital and financial services designed to make daily transactions seamless, secure, and convenient. These include Loan Application and Processing, BBPS (Bharat Bill Payment System) for utility payments such as electricity, gas, water, and broadband bills, as well as AEPS (Aadhaar Enabled Payment System) for secure biometric transactions.",

      "We also offer DMT (Domestic Money Transfer) services for quick fund transfers, along with Insurance solutions for various categories. Additionally, users can access Mobile, DTH, and Data Card Recharges, Credit Card Bill Payments, and pancard Application services through our platform.",

      "Beyond these, SevenUnique Tech Solutions Private Limited may provide other related utility, government, or financial services as per customer requirements. This policy governs all such services to maintain transparency, protect customer interests, and ensure fair handling of cancellations and refunds across every transaction."
    ]
  },
  {
  id: "cancellation-policy",
  title: "Cancellation Policy",
  icon: <Ban className="w-5 h-5" />,
  content: [
    "3. Cancellation Policy\nAt SevenUnique Tech Solutions Private Limited, transactions are processed in real time through secure integrations with banks, government APIs, and third-party service providers. Therefore, once a transaction or service request has been successfully completed by a user, distributor, retailer, or white-label partner, it cannot be cancelled or reversed under normal circumstances.",

    "However, if a service remains pending due to technical errors, server downtime, or verification delays, the concerned party may submit a cancellation request within 7 days from the date of transaction. The request must be sent to info@7unique.in with the Transaction ID, Registered Mobile Number, and Service Type clearly mentioned.",

    "All cancellation requests are thoroughly reviewed by our support team and, when necessary, coordinated with relevant banks, billers, or API partners to verify eligibility. Approval or rejection of such requests depends on the service status and confirmation from associated partners.",

    "Please note that SevenUnique Tech Solutions Private Limited reserves the right to deny cancellation if the transaction has already been processed or acknowledged as successful by the service provider. This ensures operational integrity, transparency, and fairness across all levels—user, distributor, retailer, and white-label partner."
  ]
}
,
  {
  id: "refund-eligibility",
  title: "Refund Eligibility",
  icon: <RotateCcwIcon className="w-5 h-5" />,
  content: [
    "4. Refund Eligibility\nAt SevenUnique Tech Solutions Private Limited, refunds are considered only under specific circumstances to ensure transparency and fairness for all customers, distributors, retailers, and white-label partners.",

    "1. Failed or Unsuccessful Transactions:\nIf a service such as a recharge, bill payment, fund transfer, or AEPS transaction fails, but the amount is deducted from the customer’s account and not credited to the intended beneficiary, a refund request will be eligible for review and processing.",

    "2. Duplicate Payments:\nRefunds may be issued if a user, distributor, retailer, or partner accidentally makes multiple payments for the same service. In such cases, only the extra payment(s) will be refunded after verification.",

    "3. Technical or System Errors:\nRefunds are applicable if a transaction fails due to technical errors, server downtime, or integration issues on our platform or with our third-party service providers. Each case will be carefully validated before approval.",

    "4. Unfulfilled PAN/Insurance Applications:\nIf a pancard or insurance application cannot be processed due to administrative, system, or partner-related issues beyond the customer’s control, the amount paid for the service may be refunded after verification.",

    "All refund requests must be submitted within 7 days of the transaction, and approval is subject to verification by SevenUnique Tech Solutions Private Limited and associated partners."
  ]
},
  {
  id: "non-refundable-services",
  title: "Non-Refundable Services",
  icon: <XOctagon className="w-5 h-5" />,
  content: [
    "5. Non-Refundable Services\nAt SevenUnique Tech Solutions Private Limited, certain services and fees are strictly non-refundable to maintain operational efficiency, comply with third-party agreements, and ensure transparency for all users, distributors, retailers, and white-label partners.",

    "1. Successfully Completed Transactions:\nOnce a service such as recharge, bill payment, AEPS, or DMT transfer is successfully processed, the transaction is considered final and cannot be refunded, as the amount has already been credited to the respective beneficiary or service provider.",

    "2. Loan Processing and Verification Fees:\nFees associated with loan application, verification, processing, or approval are non-refundable, even if the loan is not sanctioned, because these charges cover administrative and operational costs incurred by our platform and its partners.",

    "3. pancard and Government Applications:\npancard application fees or similar government service charges are non-refundable once submitted, as these payments are processed directly by the relevant government agency or API partner.",

    "4. Third-Party Confirmed Services:\nAny transaction where a third-party provider or government API has already confirmed success is non-refundable.",

    "Additionally, all service charges, convenience fees, and applicable GST are non-refundable under any circumstances. This ensures clarity and prevents disputes regarding payments for completed or confirmed services."
  ]
},
{
  id: "refund-processing-time",
  title: "Refund Processing Time",
  icon: <Clock className="w-5 h-5" />,
  content: [
    "6. Refund Processing Time\nAt SevenUnique Tech Solutions Private Limited, we aim to process all approved refunds efficiently and transparently to maintain customer trust and satisfaction across all users, distributors, retailers, and white-label partners.",

    "Once a refund request has been reviewed and approved, the processing time typically ranges from 5 to 10 business days from the date of approval. The exact timing may vary depending on factors such as internal verification procedures, bank processing schedules, and payment gateway requirements.",

    "Refunds are generally credited to the original payment method used for the transaction, which may include bank accounts, credit or debit cards, UPI, or other online payment systems. Customers are requested to ensure that the payment details provided during the transaction remain valid and active to avoid any delays.",

    "In cases where the original payment method is no longer active or available, the customer may be required to provide an alternative verified method to receive the refund.",

    "While we strive to process refunds promptly, delays may occasionally occur due to bank holidays, system maintenance, or third-party processing delays. By providing clear timelines and regular updates, SevenUnique Tech Solutions Private Limited ensures transparency and a smooth refund experience for all parties involved."
  ]
},
{
  id: "partial-refunds",
  title: "Partial Refunds or Adjustments",
  icon: <Divide className="w-5 h-5" />,
  content: [
    "7. Partial Refunds or Adjustments\nAt SevenUnique Tech Solutions Private Limited, we understand that in some cases, a service may have been partially delivered before a cancellation request is made. To ensure fairness to both the customer and our platform, partial refunds or adjustments may be provided based on the extent of service usage.",

    "For example, if a user, distributor, retailer, or white-label partner has already utilized part of a service—such as a recharge, bill payment, AEPS/DMT transaction, or loan processing—any refund will be calculated proportionately. This calculation considers the services already rendered, resources consumed, and any applicable administrative or processing fees.",

    "Customers requesting partial refunds must submit the cancellation or refund request within 7 days of the transaction, providing all relevant details including Transaction ID, registered mobile number, and service type. Each request is carefully verified by our support team and, where necessary, coordinated with third-party partners or service providers to determine the refundable amount.",

    "By implementing proportionate refunds and adjustments, SevenUnique Tech Solutions Private Limited ensures transparency, minimizes disputes, and maintains trust with all stakeholders, including users, distributors, retailers, and white-label partners."
  ]
},
{
  id: "late-cancellations",
  title: "Late Cancellations or Post-Usage",
  icon: <Slash className="w-5 h-5" />,
  content: [
    "8. Late Cancellations or Post-Usage\nAt SevenUnique Tech Solutions Private Limited, it is important to clarify the terms regarding late cancellations or services already utilized. Once a customer, distributor, retailer, or white-label partner has availed or benefited from a service, the transaction is considered complete, and no refund will be processed.",

    "This policy applies to all services provided through our platform, including AEPS withdrawals, bill payments, mobile/DTH recharges, fund transfers (DMT), loan processing, insurance, pancard applications, and other utility or financial services. Once these services are successfully executed, the amount paid is non-recoverable, as the service has been delivered and the associated resources have been consumed.",

    "Customers are encouraged to review transaction details carefully before initiating any request. Any cancellation request after service completion will be declined, even if submitted within the typical refund window, because the service has already been rendered and cannot be reversed.",

    "By maintaining this policy, SevenUnique Tech Solutions Private Limited ensures operational integrity, fairness, and transparency while protecting both the company and its partners from disputes related to post-usage refund claims."
  ]
},
{
  id: "refund-method",
  title: "Refund Method",
  icon: <CreditCard className="w-5 h-5" />,
  content: [
    "9. Refund Method\nAt SevenUnique Tech Solutions Private Limited, all refunds are processed using the same payment method that was used for the original transaction to ensure transparency and security for all customers, distributors, retailers, and white-label partners. This includes payments made through bank accounts, credit or debit cards, UPI, or other online payment systems.",

    "The refund process begins once a request has been verified and approved by our support team. Refunds are then initiated promptly and are subject to processing times of 5–10 business days, depending on the payment method and the associated bank or payment gateway’s timelines.",

    "In cases where the original payment method is unavailable or inactive—for example, a closed bank account or expired card—the customer may be required to provide an alternative verified payment method to receive the refund. Our team will guide the customer through this process to ensure funds are transferred safely and accurately.",

    "SevenUnique Tech Solutions Private Limited ensures that refunds are secure, traceable, and credited only to the rightful account, minimizing any risk of fraud or error. Clear communication is maintained throughout the refund process so that all parties are informed about the status and expected timeline of the refund."
  ]
},
{
  id: "contact-us",
  title: "Contact Us",
  icon: <Phone className="w-5 h-5" />,
  content: [
    "10. Contact Us\nFor any cancellation or refund-related concerns, customers, distributors, retailers, and white-label partners are encouraged to contact SevenUnique Tech Solutions Private Limited. Our support team is available to assist with queries, verification of transactions, and guidance on the refund process.",

    "Head Office:\nPlot No. 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India, 302017",

    "Corporate Office:\nOffice No. 101/2, Vakratunda Corporate Park Premises Co-operative Society Limited, Off. Aarey Road, Goregaon (East), Mumbai – 400 063",

    "Email Addresses:\nsupport@7unique.in\ninfo@7unique.in",

    "Phone:\n0141-4511098",

    "Customers are requested to provide complete details when contacting support, including Transaction ID, registered mobile number, service type, and date of transaction, to ensure timely processing of queries or refund requests.",

    "Our team strives to respond promptly and provide clear instructions for cancellation or refund procedures. By maintaining multiple contact channels, we aim to ensure transparency, trust, and a seamless experience for all stakeholders.",

    "SevenUnique Tech Solutions Private Limited is committed to efficient and secure handling of all customer concerns and ensures that each case is reviewed thoroughly in coordination with third-party service providers or partners when required."
  ]
},
{
  id: "disclaimer",
  title: "Disclaimer",
  icon: <AlertTriangleIcon className="w-5 h-5" />,
  content: [
    "11. Disclaimer\nSevenUnique Tech Solutions Private Limited operates as a technology facilitator for a wide range of financial and utility transactions, including bill payments, recharges, AEPS/DMT services, loans, insurance, PAN applications, and other digital financial services. The company provides a secure platform to enable transactions between customers and third-party service providers, including banks, utility companies, insurance providers, and government agencies.",

    "While we strive to ensure accurate, timely, and efficient processing of all services, final settlement, transaction confirmation, and refund eligibility may depend on the policies, systems, and procedures of third-party service providers, banks, or government APIs. Delays, errors, or discrepancies arising from these entities may impact the timing or approval of cancellations and refunds.",

    "SevenUnique Tech Solutions Private Limited does not assume liability for delays, failures, or losses resulting from third-party actions beyond our control. All refunds, cancellations, and adjustments are subject to verification and confirmation in coordination with the relevant service providers.",

    "The company reserves the right to amend, update, or modify this Cancellation and Refund Policy at any time without prior notice, in order to comply with changes in legal, regulatory, operational, or technological requirements. Customers, distributors, retailers, and white-label partners are encouraged to regularly review the policy to remain informed of any updates."
  ]
},
];

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState("cancellation-process");
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
      <div className="container ">
        <section className="bg-white min-h-screen">
          <div className="bg-[#F4FCFF] rounded-2xl shadow-lg">
            <section>
              <div className="max-w-8xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Table of Contents */}
                  <div className="lg:w-1/4">
                    <div className="sticky top-32 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <ClipboardList className="w-5 h-5 mr-2 text-[#115D8E]" /> Policy Sections
                      </h3>
                      <ul className="space-y-2">
                        {refundSections.map((section, index) => (
                          <li key={index}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer gap-2 ${activeSection === section.id
                                ? "bg-[#115D8E] text-white font-medium"
                                : "text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                              {section.icon}
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
                      <div className=" mb-10">
                        <div className="mb-6">
                          <div className="w-20 h-20  bg-gradient-to-r from-[#358EBA] to-[#24576C] rounded-full flex items-center justify-center">
                            <FileText className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                          Cancellation & Refund Policy
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-4">
                          You can cancel your service within 7 days of purchase for a refund as per our policy
                        </h3>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#358EBA] to-[#24576C] mb-6 rounded-full"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          Our refund policy is designed to be fair and transparent. We understand that circumstances may change, and we strive to make the cancellation and refund process as straightforward as possible. Below you will find detailed information about our policies, eligibility criteria, and processes.
                        </p>
                        <p className="space-y-4 text-black text-lg leading-relaxed">SevenUnique Tech Solutions Private Limited<br />
                          Email: info@7unique.in<br />
                          Website: www.sevenuniques.com<br />
                          Effective Date: 07 October 2025</p>
                      </div>
                    </div>

                    {refundSections.map((section, index) => (
                      <div
                        key={index}
                        id={section.id}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className="bg-white p-8 rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-start mb-4">
                          <div className="text-2xl mr-4 bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white p-2 rounded-lg">
                            {section.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {section.title}
                          </h3>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>
                        <p className="text-gray-600  whitespace-pre-line">{section.content}</p>
                      </div>
                    ))}
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
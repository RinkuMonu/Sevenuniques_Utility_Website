"use client";
import { useState, useRef, useEffect } from "react";
import {
  Shield,
  User,
  Scale,
  Megaphone,
  ClipboardList,
  FileText,
  HelpCircle,
  CheckCircle,
  UserCheck,
  Users,
  CreditCard,
  Briefcase,
  Lock,
  BookOpen,
  ShieldCheck,
  ShieldAlert,
  FileCheck,
  Gavel,
  Repeat,
  Power,
  ShieldCheckIcon,
  FileSignature,
  MessageSquare,
  PhoneCall,
  Package,
} from "lucide-react";

const termsSections = [
  {
    id: "Appointment as Retailer / Partner / Distributor / API Partner",
    title: "Data Security",
    icon: <Shield className="w-5 h-5" />,
    content: [
      "These Terms and Conditions govern the commercial arrangement between Sevenunique Tech Solutions Private Limited and the appointed Retailer, Partner, Distributor, or API Partner (hereinafter collectively referred to as “Partner”). This agreement, along with any attachments, represents the entire understanding between Sevenunique Tech Solutions Private Limited and the Partner. Any amendments or changes to this agreement shall be valid only if made in writing and authorized by an official representative of Sevenunique Tech Solutions Private Limited.",
      "Sevenunique Tech Solutions Private Limited is a digital financial facilitation service provider, incorporated under the Companies Act, 2013, with its registered office at Plot No. 97, Dakshinpuri-I, Shrikishanpura, Sanganer, Jagatpura, Jaipur – 302017, Rajasthan. The term “Company” or “Sevenunique Tech Solutions Private Limited” shall, unless repugnant to the context, include its successors and permitted assigns."

    ]
  },
  {
    id: "OPERATION OF RETAILER / DISTRIBUTOR / API PARTNER OUTLET",
    title: "Operation of Retailer / Distributor / API Partner Outlet",
    icon: <User className="w-5 h-5" />,
    content: [
      "1.1 Rendering of Services\nDuring the term of this agreement, the Retailer, Distributor, or API Partner (hereinafter collectively referred to as “Partner”) shall render the services (“Services”) of Sevenunique Tech Solutions Private Limited, including but not limited to BBPS, DMT, and AEPS, through its authorized personnel, agents, or representatives. Sevenunique Tech Solutions Private Limited reserves the right, at its sole discretion, to modify, add, or remove any Services, including the procedure, process, or methods for rendering these Services. The Partner shall comply with all such modifications or updates as notified by the Company.",

      "1.2 Marketing and Promotion\nThe Partner shall only market, promote, and sell those services which are expressly permitted by Sevenunique Tech Solutions Private Limited. They do not have an automatic right to market, sell, or promote any service offered by other Partners or external service providers. In case of any addition to the Services, Sevenunique Tech Solutions Private Limited will notify the Partner at its discretion. The Partner may offer such new services only after receiving explicit approval. The Company may also instruct the Partner to discontinue any Service at any time without assigning any reason.",

      "1.3 Infrastructure and Equipment Requirements\nThe Partner shall acquire and maintain all necessary infrastructure and equipment at their own cost, including but not limited to computers, peripherals, internet or broadband connectivity, mobile devices, or any other device compatible with Sevenunique Tech Solutions Private Limited software/services. For MPOS or other application-based services, the software shall only be installed on devices registered with the Company. The Partner must prominently display Company signage, logos, and other branding materials at the outlet in accordance with the Company’s directions.",

      "1.4 Transaction Integrity and Fraud Prevention\nAll Services must be rendered strictly through Sevenunique Tech Solutions Private Limited’s portal/software. Offline transactions, fake receipts, or fraudulent activity are strictly prohibited. Any Partner found engaging in malicious, fraudulent, or unauthorized activity, including offline transactions, shall be liable for civil and criminal action under applicable laws, including but not limited to the Indian Penal Code, 1860, and the Criminal Procedure Code, 1973.",

      "1.5 Licensing, Permits, and Approvals\nThe Partner shall obtain all necessary licenses, permits, and approvals required for operating the outlet and providing the Services. All costs, including application fees, license fees, statutory charges, and applicable taxes, shall be borne solely by the Partner.",

      "1.6 Business Hours and Outlet Availability\nThe Partner shall ensure that the outlet remains open during normal business hours or as specified by Sevenunique Tech Solutions Private Limited, and in compliance with applicable laws and regulations. Any changes to the business hours must be approved by the Company.",

      "1.7 Conduct of Operations and Compliance\nThe Partner shall use the outlet exclusively for providing the Services. The Partner shall not allow or display any illegal, offensive, obscene, misleading, defamatory, libelous, vulgar, or otherwise prohibited content at the outlet. Activities that are considered immoral, unlawful, or against public interest are strictly prohibited.",

      "1.8 Training, Technology Support, and Promotional Materials\nSevenunique Tech Solutions Private Limited, at its discretion, may provide training manuals, technology support, ongoing guidance, and promotional materials such as brochures, charts, signage, and pamphlets. These materials must be used solely for the promotion and provision of Sevenunique Tech Solutions Private Limited Services and cannot be repurposed for other activities.",

      "1.9 Non-Interference with Other Partners\nThe Partner shall not encroach upon or interfere with the operational areas of other appointed Partners and shall not undertake any action that may adversely affect the business operations or prospects of other Partners appointed by Sevenunique Tech Solutions Private Limited."
    ]
  },
  {
    id: "DEFINITIONS AND INTERPRETATION",
    title: "Definitions and Interpretation",
    icon: <Scale className="w-5 h-5" />,
    content: [
      "2.1 Definitions\nUnless the context otherwise requires, the following capitalized terms shall have the meanings assigned below:",

      "Applicable Law: All Indian statutes, rules, regulations, notifications, directives, and guidelines applicable to the services, including but not limited to RBI Guidelines on Business Correspondents, Payment & Settlement Systems Act, 2007, Prepaid Payment Instruments Guidelines, and any successor laws or implementing regulations.",

      "Applicant: Any individual above 18 years of age, using an operational mobile phone connection, who approaches a Retail Partner, Distributor, or API Partner at authorized outlet locations to avail Sevenunique Tech Solutions Private Limited Services.",

      "Company Rules: Policies issued by Sevenunique Tech Solutions Private Limited for its strategic partners, Retail Partners, and Distributors, including codes of conduct, sales and management policies, and operational guidelines as published on the Website/Platform and amended from time to time.",

      "Consumer: An Applicant who, after completing necessary formalities and submission of required documents, is found eligible by Sevenunique Tech Solutions Private Limited to avail Services and has opened a Membership Account.",

      "Governmental Authority: Any national, state, or local government or entity exercising legislative, executive, regulatory, or administrative functions having jurisdiction over the parties, their operations, or transactions.",

      "INR / Rs: Indian Rupees, the lawful currency of India.",

      "Intellectual Property: All intellectual property used in relation to the Company Services, including:",
      "- Software, manuals, program code, instructions, specifications, processes, and operational data.",
      "- Trademarks, service marks, business names, logos, symbols, and branding.",
      "- Promotional materials, advertisements, graphics, images, content, and the overall ‘look and feel’.",
      "- Techniques, formulas, patterns, compilations, processes, inventions, methodologies, and know-how.",

      "Tax / Taxes: All applicable taxes, duties, GST, cess, levies, or statutory charges, including any penalties, interest, or claims arising therefrom."
    ]
  },
  {
    id: "ACCEPTANCE AND APPOINTMENT AS RETAILER / DISTRIBUTOR / API PARTNER",
    title: "Policy Changes",
    icon: <Megaphone className="w-5 h-5" />,
    content:
      "By accepting these Terms, the Partner confirms their appointment as a Retailer, Distributor, or API Partner of Sevenunique Tech Solutions Private Limited. This agreement governs the commercial and operational relationship and supersedes all prior arrangements. Any amendment is valid only if issued in writing and authorized by an official Company representative.",
  },
  {
    id: "MERCHANT’S RIGHTS",
    title: "Merchant’s Rights",
    icon: <Shield className="w-5 h-5" />,
    content: [
      "Sevenunique Tech Solutions Private Limited may collect, store, and use information provided by the Partner to deliver services and/or contact the Partner regarding operational or transactional matters.",

      "The Company reserves the right to monitor Partner operations, audit transactions, and ensure compliance with these Terms and Applicable Law.",

      "API Partners are entitled to access their API reporting dashboards, including API usage reports, user reports, transaction reports, and documentation for monitoring and analytics."
    ]
  },
  {
    id: "PARTNER RESPONSIBILITIES",
    title: "Partner Responsibilities",
    icon: <UserCheck className="w-5 h-5" />,
    content: [
      "The Partner shall provide accurate, complete, and up-to-date information, including name, contact details, delivery address, age, gender, and payment information, necessary to complete Transactions.",

      "Retailers shall provide the Company Services to Consumers and earn commissions based on their transactions.",

      "Distributors are responsible for onboarding, managing, and supporting Retailers under them.",

      "In case of payment, chargeback, or any other financial disputes, the Retailer and Distributor are jointly responsible for resolving issues with Consumers.",

      "The Partner shall comply with all Company Rules, Applicable Laws, and regulatory requirements, and shall not engage in fraudulent or unauthorized activities."
    ]
  },
  {
    id: "DISTRIBUTOR / RETAILER / API PARTNER",
    title: "Distributor / Retailer / API Partner",
    icon: <Users className="w-5 h-5" />,
    content: [
      "3.1 Effective Date\nThese Terms and Conditions shall come into force from the date of acceptance of the Retailer / Partner / Distributor / API Partner Application Form (“Effective Date”). The Partner shall commence business within 30 (thirty) days from the date of acceptance, in accordance with these Terms and Conditions.",

      "3.2 Acknowledgement of Terms\nThe Partner acknowledges that they have read and understood these Terms at the time of application to Sevenunique Tech Solutions Private Limited for operating a retail outlet or API services. The Partner confirms that they have evaluated:",
      "- Financial requirements for running the business",
      "- Equipment required to provide services",
      "- Services enabled/available in their area",
      "- Risks associated with establishing and operating the Retail Outlet or API operations",

      "3.3 Appointment of Partner\nDuring the Term, Sevenunique Tech Solutions Private Limited appoints the Partner to establish and operate a retail outlet or API services at the address specified in the Application Form (“Retail Outlet” or “API Operations”). Any change in address requires prior written consent from the Company, signed by an authorized representative (VP level or above).",

      "3.4 Term of Appointment\nThe appointment shall remain valid until termination (“Term”). Sevenunique Tech Solutions Private Limited may withdraw the appointment by providing 1 (one) month written notice, except in cases of breach of these Terms by the Partner, where withdrawal may be immediate.",

      "3.5 Use of Designation\nThe Partner may describe themselves as an authorized Retailer / Distributor / API Partner of Sevenunique Tech Solutions Private Limited, but shall not represent themselves as able to bind the Company in any manner. They shall not portray themselves as employees, officers, or official representatives of the Company.",

      "3.6 Nature of Business\nSevenunique Tech Solutions Private Limited acts as a facilitator, distributor, and provider of services and products of various service providers, enabling Partners to expand the distribution network. The Company does not own the services/products provided by third parties.",

      "3.7 Service Availability and Responsibility\nThe Partner acknowledges that:",
      "- The Company makes reasonable efforts to provide services and products at best quality.",
      "- Technology systems may face interruptions due to upgrades, maintenance, or breakdowns, either on the Company’s side or the service providers’ side.",
      "- The Partner shall manage their business considering possible interruptions.",
      "- API Partners may access their API reports, user reports, transaction reports, and documentation for monitoring and operational purposes.",
      "- Retailers earn commission for services provided. Distributors manage and support their Retailers.",
      "- Any payment, chargeback, or financial dispute must be handled by the Retailer and Distributor, ensuring resolution with the Consumer."
    ]
  },
  {
    id: "PAYMENTS AND COMMISSIONS",
    title: "Payments and Commissions",
    icon: <CreditCard className="w-5 h-5" />,
    content: [
      "4.1 Non-Refundable Registration Fee\nThe Retailer / Distributor / API Partner shall deposit a non-refundable registration fee (“Registration Fee”) as per the commercial terms defined by Sevenunique Tech Solutions Private Limited on or before the Effective Date.",

      "4.2 Working Capital\nThe Retailer / Distributor / API Partner shall maintain and deposit with Sevenunique Tech Solutions Private Limited a working capital balance (“Working Capital”) in the designated bank account notified by the Company. This Working Capital will be an interest-free deposit. The Working Capital limit may be increased from time to time by way of written intimation. The Partner must ensure that the Working Capital balance is always maintained as per requirements.",

      "4.3 Working Capital Limit\nThe Partner shall be entitled to a credit limit equivalent to the Working Capital balance in the books of the Company (“Credit Limit”).",
      "- Transactions may only be carried out up to the Credit Limit.",
      "- If transactions exceed the Credit Limit, the system shall automatically block further transactions until the limit is replenished.",
      "- For increasing the Credit Limit, the Partner must deposit additional funds with the Company.",
      "- The Company shall not be responsible for any liabilities arising if deposits are made elsewhere without authorization.",

      "4.4 Commissions and Margins\nRetailers shall earn commission on each transaction/service provided.",
      "- Distributors shall earn commission based on the activities of their appointed Retailers.",
      "- API Partners shall have visibility of their API usage, transactions, and revenue reports, and may earn commission as per agreed commercial terms.",
      "- Commission shall be credited either on a daily/monthly/transaction basis into the Working Capital account or as notified through the Company’s portal.",
      "- Rates of commission/margins shall be updated from time to time via the Company’s portal, and such updates shall be deemed accepted by the Partner.",
      "- Any chargeback, refund, or payment dispute shall be resolved by the Retailer and Distributor, and the Company shall not be liable for such issues.",

      "4.5 Prices and Discounts\nAll service prices, charges, fees, and discounts shall be determined solely by Sevenunique Tech Solutions Private Limited.",
      "- Partners are not authorized to offer unauthorized discounts, subsidies, or incentives to customers without written approval.",
      "- The Company reserves the right to modify prices or cancel any unauthorized sales/discounts entered in the system.",

      "4.6 Taxes\nAll applicable taxes (including GST, VAT, service tax, municipal/local taxes) shall be borne by the Partner.",
      "- The Company may deduct tax as per law while making payments.",
      "- The Partner is solely responsible for their tax compliance.",

      "4.7 Operational Costs\nAll expenses for running the Retail Outlet / API operations (electricity, internet, telephone, staff salary, travel, promotions, etc.) shall be borne solely by the Retailer / Distributor / API Partner.",

      "4.8 Activity / Inactivity Charges\nA monthly minimum charge plus applicable taxes may be levied by the Company and deducted directly from the Partner’s Working Capital. The Partner hereby agrees to pay such charges as communicated from time to time.",

      "4.9 Set-off\nThe Company may deduct any amount payable by the Partner under these Terms from any sums due to the Partner, and the Partner hereby consents to such adjustment."
    ]
  },
  {
  id: "EMPLOYEES",
  title: "Employees",
  icon: <Briefcase className="w-5 h-5" />,
  content: [
    "5.1 Responsibility for Personnel\nThe Retailer / Distributor / API Partner shall be solely and exclusively responsible for the recruitment, employment, engagement, supervision, and management of all personnel employed or engaged by it for the purpose of carrying out services under this Agreement. This responsibility includes, but is not limited to:",
    "- Timely payment of wages, salaries, allowances, bonuses, and all other applicable benefits.",
    "- Ensuring compliance with all labour-related laws and regulations such as the Employees Provident Fund and Miscellaneous Provisions Act, 1952, the Employees State Insurance Act, 1948, the Payment of Bonus Act, 1965, the Payment of Gratuity Act, 1972, and any amendments thereto, as well as any other applicable laws and rules as notified from time to time by Governmental Authorities.",
    "- Ensuring that all statutory contributions, including but not limited to PF, ESI, Professional Tax, Labour Welfare Fund, and applicable insurances, are properly deducted and deposited within the prescribed time limits.",

    "5.2 Responsibility for Acts and Omissions\nThe Partner acknowledges and agrees that it shall be fully responsible and liable for the conduct, performance, negligence, or misconduct of its employees, subordinates, representatives, contractors, or any other personnel engaged by it.",
    "- Any loss, damage, liability, or claim arising out of such acts or omissions shall be borne solely by the Retailer / Distributor / API Partner.",
    "- The Company (Sevenunique Tech Solutions Private Limited) shall not, under any circumstances, be held responsible or liable for any employment-related disputes, claims, or obligations of such personnel.",
    "- The Partner shall indemnify and keep the Company indemnified against any claim, demand, or action initiated by such personnel or any Governmental Authority in connection with their employment."
  ]
},
{
  id: "EXCLUSIVITY AND NON-COMPETE",
  title: "Exclusivity and Non-Compete",
  icon: <Lock className="w-5 h-5" />, 
  content: [
    "6.1 Exclusivity During Term\nThe Retailer / Distributor / API Partner acknowledges and agrees that, during the entire tenure of this Agreement, it shall devote its best efforts to promote and provide the services of Sevenunique Tech Solutions Private Limited and shall not, without prior written approval of the Company, engage in any activity that may conflict with the business interest of the Company.",

    "6.2 Non-Compete Obligations\nThe Partner shall not, directly or indirectly, through itself or through any other person, entity, or associate, whether as an officer, employee, partner, consultant, shareholder, investor, or in any other capacity:",
    "a) Competing Services: Market, sell, offer, or perform any services that are identical or substantially similar to the services facilitated by Sevenunique Tech Solutions Private Limited under BBPS, AEPS, DMT, or any other digital financial services.",
    "b) Employee/Consultant Solicitation: Solicit, encourage, or attempt to induce any employee, consultant, or agent of Sevenunique Tech Solutions Private Limited to terminate their relationship with the Company or to engage with the Partner or its affiliates.",
    "c) Interference with Business Relationships: Solicit, interfere with, or attempt to disrupt the contractual or commercial relationships between Sevenunique Tech Solutions Private Limited and its customers, suppliers, service providers, or partners.",
    "d) Unauthorized Branding: Use or attempt to use any trade name, logo, trademark, service mark, or business identity which is identical, similar, or deceptively similar to that of Sevenunique Tech Solutions Private Limited or its associated brands.",

    "6.3 Breach Consequences\nAny violation of the above exclusivity or non-compete provisions shall be treated as a material breach of this Agreement. In such event:",
    "- The Company shall have the right to immediately terminate this Agreement without notice.",
    "- The Partner shall be liable to compensate the Company for any direct or indirect loss, damages, costs, or claims arising due to such breach.",
    "- The Company shall also have the right to seek legal remedies, including but not limited to injunctions, restraining orders, or damages as per applicable law."
  ]
},
{
  id: "INTELLECTUAL PROPERTY",
  title: "Intellectual Property",
  icon: <BookOpen className="w-5 h-5" />, 
  content: [
    "7.1 Ownership of Rights\nNo license, ownership, or right under any patents, copyrights, trademarks, or other intellectual property rights of Techsync Pay, its affiliates, its service providers, or third parties shall be granted to or conferred upon the Retailer, Partner, Distributor, or Super Distributor by virtue of this Agreement.",
    "The Retailer, Partner, Distributor, or Super Distributor shall not acquire any right, interest, or title in the trademarks, trade names, logos, or any other intellectual property belonging to Techsync Pay or its affiliates. Further, they are strictly prohibited from using such intellectual property on rubber stamps, visiting cards, letterheads, websites, advertisements, or any other material, unless prior written authorization is obtained from Techsync Pay.",

    "7.2 Protection of Intellectual Property\nThe Retailer, Partner, Distributor, or Super Distributor agrees to protect the logo, trade name, and trademark of Techsync Pay and shall not use them in any unauthorized or misleading manner. Specifically, they shall not use the Company’s logo or trademark to issue receipts or acknowledgments in a way that creates a false impression of authorization or legitimacy.",

    "If any such unauthorized use is discovered, the Retailer, Partner, Distributor, or Super Distributor shall:",
    "- Indemnify, defend, and hold harmless Techsync Pay from any loss, damage, or liability arising from such infringement.",
    "- Be subject to strict action, including permanent deactivation of services, termination of this Agreement, and any legal proceedings (civil and/or criminal) that Techsync Pay deems appropriate under applicable law."
  ]
},
{
  id: "SECURITY AND FRAUD PREVENTION",
  title: "Security and Fraud Prevention",
  icon: <ShieldCheck className="w-5 h-5" />, 
  content: [
    "8.3 Security of POS User ID and Password\nThe Retailer, Distributor, or API Partner shall be solely and exclusively responsible for safeguarding the confidentiality and security of their User ID, login credentials, and passwords relating to access of Sevenunique Tech Solutions Private Limited services or any associated accounts.",
    "All activities conducted through such User IDs or accounts shall be deemed to be performed by the Retailer/Distributor/API Partner themselves, and they shall bear full responsibility for any consequences arising therefrom.",
    "Sevenunique Tech Solutions Private Limited shall not be liable for any loss, damage, or liability incurred due to the Retailer’s or Distributor’s failure to maintain strict confidentiality of such credentials.",

    "8.4 Unauthorized Access\nThe Retailer, Distributor, or API Partner shall take all necessary precautions to prevent unauthorized or illegal use of Sevenunique Tech Solutions Private Limited services and unauthorized access to their accounts provided by the Company.",
    "In the event of any misuse, misappropriation, leakage of passwords, or unauthorized access caused by insufficient security measures of the Retailer/Distributor/API Partner:",
    "- Sevenunique Tech Solutions Private Limited shall not be responsible or liable.",
    "- The full responsibility shall remain with the Retailer/Distributor/API Partner.",
    "Sevenunique Tech Solutions Private Limited shall take all commercially reasonable and technologically viable measures to protect its platform and prevent unauthorized access. However, the ultimate responsibility of securing login credentials rests with the Retailer/Distributor/API Partner.",

    "8.5 Fraud / Fake Transactions\nSevenunique Tech Solutions Private Limited shall not be held responsible or liable for any fraudulent, fake, or unauthorized transactions carried out by any third party using the Retailer’s/Distributor’s/API Partner’s login credentials or account.",
    "While Sevenunique Tech Solutions Private Limited implements strong encryption and security protocols to safeguard user data and transactions, it cannot control the misuse of sensitive information such as login credentials or passwords once shared with the Retailer/Distributor/API Partner.",
    "Accordingly, the Retailer/Distributor/API Partner shall:",
    "- Strictly follow all standard security guidelines issued by Sevenunique Tech Solutions Private Limited for protecting login credentials.",
    "- Ensure that User IDs and passwords are not disclosed, shared, or mishandled in any way.",
    "- Accept full responsibility for any fraudulent activities or financial losses that may arise due to negligence in maintaining account security."
  ]
},
{
  id: "WARRANTIES AND COVENANTS",
  title: "Warranties and Covenants of the Retailer / Partner / Distributor",
  icon: <ShieldAlert className="w-5 h-5" />, 
  content: [
    "9.1 The Retailer / Partner / Distributor hereby warrants, covenants, and undertakes that it shall:",
    "(a) Promptly, effectively, efficiently, and professionally sell, market, distribute, and promote the Services of Sevenunique Tech Solutions Private Limited, and shall promptly respond to all inquiries raised by any customer or potential customer in relation to such Services.",
    "(b) At all times co-operate with representatives of Sevenunique Tech Solutions Private Limited, and promptly report any complaints, grievances, or customer feedback relating to the Services which may come to its notice.",
    "(c) Conduct all operations strictly in compliance with applicable laws, the Terms and Conditions of this Agreement, and all guidelines, circulars, or instructions issued by Sevenunique Tech Solutions Private Limited from time to time.",
    "(d) Promote and safeguard the business interests and reputation of Sevenunique Tech Solutions Private Limited.",
    "(e) Not undertake or omit, or cause to be undertaken or omitted, any act, deed, or activity, directly or indirectly, which may cause financial loss, reputational harm, or any damage whatsoever to Sevenunique Tech Solutions Private Limited.",
    "(f) Employ a sufficient number of qualified and trained personnel to provide the Services in an effective manner.",
    "(g) Ensure that all personnel employed by it comply fully with these Terms and Conditions, and acknowledge that the Retailer / Partner / Distributor shall remain solely responsible for all acts and omissions of its personnel.",
    "(h) Not enter into any agreement, arrangement, or contract with customers or any third parties that is in contravention of applicable laws or inconsistent with these Terms and Conditions.",
    "(i) Ensure adherence by its employees, subordinates, agents, or representatives to the professional conduct, dress code, and etiquette prescribed by Sevenunique Tech Solutions Private Limited from time to time.",
    "(j) Ensure that none of the Services are denied to any person or group of persons, except with the express written consent or instructions of Sevenunique Tech Solutions Private Limited.",
    "(k) Not engage in any form of unfair, unlawful, or unethical trade or practice.",
    "(l) Not permit unauthorized persons to enter the Retail Outlet, nor allow any unauthorized person to access computers, servers, or systems at the Retail Outlet, or to access any information, material, accounts, or records related to Sevenunique Tech Solutions Private Limited Services.",
    "(m) Not permit any other individual or entity to conduct any business, trade, or professional activity of any nature at the Retail Outlet without the prior written approval of Sevenunique Tech Solutions Private Limited.",
    "(n) Obtain and maintain all required approvals, consents, permits, licenses, registrations, and waivers from the relevant authorities necessary to perform its obligations under this Agreement.",

    "9.2 The Retailer / Partner / Distributor agrees that it shall be solely liable and responsible for any seizure, confiscation, or inquiry by governmental or statutory authorities relating to any instruments, devices, or materials provided by Sevenunique Tech Solutions Private Limited, arising out of any actual or alleged illegal or unlawful activity.",

    "9.3 The Retailer / Partner / Distributor shall be solely responsible for obtaining and maintaining adequate insurance coverage, including but not limited to cash handling insurance and transit insurance, to safeguard the business of Sevenunique Tech Solutions Private Limited from time to time.",

    "9.4 The Retailer / Partner / Distributor undertakes to ensure that the consumer information including contact details, phone numbers, and any other credentials captured on the platform of Sevenunique Tech Solutions Private Limited are genuine, authentic, and obtained directly from the customer. The Retailer / Partner / Distributor shall not insert, use, or substitute its own, fake, or inaccurate credentials on behalf of the customer under any circumstances.",

    "9.5 During the Term of this Agreement, the Retailer / Partner / Distributor shall provide Sevenunique Tech Solutions Private Limited, or any statutory authority, auditor, regulator, or authorized representative, unrestricted access to inspect, examine, audit, and/or take copies of any records, books, or documents in relation to the Services.",

    "9.6 The Retailer / Partner / Distributor shall co-operate with internal and external auditors, regulators, and representatives of Sevenunique Tech Solutions Private Limited, and ensure prompt and accurate audit of its records and data. Further, the Retailer / Partner / Distributor agrees to co-operate in good faith and use best efforts to rectify any deficiencies or irregularities identified during such audits within a reasonable period of time.",

    "9.7 The Retailer / Partner / Distributor shall diligently perform its responsibilities under this Agreement and shall strive to maximize the sales of Sevenunique Tech Solutions Private Limited Services to the best of its ability. The Retailer / Partner / Distributor shall always maintain a transparent and professional relationship with customers, and any specified Distributor under this Agreement."
  ]
},
{
  id: "REPRESENTATIONS AND WARRANTIES",
  title: "Representations and Warranties",
  icon: <FileCheck className="w-5 h-5" />, 
  content: [
    "10.1 The Retailer / Partner / Distributor affirms that it has had full and adequate opportunity to read and review this Agreement in detail, and has been advised of its rights and obligations under the terms of this Agreement. It has also had sufficient time to evaluate and investigate the provision of Services contemplated under this Agreement, including the financial requirements, commercial obligations, and risks associated therewith.",

    "10.2 The execution, delivery, and performance of this Agreement by the Retailer / Partner / Distributor shall not constitute, result in, or cause any violation, conflict, or breach of any other agreement, contract, covenant, undertaking, arrangement, or obligation to which the Retailer / Partner / Distributor is a party or by which it is otherwise legally bound.",

    "10.3 The Retailer / Partner / Distributor confirms that it has and shall continue to have full legal power, authority, and capacity to enter into, be bound by, and perform all obligations and responsibilities required under this Agreement. No approval, consent, or authorization from any other person, entity, authority, or government agency is required for the Retailer / Partner / Distributor to validly execute and perform this Agreement.",

    "10.4 The Retailer / Partner / Distributor further represents that it is not subject to any agreement, decree, judgment, or order that is inconsistent with, restricts, or otherwise limits the performance of its obligations under this Agreement.",

    "10.5 The entry into, execution of, and performance of obligations under these Terms and Conditions by the Retailer / Partner / Distributor shall not result in any breach of applicable laws, rules, regulations, directives, or its own charter documents, nor shall it cause any breach of any agreement or commitment by which the Retailer / Partner / Distributor is bound.",

    "10.6 The Retailer / Partner / Distributor confirms that it has obtained, and shall maintain throughout the term of this Agreement, adequate and valid insurance coverage in respect of all liabilities that may arise under this Agreement, including but not limited to risks associated with cash handling, transactions, fraud prevention, and other obligations.",

    "10.7 The warranties provided under this Agreement by the Retailer / Partner / Distributor are in addition to, and do not exclude, limit, or restrict any of the implied warranties, obligations, or responsibilities imposed under applicable law with respect to the activities and obligations contemplated herein."
  ]
},
{
  id: "MISCELLANEOUS",
  title: "Miscellaneous",
  icon: <Gavel className="w-5 h-5" />, 
  content: [
    "11.1 Governing Law:\nThese Terms and Conditions shall be governed by and construed in accordance with the laws of India, as in force from time to time, and shall be subject exclusively to the jurisdiction of the competent courts at Delhi, India.",

    "11.2 Dispute Resolution:\nThe Parties shall attempt in good faith to resolve any disputes, controversies, or claims arising out of or relating to these Terms and Conditions amicably. In the event that such disputes cannot be resolved, the same shall be referred to arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996, and any amendments or re-enactments thereof. The arbitration shall be conducted by a sole arbitrator mutually appointed by the Parties. The venue of arbitration shall be New Delhi, and the arbitration proceedings shall be conducted in the English language. The arbitral award shall be final and binding on the Parties.\nFor clarity, the Retailer / Partner / Distributor is recognized solely as a business associate of Sevenunique Tech Solutions Private Limited and not as a customer of Sevenunique. Hence, no claims shall be entertained under the Consumer Protection Act, 2019. Any dispute between a Retailer and a Distributor under this Agreement shall be resolved by an authorized officer of Sevenunique Tech Solutions Private Limited, whose decision shall be final and binding.",

    "11.3 Non-Exclusive Appointment:\nThe Retailer / Partner / Distributor acknowledges and agrees that all rights granted under this Agreement, including the limited license to use Sevenunique’s Intellectual Property, are non-exclusive in nature. Nothing contained herein shall restrict Sevenunique from appointing other Retailers, Partners, or Distributors to provide similar services in any territory or area.",

    "11.4 Force Majeure:\nIf Sevenunique Tech Solutions Private Limited is prevented, hindered, or delayed in the performance of any of its obligations due to circumstances beyond its reasonable control, including but not limited to natural disasters, fire, flood, war, strikes, lockouts, governmental restrictions, regulatory actions, system breakdowns, cyberattacks, or other similar events (“Force Majeure Event”), the performance of Sevenunique’s obligations shall be suspended for the duration of such event. If the Force Majeure Event continues for more than thirty (30) days, Sevenunique shall have the right to terminate this Agreement without liability or compensation.",

    "11.5 Injunctive Relief:\nSevenunique shall be entitled to seek injunctive relief, including interim relief, against the Retailer / Partner / Distributor in the event of any actual or threatened breach of the terms of this Agreement to prevent irreparable harm to its business, reputation, goodwill, or Intellectual Property.",

    "11.6 Relationship:\nThe relationship between the Retailer / Partner / Distributor and Sevenunique Tech Solutions Private Limited is on a “Principal-to-Principal” basis. Nothing in this Agreement shall be construed as creating any partnership, joint venture, employer-employee, or principal-agent relationship. The Retailer / Partner / Distributor shall not represent itself as an agent of Sevenunique in any manner, nor shall it have the authority to bind Sevenunique to any obligations with third parties.",

    "11.7 Notice:\nAny notice, communication, or correspondence under this Agreement shall be made in writing and delivered by (i) hand delivery, (ii) registered courier with acknowledgment, or (iii) email with delivery confirmation. Such notices shall be delivered to the addresses specified in the Application Form or any updated address notified by either Party.",

    "11.8 Assignment:\nThe Retailer / Partner / Distributor shall not assign, transfer, or delegate its rights or obligations under this Agreement without the prior written consent of Sevenunique. Any unauthorized assignment shall be void. This Agreement shall be binding upon and insure to the benefit of the Parties, their legal heirs, successors, and permitted assigns.",

    "11.9 Software:\nFor the purposes of this Agreement, “Software” shall mean any proprietary or licensed software provided by Sevenunique or its technology partners, including any documentation, modules, or APIs related thereto. The Retailer / Partner / Distributor shall have only a limited, non-transferable, non-exclusive right to use the Software strictly for the purposes of this Agreement.",

    "11.10 Software Restrictions:\nThe Retailer / Partner / Distributor shall not, directly or indirectly:",
    "(a) Sublicense, assign, transfer, distribute, or otherwise provide the Software to any third party;",
    "(b) Modify, alter, decompile, or reverse-engineer the Software or any portion thereof;",
    "(c) Make unauthorized use of Sevenunique’s Intellectual Property or proprietary technologies.",

    "11.11 Severability:\nIf any provision of this Agreement is declared invalid, illegal, or unenforceable by a competent authority, the remaining provisions shall continue to remain valid and enforceable to the fullest extent permitted by law. The Parties shall negotiate in good faith to replace any such invalid provision with a legally enforceable substitute provision that reflects the original intent of the Parties.",

    "11.12 Amendment:\nNo amendment, modification, or addition to this Agreement shall be valid unless made in writing and duly executed by authorized representatives of Sevenunique Tech Solutions Private Limited.",

    "11.13 Waiver:\nAny waiver by Sevenunique of a breach of any provision shall not be deemed a waiver of any other or subsequent breach. The failure of Sevenunique to enforce any provision shall not constitute a waiver of such provision.",

    "11.14 Third Parties:\nNothing in this Agreement shall be construed as conferring any rights, benefits, or remedies on any third party, other than the Parties hereto and their permitted successors or assigns.",

    "11.15 Further Actions:\nEach Party agrees to execute and deliver such further documents, instruments, or assurances and take such additional actions as may be reasonably required to carry out the provisions and intent of this Agreement.",

    "11.16 Costs:\nThe Retailer / Partner / Distributor shall be solely responsible for all applicable taxes, levies, duties, and expenses incurred in connection with its appointment and obligations under this Agreement.",

    "11.17 Rights Cumulative:\nThe rights, remedies, and powers provided in this Agreement are cumulative in nature and not exclusive of any rights or remedies available under applicable law. No single or partial exercise of any right shall prevent the further exercise of such right or any other right."
  ]
},
{
  id: "CHANGE IN RETAILER / PARTNER / DISTRIBUTOR",
  title: "Change in Retailer / Partner / Distributor",
  icon: <Repeat className="w-5 h-5" />, 
  content: [
    "12.1 Individual Retailer/Partner/Distributor\nIf the Retailer, Partner, or Distributor appointed under this Agreement is an individual person, then in the unfortunate event of his/her death, permanent incapacity, or inability to operate the Retail Outlet, the successor, legal heir, or duly authorized assignee of such individual may continue to operate the Retail Outlet.\nHowever, such continuation shall only be permitted after obtaining prior written approval from Sevenunique Tech Solutions Private Limited. Without such approval, the successor or assignee will not have any legal right to operate the Retail Outlet under this Agreement.",

    "12.2 Partnership Firm or Company as Retailer/Partner/Distributor\nIf the Retailer, Partner, or Distributor appointed under this Agreement is a partnership firm or a registered company, and there is a change in control of such entity, the following conditions shall apply:",
    "- In case of a partnership firm, if there is a change in partnership structure (such as entry of a new partner, exit of an existing partner, or reconstitution of the firm).",
    "- In case of a company, if there is a change in management or change in majority shareholding resulting in transfer of control.",
    "In such cases, the successors in interest, new management, or permitted assignees of the partnership or company may continue to operate the Retail Outlet only after obtaining prior written consent from Sevenunique Tech Solutions Private Limited.",

    "12.3 Mandatory Consent\nIn both situations above (individual or firm/company), Sevenunique Tech Solutions Private Limited reserves the sole right to approve or deny such continuation. This ensures that the operations of the Retail Outlet remain in accordance with the standards, compliance requirements, and business interests of Sevenunique Tech Solutions Private Limited."
  ]
},
{
  id: "TERMINATION",
  title: "Termination",
  icon: <Power className="w-5 h-5" />, 
  content: [
    "13.1 Expiry of Term\nThese Terms and Conditions shall automatically cease to have effect upon the expiry of the contractual Term, unless renewed or extended by Sevenunique Tech Solutions Private Limited in writing.",

    "13.2 Termination Without Cause\nEither Party (Sevenunique Tech Solutions Private Limited or the Retailer/Partner/Distributor) may terminate this Agreement without assigning any reason, by providing a written notice of thirty (30) days to the other Party.",

    "13.3 Termination by Sevenunique Tech Solutions Private Limited with Notice\nSevenunique Tech Solutions Private Limited shall be entitled to terminate the appointment of any Retailer/Partner/Distributor by giving thirty (30) days’ written notice under the following circumstances:",
    "a) Breach of any provision of these Terms and Conditions, which, if capable of being remedied, is not cured within fifteen (15) days of receipt of written notice specifying the breach.",
    "b) Breach of any obligation concerning Sevenunique Tech Solutions Private Limited Intellectual Property.",
    "c) Repeated failure to deposit proceeds of daily transactions as required.",
    "d) Sevenunique Tech Solutions Private Limited, upon review, determines that the Retailer/Partner/Distributor is not suitable or fit to continue operations.",
    "e) Unauthorized assignment or transfer of rights and obligations under this Agreement.",
    "f) Insolvency or bankruptcy proceedings against the Retailer/Partner/Distributor, including voluntary or involuntary petitions, liquidation, receivership, or composition for the benefit of creditors.",

    "13.4 Immediate Termination Without Notice\nSevenunique Tech Solutions Private Limited may immediately terminate the appointment of the Retailer/Partner/Distributor without prior notice in the following cases:",
    "a) Actions or defaults by the Retailer/Partner/Distributor that cause damage to the reputation or goodwill of Sevenunique Tech Solutions Private Limited.",
    "b) Situations covered under Force Majeure where continuation is not feasible.",
    "c) Any change in control or management of the Retailer/Partner/Distributor without prior written approval.",
    "d) Any event that materially affects the Retailer/Partner/Distributor’s ability to perform its obligations.",
    "e) Conviction of the Retailer/Partner/Distributor or its directors/partners/proprietors for any criminal offence.",
    "f) The Retailer/Partner/Distributor is declared to be of unsound mind.",

    "13.5 Termination with Short Notice\nSevenunique Tech Solutions Private Limited reserves the right to terminate the appointment of any Retailer/Partner/Distributor by providing a written notice of seven (7) days, with or without assigning any reason.",

    "13.6 Consequences of Termination\nTermination under this clause shall be without prejudice to any other legal rights or remedies available to Sevenunique Tech Solutions Private Limited. Upon termination:",
    "a) Within fifteen (15) days from termination, the Retailer/Partner/Distributor shall settle and clear all dues payable to Sevenunique Tech Solutions Private Limited.",
    "b) Immediately return all Confidential Information, documents, training materials, software, hardware, POP material, and any other property belonging to Sevenunique Tech Solutions Private Limited.",
    "c) Cease to use Sevenunique Tech Solutions Private Limited Intellectual Property, including trade names, software, signboards, banners, or marketing material.",
    "d) Permanently delete or remove all software provided by Sevenunique Tech Solutions Private Limited from its systems and provide remote access to allow Sevenunique Tech Solutions Private Limited to verify and disable installations.",
    "e) Grant Sevenunique Tech Solutions Private Limited access to its IT systems for up to ninety (90) working days post-termination for compliance and disabling activities.",
    "f) Cease all promotion, marketing, and advertising activities related to Sevenunique Tech Solutions Private Limited and its services.",

    "13.7 Obligations During Notice Period\nOnce termination notice is served, or upon expiry of the Term, the Retailer/Partner/Distributor shall strictly comply with all systems, processes, and service guidelines during the final one (1) month of operation. All customer queries shall be redirected to Sevenunique Tech Solutions Private Limited.",

    "13.8 Continuation of Services During Notice Period\nIf directed by Sevenunique Tech Solutions Private Limited, the Retailer/Partner/Distributor shall continue to provide services during the notice period, until otherwise instructed.",

    "13.9 Settlement of Accounts\nUpon termination, both Parties shall reconcile and settle all financial claims. The Retailer/Partner/Distributor acknowledges that it shall have no right to claim compensation, damages, loss of profit, or opportunity cost of any kind from Sevenunique Tech Solutions Private Limited post-termination."
  ]
},
{
  id: "INDEMNITY",
  title: "Indemnity",
  icon: <ShieldCheckIcon className="w-5 h-5" />, 
  content: [
    "14.1 General Obligation\nThe Retailer/Partner/Distributor (hereinafter referred to as “the Indemnifying Party”) hereby irrevocably undertakes to indemnify, defend, and hold harmless Sevenunique Tech Solutions Private Limited, including its affiliates, directors, officers, employees, agents, successors, and permitted assigns (collectively referred to as the “Indemnified Parties”) from and against any and all claims, demands, damages (including special, indirect, or consequential damages), liabilities, penalties, losses, costs, and expenses (including reasonable attorneys’ fees, expert witness fees, court costs, and professional advisory expenses) arising out of or in connection with:",

    "a) Negligence or Misconduct – Any negligent act, material omission, fraud, or willful misconduct of the Retailer/Partner/Distributor or its employees, agents, personnel, officers, or representatives resulting in:",
    "- i) Bodily injury, illness, disease, or death of any person;",
    "- ii) Damage, destruction, corruption, or loss of tangible or intangible property (including but not limited to computer systems, software, programs, data, or customer information);",
    "- iii) Violation of any applicable law, statute, regulation, rule, or ordinance.",

    "b) Breach of Law or Regulations – Any loss or prejudice suffered by the Indemnified Parties as a result of the Retailer/Partner/Distributor’s failure to comply with applicable laws, by-laws, rules, regulations, or industry guidelines.",

    "c) Unauthorized Representations – Any loss, claim, or damage caused due to the Retailer/Partner/Distributor providing false, misleading, or unauthorized representations to third parties, customers, or stakeholders on behalf of Sevenunique Tech Solutions Private Limited.",

    "d) Intellectual Property Infringement – Any claim, demand, or proceeding arising from the Retailer/Partner/Distributor’s infringement, misuse, or unauthorized use of Sevenunique Tech Solutions Private Limited’s Intellectual Property during the course of providing services under this Agreement.",

    "e) Employment and Labour Law Claims – Any claim made by the Retailer/Partner/Distributor’s employees, staff, agents, or personnel against Sevenunique Tech Solutions Private Limited in relation to employment disputes, salary claims, benefits, or non-compliance with labour laws, social security laws, or statutory obligations.",

    "f) Misrepresentation of Warranties – Any misrepresentation, breach, or falsification of the warranties, undertakings, or representations made by the Retailer/Partner/Distributor under these Terms and Conditions.",

    "14.2 Survival of Indemnity\nThe obligations of indemnity under this Clause shall survive the termination or expiry of this Agreement and shall continue to remain in full force and effect notwithstanding the discontinuation of business or relationship between the Parties.",

    "14.3 Right to Defend\nSevenunique Tech Solutions Private Limited shall have the right, at its sole discretion, to assume the defense of any claim or legal action brought against it. In such an event, the Retailer/Partner/Distributor shall fully cooperate with Sevenunique Tech Solutions Private Limited in defending such claims and shall not settle or compromise any claim without prior written approval of Sevenunique Tech Solutions Private Limited."
  ]
},

{
  id: "DECLARATION",
  title: "Declaration",
  icon: <FileSignature className="w-5 h-5" />,
  content: [
    "15.1 I/We hereby certify that all the information provided by me/us to Sevenunique Tech Solutions Private Limited is correct, true, and complete to the best of my/our knowledge and belief. I/We further confirm that I/We have carefully read and fully understood all the terms and conditions governing my/our engagement as a Retailer / Partner / Distributor / Super Distributor with the Company. I/We agree to abide by these terms and conditions at all times and accept that the Company may amend these terms and conditions from time to time. Such amendments shall be binding upon me/us as long as I/We remain associated with the Company in any capacity mentioned above.",

    "15.2 I/We confirm that I/We have received a copy of these terms and conditions and have also reviewed the same on the official website of the Company (www.sevenunique.com). I/We undertake to remain updated with any amendments, modifications, or additions made by the Company from time to time, as published on the website.",

    "15.3 I/We acknowledge and fully understand that the one-time registration fee paid by me/us is non-refundable under any circumstances. I/We further confirm that no cash payments have been made by me/us to any employee of the Company, and all payments have been made only through authorized channels.",

    "15.4 I/We undertake to always display the official rate list of the applicable charges on domestic remittance and other services offered under this Agreement. I/We shall not, under any circumstances, overcharge customers. I/We further undertake to ensure compliance with all applicable tax requirements, including Goods and Services Tax (GST), and shall be solely responsible for the payment of such taxes.",

    "15.5 I/We hereby declare that I/We have resigned from any prior associations with other Business Correspondents (BCs) or money transfer agencies and shall not engage with any such entities during my association with Sevenunique Tech Solutions Private Limited.",

    "15.6 I/We further declare and undertake that I/We will work exclusively with Sevenunique Tech Solutions Private Limited with respect to domestic money transfer and related services, unless and until my association is lawfully terminated by the Company or until I tender my resignation in accordance with the terms herein.",

    "15.7 I/We confirm that I/We have carefully read, fully understood, and expressly accept the terms and conditions governing this Agreement and undertake to comply with them in letter and spirit at all times."
  ]
},
{
  id: "COMMUNICATION DISCLAIMER",
  title: "Communication Disclaimer",
  icon: <MessageSquare className="w-5 h-5" />, 
  content: [
    "The Retailer / Partner / Distributor / Super Distributor hereby expressly agrees and consents that Sevenunique Tech Solutions Private Limited may communicate with him/her/it through various modes including but not limited to voice calls, SMS, WhatsApp, email, mobile app notifications, video messages, or any other digital/innovative means of communication as deemed appropriate by the Company.",

    "Such communications shall be considered an integral part of the services provided under this Agreement, and the Retailer / Partner / Distributor / Super Distributor shall not opt out of receiving these communications. The communications may include transactional messages, service updates, compliance-related instructions, promotional material, and advertisements, which shall all be binding on the recipient."
  ]
},
{
  id: "GRIEVANCE OFFICER",
  title: "Grievance Officer",
  icon: <PhoneCall className="w-5 h-5" />, 
  content: [
    "In case of any grievances, queries, or complaints related to services, personal information, transactions, or compliance under this Agreement, the Retailer / Partner / Distributor / Super Distributor may contact the Company at the details provided below:",

    "Grievance Officer\nSevenunique Tech Solutions Private Limited",
    "Plot No. 97, Dakshinpuri-I, Shrikishanpura, Sanganer, Jagatpura, Jaipur – 302017, Rajasthan",
    "Email: info@7unique.in",
    "Phone: 0141-4511098",

    "The Grievance Officer shall acknowledge and address complaints within the timelines prescribed under applicable law."
  ]
},
{
  id: "SHIPPING_AND_AMC",
  title: "Shipping, Delivery Policy & AMC",
  icon: <Package className="w-5 h-5" />, 
  content: [
    "Shipping and Delivery Policy\nThe Company shall make all reasonable efforts to deliver products/services within the estimated timelines provided at the time of transaction initiation. Delivery timelines are indicative and not guaranteed unless expressly committed in writing by the Company.",
    "Any delivery charges shall be calculated based on the shipping address provided by the customer and collected as part of the transaction. If the delivery is not completed within seven (7) days from the estimated date, the customer/partner shall promptly notify the Company at info@7unique.in for appropriate resolution.",

    "Annual Maintenance Charges (AMC)\nThe Retailer / Partner / Distributor / Super Distributor agrees to pay an Annual Maintenance Charge (AMC) of INR 500/- (inclusive of GST) per user per year.",
    "The AMC shall be billed annually in advance and is payable within the timelines specified by the Company. Non-payment of AMC may result in suspension or termination of services until dues are cleared.",

    "I/We hereby declare that I/We have read, understood, and agreed to the terms and conditions, declaration, grievance policy, shipping policy, and annual maintenance charge obligations stated herein.",

    "Signed & Accepted:\nRetailer / Partner / Distributor /",
    "Date: ____________",
    "Place: ___________"
  ]
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
      <div className="container">
        <section className="min-h-screen ">
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
                      <ul className="space-y-2" style={{height:"calc(100vh - 268px)",overflowY: "auto"}}>
                        {termsSections.map((section, index) => (
                          <li key={index}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer ${activeSection === section.id
                                ? "bg-[#115D8E] bg-opacity-10 text-white font-medium"
                                : "text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                              <span className="mr-2">{section.icon}</span>
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
                            <FileText className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                          Terms of Use
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-4">
                          Terms and Conditions – Sevenunique Tech Solutions Private Limited
                        </h3>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#358EBA] to-[#24576C] mx-auto mb-6 rounded-full"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          By accessing this webpage or application, you agree to be bound by these Terms and Conditions (“Terms”) in a legally binding agreement between you (“User” or “you”) and Sevenunique Tech Solutions Private Limited(“Company” or “we” or “us” or “our”). Please read these Terms carefully before using or accessing the Website/App. If you do not agree to these Terms, you may not use or access the Platform.
                        </p>
                      </div>
                    </div>
                    {termsSections.map((section, index) => (
                      <div
                        key={index}
                        id={section.id}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className="bg-white p-8 rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md"
                      >
                        {/* Title + Icon */}
                        <div className="flex items-start mb-4">
                          <div className="text-2xl mr-4 bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white p-2 rounded-lg">
                            {section.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>

                        {/* Content */}
                        <div className="flex flex-col gap-y-4">
                          {Array.isArray(section.content) ? (
                            section.content.map((item, i) => {
                              // Bullet list item (starts with "-")
                              if (item.trim().startsWith("-")) {
                                return (
                                  <li key={i} className="ml-6 list-disc text-gray-700 leading-relaxed">
                                    {item.replace(/^-+\s*/, "")}
                                  </li>
                                );
                              }

                              // Lettered list (starts with a), b), c) etc.)
                              if (/^[]\)/i.test(item.trim())) {
                                return (
                                  <li key={i} className="ml-6 list-[lower-alpha] text-gray-700 leading-relaxed">
                                    {item}
                                  </li>
                                );
                              }

                              // Default paragraph
                              return (
                                <p key={i} className="text-gray-700 leading-relaxed">
                                  {item}
                                </p>
                              );
                            })
                          ) : (
                            <p className="text-gray-700 leading-relaxed">{section.content}</p>
                          )}
                        </div>
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

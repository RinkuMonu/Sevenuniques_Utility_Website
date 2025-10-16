import React from 'react'
import Herobanner from '../../../../components/Bike Insurance/Herobanner'
import Features from '../../../../components/Bike Insurance/Features'
import  WhyChooseUs  from '../../../../components/Bike Insurance/WhyChooseUs'
import  FAQ  from '../../../../components/Bike Insurance/FAQ'
import  Process  from '../../../../components/Bike Insurance/Process'
import ContactBanner from '../../../../components/ContactBanner'
import AboutSection from '../../../../components/Bike Insurance/AboutSection'
import { Shield, Clock, DollarSign, FileText, Headphones, Award } from "lucide-react"
import { Search, CreditCard, CheckCircle } from "lucide-react"
import { BadgeCheck, Wallet, FileCheck } from "lucide-react"
import DynamicTable from '../../../../components/DynamicTable'

export default function page() {
    const data = {
        subheading: 'TICKET BOOKING',
        heading: 'Apka Safar, Hamara Support',
        description: 'Book your flights, hotels, trains, or buses easily and travel without worries, plan smart, and have fun throughout  your journey.',
        bgImage: '/image/insurance-bg.png',
        centerImage: '/image/car.png',
    };
    const aboutData = {
        badge: "About Us",
        heading: "Your Trusted Partner in Bike Insurance",
        paragraphs: [
            "We understand that your bike is more than just a vehicle - it's your freedom, your passion, and your daily companion. That's why we've dedicated ourselves to providing comprehensive insurance coverage that protects what matters most to you.",
            "With over a decade of experience in the insurance industry, we've helped thousands of riders find the perfect coverage for their needs. Our commitment to transparency, quick claim settlements, and customer satisfaction has made us a leading choice for bike insurance.",
        ],
        stats: [
            { value: "50K+", label: "Happy Customers" },
            { value: "98%", label: "Claim Success Rate" },
            { value: "24/7", label: "Support Available" },
        ],
        image: {
            src: "/insurance/about.jpg",
            alt: "Bike Insurance",
        },
        floatingCard: {
            iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            title: "Instant Policy Activation",
            desc: "Get covered in minutes with our streamlined digital process",
        },
    };

    const featuresData = {
        sectionTitle: "Comprehensive Bike Insurance Features",
        sectionDesc:
            "Protect your bike with our extensive coverage options designed to give you complete peace of mind on every ride.",
        features: [
            {
                icon: Shield,
                title: "Comprehensive Coverage",
                description:
                    "Complete protection against theft, accidents, natural disasters, and third-party liabilities.",
            },
            {
                icon: Clock,
                title: "Instant Policy Issuance",
                description:
                    "Get your bike insured in minutes with our quick and hassle-free digital process.",
            },
            {
                icon: DollarSign,
                title: "Affordable Premiums",
                description:
                    "Competitive pricing with flexible payment options and attractive discounts for safe riders.",
            },
            {
                icon: FileText,
                title: "Easy Claims Process",
                description:
                    "Simple, transparent claims settlement with minimal documentation and quick approvals.",
            },
            {
                icon: Headphones,
                title: "24/7 Customer Support",
                description:
                    "Round-the-clock assistance for policy queries, claims, and roadside emergencies.",
            },
            {
                icon: Award,
                title: "Cashless Repairs",
                description:
                    "Access to 5000+ network garages across India for hassle-free cashless repairs.",
            },
        ],
    };

    
const whydata = {
  title1: "Why Choose BikeSecure",
  title2: "  India's Most Trusted Bike Insurance Partner",
  desc: "     We provide comprehensive bike insurance solutions with unmatched benefits and customer service. Join over 1 million satisfied riders.",
  features: [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Complete protection against accidents, theft, natural calamities, and third-party liabilities.",
    },
    {
      icon: Clock,
      title: "Instant Policy Issuance",
      description: "Get your bike insured in minutes with our quick and easy online process.",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for claims, queries, and emergency roadside support.",
    },
    {
      icon: BadgeCheck,
      title: "Cashless Claims",
      description: "Network of 5000+ garages across India for hassle-free cashless repairs.",
    },
    {
      icon: Wallet,
      title: "Affordable Premiums",
      description: "Best rates in the market with flexible payment options and no hidden charges.",
    },
    {
      icon: FileCheck,
      title: "Quick Claim Settlement",
      description: "Fast and transparent claim process with 95% settlement rate within 7 days.",
    },
  ]
}



    const processdata = {
        title1: "Simple & Fast Process",
        title2: "Get Insured in 4 Easy Steps",
        desc: "  Our streamlined process ensures you get your bike insurance in minutes, not hours. No paperwork, no hassle.",
        steps: [
            {
                number: "1",
                icon: FileText,
                title: "Enter Bike Details",
                description: "Provide your bike registration number and basic details in our simple form.",
            },
            {
                number: "2",
                icon: Search,
                title: "Compare Plans",
                description: "View and compare multiple insurance plans tailored to your needs and budget.",
            },
            {
                number: "3",
                icon: CreditCard,
                title: "Make Payment",
                description: "Choose your preferred plan and complete secure payment using multiple options.",
            },
            {
                number: "4",
                icon: CheckCircle,
                title: "Get Instant Policy",
                description: "Receive your policy document instantly via email and SMS. Start riding protected!",
            },
        ]
    }

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
    const headers = [
        { key: 'rep', label: 'Sales Rep' },
        { key: 'dealId', label: 'Deal ID' },
        { key: 'amount', label: 'Amount' },
        { key: 'payout', label: 'Payout' },
        { key: 'status', label: 'Status' }
    ]
    const rows  = [
      { id: 1, rep: 'Raghu Sharma', dealId: 'D-9A3BEE', amount: '₹1000', payout: '₹2000', status: 'Paid' },
      { id: 2, rep: 'Ramkesh Meena', dealId: 'D-8C1FDD', amount: '₹720', payout: '₹1400', status: 'Paid' },
      { id: 3, rep: 'Kelash Singh', dealId: 'D-7G2HFF', amount: '₹680', payout: '₹2200', status: 'Pending' },
      { id: 4, rep: 'Ramesh Jaat', dealId: 'D-6K5LMM', amount: '₹900', payout: '₹1300', status: 'Unpaid' },
      { id: 5, rep: 'Rajesh Yadav', dealId: 'D-5N4PQR', amount: '₹1370', payout: '₹615', status: 'Paid' },
  ]

    return (
        <>
            <Herobanner data={data} />
            <AboutSection aboutData={aboutData} />
            <Features data={featuresData} />
            <Process processdata={processdata} />
            <WhyChooseUs whydata={whydata} />
            <FAQ faqs={faqs}/>
              <DynamicTable  headers={headers} rows={rows}/>
            <ContactBanner />
        </>
    )
}

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
    subheading: 'BUY CAR INSURANCE ONLINE',
    heading: 'Ab Har Safar Banega Sure Safar',
    description: 'Take affordable car insurance online. Compare plans, select coverage in accidents, theft, or natural calamities, and drive without any hassle with full peace of mind.',
    bgImage: '/image/insurance-bg.png',
    centerImage: '/image/car.png',
};

const aboutData = {
    badge: "About Us",
    heading: "Your Reliable Partner in Car Insurance.",
    paragraphs: [
        "We understand that your car is not just a car for you; it is your coziness, your liberty, and your constant companion. That's the reason why we offer detailed car insurance solutions to safeguard the most important things.",
        "We hold the experience of decades in assisting thousands of drivers to purchase car insurance online and renew car insurance, as well as select the most suitable car insurance at their own cost. We have become a preferred car insurance provider of choice on the internet due to our commitment and transparency, fast payments claim, and customer satisfaction.",
    ],
    stats: [
        { value: "50K+", label: "Happy Customers" },
        { value: "98%", label: "Claim Success Rate" },
        { value: "24/7", label: "Support Available" },
    ],
    image: {
        src: "/insurance/about.jpg",
        alt: "Car Insurance",
    },
    floatingCard: {
        iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Instant Policy Issuance",
        desc: "The process of getting your car insurance policy online takes minutes to achieve the goal in a hassle-free manner.",
    },
};

const featuresData = {
    sectionTitle: "Comprehensive Automobile Insurance Bundle",
    sectionDesc: "Guard your vehicle against all damages and enjoy a wide variety of car covers, which aim at providing total relaxation whenever you are driving.",
    features: [
        {
            icon: Shield,
            title: "Comprehensive Coverage",
            description: "Complete coverage of accidents, theft, fire, natural disasters, and liabilities by third parties.",
        },
        {
            icon: Clock,
            title: "Instant Policy Issuance",
            description: "The process of getting your car insurance policy online takes minutes to achieve the goal in a hassle-free manner.",
        },
        {
            icon: DollarSign,
            title: "Affordable Premiums",
            description: "Competitive rates and payments and discounts for safe drivers.",
        },
        {
            icon: FileText,
            title: "Easy Claims Process",
            description: "Minimal documentation and simple and transparent claims settlement.",
        },
        {
            icon: Headphones,
            title: "24/7 Customer Support",
            description: "Policy inquiries, claims, and emergency roadside assistance.",
        },
        {
            icon: Award,
            title: "Cashless Repairs",
            description: "Use the local garage to get hassle-free cashless repairs throughout the nation.",
        },
    ],
};

const whydata = {
    title1: "Why Choose Us",
    title2: "The Best-Known Budget Car Insurance Company in India.",
    desc: "We offer all-round coverage and insurance to our customers with the best benefits and services to the customers. On the road to 1 million content customers.",
    features: [
        {
            icon: Shield,
            title: "Comprehensive Coverage",
            description: "Covers accidents, theft, fire, natural disasters, and third-party liability.",
        },
        {
            icon: Clock,
            title: "Instant Policy Issuance",
            description: "Insure your car in just a few minutes using an online digital platform.",
        },
        {
            icon: Headphones,
            title: "24/7 Customer Support",
            description: "24-hour claims, queries, or emergency support.",
        },
        {
            icon: BadgeCheck,
            title: "Cashless Claims",
            description: "Nationwide network of garages to make repairing hassle-free and cashless.",
        },
        {
            icon: Wallet,
            title: "Affordable Premiums",
            description: "Pay accordingly, by plan rates with no extra fees.",
        },
        {
            icon: FileCheck,
            title: "Quick Claim Settlement",
            description: "Quick and open payables with 95% paid within 7 days.",
        },
    ]
}

const processdata = {
    title1: "Simple & Fast Process",
    title2: "Get Insured in 4 Easy Steps",
    desc: "Our streamlined process ensures you get your car insurance in minutes, not hours. No paperwork, no hassle.",
    steps: [
        {
            number: "1",
            icon: FileText,
            title: "Enter Vehicle Details",
            description: "In our form, give your car registration number and simple details.",
        },
        {
            number: "2",
            icon: Search,
            title: "Compare Plans",
            description: "Compare and contrast the plans of new car insurance, 3rd party car insurance, and first party.",
        },
        {
            number: "3",
            icon: CreditCard,
            title: "Make Payment",
            description: "Full secure online payment on the policy of your choice.",
        },
        {
            number: "4",
            icon: CheckCircle,
            title: "Get Instant Policy",
            description: "E-mail and SMS your car insurance certificate immediately. Drive protected!",
        },
    ]
}

const faqs = [
    {
        question: "What is included in car insurance?",
        answer: "Protects against accidents, robbery, fire, natural disasters, and third-party losses. Add-on features such as engine protection and personal accident cover can be added as well.",
    },
    {
        question: "Is it obligatory to insure cars in India?",
        answer: "Yes, there is third-party liability insurance, which is compulsory. All-encompassing coverage is not compulsory but desirable.",
    },
    {
        question: "What is the calculation of the premium?",
        answer: "Premium relies on IDV, the age of the car, engine capacity, location, previous claims, and the add-ons that are chosen.",
    },
    {
        question: "What is IDV in car insurance?",
        answer: "IDV is the Insured Declared Value, which is the highest amount that your insurance company will pay in case your car is stolen or utterly damaged.",
    },
    {
        question: "How do I file a claim?",
        answer: "Claim cashless via the networked garage, report, and hand in the necessary documents.",
    },
    {
        question: "Am I able to transfer my insurance to another car?",
        answer: "Yes, policies can be transferred or renewed to a new vehicle where adjustment of premium based on IDV is made.",
    },
    {
        question: "What are add-on covers?",
        answer: "Additional protection such as optional covers includes zero depreciation, roadside assistance, engine protection, and personal accident cover.",
    },
    {
        question: "What is the duration of the settlement of claims?",
        answer: "The claims are usually closed in between 7 and 15 days depending on the adequate documentation and prompt reporting.",
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

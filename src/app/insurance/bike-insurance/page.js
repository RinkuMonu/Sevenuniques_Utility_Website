import React from 'react'
import Herobanner from '../../../../components/Bike Insurance/Herobanner'
import Features from '../../../../components/Bike Insurance/Features'
import WhyChooseUs  from '../../../../components/Bike Insurance/WhyChooseUs'
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
        subheading: 'BEST ONLINE TWO-WHEELER INSURANCE.',
        heading: 'Har Ride Ke Saath, Full Protection Ka Saath.',
        description: 'Insure your bike with the best online two-wheeler insurance. Compare and select coverage in case of accidents, theft, or natural calamities, and ride without any hassle or worry.',
        bgImage: '/image/insurance-bg.png',
        centerImage: '/image/bike.png',
    };
    const aboutData = {
        badge: "About Us",
        heading: "Your reliable bike insurance Partner",
        paragraphs:[
            "You have made your bike more than just a vehicle; it is your freedom, your passion, and your day-to-day companion. That is why we work on offering the perfect bike insurance that protects what is of utmost importance to you.",
            "As the most experienced insurance industry player, with more than 10 years of experience, we made sure to assist thousands of riders and get them the cover they needed. We are passionate about transparency, expedited settlement of claims, and satisfied customers, and that has made us their favorite bike insurance online",
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
        sectionTitle: "Elaborated Bike Insurance Plans",
        sectionDesc:
            "Get our wide range of two-wheeler insurance to cover your bike, a policy that would ensure utmost peace of mind when riding your bike.",
        features: [
            {
                icon: Shield,
                title: "Comprehensive Coverage",
                description:
                    "Complete coverage against accidents, theft, natural disasters, and third-party cover.",
            },
            {
                icon: Clock,
                title: "Instant Policy Issuance",
                description:
                    "In a few minutes, you can get your bike insured online in the most convenient and simple way.",
            },
            {
                icon: DollarSign,
                title: "Affordable Premiums",
                description:
                    "Low charges and captivating discounts to save riders with flexibility in payment.",
            },
            {
                icon: FileText,
                title: "Easy Claims Process",
                description:
                    "Uncomplicated and clear claims settlement having minimum documentation and quick approvals.",
            },
            {
                icon: Headphones,
                title: "24/7 Customer Support",
                description:
                    "24/7 customer support for policy questions, claims, and roadside emergencies.",
            },
            {
                icon: Award,
                title: "Cashless Repairs",
                description:
                    "Get 5000+ network garages in India to shop painlessly without cash.",
            },
        ],
    };

    
const whydata = {
  title1: "Why Choose BikeSecure ?",
  title2: "The Best Insurance Company for Bikes in India.",
  desc: "We have end-to-end two-wheeler insurance plans with unparalleled benefits and customer care. Sign up with more than 1 million happy riders who have trusted us to secure their bikes.",
  features: [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Complete coverage against accident, theft, natural disasters, and third-party liability.",
    },
    {
      icon: Clock,
      title: "Instant Policy Issuance",
      description: "Insure your bike within minutes easily through our digital and hassle-free process.",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "24-hour service for policy questions, claims, and roadside service.",
    },
    {
      icon: BadgeCheck,
      title: "Cashless Claims",
      description: "Repairs in 5000+ network garages throughout India with ease and without cash.",
    },
    {
      icon: Wallet,
      title: "Affordable Premiums",
      description: "Low competitive prices, options of payment, and no extra charges",
    },
    {
      icon: FileCheck,
      title: "Quick Claim Settlement",
      description: "Quick and open claims having a 95 percent settlement rate in 7 days.",
    },
  ]
}



    const processdata = {
        title1: "Simple & Fast Process",
        title2: "Get Insured in 4 Easy Steps",
        desc: "Our fast and efficient system also sees you having your two-wheeler insurance within a few  minutes. No paperwork, no hassle.",
        steps: [
            {
                number: "1",
                icon: FileText,
                title: "Enter Bike Details",
                description: "Enter your bike registration number and other simple information in our simple form.",
            },
            {
                number: "2",
                icon: Search,
                title: "Compare Plans",
                description: "Compare and view various bike insurance plans according to your requirements, either in the case of new two-wheeler insurance or in the case of policy renewal online",
            },
            {
                number: "3",
                icon: CreditCard,
                title: "Make Payment",
                description: "Select your plan of choice and do a secure online payment using various choices",
            },
            {
                number: "4",
                icon: CheckCircle,
                title: "Get Instant Policy",
                description: "Get your insurance policy document immediately through email and SMS. Ride protected from day one!",
            },
        ]
    }

    const faqs = [
  {
    question: "What does the bike insurance include?",
    answer:
      "Accidents, theft, fire, natural calamities, and third-party liabilities can be covered under bike insurance. There are also optional covers, such as personal accidents, roadside assistance, and others that can be added",
  },
  {
    question: "Do you have bike insurance in India?",
    answer:
      "Yes, third-party liability insurance is compulsory according to the Indian laws. Extensive policies to cover your bike are unnecessary but very welcome.",
  },
  {
    question: "What is the calculation of the premium?",
    answer:
      "The premiums will depend on the IDV (Insured Declared Value) of your bike, age, engine capacity, location, and history of previous claims. The price is also influenced by the add-ons and no-claim bonuses",
  },
  {
    question: "What is IDV in bike insurance?",
    answer:
      "IDV is an acronym that means insured declared value This is the limit that your insurer will give out in case your bike is stolen or totally damaged.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "To claim, you need to report to your insurer at once, in addition to providing the insurer with the required documents (FIR, copy of your policy, and bills of repair) and having your bike repaired in one of the network garages which does not require cash",
  },
  {
    question: "Is it possible to transfer the insurance to a different bike?",
    answer:
      "Yes,garages, the majority of insurers permit a transfer of the policy in case you sell your old bicycle and purchase a new bike. The premium can also be changed according to the new bike in terms of IDV and age.",
  },
  {
    question: "What are add-on covers?",
    answer:
      "Add-ons are optional coverings that offer additional protection to your usual policy, e.g., zero depreciation, roadside assistance, engine protection, and personal accident cover",
  },
  {
    question: "What is the length of the claim settlement?",
    answer:
      "Cashless repairs take less than 7-15 days. The quick claim settlement is based on correct documentation and reporting",
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
            <DynamicTable  headers={headers} rows={rows}/>
            <FAQ faqs={faqs}/>
            <ContactBanner />
        </>
    )
}

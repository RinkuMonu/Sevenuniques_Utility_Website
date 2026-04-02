"use client"
import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner';
import Image from 'next/image';
import AboutService from '../../../components/AboutService';
import AboutSlider from '../../../components/AboutSlider';
import AboutArticle from '../../../components/AboutArticle';
import BenefitsSection2 from '../../../components/BenefitsSection2';
import PartnersSection from '../../../components/PartnersSection';
import TestimonialSlider from '../../../components/TestimonialSlider';
import ContactBanner from '../../../components/ContactBanner';
import ServicesSection3 from '../../../components/ServicesSection3';
import Expertise from '../../../components/Expertise';
import WhyChooseUs from '../../../components/WhyChooseUs';
import GrowthOpportunity from '../../../components/GrowthOpportunity';
import FAQ from '../../../components/Bike Insurance/FAQ';
import HeroBanner from '../../../components/About/HeroBanner';


function page() {
const faqData = [
  {
    question: "What services does Finunique offer?",
    answer: "Finunique provides services such as BBPS, bill payments, mobile recharges, insurance, bookings, PAN card services, credit support, and multiple loan options including personal, business, home, construction, and car loans."
  },
  {
    question: "How can I get started with Finunique?",
    answer: "You can register directly through our website or reach out to our support team for step-by-step assistance."
  },
  {
    question: "Are transactions on Finunique safe?",
    answer: "Yes, all payments and transactions are processed through secure and encrypted systems to ensure complete safety."
  },
  {
    question: "Can I check the status of my loan application?",
    answer: "Yes, you’ll receive regular updates via SMS or email. You can also contact our support team for current status updates."
  },
  {
    question: "When is customer support available?",
    answer: "Our support team is available from Monday to Friday, 9:30 AM to 6:30 PM. We remain closed on weekends."
  }
];

       const aepsData = {
        subheading: 'ABOUT',
        heading: 'Finunique – Built on Trust, Driven by Technology',
        description: 'Finunique Small Private Limited is committed to delivering dependable and innovative digital solutions across India. By using technology, we help our partners and clients simplify their operations and improve overall business efficiency.',
        features: [
            'Established by Mr. Dinesh Kumar Finunique has grown into a strong nationwide network with 120,000+ retailers, 2,300 distributors, and over 700+ field executives actively serving across multiple districts. This extensive reach enables us to ensure smooth service delivery and a consistently positive customer experience.',
            'Our mission is to build long-term partnerships, widen our presence, and offer smart, practical solutions that support business growth. We continuously work towards providing services that are reliable, efficient, and aligned with the changing needs of our clients.',
        ]
    };

    const text = "About us";
    return (
        <>
            <HeroBanner />
            <ServicesSection3 data={aepsData} />
            <Expertise/>
            <WhyChooseUs/>
            <GrowthOpportunity/>
            {/* <AboutArticle/> */}
            <div className='lg:px-16'>
                 <FAQ faqs={faqData} subheading={" Find answers to common questions about bike insurance. Can't find what you're looking for? Contact our support team."} />
            </div>
            {/* <BenefitsSection2 /> */}
            <PartnersSection />
            <TestimonialSlider />
            <ContactBanner />
        </>
    )
}

export default page

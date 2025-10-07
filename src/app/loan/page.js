import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner'
import Image from 'next/image'
import LoanApplicationCard from '../../../components/LoanApplicationCard'
import LoanStep from '../../../components/LoanStep';
import StatsBanner from '../../../components/StatsBanner';
import CreditScoreReport from '../../../components/CreditScoreReport';
import PartnersSection from '../../../components/PartnersSection';
import BenefitsSection from '../../../components/BenefitsSection';
import LoanS2 from '../../../components/LoanS2';
import VerticalSlider from '../../../components/VerticalSlider';
import TestimonialSlider from '../../../components/TestimonialSlider';
import ContactBanner from '../../../components/ContactBanner';




function page() {
  const slide = {
  image: "/loan/loan3.png",
  heading: (
    <>
     How to take <br />
      a loan with  <br />
      <span className="text-blue-300">Sevenunique</span>
    </>
  ),
  sliderData: [
    {
      step: 1,
      title: "Apply Online",
      image: "/loan/loan4.png",
      cta: "Request Calculations",
      details: [
        "Fill in your simple information: name, mobile number, Aadhaar, and PAN.",
        "Select the type of loan: personal loan, instant loan, or others.",
        "Apply to get a loan calculation to confirm your eligibility.",
      ],
    },
    {
      step: 2,
      title: "Upload Documents",
      image: "/loan/loan12.png",
      cta: "Submit Docs",
      details: [
        "Enter the following documents: PAN Card, Aadhaar Card, Income Proof (bank statements or salary slips)",
        "Your documents will be immediately checked by our system to process your documents faster.",
      ],
    },
    {
      step: 3,
      title: "Receive Your Loan",
      image: "/loan/loan13.png",
      cta: "Get Construction Equipment Loan Now",
      details: [
        "The loan will be deposited directly into your bank account once the loan is approved.",
        "Get money within a few hours and begin to use it right away.",
      ],
    },
  ],
};

  const data = {
    id: 1,
    subheading: 'INSTANT LOAN',
    heading: 'For Every Need, Ready Loan.',
    description: 'You can get fast, convenient, and urgent loans for any of your needs. This could be for education, health care, or any alternative emergency financial need; we can extend instant loans with easy processing and cost conditions. ',
    bgImage: '/loan/loanbg.png',
    centerImage: '/loan/loan1.png',
  }

  const datasteps = {
  heading: (
    <>
      Paise Ka Solution, Turant <br className="hidden sm:block" /> SevenUnique Se
    </>
  ),
  desc: " SevenUnique offers fast, convenient, and safe services for all your loaning requirements. Be it emergency, education, or personal requirements, our process would be easy, paper-free, and fast.",
  loanFeatures: [
    {
      number: 1,
      text: "100% Paperless and Quick Process",
    },
    {
      number: 2,
      text: "Secure, trusted, and safe loan platform.",
    },
    {
      number: 3,
      text: "Easy Documentation & Flexible Eligibility.",
    },
    {
      number: 4,
      text: "Customer service 24/7 on all your loans.",
    },
    {
      number: 5,
      text: "Instantly Take Out Loans No hassle whatsoever.",
    },
  ],
};

  return (
    <>
      <ServiceBanner data={data} />

<LoanS2
  imageSrc="/loan/loan2.png" 
  bgColor="#FFF3C9" 
/>
<VerticalSlider slide={slide}/>

      {/* <LoanApplicationCard /> */}


      <LoanStep data={datasteps}/>
      <StatsBanner/>
      <CreditScoreReport/>
      <BenefitsSection/>
<section className='pt-28'>
  <PartnersSection/>
</section>
      <TestimonialSlider/>
      <ContactBanner/>
    </>
  )
}

export default page

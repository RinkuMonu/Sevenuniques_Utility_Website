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
      At Sevenunique, <br />
      how to secure  <br />
      a <span className="text-blue-300">business</span> loan.
    </>
  ),
  sliderData: [
    {
      step: 1,
      title: "Apply Online",
      image: "/loan/loan4.png",
      cta: "Request Calculations",
      details: [
        "Construction Equipment Loan by Visit Sevenunique.",
        "Fill in personal information: Name, Mobile Number, Aadhaar, PAN",
        "Select the type of equipment and the amount of the loan",
        "Check the eligible loan amount on the fly.",
      ],
    },
    {
      step: 2,
      title: "Upload Documents",
      image: "/loan/loan12.png",
      cta: "Submit Docs",
      details: [
        "Add PAN Card and Aadhaar Card.",
        "Provide business documents—GST and business registration",
        "Give equipment quote and supplier information.",
        "Our system authenticates documents in a short time",
      ],
    },
    {
      step: 3,
      title: "Receive Your Loan",
      image: "/loan/loan13.png",
      cta: "Get Construction Equipment Loan Now",
      details: [
        "Get rapid approval with few documents.",
        "Direct deposit of the loan to your account.",
        "Money sent out in less than 48 hours",
        "Buy your building materials now.",
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
  desc: " SevenUnique provides instant loans for all your requirements. It is easy and easygoing to borrow money through our fast, safe, and paperless system. Between application and approval, have experience banking your way",
  loanFeatures: [
    {
      number: 1,
      text: "Get immediate approval and fast disbursement with minimum paperwork.",
    },
    {
      number: 2,
      text: "Hassle-Free and Paperless Process.",
    },
    {
      number: 3,
      text: "Apply online with no paperwork.",
    },
    {
      number: 4,
      text: "Safe and Trusted Platform",
    },
    {
      number: 5,
      text: "Your information and finances are secured at a bank level.",
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

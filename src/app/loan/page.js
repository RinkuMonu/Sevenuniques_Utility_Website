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
  const data = {
    id: 1,
    subheading: 'INSTANT LOAN',
    heading: 'For Every Need, Ready Loan.',
    description: 'You can get fast, convenient, and urgent loans for any of your needs. This could be for education, health care, or any alternative emergency financial need; we can extend instant loans with easy processing and cost conditions. ',
    bgImage: '/loan/loanbg.png',
    centerImage: '/loan/loan1.png',
  }
  return (
    <>
      <ServiceBanner data={data} />

<LoanS2
  imageSrc="/loan/loan2.png" 
  bgColor="#FFF3C9" 
/>
<VerticalSlider/>

      {/* <LoanApplicationCard /> */}


      <LoanStep/>
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

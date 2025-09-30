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
    heading: 'Har zarurat ke liye, Loan taiyaar.',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et ',
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
      <PartnersSection/>
      <TestimonialSlider/>
      <ContactBanner/>
    </>
  )
}

export default page

"use client"
import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner'
import ServicesSection2 from '../../../components/ServicesSection2'
import ServicesSection3 from '../../../components/ServicesSection3'
import AepsService from '../../../components/AepsService'
import HowItWorks1 from '../../../components/HowItWorks1'
import ComplianceSection from '../../../components/ComplianceSection'
import AepsFeatures from '../../../components/AepsFeatures'
import EligibilityAeps from '../../../components/EligibilityAeps'
import Video from '../../../components/Video'
import Empowering from '../../../components/Empowering'
import ContactBanner from '../../../components/ContactBanner'

function page() {
      const data= {
        id: 1,
        subheading: 'AEPS',
        heading: 'Angootha Lagao, Transaction Pao',
        description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable Domestic Money Transfer service.',
        bgImage: '/aeps/aepsbg.png',
        centerImage: '/aeps/aeps1.png',
    }
    const section2data ={
    img1:'/aeps/aeps.png',
    img2:'/aeps/aeps2.png',
    color:"#FADDE1"
}

const  aepsData = {
  subheading: 'AEPS',
  heading: 'Aadhaar Enabled Payment System',
  description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et  ducimus odio dignissimos At vero eos et accusamus et ',
  features: [
    'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ',
    'At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ',
  ]
};

  return (
    <>
       <ServiceBanner data={data} />
         <ServicesSection2 section2data={section2data} />
         <ServicesSection3 data={aepsData}/>
         <AepsService/>
         <HowItWorks1/>
         <ComplianceSection/>
         <AepsFeatures/>
         <EligibilityAeps data={aepsData}/>
         <Video/>
         <Empowering/>
         <ContactBanner/>
    </>
  )
}

export default page

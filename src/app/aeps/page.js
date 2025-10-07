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
        // heading: 'Angootha Lagao, Transaction Pao',
        heading: 'Paise Turant Pao, Bas Angootha Lagao.',
        // description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable Domestic Money Transfer service.',
        description: 'Aadhaar Enabled Payment System to withdraw cash, transfer and balance any amount any time and anywhere.',
        bgImage: '/aeps/aepsbg.png',
        centerImage: '/aeps/aeps1.png',
    }
    const section2data ={
    img1:'/aeps/aeps.png',
    img2:'/aeps/aeps2.png',
    color:"#FADDE1"
}

const  aepsData = {
  subheading: 'AePS ',
  heading: 'Aadhaar Enabled Payment System',
  description: 'AePS will also allow you to open a bank account with your Aadhaar card and fingerprint. Pay without cards or PIN. Make transfers, balance checks, and cash withdrawals and deposits using authorized agents in a secure manner.',
  features: [
    'The retailers are able to provide AePS services, such as cash withdrawal and balance checks, through Sevenunique. Users have easy banking, and distributors have the ability to increase their network. We provide hassle-free and safe dealings to everyone.',
    'Sevenunique use AePS to take banking to underserved regions. Distributors and retailers offer crucial services and minimize the addressing of banks. We encourage online payments and financial development for all.',
  ]
};


const aepsData2 = {
  subheading: 'AePS',
  heading: 'Aadhaar Enabled Payment System',
  description:
    'AePS allows you to make secure cash withdrawals, balance checks, transfers, and deposits using Aadhaar authentication at authorized agents.',
  retailer: {
    title: 'Aadhaar Enabled Payment System—Retailer Partnership Program',
    features: [
      'Be our AePS retailer, and turn your retail store into a full-service bank. Being a licensed Sevenunique agent, providing crucial banking services, and receiving a good commission on each deal.',
      'Begin with a little investment—only a smartphone and a biometric device. Offer cash withdrawal, balance inquiry, fund transfer, and bill payment services so that your store is the preferred banking service in your neighborhood.',
      'We have a program that guarantees the greatest profitability and convenience. Gain commissions as well as more customer visits. Full training, technical support, and RBI-approved secure systems all come with our one hundred percent peace of mind.',
      'Be a part of the successful retailers nationwide in India who have grown their business using AEPS. Real-time processing with daily settlements: you concentrate on growth, and we take care of the technical features. Start your own business by enrolling as a Sevenunique AePS retailer.'
    ],
    image: '/aeps/e1.png'
  },
  distributor: {
    title: 'Aadhaar Enabled Payment System—partnership with Distributors Program',
    features: [
      'Expand a profitable banking network using the AePS program at Sevenunique and gain access to numerous sources of revenue by onboarding retailers. Being an approved distributor, you will be able to build retailers in your region and get competitive commissions on all transactions made with your expanding network, becoming one of the pioneers of digital finance.',
      'We also offer full business solutions of professional training, marketing resources, and technical support in order to make you successful. Our established business model assists you in establishing a stable stream of revenue and encourages financial inclusion within your area. All you need is some basic knowledge of business and a smartphone to initiate this entrepreneurial process.',
      'Increase your business presence in a great way by enabling local retailers with key AePS banking services. You will not only empower shop proprietors to serve their clients with improved services but also develop your own distribution business with our clear commission system and on-demand performance monitoring systems.',
      'Enter the already established network of successful distributors of Sevenunique in India and get to be a part of the digital banking revolution. You can start your journey to becoming financially independent and a business leader and become an authorized AePS distributor today to start creating your own legacy in the financial services industry.'
    ],
    image: '/aeps/e2.png'
  }
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
         {/* <EligibilityAeps data={aepsData}/> */}
         <EligibilityAeps data={aepsData2}/>
         <Video/>
         <Empowering/>
         <ContactBanner/>
    </>
  )
}

export default page

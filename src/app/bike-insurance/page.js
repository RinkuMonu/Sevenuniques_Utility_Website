import React from 'react'
import Herobanner from '../../../components/Bike Insurance/Herobanner'
import Features from '../../../components/Bike Insurance/Features'
import {WhyChooseUs} from '../../../components/Bike Insurance/WhyChooseUs'
import {FAQ} from '../../../components/Bike Insurance/FAQ'
import { Process } from '../../../components/Bike Insurance/Process'
import ContactBanner from '../../../components/ContactBanner'
import AboutSection  from '../../../components/Bike Insurance/AboutSection'

export default function page() {
    return (
        <>
            <Herobanner />
            <AboutSection />
            <Features />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <ContactBanner />
        </>
    )
}

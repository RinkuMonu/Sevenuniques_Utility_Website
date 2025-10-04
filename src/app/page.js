"use client"
import Image from "next/image";
import Banner from "../../components/Banner";
import HomePartners from "../../components/HomePartners";
import HomeSecurity from "../../components/HomeSecurity";
import HomeOnboarding from "../../components/HomeOnboarding";
import UtilitiesHome from "../../components/UtilitiesHome";
import TestimonialSlider from "../../components/TestimonialSlider";
import ComplianceSection from "../../components/ComplianceSection";
import HomeMap from "../../components/HomeMap";

export default function Home() {
  return (
  <>
  <Banner/>
  <HomePartners/>
  <HomeSecurity/>
  <HomeOnboarding/>
  <UtilitiesHome/>
  <HomeMap/>
  <TestimonialSlider/>
  <ComplianceSection/>

  </>
  );
}

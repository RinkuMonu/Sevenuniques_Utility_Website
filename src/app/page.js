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
import APi from "../../components/APi";
import HomeRechargeSection from "../../components/HomeRechargeSection";
import HomeCreditScoreSection from "../../components/HomeCreditScore";
import HomePaymentGatewaySection from "../../components/HomePaymentGateway";
import HomeTrustedSecureSection from "../../components/HomeSecure";


export default function Home() {
  return (
    <>
      <Banner />
      <HomePartners />
      <APi />
      <HomeCreditScoreSection />
      <HomeOnboarding />
      <HomeRechargeSection />
      {/* <HomeSecurity /> */}
      <HomeTrustedSecureSection />
      {/* <UtilitiesHome /> */}
      {/* <HomePaymentGatewaySection /> */}
      <HomeMap />
      <TestimonialSlider />
      <ComplianceSection />
    </>
  );
}

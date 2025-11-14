import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PreFooterSection from "../../components/Prefooter";
import HomeQRBanner from "../../components/HomeQRSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Finunique Bill Payment, Recharge, Insurance, Booking, Credit Card, pancard, Loan",
  description: "Finunique Bill Payment, Recharge, Insurance, Booking, Credit Card, pancard, Loan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/image/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

  <Header />
        {children}
        <HomeQRBanner />
        <PreFooterSection />
        <Footer/>
      </body>
    </html>
  );
}

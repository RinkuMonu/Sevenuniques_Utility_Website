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
  title:
    "Finunique Bill Payment, Recharge, Insurance, Booking, Credit Card, pancard, Loan",
  description:
    "Finunique Bill Payment, Recharge, Insurance, Booking, Credit Card, pancard, Loan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="p:domain_verify"
          content="af39ba6ce6e91e27bb91d26563303735"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://finuniques.in/"
        },
        "headline": "Finunique Bill Payment, Recharge, Insurance, Booking, Credit Card, pancard, Loan",
        "image": "https://finuniques.in/_next/image?url=%2Fimage%2Fmen-home.png&w=1200&q=75",
        "author": {
          "@type": "Organization",
          "name": ""
        },
        "publisher": {
          "@type": "Organization",
          "name": "",
          "logo": {
            "@type": "ImageObject",
            "url": ""
          }
        },
        "datePublished": ""
      }
      `,
          }}
        />

        <link rel="icon" href="/white/sevenunique-logo.ico" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5TKFRRHQ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TKFRRHQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <HomeQRBanner />
        <PreFooterSection />
        <Footer />
      </body>
    </html>
  );
}

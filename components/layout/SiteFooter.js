import Image from "next/image";
import Link from "next/link";
import { Gauge, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Blog", "/blog"],
  ["Contact Us", "/contact"],
  ["Team Members", "/team"],
];

const legalLinks = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms of Use", "/terms-of-use"],
  ["Cancellation & Refund Policy", "/refund-policy"],
  ["Chargeback Policy", "/charge-back-policy"],
  ["KYC Policy", "/kyc-policy"],
];

const socialLinks = [
  [FaFacebookF, "https://www.facebook.com/people/Finunique-small-private-limited/61584013341134", "Facebook", "bg-[#1877f2]"],
  [FaYoutube, "https://www.youtube.com/@finuniques", "YouTube", "bg-[#ff0000]"],
  [FaInstagram, "https://www.instagram.com/finunques?igsh=dDV3eXM0dHl6eWgx", "Instagram", "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]"],
  [FaLinkedinIn, "https://www.linkedin.com/company/finunique-small-private-limited/", "LinkedIn", "bg-[#0a66c2]"],
  [FaXTwitter, "https://x.com/Finuniques", "X", "bg-black"],
];

function FooterHeading({ children }) {
  return (
    <h3 className="mb-5 text-xs font-bold uppercase tracking-wide text-white">
      {children}
      <span className="mt-2 block h-0.5 w-8 bg-lime-400" />
    </h3>
  );
}

export default function SiteFooter() {
  return (
    <footer id="site-footer" className="border-t border-white/20 bg-[radial-gradient(circle_at_center,_#018EDE,_#0C3D4C_70%)] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-7 pt-10 sm:px-6 lg:py-12">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.15fr_1.15fr] lg:gap-0">
          <section className="lg:pr-8">
            <Link href="/" className="inline-flex items-center" aria-label="Finunique home">
              <Image
                src="/image/finunque_logo_new.png"
                alt="Finunique"
                width={82}
                height={74}
                className="h-auto w-[76px] object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-5 text-white/80">
              Innovating digital payment solutions and simplifying business operations across India.
            </p>
            <div className="mt-5 space-y-3 text-xs text-white/90">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India - 302017
              </p>
              <a href="tel:01414511098" className="flex items-center gap-2 hover:text-lime-300">
                <Phone size={14} /> 0141-4511098
              </a>
              <a href="mailto:support@finuniques.in" className="flex items-center gap-2 hover:text-lime-300">
                <Mail size={14} /> support@finuniques.in
              </a>
            </div>
          </section>

          <section className="border-white/15 lg:border-l lg:px-8">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-3 text-xs">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/85 transition hover:text-lime-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-white/15 lg:border-l lg:px-8">
            <FooterHeading>Tools</FooterHeading>
            <ul className="space-y-4 text-xs">
              <li>
                <Link href="/free-credit-score" className="flex items-center gap-2 text-white/85 hover:text-lime-300">
                  <Gauge size={14} /> Free Credit Score
                </Link>
              </li>
                <li>
                <Link href="/loan-emi" className="flex items-center gap-2 whitespace-nowrap text-white/85 hover:text-lime-300">
                  <Gauge size={14} className="shrink-0" /> Loan EMI Calculator
                </Link>
              </li>
            </ul>
          </section>

          <section className="border-white/15 lg:border-l lg:px-8">
            <FooterHeading>Company</FooterHeading>
            <p className="text-xs leading-5 text-white/80">
              Finunique brings recharge, bill payments, travel bookings and essential financial services together on one secure platform for customers and merchants across India.
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/10 p-4 ring-1 ring-white/10">
              <ShieldCheck size={30} className="shrink-0 text-lime-400" />
              <p className="text-xs font-medium leading-5">Trusted by 3,50,000+ customers across India</p>
            </div>
          </section>

          <section className="space-y-4 lg:pl-8">
            <div className="rounded-xl bg-white/10 p-5 ring-1 ring-white/10">
              <FooterHeading>Verified &amp; Secure</FooterHeading>
              <div className="flex items-center gap-4">
                <Image src="/home/pci-logo.png" width={82} height={52} alt="PCI DSS compliant" className="h-12 w-auto rounded bg-white p-1 object-contain" />
                <Image src="/home/iso-logo.png" width={82} height={52} alt="ISO certified" className="h-12 w-auto rounded bg-white p-1 object-contain" />
              </div>
            </div>

            <div className="rounded-xl bg-white/10 p-5 ring-1 ring-white/10">
              <FooterHeading>Follow Us</FooterHeading>
              <div className="flex flex-nowrap items-center gap-2.5">
                {socialLinks.map(([Icon, href, label, color]) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm text-white transition hover:-translate-y-0.5 ${color}`}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-center text-[11px] text-white/80 sm:px-6 lg:flex-row lg:text-left">
          <p>&copy; {new Date().getFullYear()} Finunique Small Private Limited. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2">
            {legalLinks.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-lime-300 ${index < legalLinks.length - 1 ? "after:ml-3 after:text-white/30 after:content-['|']" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

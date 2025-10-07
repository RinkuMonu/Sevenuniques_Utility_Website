import { Mail, Phone } from "lucide-react";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 py-12 grid grid-cols-1 lg:grid-cols-7 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="bg-gray-100 text-black font-bold p-3 rounded-md inline-block mb-4">
              <Image
                src="/image/sevenunique-logo.png"
                width={66}
                height={72}
                alt="logo"
                className="pb-1"
              />
            </div>
            <div className="relative group border border-gray-700 rounded-2xl p-3 shadow-md shadow-blue-500/40 transition duration-300 mb-3">
              <h3 className="text-lg font-bold text-white mb-1 flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 animate-bounce"></span>
                HEAD OFFICE
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura,
                Jaipur, Rajasthan, India - 302017
              </p>
            </div>

            {/* Corporate Office */}
            <div className="relative group border border-gray-700 rounded-2xl p-3 shadow-md shadow-blue-500/40 transition mb-2 duration-300">
              <h3 className="text-lg font-bold text-white mb-1 flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-bounce"></span>
                CORPORATE OFFICE
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Office No. 101/2, ‘Vakratunda Corporate Park Premise
                Co-operative Society Limited, Off. Aarey Road, Goregaon (East),
                Mumbai - 400 063
              </p>
            </div>
            <div className="space-y-2 mt-3">
              <Link href="mailto:sevenunique4@gmail.com"  className="flex items-center gap-2 text-sm mb-2">
                <Mail size={18} className="text-white" />
                sevenunique4@gmail.com
              </Link>
              <Link href="tel:+91 92515 82691"  className="flex items-center gap-2 text-sm">
                <Phone size={18} className="text-white" />
                +91 92515 82691
              </Link>
            </div>
          </div>

          <div className=" col-span-1 md:col-span-5">
            <div className="grid  sm:grid-cols-4 w-full">
              <div>
                <h3 className="font-semibold mb-4">Qiuck Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-blue-400">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-blue-400">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-blue-400">
                      Contact
                    </Link>
                  </li>
                  {/* <li><a href="#" className="hover:text-blue-400">Bug bounty</a></li> */}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/aeps" className="hover:text-blue-400">
                      AEPS
                    </Link>
                  </li>
                  <li>
                    <Link href="/bbps" className="hover:text-blue-400">
                      BBPS
                    </Link>
                  </li>
                  <li>
                    <Link href="/dmt" className="hover:text-blue-400">
                      DMT
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Platforms */}
              <div>
                <h3 className="font-semibold mb-4">Loans</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/loan"
                      className="hover:text-blue-400"
                    >
                      Instant Loan
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan/business-loan"
                      className="hover:text-blue-400"
                    >
                      Business Loan
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan/home-loan" className="hover:text-blue-400">
                      Home Loan
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan/personal-loan"
                      className="hover:text-blue-400"
                    >
                      Personal Loan
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan/construction-equipment-loan"
                      className="hover:text-blue-400"
                    >
                      Construction Loan
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan/car-loan" className="hover:text-blue-400">
                      Car Loan
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold mb-4">Follow us on</h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:text-blue-400"
                  >
                    <FaFacebookF /> Facebook
                  </Link>
                  <Link
                    href="https://www.youtube.com/@seven_spirit2"
                    className="flex items-center gap-2 hover:text-red-500"
                  >
                    <FaYoutube /> Youtube
                  </Link>
                  <Link
                    href="https://www.instagram.com/seven_spirit2/"
                    className="flex items-center gap-2 hover:text-pink-500"
                  >
                    <FaInstagram /> Instagram
                  </Link>
                  <Link
                    href="https://x.com/seven_spir42085"
                    className="flex items-center gap-2 hover:text-gray-400"
                  >
                    <FaXTwitter /> Twitter
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:text-blue-500"
                  >
                    <FaLinkedinIn /> Linkedin
                  </Link>
                  <Link
                    href="https://wa.me/9251582691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-green-500"
                  >
                    <FaWhatsapp /> WhatsApp
                  </Link>

                  <Link
                    href="https://www.pinterest.com/sevenspirit12/"
                    className="flex items-center gap-2 hover:text-green-500"
                  >
                    <FaPinterest /> Pinterest
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 py-8 border-t border-gray-800 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Sevenunique Tech Solutions Private Limited. All
            rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <Link
              href="/privacy-policy"
              className="text-white hover:text-[#e8ab8f] hover:underline transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-white">|</span>
            <Link
              href="/terms-of-use"
              className="text-white hover:text-[#e8ab8f] hover:underline transition-colors duration-300"
            >
              Terms of Use
            </Link>
            <span className="hidden sm:inline text-white">|</span>
            <Link
              href="/refund-policy"
              className="text-white hover:text-[#e8ab8f] hover:underline transition-colors duration-300"
            >
              Cancellation & Refund Policy
            </Link>
            <span className="hidden sm:inline text-white">|</span>
            <Link
              href="/charge-back-policy"
              className="text-white hover:text-[#e8ab8f] hover:underline transition-colors duration-300"
            >
              Chargeback Policy
            </Link>
            <span className="hidden sm:inline text-white">|</span>
            <Link
              href="/kyc-policy"
              className="text-white hover:text-[#e8ab8f] hover:underline transition-colors duration-300"
            >
              KYC Policy & onboarding
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

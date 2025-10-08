// import { Mail, Phone } from "lucide-react";
// import React from "react";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaYoutube,
//   FaInstagram,
//   FaXTwitter,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaPinterest,
// } from "react-icons/fa6";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer
//       className="relative text-white"
//       style={{
//         backgroundImage: "url('/footer.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="">
//         <div className="max-w-7xl mx-auto px-4 lg:px-0 py-12 grid grid-cols-1 lg:grid-cols-7 gap-10">
//           <div className="col-span-1 md:col-span-2">
//             <div className="bg-gray-100 text-black font-bold p-3 rounded-md inline-block mb-4">
//               <Image
//                 src="/image/sevenunique-logo.png"
//                 width={66}
//                 height={72}
//                 alt="logo"
//                 className="pb-1"
//               />
//             </div>

//             <div className="space-y-2 mt-3">
//               <Link href="mailto:sevenunique4@gmail.com" className="flex items-center gap-2 text-sm mb-2">
//                 <Mail size={18} className="text-white" />
//                 sevenunique4@gmail.com
//               </Link>
//               <Link href="tel:+91 92515 82691" className="flex items-center gap-2 text-sm">
//                 <Phone size={18} className="text-white" />
//                 +91 92515 82691
//               </Link>
//             </div>
//             <div className="mt-4">
//               <h3 className="font-semibold mb-4">Follow us on</h3>
//               <div className="flex flex-row space-x-3">
//                 <Link
//                   href="#"
//                   className="flex items-center gap-2 hover:text-blue-400"
//                 >
//                   <FaFacebookF />
//                 </Link>
//                 <Link
//                   href="https://www.youtube.com/@seven_spirit2"
//                   className="flex items-center gap-2 hover:text-red-500"
//                 >
//                   <FaYoutube />
//                 </Link>
//                 <Link
//                   href="https://www.instagram.com/seven_spirit2/"
//                   className="flex items-center gap-2 hover:text-pink-500"
//                 >
//                   <FaInstagram />
//                 </Link>
//                 <Link
//                   href="https://x.com/seven_spir42085"
//                   className="flex items-center gap-2 hover:text-gray-400"
//                 >
//                   <FaXTwitter />
//                 </Link>
//                 <Link
//                   href="#"
//                   className="flex items-center gap-2 hover:text-blue-500"
//                 >
//                   <FaLinkedinIn />
//                 </Link>
//                 <Link
//                   href="https://wa.me/9251582691"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 hover:text-green-500"
//                 >
//                   <FaWhatsapp />
//                 </Link>

//                 <Link
//                   href="https://www.pinterest.com/sevenspirit12/"
//                   className="flex items-center gap-2 hover:text-green-500"
//                 >
//                   <FaPinterest />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className=" col-span-1 md:col-span-5">
//             <div className="grid  sm:grid-cols-4 w-full">
//               <div>
//                 <h3 className="font-semibold mb-4">Qiuck Links</h3>
//                 <ul className="space-y-2 text-sm">
//                   <li>
//                     <Link href="#" className="hover:text-blue-400">
//                       About Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" className="hover:text-blue-400">
//                       Blog
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" className="hover:text-blue-400">
//                       Contact
//                     </Link>
//                   </li>
//                   {/* <li><a href="#" className="hover:text-blue-400">Bug bounty</a></li> */}
//                 </ul>
//               </div>

//               {/* Legal Links */}
//               <div>
//                 <h3 className="font-semibold mb-4">Services</h3>
//                 <ul className="space-y-2 text-sm">
//                   <li>
//                     <Link href="/aeps" className="hover:text-blue-400">
//                       AEPS
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/bbps" className="hover:text-blue-400">
//                       Bill Payments
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/dmt" className="hover:text-blue-400">
//                       DMT
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/recharge" className="hover:text-blue-400">
//                       Recharge
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/insurance" className="hover:text-blue-400">
//                       Insurance
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/booking" className="hover:text-blue-400">
//                       Booking
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/credit-card" className="hover:text-blue-400">
//                       Credit Card
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/pan-card" className="hover:text-blue-400">
//                       Pan Card
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               {/* Platforms */}
//               <div>
//                 <h3 className="font-semibold mb-4">Loans</h3>
//                 <ul className="space-y-2 text-sm">
//                   <li>
//                     <Link href="/loan"
//                       className="hover:text-blue-400"
//                     >
//                       Instant Loan
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/loan/business-loan"
//                       className="hover:text-blue-400"
//                     >
//                       Business Loan
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/loan/home-loan" className="hover:text-blue-400">
//                       Home Loan
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/loan/personal-loan"
//                       className="hover:text-blue-400"
//                     >
//                       Personal Loan
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/loan/construction-equipment-loan"
//                       className="hover:text-blue-400"
//                     >
//                       Construction Loan
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/loan/car-loan" className="hover:text-blue-400">
//                       Car Loan
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               {/* Social Media */}
//               <div className="relative group space-y-4 transition duration-300 mb-3" style={{ width: "17rem" }}>
//                 <h3 className="text-lg font-bold text-white mb-1 flex items-center">
//                   <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 animate-bounce"></span>
//                   HEAD OFFICE
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed text-sm">
//                   Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura,
//                   Jaipur, Rajasthan, India - 302017
//                 </p>
//                 <hr />
//                 <h3 className="text-lg font-bold text-white mb-1 flex items-center">
//                   <span className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-bounce"></span>
//                   CORPORATE OFFICE
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed text-sm">
//                   Office No. 101/2, ‘Vakratunda Corporate Park Premise
//                   Co-operative Society Limited, Off. Aarey Road, Goregaon (East),
//                   Mumbai - 400 063
//                 </p>
//               </div>

//               {/* Corporate Office */}
//               {/* <div className="relative group border border-gray-700 rounded-2xl p-3 shadow-md shadow-blue-500/40 transition mb-2 duration-300">

//             </div> */}
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 py-8 border-t border-gray-800 text-center">
//           <p className="text-white text-sm">
//             &copy; {new Date().getFullYear()} Sevenunique Tech Solutions Private Limited. All
//             rights reserved.
//           </p>
//           <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
//             <Link
//               href="/privacy-policy"
//               className="text-white hover:text-[#e8ab8f] hover:underline transition-colors duration-300"
//             >
//               Privacy Policy
//             </Link>
//             <span className="hidden sm:inline text-white">|</span>
//             <Link
//               href="/terms-of-use"
//               className="text-white hover:text-[#e8ab8f] hover:underline transition-colors duration-300"
//             >
//               Terms of Use
//             </Link>
//             <span className="hidden sm:inline text-white">|</span>
//             <Link
//               href="/refund-policy"
//               className="text-white hover:text-[#e8ab8f] hover:underline transition-colors duration-300"
//             >
//               Cancellation & Refund Policy
//             </Link>
//             <span className="hidden sm:inline text-white">|</span>
//             <Link
//               href="/charge-back-policy"
//               className="text-white hover:text-[#e8ab8f] hover:underline transition-colors duration-300"
//             >
//               Chargeback Policy
//             </Link>
//             <span className="hidden sm:inline text-white">|</span>
//             <Link
//               href="/kyc-policy"
//               className="text-white hover:text-[#e8ab8f] hover:underline transition-colors duration-300"
//             >
//               KYC Policy & onboarding
//             </Link>

//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };
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
        <div className="max-w-7xl mx-auto px-4 lg:px-0 py-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Verified By Section */}
          <div>
            {/* <div className="bg-gray-100 text-black font-bold p-3 rounded-md inline-block mb-4">
              <Image
                src="/image/sevenunique-logo.png"
                width={66}
                height={72}
                alt="logo"
                className="pb-1"
              />
            </div> */}
            <h3 className="font-semibold mb-4">Verified By</h3>
            <div className="flex flex-col gap-4">
              <Image className="bg-white p-2 rounded-md" src="/home/pci-logo.png" width={80} height={50} alt="Verified 1" />
              <Image className="bg-white p-2 rounded-md" src="/home/iso-logo.png" width={80} height={50} alt="Verified 2" />
            </div>
          </div>

          {/* Quick Links (Loans) */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="/coming-soon" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="/loan" className="hover:text-blue-400">Instant Loan</Link></li>
              <li><Link href="/loan/business-loan" className="hover:text-blue-400">Business Loan</Link></li>
              <li><Link href="/loan/home-loan" className="hover:text-blue-400">Home Loan</Link></li>
              <li><Link href="/loan/personal-loan" className="hover:text-blue-400">Personal Loan</Link></li>
              <li><Link href="/loan/construction-equipment-loan" className="hover:text-blue-400">Construction Loan</Link></li>
              <li><Link href="/loan/car-loan" className="hover:text-blue-400">Car Loan</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/aeps" className="hover:text-blue-400">AEPS</Link></li>
              <li><Link href="/bbps" className="hover:text-blue-400">Bill Payments</Link></li>
              <li><Link href="/dmt" className="hover:text-blue-400">DMT</Link></li>
              <li><Link href="/recharge" className="hover:text-blue-400">Recharge</Link></li>
              <li><Link href="/insurance" className="hover:text-blue-400">Insurance</Link></li>
              <li><Link href="/booking" className="hover:text-blue-400">Booking</Link></li>
              <li><Link href="/credit-card" className="hover:text-blue-400">Credit Card</Link></li>
              <li><Link href="/pan-card" className="hover:text-blue-400">Pan Card</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-blue-400">Terms of Use</Link></li>
              <li><Link href="/refund-policy" className="hover:text-blue-400">Cancellation & Refund Policy</Link></li>
              <li><Link href="/charge-back-policy" className="hover:text-blue-400">Chargeback Policy</Link></li>
              <li><Link href="/kyc-policy" className="hover:text-blue-400">KYC Policy & Onboarding</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="relative group space-y-4 transition duration-300 mb-3 w-72">
  <h3 className="text-lg font-bold text-white mb-1 flex items-center">
    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 animate-bounce"></span>
    HEAD OFFICE
  </h3>
  <p className="text-gray-300 leading-relaxed text-sm">
    Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura,
    Jaipur, Rajasthan, India - 302017
  </p>

  <hr className="border-white" />

  <h3 className="text-lg font-bold text-white mb-1 flex items-center">
    <span className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-bounce"></span>
    CORPORATE OFFICE
  </h3>
  <p className="text-gray-300 leading-relaxed text-sm">
    Office No. 101/2, Vakratunda Corporate Park Premise
    Co-operative Society Limited, Off. Aarey Road, Goregaon (East),
    Mumbai - 400 063
  </p>
</div>

            <div className="space-y-2">
              <a href="mailto:sevenunique4@gmail.com" className="flex items-center gap-2 text-sm">
                <Mail size={18} className="text-white" />
                sevenunique4@gmail.com
              </a>
              <a href="tel:+919251582691" className="flex items-center gap-2 text-sm">
                <Phone size={18} className="text-white" />
                +91 92515 82691
              </a>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Follow us</h3>
              <div className="flex flex-row space-x-3">
                <Link href="#" className="hover:text-blue-400"><FaFacebookF /></Link>
                <Link href="https://www.youtube.com/@seven_spirit2" className="hover:text-red-500"><FaYoutube /></Link>
                <Link href="https://www.instagram.com/seven_spirit2/" className="hover:text-pink-500"><FaInstagram /></Link>
                <Link href="https://x.com/seven_spir42085" className="hover:text-gray-400"><FaXTwitter /></Link>
                <Link href="#" className="hover:text-blue-500"><FaLinkedinIn /></Link>
                <Link href="https://wa.me/919251582691" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaWhatsapp /></Link>
                <Link href="https://www.pinterest.com/sevenspirit12/" className="hover:text-red-500"><FaPinterest /></Link>
              </div>
            </div>
          </div>

          {/* Address Section (Commented Out) */}
          {/*
          <div>
            <h3 className="font-semibold mb-4">Head Office</h3>
            <p className="text-gray-300 text-sm">
              Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura,
              Jaipur, Rajasthan, India - 302017
            </p>
            <h3 className="font-semibold mb-4 mt-4">Corporate Office</h3>
            <p className="text-gray-300 text-sm">
              Office No. 101/2, Vakratunda Corporate Park Premise Co-operative Society,
              Goregaon (East), Mumbai - 400063
            </p>
          </div>
          */}

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 py-8 border-t border-gray-800 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Sevenunique Tech Solutions Private Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    // <footer
    //   className="relative text-white"
    //   style={{
    //     backgroundImage: "url('/footer.png')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="">
    //     <div className="max-w-7xl mx-auto px-4 lg:px-0 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">

    //       {/* Verified By Section */}
    //       <div className="col-span-2">
    //         <h3 className="font-semibold mb-4">Verified By</h3>
    //         <div className="flex flex-col gap-4">
    //           <Image className="bg-white p-2 rounded-md" src="/home/pci-logo.png" width={80} height={50} alt="Verified 1" />
    //           <Image className="bg-white p-2 rounded-md" src="/home/iso-logo.png" width={80} height={50} alt="Verified 2" />
    //         </div>
    //       </div>

    //       {/* Quick Links (Loans) */}
    //       <div className="col-span-2">
    //         <h3 className="font-semibold mb-4">Quick Links</h3>
    //         <ul className="space-y-2 text-sm">
    //           <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
    //           <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
    //           <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
    //           <li><Link href="/loan" className="hover:text-blue-400">Instant Loan</Link></li>
    //           <li><Link href="/loan/business-loan" className="hover:text-blue-400">Business Loan</Link></li>
    //           <li><Link href="/loan/home-loan" className="hover:text-blue-400">Home Loan</Link></li>
    //           <li><Link href="/loan/personal-loan" className="hover:text-blue-400">Personal Loan</Link></li>
    //           <li><Link href="/loan/construction-equipment-loan" className="hover:text-blue-400">Construction Loan</Link></li>
    //           <li><Link href="/loan/car-loan" className="hover:text-blue-400">Car Loan</Link></li>
    //         </ul>
    //       </div>

    //       {/* Services */}
    //       <div className="col-span-2">
    //         <h3 className="font-semibold mb-4">Services</h3>
    //         <ul className="space-y-2 text-sm">
    //           <li><Link href="/aeps" className="hover:text-blue-400">AEPS</Link></li>
    //           <li><Link href="/bbps" className="hover:text-blue-400">Bill Payments</Link></li>
    //           <li><Link href="/dmt" className="hover:text-blue-400">DMT</Link></li>
    //           <li><Link href="/recharge" className="hover:text-blue-400">Recharge</Link></li>
    //           <li><Link href="/insurance" className="hover:text-blue-400">Insurance</Link></li>
    //           <li><Link href="/booking" className="hover:text-blue-400">Booking</Link></li>
    //           <li><Link href="/credit-card" className="hover:text-blue-400">Credit Card</Link></li>
    //           <li><Link href="/pan-card" className="hover:text-blue-400">Pan Card</Link></li>
    //         </ul>
    //       </div>

    //       {/* Policies */}
    //       <div className="col-span-2">
    //         <h3 className="font-semibold mb-4">Policies</h3>
    //         <ul className="space-y-2 text-sm">
    //           <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
    //           <li><Link href="/terms-of-use" className="hover:text-blue-400">Terms of Use</Link></li>
    //           <li><Link href="/refund-policy" className="hover:text-blue-400">Cancellation & Refund Policy</Link></li>
    //           <li><Link href="/charge-back-policy" className="hover:text-blue-400">Chargeback Policy</Link></li>
    //           <li><Link href="/kyc-policy" className="hover:text-blue-400">KYC Policy & Onboarding</Link></li>
    //         </ul>
    //       </div>

    //       {/* Contact & Social */}
    //       <div className="col-span-4">
    //         <h3 className="font-semibold mb-4">Contact Us</h3>
    //         <div className="relative group space-y-4 transition duration-300 mb-3">
    //           <h3 className="text-lg font-bold text-white mb-1 flex items-center">
    //             <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 animate-bounce"></span>
    //             HEAD OFFICE
    //           </h3>
    //           <p className="text-gray-300 leading-relaxed text-sm">
    //             Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura,
    //             Jaipur, Rajasthan, India - 302017
    //           </p>

    //           <hr className="border-white" />

    //           <h3 className="text-lg font-bold text-white mb-1 flex items-center">
    //             <span className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-bounce"></span>
    //             CORPORATE OFFICE
    //           </h3>
    //           <p className="text-gray-300 leading-relaxed text-sm">
    //             Office No. 101/2, Vakratunda Corporate Park Premise
    //             Co-operative Society Limited, Off. Aarey Road, Goregaon (East),
    //             Mumbai - 400 063
    //           </p>
    //         </div>

    //         <div className="space-y-2">
    //           <a href="mailto:sevenunique4@gmail.com" className="flex items-center gap-2 text-sm">
    //             <Mail size={18} className="text-white" />
    //             sevenunique4@gmail.com
    //           </a>
    //           <a href="tel:+919251582691" className="flex items-center gap-2 text-sm">
    //             <Phone size={18} className="text-white" />
    //             +91 92515 82691
    //           </a>
    //         </div>
    //         <div className="mt-4">
    //           <h3 className="font-semibold mb-2">Follow us</h3>
    //           <div className="flex flex-row space-x-3">
    //             <Link href="#" className="hover:text-blue-400"><FaFacebookF /></Link>
    //             <Link href="#" className="hover:text-red-500"><FaYoutube /></Link>
    //             <Link href="#" className="hover:text-pink-500"><FaInstagram /></Link>
    //             <Link href="#" className="hover:text-gray-400"><FaXTwitter /></Link>
    //             <Link href="#" className="hover:text-blue-500"><FaLinkedinIn /></Link>
    //             <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaWhatsapp /></Link>
    //             <Link href="#" className="hover:text-red-500"><FaPinterest /></Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Footer Bottom */}
    //     <div className="mt-12 py-8 border-t border-gray-800 text-center">
    //       <p className="text-white text-sm">
    //         &copy; {new Date().getFullYear()} Sevenunique Tech Solutions Private Limited. All
    //         rights reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <>
      <footer
        className="bg-[radial-gradient(circle_at_center,_#018EDE,_#0C3D4C_70%)] border-t border-gray-200"

      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid md:grid-cols-3 gap-8 align-middle pb-4">
            <div className="col-span-1 bg-white rounded">
              <Image src="/image/sevenunique-logo.png" className=" p-1 mx-auto" alt="" width={100} height={100} />
            </div>
            <div className="col-span-2">
              <p className=" text-white text-sm font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              </p>
            </div>

          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 text-sm text-gray-700 
                   my-3 rounded-lg">
            <div className="col-span-1">
              <div className="relative group space-y-8 transition duration-300 mb-3">
             <div>
                 <h3 className="text-base font-semibold text-white mb-1 flex items-center">
                  Head office
                </h3>
                <div className="text-white gap-2 flex">
                  <div>
                    <FaMapMarkerAlt className=" mt-1" />
                  </div>
                  <p className="font-light">Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura,
                    Jaipur, Rajasthan, India - 302017</p>
                </div>
              </div>
             <div>
                 <h3 className="text-base font-semibold text-white mb-1 flex items-center">
                  Corporate Office
                </h3>
                <div className="text-white gap-2 flex">
                  <div>
                    <FaMapMarkerAlt className=" mt-1" />
                  </div>
                  <p className="font-light">Office No. 101/2, Vakratunda Corporate Park Premise
                    Co-operative Society Limited, Off. Aarey Road, Goregaon (East), Mumbai - 400 063</p>
             </div>
                </div>

              </div>
          
            </div>


       <div className="md:col-span-2">
   <div className="grid md:grid-cols-7">
  {/* Insights */}
            <div className="pl-6 col-span-3 md:col-span-2">
              <h3 className="font-semibold text-base text-white mb-1">Quick Links</h3>
              <ul className="space-y-1 text-sm font-light">
                <li><Link href="/" className="hover:text-blue-400 text-white">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 text-white">About</Link></li>
                <li><Link href="/blog" className="hover:text-blue-400 text-white">Blog</Link></li>
                <li><Link href="/loan" className="hover:text-blue-400 text-white">Instant Loan</Link></li>
                <li><Link href="/loan/business-loan" className="hover:text-blue-400 text-white">Business Loan</Link></li>
                <li><Link href="/loan/home-loan" className="hover:text-blue-400 text-white">Home Loan</Link></li>
                <li><Link href="/loan/personal-loan" className="hover:text-blue-400 text-white">Personal Loan</Link></li>
                <li><Link href="/loan/construction-equipment-loan" className="hover:text-blue-400 text-white">Construction Loan</Link></li>
                <li><Link href="/loan/car-loan" className="hover:text-blue-400 text-white">Car Loan</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="pl-6  col-span-3 md:col-span-2 ">
              <h3 className="font-semibold text-base mb-1 text-white">Services</h3>
              <ul className="space-y-1 text-sm font-light">
                <li><Link href="/aeps" className="hover:text-blue-400 text-white">AEPS</Link></li>
                <li><Link href="/bbps" className="hover:text-blue-400 text-white">Bill Payments</Link></li>
                <li><Link href="/dmt" className="hover:text-blue-400 text-white">DMT</Link></li>
                <li><Link href="/recharge" className="hover:text-blue-400 text-white">Recharge</Link></li>
                <li><Link href="/insurance" className="hover:text-blue-400 text-white">Insurance</Link></li>
                <li><Link href="/booking" className="hover:text-blue-400 text-white">Booking</Link></li>
                <li><Link href="/credit-card" className="hover:text-blue-400 text-white">Credit Card</Link></li>
                <li><Link href="/pan-card" className="hover:text-blue-400 text-white">Pan Card</Link></li>
                 <li><Link href="/tools" className="hover:text-blue-400 text-white">Tools</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div className=" col-span-7 md:col-span-3 space-y-2 mt-5 md:mt-0">
              
           
                <div className="flex gap-4 bg-white/20 align-middle py-3 px-2 lg:px-5 rounded  items-center ">
                  <h3 className="font-semibold text-white mb-3">Verified By</h3>
                  <Image className="bg-white px-3 py-1 rounded-md" src="/home/pci-logo.png" width={70} height={100} alt="Verified 1" />
                  <Image className="bg-white px-3 py-1 rounded-md" src="/home/iso-logo.png" width={70} height={100} alt="Verified 2" />
                </div>
          
              <div className="flex flex-col gap-1 bg-white/20 align-middle py-3  px-2 lg:px-5 rounded ">
                  <h3 className="font-semibold text-white mb-1">Contact us</h3>
                 <p className="text-white inline-flex gap-1 items-center">
                <FaPhoneAlt className="pt-1 text-sm" />
                  91+987654321
                 </p>
                    <p className="text-white inline-flex gap-1 items-center">
               <MdOutlineMail className="text-sm" />
                  7unique@gmail.com
                 </p>
                </div>

                  <div className="mt-4  px-2 lg:px-5">
                <h3 className="font-semibold mb-2 text-white">Follow us</h3>
                <div className="flex flex-row space-x-3 text-xl">
                  <Link href="#" className="hover:text-blue-400 text-white"><FaFacebookF /></Link>
                  <Link href="#" className="hover:text-red-500 text-white"><FaYoutube /></Link>
                  <Link href="#" className="hover:text-pink-500 text-white"><FaInstagram /></Link>
                  <Link href="#" className="hover:text-gray-400 text-white"><FaXTwitter /></Link>
                  <Link href="#" className="hover:text-blue-500 text-white"><FaLinkedinIn /></Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 text-white"><FaWhatsapp /></Link>
                  <Link href="#" className="hover:text-red-500 text-white"><FaPinterest /></Link>
                </div>
              </div>
            </div>
          </div>
       </div>
          </div>
        </div>


        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500 
                rounded-lg">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-7xl mx-auto px-6 gap-2">
           

            <p className="text-white text-sm">
              &copy; {new Date().getFullYear()} Sevenunique Tech Solutions Private Limited. All
              rights reserved.
            </p>
             <div className="flex space-x-2">
              <Link href="/privacy-policy" className="hover:underline text-[12px] text-white  pr-2 font-light border-r border-white">Privacy Policy</Link>
              <Link href="/terms-of-use" className="hover:underline text-[12px] text-white  pr-2 font-light border-r border-white"  >Terms of Use</Link>
              <Link href="/refund-policy" className="hover:underline text-[12px] text-white  pr-2 font-light border-r border-white">Cancellation & Refund Policy</Link>
              <Link href="/charge-back-policy" className="hover:underline text-[12px] text-white  pr-2 font-light border-r border-white">Chargeback Policy</Link>
              <Link href="/kyc-policy" className="hover:underline text-[12px] text-white  pr-2 font-light ">KYC Policy & Onboarding</Link>
            </div>
          </div>
        </div>
      </footer>


    </>
  );
};

export default Footer;

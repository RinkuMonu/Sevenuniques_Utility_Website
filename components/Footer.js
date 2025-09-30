import { Mail, Phone } from "lucide-react";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

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
            <div className="bg-white text-black font-bold px-4 py-2 rounded-lg inline-block mb-4">
              Logo Here
            </div>
            <div className="relative group border border-gray-700 rounded-2xl p-3 shadow-md shadow-blue-500/40 transition duration-300 mb-3">
              <h3 className="text-lg font-bold text-white mb-1 flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 animate-bounce"></span>
                HEAD OFFICE
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Plot No 97, Dakshinpuri - I, Shrikishan,
                Sanganer, Jagatpura, Jaipur, Rajasthan, India - 302017
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
                Co-operative Society Limited, Off. Aarey Road, 
                Goregaon (East), Mumbai - 400 063
              </p>
            </div>
              <div className="space-y-2 mt-3">
      <p className="flex items-center gap-2 text-sm mb-2">
        <Mail size={18} className="text-white" />
        7unique@gmail.com
      </p>
      <p className="flex items-center gap-2 text-sm">
        <Phone size={18} className="text-white" />
        +91 987654321
      </p>
    </div>
          </div>

       <div className=" col-span-1 md:col-span-5">
           <div className="grid  sm:grid-cols-4 w-full">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400">Bug bounty</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Privacy policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Refund policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Disclaimer</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-blue-400">Forums</a></li>
              </ul>
            </div>

            {/* Platforms */}
            <div>
              <h3 className="font-semibold mb-4">Platforms</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">AWS</a></li>
                <li><a href="#" className="hover:text-blue-400">Google Cloud</a></li>
                <li><a href="#" className="hover:text-blue-400">Azure</a></li>
                <li><a href="#" className="hover:text-blue-400">Kubernetes</a></li>
                <li><a href="#" className="hover:text-blue-400">Odoo</a></li>
                <li><a href="#" className="hover:text-blue-400">Vtiger Solutions</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold mb-4">Follow us on</h3>
              <div className="flex flex-col space-y-3">
                <a href="#" className="flex items-center gap-2 hover:text-blue-400"><FaFacebookF /> Facebook</a>
                <a href="#" className="flex items-center gap-2 hover:text-red-500"><FaYoutube /> Youtube</a>
                <a href="#" className="flex items-center gap-2 hover:text-pink-500"><FaInstagram /> Instagram</a>
                <a href="#" className="flex items-center gap-2 hover:text-gray-400"><FaXTwitter /> Xender</a>
                <a href="#" className="flex items-center gap-2 hover:text-blue-500"><FaLinkedinIn /> Linkedin</a>
                <a href="#" className="flex items-center gap-2 hover:text-green-500"><FaWhatsapp /> Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/30 text-center py-4 text-sm">
          © 2017 – 2025 <a href="#" className="text-blue-400">Infinitive Host</a> – Best Web Hosting Service Provider In India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

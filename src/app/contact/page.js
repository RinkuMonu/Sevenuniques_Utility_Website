"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BenefitsSection2 from "../../../components/BenefitsSection2";
import PartnersSection from "../../../components/PartnersSection";
import TestimonialSlider from "../../../components/TestimonialSlider";
import ContactBanner from "../../../components/ContactBanner";
import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

function Contact() {
  const data = {
    id: 1,
    subheading: "Contact",
    heading: "Get in Touch with Our Support Team",
    description:
      "We’re here to help you with any questions or concerns. Reach out via phone, email, or WhatsApp, and we’ll respond promptly. ",
    bgImage: "/image/contact-bg-img.png",
    centerImage: "/image/contact-main-img.png",
  };

  const LetterCircle = ({ letter, index }) => (
    <div
      className="flex items-center justify-center rounded-full lg:p-1 lg:h-12 lg:w-12 md:h-10 md:w-10 sm:h-8 sm:w-8"
      key={index}
    >
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-aboreto text-4xl md:text-5xl lg:text-6xl font-medium">
          {letter}
        </span>
      </div>
    </div>
  );

  const text = "CONTACT US";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile Number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Only digits are allowed";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
      });
      setErrors({});
    }
  };

  return (
    <>
      {/* ----------- Hero Section ----------- */}
      <section className="relative overflow-hidden">
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${data?.bgImage})` }}
          ></div>

          <div className="container z-10 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
              {/* Left Text Section */}
              <div className="px-6 md:px-20 py-12 lg:py-20">
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#0C3D4C]">
                  {data.subheading}
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C3D4C] leading-tight">
                  {data.heading}
                </h2>
                <p className="mt-4 text-sm md:text-base text-[#5D5D5D] max-w-md">
                  {data.description}
                </p>
                <Link
             href="https://utility.sevenuniques.in/register"
                  className="inline-block mt-6 rounded-full border border-[#0C3D4C] p-[2px]"
                >
                  <span className="block px-6 py-2 md:px-8 md:py-3 bg-[#0C3D4C] text-white font-semibold rounded-full transition-all duration-300 hover:bg-transparent hover:text-[#0d2f4d]">
                    Register now
                  </span>
                </Link>
              </div>

              {/* Right Image */}
          <div className="relative flex justify-center sm:mt-0">
  <Image
    src={data.centerImage}
    height={700}
    width={600}
    alt="center image"
    className="hidden sm:absolute sm:block -top-32 max-h-[85vh] md:max-h-[100vh] lg:max-h-[100vh] object-contain z-20 scale-110"
  />
</div>

            </div>
          </div>
        </div>
      </section>

      {/* ----------- CONTACT US Title Section ----------- */}
      <section className="bg-[#24576C] text-white py-12 md:py-20 relative h-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Title */}
            <div className="flex justify-center md:justify-start">
              <div className="flex flex-wrap gap-4 md:gap-6 mb-3">
                {text.split(" ").map((word, wordIndex) => (
                  <div key={wordIndex} className="flex space-x-1 md:mt-5">
                    {word.split("").map((char, index) => (
                      <LetterCircle key={index} letter={char} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Overlay Image */}
            <div className="hidden md:block relative">
              <div className="lg:absolute -bottom-24 right-0 lg:w-[600px] lg:h-[280px] z-20">
                <Image
                  src="/image/contact-overlay-img.png"
                  alt="overlay"
                  fill
                  className="object-contain lg:right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- FORM + INFO SECTION ----------- */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Form */}
          <div className="border rounded-lg p-6 sm:p-8 shadow-[2px_2px_15px_0px_rgba(188,188,188,0.4)]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#39464F] mb-6">
     Contact Info Section:
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-base text-[#39464F] font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-[#39464F] rounded-md px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-[1px_1px_10px_0px_#d6d6d6]"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Business Email */}
              <div className="mb-4">
                <label className="block text-base text-[#39464F] font-medium mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[#39464F] rounded-md px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-[1px_1px_10px_0px_#d6d6d6]"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div className="mb-4">
                <label className="block text-base text-[#39464F] font-medium mb-1">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  className="w-full border border-[#39464F] rounded-md px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-[1px_1px_10px_0px_#d6d6d6]"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="block text-base text-[#39464F] font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-[#39464F] rounded-md px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-[1px_1px_10px_0px_#d6d6d6]"
                  rows="3"
                  placeholder="Tell us about your needs.."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Terms */}
              <div className="mb-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <label className="text-sm text-gray-600">
                  I accept terms & conditions.
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm mb-4">{errors.terms}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-base md:text-lg shadow-md bg-[#144f64] text-white py-2 rounded-md font-medium hover:bg-[#0f3c4d] transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Info Section */}
          <div className="px-2 sm:px-6 md:px-0 md:p-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#144f64] mb-4">
              Stronger Relations, Smarter Solutions – Start Today.
            </h2>
            <p className="text-gray-500 mb-6 mt-6 text-sm md:text-base">
              We’re just a message, call, or click away.
            </p>

            <ul className="space-y-5 text-[#39464F] text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span><MdOutlineMail  className="text-[#24576C] text-lg mt-2"/></span>
                <div>
                  <p className="font-bold text-lg">Email</p>
                   <p className="text-gray-500 text-sm">support@7unique.in</p>
                  <p className="text-gray-500 text-sm"> info@7unique.in</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span><MdOutlinePhone  className="text-[#24576C] text-lg mt-2 "/></span>
                <div>
                  <p className="font-bold text-lg">Call us</p>
                  <p className="text-gray-500 text-sm"> 0141-4511098</p>
                </div>
              </li>

              <li className="flex align-middle items-center gap-3">
                <span><FaRegClock  className="text-[#24576C]   mt-1"/></span>
                <div>
                  <p className="font-bold text-lg">Office Hours: </p>
                  <p className="text-gray-500 text-sm">
                   Mon–Fri: 9:30 AM to 6:30 PM <br></br>
 Sat–Sun: Closed
                  </p>
                </div>
              </li>

               <li className="flex align-middle items-center gap-3">
                <span><MdOutlineLocationOn className="text-[#24576C] text-xl "/></span>
                <div>
                  <p className="font-bold text-lg">Visit us</p>
                  <p className="text-gray-500 text-sm">
                   <span className="font-bold">Head Office:</span> Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India, 302017
                  </p>
                   <p className="text-gray-500 text-sm">
                   <span className="font-bold">Corporate Office:</span>Office No. 101/2, Vakratunda Corporate Park Premises Co-operative Society Limited, Off Aarey Road, Goregaon (East), Mumbai – 400 063

                  </p>
                </div>
              </li>
            </ul>

            <p className="text-base text-[#39464F] mt-8">
              Working together for smarter solutions
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <img src="/image/logo-img.png" alt="logo" className="h-6" />
              <img src="/image/logo-abdks.png" alt="logo" className="h-6" />
              <img src="/image/verify-logo.png" alt="logo" className="h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* ----------- MAP SECTION ----------- */}
      <section className="relative bg-white py-8 text-center px-4 sm:px-6 lg:px-16 xl:px-24 lg:mt-12">
        <p className="text-sm md:text-lg text-[#115D8E] mb-2 font-bold">
         Map Section:
        </p>
        <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-8 md:mb-16">
       Here where you can find us! We are easy to find and always ready to connect.
        </h3>

        <div className="overflow-hidden rounded-lg shadow-md mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2631829043157!2d75.8672345743544!3d26.799747364938032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc94baba6edad%3A0xd9cda1cfd0d224a!2sSevenUnique%20Tech%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1753855642126!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ----------- Additional Sections ----------- */}
      <section className="py-16">
        <BenefitsSection2 />
      </section>
      <section className="py-16">
        <PartnersSection />
      </section>
      <section className="pt-6">
        <TestimonialSlider />
      </section>
      <ContactBanner />
    </>
  );
}

export default Contact;

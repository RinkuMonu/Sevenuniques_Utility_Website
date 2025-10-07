
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";


const SecurityIcon = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 2L4 6V11C4 16.52 7.58 21.74 12 23C16.42 21.74 20 16.52 20 11V6L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 11V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
    </svg>
);

const CollectionIcon = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            d="M3 10H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const UsageIcon = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            d="M8 21H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M12 17V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const CookiesIcon = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="2"
        />
        <circle cx="10" cy="10" r="1" fill="currentColor" />
        <circle cx="14" cy="14" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
    </svg>
);

const RightsIcon = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="12"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            d="M5.5 21C5.5 17.6863 8.18629 15 11.5 15H12.5C15.8137 15 18.5 17.6863 18.5 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const InfoIcon = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            d="M12 16V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M12 8H12.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

// ==== PRIVACY SECTIONS WITH SVG ICONS ====

const privacySections = [
    {
        id: "data-security",
        title: "Data Security",
        icon: SecurityIcon,
        content:
            "Our privacy policy prioritizes the protection of your personal data, ensuring that any information we collect is securely stored and used exclusively for the purpose of delivering and enhancing our services. We are committed to respecting your privacy and will never share your data with third parties without your explicit consent. Additionally, we adhere to all applicable data protection laws and regulations, including GDPR and other relevant frameworks.",
    },
    {
        id: "data-collection",
        title: "Data Collection",
        icon: CollectionIcon,
        content:
            "We collect data that you provide to us directly, such as account details and communication logs, as well as certain technical data automatically, like device and usage information. This allows us to improve our platform and tailor services to your needs.",
    },
    {
        id: "data-usage",
        title: "Data Usage",
        icon: UsageIcon,
        content:
            "We use collected data to operate, improve, and personalize our services. This includes analyzing trends, enhancing security, and providing customer support. Data may also be used for legal and compliance purposes.",
    },
    {
        id: "cookies",
        title: "Cookies",
        icon: CookiesIcon,
        content:
            "Our website uses cookies to enhance user experience. These cookies help us understand how visitors interact with our website, allowing us to improve navigation and content. You have the option to accept or decline cookies through your browser settings. Note that disabling cookies may affect the functionality of certain website features.",
    },
    {
        id: "user-rights",
        title: "Your Rights",
        icon: RightsIcon,
        content:
            "You have the right to access, correct, or delete your personal information at any time. You can also object to the processing of your data or request data portability. To exercise these rights, please contact our data protection officer using the contact information provided in this policy. We will respond to all legitimate requests within one month.",
    },
];

export default function Privacy() {
    const [activeSection, setActiveSection] = useState("data-security");
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -60% 0px" }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <>
          
                <section className="bg-white min-h-screen ">
                    <div className="bg-[#F4FCFF] rounded-2xl shadow-lg">
                        <section>
                            <div className="max-w-6xl mx-auto px-4 py-12">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-1/4">
                                        <div className="sticky top-32 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                                            <h3 className="text-lg font-semibold text-[#0C3D4C] mb-4 flex items-center">
                                                <InfoIcon className="w-5 h-5 mr-2" />
                                                Contents
                                            </h3>
                                            <ul className="space-y-2">
                                                {privacySections.map((section, index) => (
                                                    <li key={index}>
                                                        <button
                                                            onClick={() => scrollToSection(section.id)}
                                                            className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer ${activeSection === section.id
                                                                    ? "bg-[#115D8E] bg-opacity-10 text-white font-medium"
                                                                    : "text-gray-600 hover:bg-gray-100"
                                                                }`}
                                                        >
                                                            <section.icon
                                                                className={`w-4 h-4 mr-2 ${activeSection === section.id
                                                                        ? "text-[#115D8E]"
                                                                        : "text-gray-500"
                                                                    }`}
                                                            />
                                                            {section.title}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="lg:w-3/4">
                                        <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                                            <div className="text-center mb-10">
                                                <div className="mb-6">
                                                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#358EBA] to-[#24576C] rounded-full flex items-center justify-center">
                                                        <Image
                                                            src="/privacy/privacy-img.png"
                                                            alt="Privacy Icon"
                                                            width={40}
                                                            height={40}
                                                            className="filter invert"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="inline-block bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                                                    Privacy Policy
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-[#0C3D4C] mb-6 mt-4">
                                                    We value your privacy and are committed to protecting your personal information
                                                </h3>
                                                <div className="h-1 w-20 bg-gradient-to-r from-[#358EBA] to-[#24576C] mx-auto mb-6 rounded-full"></div>
                                                <p className="text-[#0C3D4C] text-lg leading-relaxed">
                                                    Our privacy policy prioritizes the protection of your personal data, ensuring that any information we collect is securely stored and used exclusively for the purpose of delivering and enhancing our services.
                                                </p>
                                            </div>
                                        </div>

                                        {privacySections.map((section, index) => (
                                            <div
                                                key={index}
                                                id={section.id}
                                                ref={(el) => (sectionRefs.current[index] = el)}
                                                className="bg-white p-8 rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md"
                                            >
                                                <div className="flex items-start mb-4">
                                                    <div className="text-2xl mr-4 bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white p-3 rounded-lg flex items-center justify-center">
                                                        <section.icon className="w-6 h-6" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-gray-800">
                                                        {section.title}
                                                    </h3>
                                                </div>
                                                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {section.content}
                                                </p>
                                            </div>
                                        ))}

                                        {/* Additional Info Card */}
                                        <div className="bg-gradient-to-r from-[#115D8E] to-[#777777] p-1 rounded-2xl shadow-lg mt-10">
                                            <div className="bg-white rounded-2xl p-6">
                                                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                                    <InfoIcon className="w-5 h-5 mr-2" />
                                                    Need More Information?
                                                </h3>
                                                <p className="text-gray-600 mb-4">
                                                    If you have any questions about our privacy practices or how we handle your data, please don't hesitate to contact our privacy team.
                                                </p>
                                                <Link href="/contact" className="bg-gradient-to-r from-[#358EBA] to-[#24576C] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-md">
                                                    Contact Privacy Team
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
       
        </>
    );
}


"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PanMoreinfo() {
    const [activeTab, setActiveTab] = useState("types");
    const tabs = [
        { id: "types", label: "Types of PAN Application" },
        { id: "apply", label: "How to Apply" },
        { id: "docs", label: "Supporting Documents" },
        { id: "comm", label: "Communications" },
        { id: "fee", label: "Processing Fee" },
        { id: "time", label: "Processing Time" },
    ];
    return (
        <>
            <section className="relative bg-white py-12 px-6 md:px-16 overflow-hidden">
                {/* Decorative arcs */}
                <div className="absolute right-0 bottom-0 hidden md:block opacity-40">
                    <svg width="220" height="220" viewBox="0 0 220 220">
                        <path
                            d="M220,110 A110,110 0 0,1 110,220 L110,180 A70,70 0 0,0 180,110 Z"
                            fill="#FFB703"
                        />
                        <path
                            d="M220,110 A110,110 0 0,0 110,0 L110,40 A70,70 0 0,1 180,110 Z"
                            fill="#E85D04"
                        />
                        <path
                            d="M110,220 A110,110 0 0,1 0,110 L40,110 A70,70 0 0,0 110,180 Z"
                            fill="#94D2BD"
                        />
                    </svg>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    More info on <span className="text-[#E60012]">PAN</span>
                </h1>

                {/* Tabs */}
                <div className="relative mb-10 border-b border-gray-200">
                    <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium text-gray-600">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative pb-3 transition-colors duration-200 ${activeTab === tab.id
                                    ? "text-[#E60012] font-semibold"
                                    : "hover:text-[#E60012]"
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E60012] rounded-full"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-gray-800 leading-relaxed max-w-5xl space-y-6">
                    {activeTab === "types" && (
                        <div>
                            <h2 className="text-lg font-semibold mb-3">
                                Two PAN applications are primarily used, and it depends on whether you are seeking a new PAN application or renewing the existing one.
                            </h2>
                            <p className="mb-2">At SevenUniques, the online PAN service portal is what simplifies, makes the process fast, and makes it digital</p>
                            <ol className="list-decimal list-inside space-y-10">
                                <li className="">
                                    <span className="font-bold mb-2">
                                        Application for allotment of PAN:
                                    </span>
                                    <p className="my-2">
                                        Applicants that have never obtained a PAN or who have not gotten one yet utilize this form.

                                    </p>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li>
                                            The official Income Tax Department site will tell you whether your name has a PAN or not.
                                        </li>
                                        <li>
                                            The applicable forms are as follows (according to the ITD guidelines as of November 1, 2011):
                                        </li>
                                    </ul>
                                    <p className="my-3"> <b>Form 49A:</b> This is the form for Indian citizens, irrespective of their residence in or out of India.</p>
                                    <p className="my-3"> <b>Form 49AA:</b>  For foreign citizens who are applying to PAN.</p>
                                </li>

                                <li>
                                    <span className="font-bold mb-2">
                                        New PAN Card Applications / PAN Data Corrections / Changes.
                                    </span>
                                    <ul className="list-disc list-inside ml-8 space-y-1 mt-3">
                                        <li style={{ listStylePosition: "outside" }}>
                                            In case you have a PAN and need a new PAN card or need to change certain details like your name, date of birth, or address, then use this form.
                                        </li>
                                        <li style={{ listStylePosition: "outside" }}>
                                            The new card is going to be issued with the same PAN with new information.
                                        </li>
                                        <li style={{ listStylePosition: "outside" }}>
                                            Under the Indian <b> digital PAN card service, </b> Indian citizens as well as the foreign citizens will be able to do these processes online by using the <b> PAN card online quick service of SevenUniques.</b>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    )}

                    {activeTab === "apply" && (
                        <div>
                            <h2 className="text-lg font-semibold mb-3">How to Apply for PAN</h2>
                            <p className="mb-4">
                                There are two simple methods in which applicants can apply for PAN at
                                <span className="text-[#E60012] font-semibold"> SevenUniques</span>:
                            </p>

                            <ol className="list-decimal list-inside space-y-6">
                                {/* Online Mode */}
                                <li>
                                    <p className="font-semibold text-gray-900 mb-1">Online Mode:</p>
                                    <p className="text-gray-700">
                                        Apply online through our PAN service portal to complete and file your
                                        PAN application digitally. You have the option of paperless
                                        submission using <b>e-KYC</b>, <b>e-Sign</b>, or <b>Digital Signature
                                            Certificate (DSC)</b>. Alternatively, you can also forward physical
                                        documents for verification after online submission.
                                    </p>
                                </li>

                                {/* Offline Mode */}
                                <li>
                                    <p className="font-semibold text-gray-900 mb-1">Offline Mode:</p>
                                    <p className="text-gray-700">
                                        You can download and print a copy of the PAN application form,
                                        complete it manually, attach the required supporting documents, and
                                        submit it to any authorized PAN center of{" "}
                                        <span className="text-[#E60012] font-semibold">SevenUniques</span>.
                                    </p>
                                    <p className="text-gray-700 mt-2">
                                        Please make sure to carefully read all{" "}
                                        <b>instructions and guidelines</b> before filling the form to avoid
                                        mistakes or delays in processing.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    )}


                    {activeTab === "docs" && (
                        <div>
                            <h2 className="text-lg font-semibold mb-4">
                                Supporting Documents Required
                            </h2>
                            <ul className="list-disc ml-8 space-y-6">
                                <li style={{ listStylePosition: "outside" }}>The applicants will be required to provide valid Proof of Identity (POI) and Proof of Address (POA) documents as stated in rule 114 of the Income Tax Department.</li>
                                <li style={{ listStylePosition: "outside" }}>The same name in the application shall be identical to the name in the submitted documents.</li>
                                <li style={{ listStylePosition: "outside" }}>All the acceptable documents are also listed on our PAN service portal in the Documents Required section.</li>
                            </ul>
                        </div>
                    )}

                    {activeTab === "comm" && (
                        <div>
                            <h2 className="text-lg font-semibold mb-3">Communications</h2>
                            <p className="mb-3 text-gray-700">
                                Once submitted,{" "}
                                <span className="text-[#E60012] font-semibold">SevenUniques</span>{" "}
                                authenticates, scans, and securely forwards the PAN application
                                information to the{" "}
                                <span className="font-semibold">Income Tax Department (ITD)</span>.
                            </p>

                            <p className="mb-3 text-gray-700">
                                In the case of <b>Form 49A (New PAN)</b>, the ITD generates a new PAN.
                                <span className="text-[#E60012] font-semibold"> SevenUniques</span> then
                                prints and dispatches your physical PAN card, while the{" "}
                                <b>e-PAN card</b> is delivered directly to your registered email address.
                            </p>

                            <p className="mb-3 text-gray-700">
                                In case of <b>change or correction</b> requests,{" "}
                                <span className="text-[#E60012] font-semibold">SevenUniques</span> sends
                                the requested updates to ITD. Once verification is completed, a{" "}
                                <b>new PAN card</b> reflecting the updated information is printed and
                                sent to your communication address.
                            </p>

                            <p className="mb-3 text-gray-700">
                                All official communication will be sent to your{" "}
                                <b>registered communication address</b> as mentioned in the application
                                form.
                            </p>

                            <p className="mb-3 text-gray-700">
                                Applicants providing a valid <b>email ID</b> will receive the{" "}
                                <b>e-PAN card immediately</b>, in addition to the physical PAN card.
                            </p>

                            <p className="text-gray-700">
                                We strongly recommend including your{" "}
                                <b>mobile number</b> to receive timely updates and to quickly resolve any
                                discrepancies during the application process.
                            </p>
                        </div>
                    )}


                    {activeTab === "fee" && (
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Processing Fee Structure</h2>

                            <p className="mb-3 text-gray-700">
                                <span className="text-[#E60012] font-semibold">SevenUniques</span> offers
                                affordable and transparent charges for all categories of PAN applications
                                through its online PAN card service.
                            </p>

                            <p className="mb-3 text-gray-700">
                                <b>Note:</b> Charges for <b>eSign</b> are applicable when the{" "}
                                <b>e-KYC</b> or <b>e-Sign</b> options are selected.
                            </p>

                            <p className="mb-6 text-gray-700">
                                All payments made through the{" "}
                                <span className="text-[#E60012] font-semibold">
                                    SevenUniques PAN service portal
                                </span>{" "}
                                are handled in a safe and secure manner, ensuring instant and reliable
                                processing for a smooth experience.
                            </p>

                            {/* Section A */}
                            <h3 className="text-md font-semibold text-gray-900 mb-3">
                                A) When a Physical PAN Card Is Necessary
                            </h3>

                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-gray-200 text-sm">
                                    <thead className="bg-gray-100 text-gray-700">
                                        <tr>
                                            <th className="border px-4 py-2 text-left">Sr. No.</th>
                                            <th className="border px-4 py-2 text-left">Application Type</th>
                                            <th className="border px-4 py-2 text-left">Address Type</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-800">
                                        <tr>
                                            <td className="border px-4 py-2">1</td>
                                            <td className="border px-4 py-2">Application in India filed in PAN</td>
                                            <td className="border px-4 py-2">Indian Address</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">2</td>
                                            <td className="border px-4 py-2">PAN application made outside India</td>
                                            <td className="border px-4 py-2">Foreign Address</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">3</td>
                                            <td className="border px-4 py-2">
                                                Physical document mode of online application
                                            </td>
                                            <td className="border px-4 py-2">Indian Address</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">4</td>
                                            <td className="border px-4 py-2">
                                                Application online through physical document mode
                                            </td>
                                            <td className="border px-4 py-2">Foreign Address</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">5</td>
                                            <td className="border px-4 py-2">
                                                Electronic knowledge of customer (e-KYC / e-Sign / DSC)
                                            </td>
                                            <td className="border px-4 py-2">Indian Address</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">6</td>
                                            <td className="border px-4 py-2">
                                                e-KYC / e-Sign / DSC paperless application
                                            </td>
                                            <td className="border px-4 py-2">Foreign Address</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">7</td>
                                            <td className="border px-4 py-2">Order of Reprint PAN Card</td>
                                            <td className="border px-4 py-2">Indian Address</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">8</td>
                                            <td className="border px-4 py-2">Application to Reprint PAN Card</td>
                                            <td className="border px-4 py-2">Foreign Address</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 italic mb-8">
                                <b>Remark:</b> There are eSign fees of ₹5.90 (including taxes) when the
                                e-KYC and/or e-Sign service is utilized.
                            </p>

                            {/* Section B */}
                            <h3 className="text-md font-semibold text-gray-900 mb-3">
                                B) Physical PAN Card Not Needed (e-PAN Only)
                            </h3>
                            <p className="mb-4 text-gray-700">
                                With our digital PAN card service, applicants can choose to receive only
                                the <b>e-PAN</b>. The e-PAN will be sent directly to your registered email
                                address.
                            </p>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-200 text-sm">
                                    <thead className="bg-gray-100 text-gray-700">
                                        <tr>
                                            <th className="border px-4 py-2 text-left">Sr. No.</th>
                                            <th className="border px-4 py-2 text-left">Application Type</th>
                                            <th className="border px-4 py-2 text-left">Delivery Mode</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-800">
                                        <tr>
                                            <td className="border px-4 py-2">1</td>
                                            <td className="border px-4 py-2">Application received at PAN Centre</td>
                                            <td className="border px-4 py-2">e-PAN only</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">2</td>
                                            <td className="border px-4 py-2">
                                                Application (physical documents sent) online
                                            </td>
                                            <td className="border px-4 py-2">e-PAN only</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">3</td>
                                            <td className="border px-4 py-2">Paperless (e-KYC / e-Sign / DSC)</td>
                                            <td className="border px-4 py-2">e-PAN only</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}


                    {activeTab === "time" && (
                        <div>
                            <h2 className="text-lg font-semibold mb-3">Processing Time</h2>

                            <p className="mb-3 text-gray-700">
                                When a PAN application is properly completed and the provided information
                                and documents are accurate, the usual processing period is around{" "}
                                <b>two weeks</b> to review the application and dispatch the{" "}
                                <b>physical PAN card</b>.
                            </p>

                            <p className="mb-3 text-gray-700">
                                For <b>paperless e-PAN applications</b>, processing and digital delivery
                                can be completed within <b>2–3 working days</b> using our{" "}
                                <span className="text-[#E60012] font-semibold">
                                    SevenUniques PAN Card Online Quick Service
                                </span>
                                .
                            </p>

                            <p className="mb-3 text-gray-700">
                                Through the{" "}
                                <span className="text-[#E60012] font-semibold">
                                    SevenUniques PAN Service Portal
                                </span>
                                , applicants can monitor the status of their PAN application at any time
                                using their <b>acknowledgment number</b>.
                            </p>

                            <p className="text-gray-700">
                                Since the beginning of 2015, there has been a consistent growth in the
                                number of jobs created annually on average. This steady growth reflects
                                increased efficiency and improved processing capabilities across the
                                system.
                            </p>
                        </div>
                    )}

                </div>
            </section>
        </>
    )
}

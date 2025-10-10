import Image from "next/image";

import React from 'react'

export default function AboutSection() {
    return (
        <>
            <section className="py-20 bg-white border-t border-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
                                <span className="text-[#00b4d8] font-semibold text-sm">About Us</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b4f] mb-6 leading-tight">
                                Your Trusted Partner in Bike Insurance
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We understand that your bike is more than just a vehicle - it's your freedom, your passion, and your daily
                                companion. That's why we've dedicated ourselves to providing comprehensive insurance coverage that
                                protects what matters most to you.
                            </p>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                With over a decade of experience in the insurance industry, we've helped thousands of riders find the
                                perfect coverage for their needs. Our commitment to transparency, quick claim settlements, and customer
                                satisfaction has made us a leading choice for bike insurance.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                                    <div className="text-3xl font-bold text-[#00b4d8] mb-2">50K+</div>
                                    <div className="text-sm text-gray-600">Happy Customers</div>
                                </div>
                                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                                    <div className="text-3xl font-bold text-[#00b4d8] mb-2">98%</div>
                                    <div className="text-sm text-gray-600">Claim Success Rate</div>
                                </div>
                                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                                    <div className="text-3xl font-bold text-[#00b4d8] mb-2">24/7</div>
                                    <div className="text-sm text-gray-600">Support Available</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Image and Features */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                                <Image
                                    src="/insurance/about.jpg"
                                    alt="Bike Insurance"
                                    className="w-full h-[500px]  object-cover relative"
                                    fill
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b4f]/80 to-transparent"></div>

                                {/* Floating Card */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl p-6 shadow-xl">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0d3b4f] mb-1">Instant Policy Activation</h4>
                                            <p className="text-sm text-gray-600">Get covered in minutes with our streamlined digital process</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00b4d8]/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0077b6]/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


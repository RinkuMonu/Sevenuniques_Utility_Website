"use client"
import React, { useRef, useEffect, useState } from "react";

const steps = [
    { id: 1, description: "Applicant clicks on Apply PAN Online", position: "right" },
    { id: 2, description: "Applicant enter Name, Application type, OTP etc.", position: "left" },
    { id: 3, description: "Applicant gets redirected to Protean's PAN application", position: "right" },
    { id: 4, description: "Customer gets redirected to Protean PAN application", position: "left" },
    { id: 5, description: "Customer enters the application details", position: "right" },
    { id: 6, description: "Submits the form", position: "left" },
    { id: 7, description: "Token Number is generated", position: "right" },
    { id: 8, description: "Selects the application type", position: "left" },
    { id: 9, description: "Provides personal details", position: "right" },
    { id: 10, description: "Provides income details if any", position: "left" },
    { id: 11, description: "Provides contact information", position: "right" },
    { id: 12, description: "AO code will be auto fetched based on PIN Code", position: "left" },
    { id: 13, description: "Provides document information", position: "right" },
    { id: 14, description: "Submits to proceed further", position: "left" },
    { id: 15, description: "Verifies the application information before final submission", position: "right" },
    { id: 16, description: "Selects the mode of payment", position: "left" },
    { id: 17, description: "Fees related info", position: "right" },
    { id: 18, description: "Proceeds to make the payment", position: "left" },
    { id: 19, description: "Selects the mode of payment", position: "right" },
    { id: 20, description: "Checks the status of the PAN applied", position: "left" },
    { id: 21, description: "Status of the PAN", position: "right" },
];

const VerticalTimeline = () => {
    const containerRef = useRef(null);
    const lastStepRef = useRef(null);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current && lastStepRef.current) {
            const containerTop = containerRef.current.getBoundingClientRect().top;
            const lastStepTop = lastStepRef.current.getBoundingClientRect().top;
            setLineHeight(lastStepTop - containerTop + 0); // +40 to adjust below last step circle
        }
    }, []);

    return (
        <>
            <div className="max-w-7xl mx-auto text-center px-4 lg:px-0 pt-32 ">
                <h3 className="text-[#0C3D4C] text-2xl lg:text-4xl font-bold">
                    Har Step Ka Experience, Smooth Aur Smart!
                </h3>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos
                </p>
            </div>
            <div ref={containerRef} className="relative px-4 md:px-0 pt-8 pb-16  overflow-hidden md:max-w-lg  lg:max-w-4xl mx-auto">
                {/* Dynamic dashed line */}
                <div
                    className="hidden lg:block absolute left-1/2 -translate-x-1/2 border-l-2 border-dashed border-[#24576C]"
                    style={{ height: `${lineHeight}px` }}
                ></div>

                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        ref={index === steps.length - 1 ? lastStepRef : null}
                        className={`mb-10 lg:flex items-center w-full ${step.position === "right" ? "justify-end" : ""}`}
                    >
                        {step.position === "left" && (
                            <div className="lg:flex justify-end md:pl-8">
                                <div className="flex items-center justify-end gap-2 bg-[#E6F6FF] rounded-full shadow-md lg:w-md text-[#0C3D4C] font-semibold">
                                    <p className="ps-4 break-words text-base">{step.description}</p>
                                    <div className="relative z-10 bg-[#24576C] text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg flex-shrink-0">
                                        <span className="font-semibold text-2xl">{step.id}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step.position === "right" && (
                            <div className="lg:flex justify-start md:pr-8">
                                <div className="bg-[#E6F6FF] flex items-center gap-2 rounded-full shadow-md lg:w-md text-[#0C3D4C] font-semibold">
                                    <div className="relative z-10 bg-[#24576C] text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg flex-shrink-0">
                                        <span className="font-semibold text-2xl">{step.id}</span>
                                    </div>
                                    <p className="pe-4 break-words text-base">{step.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div></>
    );
};

export default VerticalTimeline;

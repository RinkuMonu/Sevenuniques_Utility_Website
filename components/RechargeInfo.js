import React from "react";
import BenefitsSection2 from "./BenefitsSection2";

const RechargeInfo = () => {
    const infoData = [
        {
            title: "Safe Aur Quick Mobile Recharge",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus ",
        },
        {
            title: "Safe Aur Quick Mobile Recharge",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus ",
        }, 
        {
            title: "Safe Aur Quick Mobile Recharge",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus ",
        }, 
        {
            title: "Safe Aur Quick Mobile Recharge",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus ",
        }, 
        {
            title: "Safe Aur Quick Mobile Recharge",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus ",
        }, 
        {
            title: "Safe Aur Quick Mobile Recharge",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos At vero eos et accusamus et At vero eos et accusamus ",
        },
    ];

    return (
        <section className=" mt-10 mb-16 ">
            <div className=" ">
                {infoData.slice(0, 3).map((item, index) => (
                    <div key={index} className={`bg-[#E6F6FE] rounded-2xl p-5 lg:p-16 max-w-6xl  my-10 ${index%2 == 0 ? "": "ms-auto"}`}>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">
                            {item.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

           <BenefitsSection2/>

            {/* Bottom 3 Cards */}
            <div className="mt-24">
                {infoData.slice(3, 6).map((item, index) => (
                   <div key={index} className={`bg-[#E6F6FE] rounded-2xl p-5 lg:p-16 max-w-5xl  my-10 ${index%2 !== 0 ? "": "ms-auto"}`}>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">
                            {item.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RechargeInfo;

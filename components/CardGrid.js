import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const CreditCard = ({ bank, name, points, title ,tag , image }) => {
    return (
        <div className="  rounded-2xl shadow-xl overflow-visible max-w-lg">
            
            <div className="grid grid-cols-1 md:grid-cols-3 overflow-visible">

                <div className="col-span-1 flex flex-col justify-between md:order-2">
                    <div className=" bg-red-500 text-white text-end text-sm font-semibold px-5 py-2  md:rounded-tr-2xl">
                        {tag}
                    </div>
                    <p className="text-end text-[#24576C] font-bold text-2xl pe-4 ">
                        {bank}
                    </p>
                </div>
                <div className="relative overflow-visible col-span-2 md:order-1">
                    <Image
                        src={image}
                        alt="logo-bbps"
                        width={400}
                        height={400}
                        className="lg:absolute -top-18"
                    />
                </div>
            </div>
            <div className="py-6 px-4 lg:mt-10 ">



                <div className="mt-6">
                    <div className="flex justify-between">
                        <div className="text-[#24576C]  text-sm font-semibold bg-[#E1FFBF]  px-2 py-1 inline-block">
                            BEST FOR
                        </div>
                        <Link href="" className="text-[#24576C] " ><Heart /></Link>
                    </div>
                    <h3 className="text-xl font-semibold text-[#24576C] mt-2">
                       {title}
                    </h3>
                    <p className="text-[#24576C] mt-1">
                       {points}
                    </p>
                    <a href="#" className="text-[#018BDA] font-bold ">
                        Offers more
                    </a>
                </div>

                {/* Action Buttons */}
                <div className=" flex space-x-4 justify-end">
                    <Link href="" className=" w-fit bg-[#018EDE] text-white font-bold py-2 px-10 rounded-full hover:bg-[#018EDE]/70 transition-colors">
                        Apply
                    </Link>
                    <Link href="" className="w-fit border border-[#018EDE] text-[#018EDE] font-bold py-2 px-10 rounded-full hover:bg-[#018EDE] hover:text-white transition-colors">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default function CardGrid({cardgrid}) {
    return (
        <div className="px-4 lg:px-0   max-w-7xl mx-auto ">
              <h3 className="text-2xl sm:text-3xl lg:mb-24 font-bold text-[#0C3D4C]">
       {cardgrid.heading}
          </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 justify-center lg:gap-y-40 gap-x-10 w-full">
                {cardgrid.cards.map((card) => (
                    <CreditCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
}

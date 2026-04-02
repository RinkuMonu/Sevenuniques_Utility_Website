  "use client";

  import Image from "next/image";
  import Link from "next/link";

  export default function Expertise() {
    const data = [
      // { title: "AePS (Aadhaar Enabled Payment System)", img: "/about/aeps3d.png", link:"/aeps" },
      { title: "Utility & Bill Payment", img: "/about/Utility3d.png", link:"/bill-payments" },
      { title: "Money Transfer (DMT)", img: "/about/dmt3d.png", link:"/dmt" },
      { title: "Micro ATM Services", img: "/about/matm3d.png", link:"/" },
      { title: "Credit Card Solutions", img: "/about/cc3d.png", link:"/credit-card" },
    ];

    return (
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#0C3D4C] leading-tight mb-4">
         Our Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {data.map((feature, idx) => (
              <Link 
              href={feature.link}
                key={idx}
                className="bg-white rounded-lg px-6  text-center 
                flex flex-col justify-between items-center transition shadow-md min-h-[200px]"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="h-[80px] flex justify-center items-center">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-[#09343D] mt-7 text-center leading-snug min-h-[40px]">
                    {feature.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

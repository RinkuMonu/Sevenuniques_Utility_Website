import React from 'react';
import { ShieldCheck, SmartphoneNfc, CheckSquare, ArrowDownUp, Network, History } from 'lucide-react';

const benefitItems = [
  { icon: <SmartphoneNfc size={40} strokeWidth={1.25} />, title: 'Instant Transfer' },
  { icon: <ShieldCheck size={40} strokeWidth={1.25} />, title: 'High Security' },
  { icon: <CheckSquare size={40} strokeWidth={1.25} />, title: 'Easy Access' },
  { icon: <ArrowDownUp size={40} strokeWidth={1.25} />, title: 'Low Cost' },
  { icon: <Network size={40} strokeWidth={1.25} />, title: 'Wide Reach' },
  { icon: <History size={40} strokeWidth={1.25} />, title: '24/7 Service' },
];

const BenefitCard = ({ icon, title }) => (
  <div className="flex h-40 w-full flex-col items-center justify-center gap-4 rounded-2xl bg-[#018EDE] p-4 text-center text-white shadow-xl shadow-blue-500/20 transition-transform duration-300 hover:scale-105">
    {icon}
    <h3 className="font-medium text-lg">{title}</h3>
  </div>
);

/**
 * The central piece, now with precisely rendered lines.
 */
const DiagramCenterpiece = () => {
    const buttonWidth = '220px';
    const horizontalLineLength = `calc(25% - ${parseInt(buttonWidth, 10) / 3}px)`; 
    const lineWidth = '2px'; 
    const lineColor = '#018EDE'; 

    return (
        <div className="relative my-4 hidden h-44 w-full max-w-5xl lg:block">
            <div 
                className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#018EDE]" 
                style={{ width: `calc(${horizontalLineLength} - 8px)`, borderRadius: '0 1px 1px 0' }} 
            ></div>
            <div 
                className="absolute right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#018EDE]" 
                style={{ width: `calc(${horizontalLineLength} - 8px)`, borderRadius: '1px 0 0 1px' }} 
            ></div>
          <div className="absolute bottom-1/2 left-[2.66%] h-1/3 w-px bg-[#018EDE]" style={{width: lineWidth}}></div>
            <div className="absolute bottom-1/2 left-1/2 h-1/2 w-px bg-[#018EDE]" style={{width: lineWidth}}></div>
            <div className="absolute bottom-1/2 left-[83.33%] h-1/3 w-px bg-[#018EDE]" style={{width: lineWidth}}></div>
            <div className="absolute top-1/2 left-[16.66%] h-1/3 w-px bg-[#018EDE]" style={{width: lineWidth}}></div>
            <div className="absolute top-1/2 left-1/2 h-1/2 w-px bg-[#018EDE]" style={{width: lineWidth}}></div>
            <div className="absolute top-1/2 left-[83.33%] h-1/3 w-px bg-[#018EDE]" style={{width: lineWidth}}></div>

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div 
                    className="rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 p-[2px] shadow-2xl shadow-blue-500/40"
                    style={{ width: buttonWidth }}
                >
                    <div className="flex items-center justify-center rounded-full bg-gradient-to-t from-[#34B5FF] to-[#007599] py-5 px-4">
                         <span className="text-3xl font-bold uppercase tracking-wider text-white px-10">
                            Benefits
                        </span>
                    </div>
                </div>
            </div>
            <div 
                className="absolute left-1/2 top-1/2 z-10 h-[2px] w-2 -translate-x-full -translate-y-1/2 bg-[#018EDE] rounded-r-full" 
                style={{ marginLeft: `calc(-${parseInt(buttonWidth, 10) / 2}px + 6px)` }} 
            ></div>
            <div 
                className="absolute left-1/2 top-1/2 z-10 h-[2px] w-2 -translate-y-1/2 bg-blue-200 rounded-l-full" 
                style={{ marginLeft: `calc(${parseInt(buttonWidth, 10) / 2}px - 6px)` }} 
            ></div>
        </div>
    );
};

const BenefitsDMT = () => {
  const topBenefits = benefitItems.slice(0, 3);
  const bottomBenefits = benefitItems.slice(3, 6);

  return (
    <section className="bg-white py-10 font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="grid w-full max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {topBenefits.map((item) => (
              <BenefitCard key={item.title} icon={item.icon} title={item.title} />
            ))}
          </div>
            
          <div className=" lg:hidden">
              <span className="inline-block rounded-full bg-gradient-to-b from-[#007599] to-[#34B5FF] px-10 py-3  font-bold uppercase text-white shadow-xl">
                  Benefits
              </span>
          </div>

          <DiagramCenterpiece />

          <div className="grid w-full max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {bottomBenefits.map((item) => (
              <BenefitCard key={item.title} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsDMT;
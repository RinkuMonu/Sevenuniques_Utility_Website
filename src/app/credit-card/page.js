import React from 'react'
import ServiceBanner from '../../../components/ServiceBanner'
import Image from 'next/image';

function page() {
         const data= {
        id: 1,
        subheading: 'Credit Card',
        heading: 'Har Swipe Pe Extra Benefits',
        description: 'Quickly transfer funds to your loved ones anytime, anywhere with our secure and reliable Domestic Money Transfer service.',
        bgImage: '/credit/creditbg.png',
        centerImage: '/credit/credit1.png',
    }
        const LetterCircle = ({ letter , index }) => (
        <div className="flex h-20 w-20 items-center justify-center rounded-full  p-1 md:h-24 md:w-24" key={index}>
            <div className="flex h-full w-full items-center justify-center">
                <span className="font-aboreto  text-3xl font-medium md:text-6xl">
                    {letter}
                </span>
            </div>
        </div>
    );

    const letters = ["C", "R", "E", "D", "I", "T", " ", "C", "A", "R", "D"];
  return (
    <>
         <ServiceBanner data={data} />
           <section>
                         <div className={`relative pt-20 overflow-visible`} style={{ backgroundColor: "#CEF5F5" }}>
                             <div className="max-w-7xl mx-auto px-4 lg:px-0 relative">
                                 <div className="grid grid-cols-1 md:grid-cols-2 ">
                                     <div className="relative ">
                                         <div className="flex space-x-4">
                                             {letters.map((char , index) => (
                                                 <LetterCircle key={index} letter={char} />
                                             ))}
                                         </div>
                                     </div>
         
                                     <div className="hidden md:block relative h-[200px] mt-10 md:mt-0 ">
                                         <div className=" lg:absolute bottom-0 -right-20  w-[680px] lg:h-[600px] z-20  overflow-visible">
                                             <Image
                                                 src={"/credit/credit2.png"}
                                                 alt="loan-section"
                                                 fill
                                                 className=" right-0"
                                                 style={{ objectPosition: 'right' }}
                                             />
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </section>
    </>
  )
}

export default page

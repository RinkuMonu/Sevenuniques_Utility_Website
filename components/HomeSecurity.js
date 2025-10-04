import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function HomeSecurity() {
    const features = ['Privacy', 'Security', 'Trust'];
    return (
        <div
            className="w-full "
              style={{
    background: "linear-gradient(90deg, #01202A 0%, #01202A 25%, #0B4051 50%, #095C8C 75%, #095C8C 100%)"
  }}
        >
            <div className='grid md:grid-cols-2 max-w-7xl mx-auto px-4 md:px-0'>
                <div className=" text-white flex items-center justify-center " >
                    <div className="container mx-auto py-12 max-w-4xl">
                        <div className="text-left mb-12">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                Guarding Your Data,<br />Securing Your Future
                            </h1>
                            <p className="mt-6 max-w-2xl text-gray-400">
                                At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio DignissimosAt Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Odio
                            </p>
                        </div>
                        <div className="mb-12">
                            <Link href="/contact" className=" text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"   style={{
    background: "linear-gradient(90deg,#358EBA  0%, #24576C 100%)"
  }}>
                                Register now
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {features.map((featureName) => (
                                <div key={featureName} className="border border-[#3080A6] rounded-lg py-10 px-6 w-full text-center hover:bg-cyan-900/40 hover:border-cyan-400 transition-colors duration-300 cursor-pointer">
                                    <h3 className="text-white text-2xl font-semibold">{featureName}</h3>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div>
                    <Image src="/home/homesecutity.png" width={400} height={400} alt='homesecutity' className='object-contain w-full h-full' />
                </div>
            </div>

        </div>
    )
}

export default HomeSecurity

import Image from 'next/image';
import React from 'react';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#fdfeff] pt-12 pb-20 md:pt-20 md:pb-28 lg:h-[85vh]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-36 top-12 hidden md:block z-1">
          <div className="w-44 -rotate-3 rounded-md bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <div className="flex items-center justify-start my-10">
              <Image 
                src="/about/retailer.png"
                alt="Retailer" 
                width={40} 
                height={40} 
                className="h-18 w-18 object-cover "
              />
            </div>
            <h6 className="text-sm font-semibold text-zinc-900">Retailer</h6>
            <p className="mt-1 text-[11px] tracking-wide text-zinc-500 leading-tight">
             Activate services easily and start working directly from your shop.
            </p>
          </div>
        </div>

        <div className="absolute left-20 bottom-20 hidden md:block">
          <div className="w-52 rotate-8 rounded-md bg-linear-to-r from-[#8bd3ff] to-[#5eb6f4] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <div className="flex items-center justify-start my-10">
              <Image 
                src="/about/distributors.png" 
                alt="Distributors" 
                width={40} 
                height={40} 
                className="h-18 w-18 object-cover "
              />
            </div>
            <div className="text-sm font-semibold text-black">Distributors</div>
            <p className="mt-1 text-[11px] tracking-wide text-black/85 leading-tight">
             Activate services easily and start working directly from your shop.
            </p>
          </div>
        </div>

        <div className="absolute right-12 top-16 hidden md:block z-1">
          <div className="w-56 rotate-12 rounded-md bg-[#efe4da] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <div className="flex items-center justify-start my-10">
              <Image 
                src="/about/user.png" 
                alt="User" 
                width={40} 
                height={40} 
                className="h-18 w-18 object-cover"
              />
            </div>
            <div className="text-sm font-semibold text-zinc-900">User</div>
            <p className="mt-1 text-[11px] tracking-wide text-zinc-600 leading-tight">
             Activate services easily and start working directly from your shop.
            </p>
          </div>
        </div>

        <div className="absolute right-6 bottom-16 hidden md:block">
          <div className="w-56 -rotate-2 rounded-md bg-linear-to-r from-[#ffe2ee] to-[#f8b8d0] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <div className="flex items-center justify-start my-10">
              <Image 
                src="/about/entrepreneur.png" 
                alt="White Label" 
                width={40} 
                height={40} 
                className="h-18 w-18 object-cover "
              />
            </div>
            <div className="text-sm font-semibold text-zinc-900">White Label</div>
            <p className="mt-1 text-[11px] tracking-wide text-zinc-700 leading-tight">
             Activate services easily and start working directly from your shop.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto  px-6">
        <div className="relative mx-auto text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-[#0C3D4C] md:text-[3.5rem] lg:text-6xl leading-[0.9]">
            Your team's go-to for
            <br className="hidden md:block" />
            <span className="bg-linear-to-r from-[#0C3D4C] to-[#018EDE] bg-clip-text text-transparent">
              instant answers.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 md:text-xl">
            Finunique's platform provides the fastest way to access trusted business
            <br className="hidden md:block" />
            information for retailers, distributors and partners just ask for it.
          </p>

          <form className="mx-auto mt-10 flex max-w-md items-stretch gap-2 rounded-full bg-white p-1 shadow-xl ring-1 ring-black/10">
            <input
              type="email"
              placeholder="name@company.com"
              className="h-14 flex-1 rounded-3xl bg-transparent px-6 text-lg text-zinc-900 placeholder:text-zinc-400 outline-none"
            />
            <button
              type="submit"
              className="h-14 min-w-[140px] rounded-3xl bg-linear-to-r from-[#0C3D4C] to-[#018EDE] px-6 text-sm font-semibold text-white shadow-lg hover:from-[#062b36] hover:to-[#0168c1] hover:shadow-xl transition-all duration-200"
            >
              Get App Link
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

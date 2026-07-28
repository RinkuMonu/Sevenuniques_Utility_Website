import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Download, QrCode, Smartphone } from "lucide-react";
import { FaApple } from "react-icons/fa";

const appBenefits = [
  "Recharge and pay utility bills in seconds",
  "Book bus tickets from one convenient app",
  "Fast, secure and reliable transactions",
];

export default function HomeAppDownload() {
  return (
    <section className="bg-[#f4f7fb] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[30px] bg-white shadow-[0_16px_45px_rgba(12,61,76,0.08)] lg:grid-cols-[1.15fr_.85fr]">
        <div className="relative z-10 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="flex items-center gap-3">
            <Image
              src="/image/finunque_logo_new.png"
              alt="Finunique"
              width={58}
              height={58}
              className="h-12 w-auto object-contain"
            />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#026381]">
              Finunique App
            </span>
          </div>

          <h2 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#0C3D4C] sm:text-4xl lg:text-[46px]">
            Your everyday payments, <span className="text-[#00a8e8]">all in one app</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Download the Finunique app to manage recharges, bills and travel services anytime, anywhere.
          </p>

          <div className="mt-6 space-y-3">
            {appBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-sm font-medium text-slate-700 sm:text-base">
                <CheckCircle2 size={19} className="shrink-0 text-[#00a8e8]" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=com.utility.finunique"
              className="inline-flex items-center gap-3 rounded-xl bg-[#0C3D4C] px-5 py-3 text-white shadow-[0_8px_18px_rgba(12,61,76,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#026381]"
            >
              <Image
                src="/image/playstorelogo.png"
                alt="Google Play"
                width={27}
                height={27}
                className="h-7 w-7 object-contain"
              />
              <span className="text-left">
                <span className="block text-[10px] uppercase leading-none text-white/70">Get it on</span>
                <span className="mt-1 block text-sm font-bold leading-none">Google Play</span>
              </span>
            </Link>

            <Link
              href="https://apps.apple.com/in/app/finunique/id6760808229"
              className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-[0_8px_18px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#222]"
            >
              <FaApple size={30} aria-hidden="true" />
              <span className="text-left">
                <span className="block text-[10px] leading-none text-white/70">Download on the</span>
                <span className="mt-1 block text-sm font-bold leading-none">App Store</span>
              </span>
            </Link>

            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#026381]">
              <Download size={18} /> Scan QR to download
            </span>
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#d9f6fb] via-[#bcebf4] to-[#8ed9e8] px-6 py-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/30" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[45px] border-white/20" />
          <Smartphone className="absolute right-7 top-7 text-[#026381]/15" size={85} strokeWidth={1.2} />

          <div className="relative z-10 rounded-[26px] border border-white/80 bg-white/90 p-5 text-center shadow-[0_20px_45px_rgba(12,61,76,0.18)] backdrop-blur-sm sm:p-7">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-[#e9f8fb] px-3 py-1.5 text-xs font-bold text-[#026381]">
              <QrCode size={15} /> Scan with your phone
            </div>
            <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-3 shadow-inner">
              <Image
                src="/MainQR.jpeg"
                alt="QR code to download the Finunique app"
                width={220}
                height={220}
                className="h-[190px] w-[190px] sm:h-[220px] sm:w-[220px]"
              />
            </div>
            <p className="mt-4 text-base font-extrabold text-[#0C3D4C]">Download Finunique App</p>
            <p className="mt-1 text-xs text-slate-500">Available for Android devices</p>
          </div>
        </div>
      </div>
    </section>
  );
}

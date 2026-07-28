import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Headphones,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function ContactBanner() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:py-18">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#123e62] text-white shadow-[0_22px_55px_rgba(12,61,76,.2)]">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[52px] border-[#8ac954]/10" />
        <div className="pointer-events-none absolute -bottom-10 left-[45%] h-28 w-28 rounded-full border-[22px] border-[#00a8e8]/10" />

        <div className="relative grid items-center gap-10 px-7 py-10 sm:px-10 lg:grid-cols-[1fr_290px] lg:px-14 lg:py-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-[#9de4ef]">
                <Headphones size={24} />
              </span>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#9de4ef]">Finunique Support</p>
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Need help? Let&apos;s find the right answer together.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Contact our support team for guidance about your Finunique account, available services or a transaction concern.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold text-white/80">
                <Clock3 size={15} className="text-[#8ac954]" /> Mon–Sat, 9:30 AM–6:30 PM
              </span>
              <a href="mailto:support@finuniques.in" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/12">
                <Mail size={15} className="text-[#8ac954]" /> support@finuniques.in
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold text-white/80">
                <ShieldCheck size={15} className="text-[#8ac954]" /> Secure account guidance
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#8ac954] text-white shadow-lg">
              <MessageCircle size={23} />
            </span>
            <h3 className="mt-5 text-xl font-extrabold">How can we help?</h3>
            <p className="mt-2 text-sm leading-6 text-white/65">Share your question with our team and include any relevant service details.</p>
            <Link href="/contact" className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#123e62] transition hover:-translate-y-0.5 hover:bg-[#eef8fa] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Contact Support
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Gift, X } from "lucide-react";

export default function GiftCardTrigger() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="group fixed top-[58%] left-3 z-40 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/70 bg-linear-to-b from-[#073f58] to-[#071c2a] text-white shadow-[0_12px_32px_rgba(7,28,42,0.28)] ring-1 ring-[#00a8e8]/40 transition-all duration-300 hover:-translate-y-[52%] hover:scale-105 hover:shadow-[0_16px_38px_rgba(2,99,129,0.34)] sm:left-5">
      <span className="pointer-events-none absolute -top-5 -right-5 h-12 w-12 rounded-full bg-[#58d7ed]/20 blur-xl" />
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Hide gift card shortcut"
        className="absolute top-1.5 right-1.5 z-10 grid h-5 w-5 place-items-center rounded-full bg-white/15 text-white/85 transition hover:bg-white hover:text-[#0C3D4C]"
      >
        <X size={12} strokeWidth={2.5} />
      </button>
      <Link href="/service-payment/gift-card" aria-label="Explore gift cards" className="flex flex-col items-center p-2.5 sm:p-3">
        <span className="grid h-13 w-13 place-items-center rounded-xl bg-linear-to-br from-white to-[#dff6fa] text-[#026381] shadow-[0_7px_18px_rgba(0,0,0,0.18)] ring-1 ring-white sm:h-15 sm:w-15">
          <Gift size={29} strokeWidth={1.9} className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
        </span>
        <span className="mt-2 text-[8px] font-bold tracking-widest text-[#8ee5f2] uppercase sm:text-[9px]">Send a smile</span>
        <span className="mt-0.5 flex items-center gap-1 text-[10px] font-extrabold whitespace-nowrap sm:text-xs">
          Gift Cards <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  );
}

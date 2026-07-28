"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  CreditCard,
  IndianRupee,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const orbitItems = [
  { icon: CreditCard, position: "left-[8%] top-[18%]", color: "bg-[#e5f5f8] text-[#026381]", delay: 0 },
  { icon: ShieldCheck, position: "right-[8%] top-[20%]", color: "bg-[#edf7e8] text-[#57932d]", delay: 0.7 },
  { icon: IndianRupee, position: "bottom-[13%] left-[15%]", color: "bg-[#fff4df] text-[#c27a12]", delay: 1.2 },
  { icon: LockKeyhole, position: "bottom-[14%] right-[13%]", color: "bg-[#eeeafd] text-[#6650b8]", delay: 0.35 },
];

export default function ServicePaymentIntro() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative hidden min-h-[510px] overflow-hidden rounded-[26px] border border-white/55 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.85),rgba(220,246,249,.42)_48%,transparent_72%)] lg:block">
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#69c7d7]/45"
      />
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 21, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#82c950]/30"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#82c950] shadow-[0_0_18px_rgba(130,201,80,.8)]" />
        <span className="absolute bottom-[9%] right-[10%] h-2.5 w-2.5 rounded-full bg-[#00a8e8] shadow-[0_0_18px_rgba(0,168,232,.75)]" />
      </motion.div>

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -12, 0], scale: [1, 1.035, 1] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[38px] bg-[linear-gradient(145deg,#026381,#0C3D4C)] text-white shadow-[0_24px_55px_rgba(2,99,129,.3)]"
      >
        <motion.span
          animate={reduceMotion ? undefined : { rotate: [0, 8, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-28 w-28 place-items-center bg-transparent"
        >
          <Image
            src="/image/finunique logo without text.png"
            alt="Finunique"
            width={112}
            height={112}
            className="h-28 w-28 object-contain"
          />
        </motion.span>
      </motion.div>

      {orbitItems.map(({ icon: Icon, position, color, delay }) => (
        <motion.div
          key={position}
          animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 4.2, delay, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${position} grid h-16 w-16 place-items-center rounded-2xl border border-white/80 ${color} shadow-[0_15px_32px_rgba(12,61,76,.13)]`}
        >
          <Icon size={27} strokeWidth={1.7} />
        </motion.div>
      ))}

      <motion.div
        animate={reduceMotion ? undefined : { x: [0, 8, 0], y: [0, -5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[18%] top-[46%] grid h-10 w-10 place-items-center rounded-full bg-white text-[#65ae31] shadow-[0_10px_24px_rgba(12,61,76,.12)]"
      >
        <Check size={20} strokeWidth={3} />
      </motion.div>

      {[["left-[25%] top-[10%]", 0], ["right-[25%] bottom-[7%]", 0.8], ["left-[7%] top-[52%]", 1.5]].map(([position, delay]) => (
        <motion.span
          key={position}
          animate={reduceMotion ? undefined : { opacity: [0.25, 1, 0.25], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${position} text-[#00a8e8]`}
        >
          <Sparkles size={18} />
        </motion.span>
      ))}

      <motion.span
        aria-hidden="true"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#00a8e8]/10 blur-xl"
      />
      <motion.span
        aria-hidden="true"
        animate={reduceMotion ? undefined : { x: [0, -15, 0], y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-[#82c950]/13 blur-xl"
      />
    </div>
  );
}

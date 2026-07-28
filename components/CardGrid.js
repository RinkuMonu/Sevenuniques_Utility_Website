import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const cards = [
  { id: 1, image: "/credit/cc1.png", bank: "Axis Bank", title: "Lifestyle Card Options", highlights: "Lounge access, golf rounds, and entertainment offers", benefit: "Reward-focused options for eligible lifestyle spending" },
  { id: 2, image: "/credit/cc2.png", bank: "HDFC Bank", title: "Premium Reward Options", highlights: "Travel, dining, shopping, and selected movie offers", benefit: "Benefits vary according to the selected card variant" },
  { id: 3, image: "/credit/cc3.png", bank: "ICICI Bank", title: "Travel & Lifestyle Options", highlights: "Selected lounge, travel, and reward privileges", benefit: "Explore eligibility and current issuer terms before applying" },
  { id: 4, image: "/credit/cc4.png", bank: "SBI Card", title: "Everyday Reward Options", highlights: "Shopping, travel, fuel, and lifestyle categories", benefit: "Choose options aligned with your regular spending" },
  { id: 5, image: "/credit/cc5.png", bank: "Kotak Bank", title: "Flexible Card Options", highlights: "Selected fuel, shopping, and travel benefits", benefit: "Features depend on the card and issuer's current offer" },
  { id: 6, image: "/credit/cc6.png", bank: "IndusInd Bank", title: "Premium Lifestyle Options", highlights: "Selected concierge, travel, and reward services", benefit: "Review fees, eligibility, and detailed issuer conditions" },
];

function CreditCardItem({ card }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#d7e9ed] bg-white shadow-[0_10px_26px_rgba(12,61,76,0.07)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(12,61,76,0.12)]">
      <div className="flex min-h-[220px] items-center justify-center bg-[#eaf6f9] p-6">
        <Image src={card.image} alt={`${card.bank} credit card`} width={300} height={190} className="max-h-[180px] w-auto object-contain" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#e3f4f7] px-3 py-1 text-xs font-bold text-[#027f9f]">Popular Option</span>
          <span className="text-sm font-extrabold text-[#0C3D4C]">{card.bank}</span>
        </div>
        <h3 className="mt-4 text-xl font-extrabold text-[#0C3D4C]">{card.title}</h3>
        <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-600"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#0297bd]" />{card.highlights}</p>
        <p className="mt-2 text-sm leading-6 text-slate-500">{card.benefit}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/signup" className="inline-flex items-center gap-2 rounded-xl bg-[#026381] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0C3D4C]">Apply <ArrowRight size={16} /></Link>
          <Link href="/contact" className="rounded-xl border border-[#b9dce4] px-5 py-3 text-sm font-bold text-[#026381] transition hover:bg-[#eef8fa]">Details</Link>
        </div>
      </div>
    </article>
  );
}

export default function CardGrid() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">Explore Cards</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">Popular credit-card options</h2>
        <p className="mt-3 text-base leading-7 text-slate-600">Compare highlighted features, then confirm current fees, eligibility, and benefits directly with the issuing bank.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => <CreditCardItem key={card.id} card={card} />)}
      </div>
    </div>
  );
}

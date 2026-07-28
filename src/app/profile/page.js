"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CircleUserRound, Mail, Phone, ShieldCheck } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/session", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Unauthenticated");
        return response.json();
      })
      .then((data) => setUser(data.user))
      .catch(() => router.replace("/login"));
  }, [router]);

  if (!user) {
    return <main className="grid min-h-[60vh] place-items-center bg-[#f4f8fa] text-sm font-semibold text-[#026381]">Loading your profile...</main>;
  }

  return (
    <main className="min-h-[70vh] bg-[#f4f8fa] px-4 py-14">
      <section className="mx-auto max-w-2xl rounded-3xl border border-[#d7e9ed] bg-white p-7 shadow-[0_18px_45px_rgba(12,61,76,.1)] sm:p-10">
        <div className="flex items-center gap-4">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#e2f5f8] text-[#026381]"><CircleUserRound size={35} /></span>
          <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#00a8e8]">Your account</p><h1 className="mt-1 text-2xl font-extrabold text-[#0C3D4C]">{user.name}</h1></div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <ProfileItem icon={Phone} label="Mobile number" value={user.mobile || "Verified mobile"} />
          <ProfileItem icon={Mail} label="Email address" value={user.email || "Not available"} />
        </div>
        <div className="mt-6 flex items-center gap-2 rounded-xl bg-[#eff9fb] p-4 text-sm text-[#315a67]"><ShieldCheck size={19} className="text-[#026381]" /> Your account is protected by mobile OTP authentication.</div>
        <Link href="/" className="mt-7 inline-flex rounded-xl bg-[#026381] px-5 py-3 text-sm font-bold text-white hover:bg-[#0C3D4C]">Back to Home</Link>
      </section>
    </main>
  );
}

function ProfileItem({ icon: Icon, label, value }) {
  return <div className="rounded-xl border border-[#dcebee] p-4"><p className="flex items-center gap-2 text-xs font-semibold text-slate-500"><Icon size={15} /> {label}</p><p className="mt-2 font-bold text-[#0C3D4C]">{value}</p></div>;
}

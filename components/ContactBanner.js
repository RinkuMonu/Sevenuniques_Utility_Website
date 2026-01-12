import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const n = (t, p, c) => ({ t, p, c });

const TREE = n("section", { className: "mt-10" }, [
  n("div", {
    className:
      "bg-[#0099ff] px-6 py-10 text-white md:px-10 md:py-12",
  }, [
    n("div", {
      className:
        "flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
    }, [
      n("div", {
        className: "max-w-2xl text-center md:text-left",
      }, [
        n("h2", {
          className: "text-2xl font-bold md:text-3xl",
        }, "We are here to help."),
        n("p", {
          className: "mt-2 text-sm text-white/90 md:text-base",
        }, "Our team is ready to assist you with any queries or support you need. Reach out today and get a quick response."),
      ]),
      n("div", {
        className: "flex justify-center md:justify-end",
      }, [
        n("Link", {
          href: "/contact",
          className:
            "inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0099ff] transition hover:bg-white/90",
        }, ["Talk to support", n(ChevronRight, { className: "h-4 w-4" })]),
      ]),
    ]),
  ]),
]);

const render = (node, i = 0) => {
  if (typeof node === "string") return node;

  const { t, p, c } = node;
  const Comp = t === "Link" ? Link : t;

  return React.createElement(
    Comp,
    { ...p, key: i },
    Array.isArray(c) ? c.map(render) : c
  );
};

export default function ContactBanner() {
  return render(TREE);
}

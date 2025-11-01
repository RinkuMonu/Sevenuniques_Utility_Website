"use client";

import React from "react";
import Image from "next/image";

export default function HomeQRBanner({

}) {
  return (
  <div className="relative w-full h-[400px] my-6 lg:mb-10">
  <Image
    src="/image/qr-code-banner.png"
    alt="QR Banner"
    fill
    className="object-cover"
  />
</div>

  );
}

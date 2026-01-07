"use client";

import React from "react";
import Image from "next/image";

export default function HomeQRBanner({

}) {
  return (
  <div className="relative w-full h-[400px] mt-2">
  <Image
    src="/image/qr-code-banner.jpg"
    alt="QR Banner"
    fill
    className="object-cover"
  />
</div>

  );
}

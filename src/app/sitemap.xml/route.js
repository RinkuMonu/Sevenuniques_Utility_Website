// app/sitemap.xml/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const apiUrl =
    "https://cms.sevenunique.com/apis/SEO/get-sitemap-content.php?website_id=6";

  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // ✅ 1 ghante me ek baar refresh hoga
      headers: {
        Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
      },
    });

    const data = await res.json();

    if (data.status !== "success" || !data.content) {
      throw new Error("Invalid sitemap");
    }

    return new NextResponse(data.content, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (err) {
    console.error("❌ Error fetching sitemap:", err);
    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      { headers: { "Content-Type": "application/xml" } }
    );
  }
}

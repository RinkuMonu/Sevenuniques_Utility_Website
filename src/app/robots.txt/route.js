import { NextResponse } from "next/server";

export async function GET() {
  const apiUrl =
    "https://cms.sevenunique.com/apis/SEO/get-robots-content.php?website_id=6";

  try {
    const res = await fetch(apiUrl, {
      cache: "no-store",
      headers: {
        Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
      },
    });

    const data = await res.json();

    if (data.status !== "success" || !data.content) {
      throw new Error("Invalid robots content");
    }

    return new NextResponse(data.content, {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (err) {
    return new NextResponse("User-agent: *\nDisallow:", {
      headers: { "Content-Type": "text/plain" },
    });
  }
}

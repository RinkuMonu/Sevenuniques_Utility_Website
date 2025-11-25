// seoConfig.js

import axios from "axios";

export default async function seoConfig(path) {
  try {
    const token = "jibhfiugh84t3324fefei#*fef"; // apna token yaha rakho

    const SEO = await axios.get(
      `https://cms.sevenunique.com/apis/SEO/get-seo-content.php?website_id=6&page_slug=https://www.finuniques.in${path}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // agar bearer token use hota hai
          "Content-Type": "application/json",
        },
      }
    );
   console.log("SEO data", SEO);
    return SEO.data.data[0];

  } catch (error) {
    console.log("SEO error", error);
    return null;
  }
}

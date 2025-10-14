"use client";

import Guide from "../../../../components/Pancard/Guide";


export default function Guidelines() {

const guidelinesData = [
  {
    title: "Follow Community Rules",
    desc: "Always adhere to the community rules and maintain a positive, respectful attitude.",
  },
  {
    title: "Respect Others",
    desc: "Treat all users kindly and respect their opinions, even when you disagree.",
  },
  {
    title: "Be Clear & Concise",
    desc: "Use simple and direct language to make your messages easy to understand.",
  },
  {
    title: "Protect Privacy",
    desc: "Never share personal or sensitive information in public discussions.",
  },
  {
    title: "Report Responsibly",
    desc: "If you encounter inappropriate content, report it calmly and responsibly.",
  },
  {
    title: "Stay On Topic",
    desc: "Keep your posts and replies relevant to the topic being discussed.",
  },
];
  return (
    <>
  <Guide guidelines={guidelinesData}/>


    </>
  );
}

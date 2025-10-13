import Head from "next/head";

export default function Guidelines() {
  const guidelines = [
    "Always follow community rules.",
    "Respect other users and their opinions.",
    "Use clear and concise language.",
    "Avoid posting personal information.",
    "Report inappropriate content responsibly.",
    "Stay on topic and relevant to the discussion."
  ];

  return (
    <>
      <Head>
        <title>Read Guidelines</title>
        <meta name="description" content="Guidelines for using our platform" />
      </Head>

      <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
        <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Read Guidelines
          </h1>
          
          <p className="text-gray-600 mb-6 text-center">
            Please read the following guidelines carefully to ensure a safe and respectful environment for everyone.
          </p>

          <ul className="space-y-4">
            {guidelines.map((rule, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </span>
                <span className="text-gray-700">{rule}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              I Understand
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

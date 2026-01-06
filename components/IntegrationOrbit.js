import Image from "next/image";

export default function IntegrationSection() {
  return (
    <div className="bg-[#fcfeffc9]">

    <section className="max-w-6xl mx-auto px-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Powerful Integrations <br /> Built for Scale
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Connect with leading banking and payment platforms seamlessly.
            Our ecosystem enables fast onboarding, secure transactions, and
            enterprise-grade reliability.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Instant API integrations
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Secure & compliant infrastructure
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Scalable partner network
            </li>
          </ul>
        </div>

        <div className="">
          <IntegrationOrbit />
        </div>

      </div>
    </section>
    </div>

  );
}
function IntegrationOrbit() {
  return (
    <section className="relative flex items-center justify-center py-52 b overflow-hidden ">
      <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-[#136091]"></div>
      <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-[#136091]"></div>
      <div className="absolute w-[180px] h-[180px] rounded-full border-2 border-[#136091]"></div>

      <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md">
        <Image
          src="/image/sevenunique-logo1.png"
          alt="Center"
          width={40}
          height={40}
        />
      </div>

      <OrbitIcon top="10%" left="60%" src="/bank/instantpay.png" />
      <OrbitIcon top="25%" left="30%" src="/bank/nsdl.png" />
      <OrbitIcon top="75%" left="73%" src="/bank/irctc.png" />
      <OrbitIcon top="45%" left="85%" src="/bank/ISERVEU-MAIN-LOGO.png" />
      <OrbitIcon top="79%" left="33%" src="/bank/paysprint.png" />
      <OrbitIcon top="55%" left="16%" src="/bank/surepass.png" />
    </section>
  );
}

function OrbitIcon({ src, top, left, size = "sm" }) {
  const sizes = {
    sm: "w-20 h-20",
    md: "w-14 h-14",
  };

  return (
    <div
      className={`absolute ${sizes[size]} rounded-full bg-white shadow-md flex items-center justify-center`}
      style={{ top, left, transform: "translate(-50%, -50%)" }}
    >
      <img src={src} alt="icon" className="w-14 h-14 object-contain" />
    </div>
  );
}

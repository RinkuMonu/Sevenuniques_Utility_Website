


export function WhyChooseUs({whydata}) {
  return (
    <section id="why-choose" className="py-16 md:py-24 px-24" style={{ background: "rgb(230, 246, 255)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#00b4d8] font-semibold mb-2 uppercase tracking-wide text-sm">{whydata.title1}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b4f] mb-4 text-balance">
            India&apos;s Most Trusted Bike Insurance Partner
          </h2>
          <p className="text-gray-600 leading-relaxed">
       {whydata.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whydata.features.map((feature, index) => (
            <div key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-[#00b4d8]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-[#00b4d8]" />
                </div>
                <h3 className="text-xl font-bold text-[#0d3b4f] mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

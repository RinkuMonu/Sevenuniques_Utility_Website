
export default function Process({processdata}) {
  return (
    <section id="process" className="py-16 md:py-24 bg-[#0d3b4f] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#00b4d8] font-semibold mb-2 uppercase tracking-wide text-sm">{processdata.title1}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{processdata.title2}</h2>
          <p className="text-gray-300 leading-relaxed">
          {processdata.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processdata.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="bg-[#00b4d8] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white text-[#0d3b4f] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < processdata.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-[#00b4d8]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

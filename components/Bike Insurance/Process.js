import { FileText, Search, CreditCard, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Enter Bike Details",
    description: "Provide your bike registration number and basic details in our simple form.",
  },
  {
    number: "2",
    icon: Search,
    title: "Compare Plans",
    description: "View and compare multiple insurance plans tailored to your needs and budget.",
  },
  {
    number: "3",
    icon: CreditCard,
    title: "Make Payment",
    description: "Choose your preferred plan and complete secure payment using multiple options.",
  },
  {
    number: "4",
    icon: CheckCircle,
    title: "Get Instant Policy",
    description: "Receive your policy document instantly via email and SMS. Start riding protected!",
  },
]

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-[#0d3b4f] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#00b4d8] font-semibold mb-2 uppercase tracking-wide text-sm">Simple & Fast Process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Get Insured in 4 Easy Steps</h2>
          <p className="text-gray-300 leading-relaxed">
            Our streamlined process ensures you get your bike insurance in minutes, not hours. No paperwork, no hassle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
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
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-[#00b4d8]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

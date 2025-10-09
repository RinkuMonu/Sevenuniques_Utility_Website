import { Shield, Clock, DollarSign, FileText, Headphones, Award } from "lucide-react"
export default function Features() {
    const features = [
        {
          icon: Shield,
          title: "Comprehensive Coverage",
          description: "Complete protection against theft, accidents, natural disasters, and third-party liabilities.",
        },
        {
          icon: Clock,
          title: "Instant Policy Issuance",
          description: "Get your bike insured in minutes with our quick and hassle-free digital process.",
        },
        {
          icon: DollarSign,
          title: "Affordable Premiums",
          description: "Competitive pricing with flexible payment options and attractive discounts for safe riders.",
        },
        {
          icon: FileText,
          title: "Easy Claims Process",
          description: "Simple, transparent claims settlement with minimal documentation and quick approvals.",
        },
        {
          icon: Headphones,
          title: "24/7 Customer Support",
          description: "Round-the-clock assistance for policy queries, claims, and roadside emergencies.",
        },
        {
          icon: Award,
          title: "Cashless Repairs",
          description: "Access to 5000+ network garages across India for hassle-free cashless repairs.",
        },
      ]
    return (
        <section className="py-20 bg-white border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d3b4f] mb-4">Comprehensive Bike Insurance Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Protect your bike with our extensive coverage options designed to give you complete peace of mind on every
              ride.
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#00b4d8] hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#00b4d8] to-[#0d3b4f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0d3b4f] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    );
  }
  
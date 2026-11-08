import { ShieldCheck, Award, Clock, UtensilsCrossed } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: UtensilsCrossed,
      title: "100% Fresh Ingredients",
      description: "We source our vegetables, meats, and spices daily to ensure peak flavor and nutrition in every meal."
    },
    {
      icon: Award,
      title: "Master Chefs",
      description: "Our world-class culinary masters prepare each recipe with genuine passion and years of heritage expertise."
    },
    {
      icon: Clock,
      title: "Super Fast Delivery",
      description: "Hot, piping-fresh food delivered safely right to your door with thermal temperature packaging."
    },
    {
      icon: ShieldCheck,
      title: "Hygiene & Safety Guaranteed",
      description: "Strict ISO-standard kitchen sanitization, contact-free packaging, and certified food handling protocols."
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
            Why Dine With Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            A Flavorful Experience You Deserve
          </h2>
          <p className="text-gray-600 mt-3">
            Discover what makes SpiceCraft the premier choice for food lovers across the city.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="card bg-base-200 hover:bg-base-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-base-300 rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
import { MapPin, Clock, Shield, Headphones, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description: "Monitor your shipments 24/7 with live GPS updates and instant notifications.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connected to 50+ countries with established partners and efficient routes.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "End-to-end security with insurance coverage and careful cargo management.",
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description: "Time-critical shipments delivered with speed and precision.",
  },
  {
    icon: MapPin,
    title: "Door-to-Door",
    description: "Complete logistics from pickup to final delivery at destination.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team ready to assist you around the clock.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 route-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-h2 font-heading font-bold text-foreground mb-4">
            The Supreme Advantage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trust your cargo with Nepal's most reliable logistics partner. We combine technology with expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group flex gap-5 p-6 rounded-xl bg-background/50 border border-border/30 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg gradient-velocity flex items-center justify-center group-hover:glow-cyan transition-all duration-300">
                <feature.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

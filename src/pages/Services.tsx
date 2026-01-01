import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Plane, Ship, Truck, Package, Globe, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    id: "air",
    icon: Plane,
    title: "Air Freight",
    subtitle: "Fast & Reliable",
    description: "Our air freight services offer the fastest shipping options for time-sensitive cargo. With partnerships with major airlines and strategic routing, we ensure your shipments reach their destination on time.",
    features: [
      "Express delivery in 2-3 days",
      "Real-time GPS tracking",
      "Temperature-controlled options",
      "Dangerous goods handling",
      "Customs clearance included",
    ],
    color: "accent",
  },
  {
    id: "sea",
    icon: Ship,
    title: "Sea Freight",
    subtitle: "Cost-Effective Solutions",
    description: "For large-volume shipments, our sea freight services provide economical solutions without compromising on reliability. We offer both FCL and LCL options to suit your needs.",
    features: [
      "Full Container Load (FCL)",
      "Less than Container Load (LCL)",
      "Port-to-port and door-to-door",
      "Bulk cargo handling",
      "Multi-modal connectivity",
    ],
    color: "secondary",
  },
  {
    id: "ground",
    icon: Truck,
    title: "Ground Transport",
    subtitle: "Regional Coverage",
    description: "Our comprehensive ground transport network covers major routes across South Asia. From cross-border trucking to last-mile delivery, we've got you covered.",
    features: [
      "Cross-border trucking",
      "Last-mile delivery",
      "Scheduled routes",
      "Fleet tracking",
      "Proof of delivery",
    ],
    color: "success",
  },
  {
    id: "express",
    icon: Package,
    title: "Express Courier",
    subtitle: "Speed Priority",
    description: "When time is critical, our express courier service delivers your documents and parcels with utmost urgency. Door-to-door service with guaranteed delivery times.",
    features: [
      "Same-day delivery options",
      "Document shipping",
      "Parcel delivery",
      "Signature required",
      "Insurance coverage",
    ],
    color: "primary",
  },
  {
    id: "international",
    icon: Globe,
    title: "International Shipping",
    subtitle: "Global Reach",
    description: "Connect with over 50 countries through our international shipping network. We handle all documentation, customs clearance, and regulatory compliance.",
    features: [
      "50+ country coverage",
      "Customs brokerage",
      "Documentation support",
      "Regulatory compliance",
      "Trade consulting",
    ],
    color: "accent",
  },
  {
    id: "secure",
    icon: Shield,
    title: "Secure Handling",
    subtitle: "Premium Care",
    description: "Specialized handling for high-value, fragile, or sensitive cargo. Our secure handling services ensure your precious shipments arrive in perfect condition.",
    features: [
      "High-value cargo",
      "Fragile item protection",
      "Art & antiques",
      "Medical equipment",
      "Electronics",
    ],
    color: "warning",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 route-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-3xl md:text-h1 font-heading font-bold text-foreground mb-4">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-muted-foreground text-lg">
              From express courier to international freight, we offer end-to-end logistics services tailored to meet your specific shipping requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
              >
                {/* Icon/Visual */}
                <div className="w-full lg:w-1/2">
                  <div className={`relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden ${
                    service.color === "accent" ? "bg-accent/5" :
                    service.color === "secondary" ? "bg-secondary/5" :
                    service.color === "success" ? "bg-success/5" :
                    service.color === "primary" ? "bg-primary/5" :
                    "bg-warning/5"
                  }`}>
                    <div className="absolute inset-0 route-grid opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-3xl flex items-center justify-center ${
                        service.color === "accent" ? "gradient-velocity glow-cyan" :
                        service.color === "secondary" ? "bg-secondary glow-blue" :
                        service.color === "success" ? "bg-success" :
                        service.color === "primary" ? "gradient-priority glow-red" :
                        "bg-warning"
                      }`}>
                        <service.icon className="w-16 h-16 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
                    service.color === "accent" ? "bg-accent/10 text-accent" :
                    service.color === "secondary" ? "bg-secondary/10 text-secondary" :
                    service.color === "success" ? "bg-success/10 text-success" :
                    service.color === "primary" ? "bg-primary/10 text-primary" :
                    "bg-warning/10 text-warning"
                  }`}>
                    {service.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-h2 font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/quote">
                    <Button variant="outline" size="lg">
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-h2 font-heading font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our logistics experts are ready to design a tailored shipping solution for your business.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

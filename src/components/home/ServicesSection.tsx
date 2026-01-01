import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Ship, Truck, Package, Globe, Clock, ArrowRight, Shield } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Express air cargo solutions with global reach. Fast, reliable, and tracked every mile.",
    color: "accent",
    href: "/services#air",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description: "Cost-effective ocean shipping for bulk cargo. FCL and LCL options available.",
    color: "secondary",
    href: "/services#sea",
  },
  {
    icon: Truck,
    title: "Ground Transport",
    description: "Comprehensive road freight and last-mile delivery across the region.",
    color: "success",
    href: "/services#ground",
  },
  {
    icon: Package,
    title: "Express Courier",
    description: "Door-to-door express delivery for time-sensitive documents and parcels.",
    color: "primary",
    href: "/services#express",
  },
  {
    icon: Globe,
    title: "International",
    description: "Seamless cross-border logistics with customs clearance support.",
    color: "accent",
    href: "/services#international",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "Specialized handling for high-value and fragile shipments.",
    color: "warning",
    href: "/services#secure",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-h2 font-heading font-bold text-foreground mb-4">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From express courier to international freight, we offer end-to-end logistics services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={i}
              to={service.href}
              className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-glow"
            >
              {/* Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-velocity rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                service.color === "accent" ? "bg-accent/10 text-accent group-hover:bg-accent/20" :
                service.color === "secondary" ? "bg-secondary/10 text-secondary group-hover:bg-secondary/20" :
                service.color === "success" ? "bg-success/10 text-success group-hover:bg-success/20" :
                service.color === "primary" ? "bg-primary/10 text-primary group-hover:bg-primary/20" :
                "bg-warning/10 text-warning group-hover:bg-warning/20"
              }`}>
                <service.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

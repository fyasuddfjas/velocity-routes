import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Calculator } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-velocity" />
          <div className="absolute inset-0 route-grid opacity-20" />
          
          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Ship?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
              Get instant quotes and book your shipments online. Experience seamless logistics with Supreme Nepal.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/quote">
                <Button 
                  size="xl" 
                  className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90 rounded-xl font-heading"
                >
                  <Calculator className="w-5 h-5" />
                  Get a Quote
                </Button>
              </Link>
              <Link to="/track">
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl"
                >
                  <Package className="w-5 h-5" />
                  Track Shipment
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

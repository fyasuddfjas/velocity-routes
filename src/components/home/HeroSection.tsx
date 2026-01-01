import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plane, Ship, Truck, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track?id=${trackingNumber.trim()}`);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 route-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        {/* Color Orbs - Solid colors */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Global Logistics Network Active
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-hero font-heading font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Move Faster.</span>
            <br />
            <span className="text-primary">Deliver Smarter.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            From Nepal to the World—Tracked, Timed, Trusted. Experience next-generation logistics with real-time visibility and global coverage.
          </p>

          {/* Tracking Form */}
          <form onSubmit={handleTrack} className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter tracking number or HAWB..."
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="pl-12 h-14 bg-card/80 border-secondary/30 text-foreground placeholder:text-muted-foreground text-base rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary"
                />
              </div>
              <Button type="submit" variant="hero" size="xl" className="rounded-xl">
                Track Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "50+", label: "Countries" },
              { value: "10K+", label: "Shipments/Month" },
              { value: "99.8%", label: "On-Time Rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary tabular-nums">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Transport Icons */}
          <div className="flex items-center justify-center gap-8 mt-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { Icon: Plane, label: "Air Freight" },
              { Icon: Ship, label: "Sea Freight" },
              { Icon: Truck, label: "Ground Transport" },
            ].map(({ Icon, label }, i) => (
              <div key={i} className="group flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-secondary transition-colors">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

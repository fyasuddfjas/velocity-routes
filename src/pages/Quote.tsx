import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Package, ArrowRight, CheckCircle } from "lucide-react";

const origins = [
  "Kathmandu, Nepal",
  "Pokhara, Nepal",
  "Biratnagar, Nepal",
  "Lalitpur, Nepal",
  "Bhaktapur, Nepal",
];

const destinations = [
  "New York, USA",
  "London, UK",
  "Tokyo, Japan",
  "Sydney, Australia",
  "Dubai, UAE",
  "Singapore",
  "Hong Kong",
  "Delhi, India",
  "Bangkok, Thailand",
];

const serviceTypes = [
  { id: "express", name: "Express Air", days: "2-3", multiplier: 2.5 },
  { id: "standard", name: "Standard Air", days: "5-7", multiplier: 1.8 },
  { id: "economy", name: "Economy Air", days: "7-10", multiplier: 1.2 },
  { id: "sea", name: "Sea Freight", days: "30-45", multiplier: 0.4 },
];

const Quote = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [quote, setQuote] = useState<{
    total: number;
    breakdown: { label: string; amount: number }[];
    delivery: string;
  } | null>(null);

  const calculateQuote = () => {
    if (!origin || !destination || !weight || !serviceType) return;

    const weightNum = parseFloat(weight);
    const service = serviceTypes.find(s => s.id === serviceType);
    if (!service) return;

    const baseRate = 15; // Base rate per kg
    const fuelSurcharge = weightNum * 2;
    const handlingFee = 25;
    const subtotal = weightNum * baseRate * service.multiplier;
    const total = subtotal + fuelSurcharge + handlingFee;

    setQuote({
      total,
      breakdown: [
        { label: `Freight (${weightNum}kg × $${baseRate} × ${service.multiplier})`, amount: subtotal },
        { label: "Fuel Surcharge", amount: fuelSurcharge },
        { label: "Handling Fee", amount: handlingFee },
      ],
      delivery: service.days,
    });
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 min-h-[80vh]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
              Instant Pricing
            </span>
            <h1 className="text-3xl md:text-h1 font-heading font-bold text-foreground mb-4">
              Get a Quote
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Calculate shipping costs instantly. Enter your shipment details below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50">
              <h2 className="text-lg font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-accent" />
                Shipment Details
              </h2>

              <div className="space-y-5">
                <div>
                  <Label className="text-foreground mb-2 block">Origin</Label>
                  <Select value={origin} onValueChange={setOrigin}>
                    <SelectTrigger className="h-12 bg-background border-border">
                      <SelectValue placeholder="Select origin city" />
                    </SelectTrigger>
                    <SelectContent>
                      {origins.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-foreground mb-2 block">Destination</Label>
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger className="h-12 bg-background border-border">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-foreground mb-2 block">Weight (kg)</Label>
                  <Input
                    type="number"
                    placeholder="Enter weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="h-12 bg-background border-border"
                    min="0.1"
                    step="0.1"
                  />
                </div>

                <div>
                  <Label className="text-foreground mb-2 block">Service Type</Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger className="h-12 bg-background border-border">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} ({service.days} days)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={calculateQuote}
                  variant="hero"
                  size="lg"
                  className="w-full mt-4 rounded-xl"
                  disabled={!origin || !destination || !weight || !serviceType}
                >
                  Calculate Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quote Result */}
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50">
              {quote ? (
                <div className="animate-fade-up">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <h2 className="text-lg font-heading font-semibold text-foreground">
                      Your Quote
                    </h2>
                  </div>

                  {/* Route Summary */}
                  <div className="p-4 rounded-xl bg-muted/30 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-foreground font-medium">{origin}</span>
                      <ArrowRight className="w-4 h-4 text-accent" />
                      <span className="text-foreground font-medium">{destination}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      {weight} kg • {serviceTypes.find(s => s.id === serviceType)?.name}
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-3 mb-6">
                    {quote.breakdown.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground font-medium tabular-nums">${item.amount.toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="h-px bg-border my-4" />
                    <div className="flex justify-between">
                      <span className="text-foreground font-semibold">Total</span>
                      <span className="text-2xl font-heading font-bold text-accent tabular-nums">
                        ${quote.total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Delivery Estimate */}
                  <div className="p-4 rounded-xl gradient-velocity text-primary-foreground">
                    <p className="text-sm opacity-80">Estimated Delivery</p>
                    <p className="text-lg font-heading font-semibold">{quote.delivery} business days</p>
                  </div>

                  <Button variant="secondary" size="lg" className="w-full mt-6 rounded-xl">
                    Proceed to Book
                  </Button>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 mb-6 rounded-2xl bg-muted/50 flex items-center justify-center">
                    <Package className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    Ready to Calculate
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Fill in the shipment details on the left to get an instant quote.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;

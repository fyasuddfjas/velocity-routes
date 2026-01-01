import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Package, MapPin, Clock, CheckCircle, Truck, Plane, AlertCircle } from "lucide-react";

// Mock tracking data
const mockTrackingData = {
  "SN123456789": {
    hawb: "HAWB-2024-0001",
    trackingNumber: "SN123456789",
    status: "in_transit",
    origin: "Kathmandu, Nepal",
    destination: "New York, USA",
    weight: "25 kg",
    serviceType: "Air Express",
    estimatedDelivery: "Jan 5, 2026",
    sender: "ABC Company",
    receiver: "XYZ Corporation",
    timeline: [
      { status: "Shipment Picked Up", location: "Kathmandu, Nepal", date: "Dec 28, 2025 09:30", completed: true },
      { status: "Departed Origin Facility", location: "Tribhuvan Intl Airport", date: "Dec 28, 2025 14:45", completed: true },
      { status: "In Transit", location: "Dubai Hub", date: "Dec 29, 2025 06:20", completed: true },
      { status: "Customs Clearance", location: "JFK Airport, New York", date: "Dec 30, 2025 08:00", completed: false },
      { status: "Out for Delivery", location: "New York Distribution Center", date: "Pending", completed: false },
      { status: "Delivered", location: "New York, USA", date: "Pending", completed: false },
    ],
  },
};

const statusConfig = {
  in_transit: { label: "IN TRANSIT", class: "status-transit", icon: Plane },
  delivered: { label: "DELIVERED", class: "status-delivered", icon: CheckCircle },
  delayed: { label: "DELAYED", class: "status-delayed", icon: AlertCircle },
  out_for_delivery: { label: "OUT FOR DELIVERY", class: "status-transit", icon: Truck },
};

const Track = () => {
  const [searchParams] = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get("id") || "");
  const [shipment, setShipment] = useState<typeof mockTrackingData["SN123456789"] | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsLoading(true);
    setError("");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const result = mockTrackingData[trackingNumber.trim() as keyof typeof mockTrackingData];
    if (result) {
      setShipment(result);
    } else {
      setError("Shipment not found. Please check your tracking number.");
      setShipment(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchParams.get("id")) {
      handleTrack({ preventDefault: () => {} } as React.FormEvent);
    }
  }, []);

  const StatusIcon = shipment ? statusConfig[shipment.status as keyof typeof statusConfig]?.icon : Package;

  return (
    <Layout>
      <section className="py-16 md:py-24 min-h-[80vh]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
              Real-Time Tracking
            </span>
            <h1 className="text-3xl md:text-h1 font-heading font-bold text-foreground mb-4">
              Track Your Shipment
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Enter your tracking number or HAWB to get real-time updates on your shipment.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleTrack} className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter tracking number (try: SN123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="pl-12 h-14 bg-card border-border/50 text-foreground placeholder:text-muted-foreground text-base rounded-xl"
                />
              </div>
              <Button type="submit" variant="hero" size="xl" className="rounded-xl" disabled={isLoading}>
                {isLoading ? "Tracking..." : "Track"}
              </Button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {/* Results */}
          {shipment && (
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
              {/* Status Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-velocity" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <StatusIcon className="w-6 h-6 text-accent" />
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${statusConfig[shipment.status as keyof typeof statusConfig]?.class}`}>
                        {statusConfig[shipment.status as keyof typeof statusConfig]?.label}
                      </span>
                    </div>
                    <h2 className="text-xl font-heading font-bold text-foreground mb-1">
                      Tracking: {shipment.trackingNumber}
                    </h2>
                    <p className="text-muted-foreground text-sm">HAWB: {shipment.hawb}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="text-lg font-heading font-semibold text-accent">{shipment.estimatedDelivery}</p>
                  </div>
                </div>

                {/* Route Info */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Origin</p>
                      <p className="font-medium text-foreground">{shipment.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Destination</p>
                      <p className="font-medium text-foreground">{shipment.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Package className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Service</p>
                      <p className="font-medium text-foreground">{shipment.serviceType}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-6">Shipment History</h3>
                <div className="relative">
                  {shipment.timeline.map((event, i) => (
                    <div key={i} className="relative pl-8 pb-8 last:pb-0">
                      {/* Line */}
                      {i < shipment.timeline.length - 1 && (
                        <div className={`absolute left-[11px] top-6 w-0.5 h-full ${event.completed ? "bg-accent" : "bg-border"}`} />
                      )}
                      {/* Dot */}
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                        event.completed ? "bg-accent/20 ring-2 ring-accent" : "bg-muted"
                      }`}>
                        {event.completed ? (
                          <CheckCircle className="w-3.5 h-3.5 text-accent" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                        )}
                      </div>
                      {/* Content */}
                      <div>
                        <p className={`font-medium ${event.completed ? "text-foreground" : "text-muted-foreground"}`}>
                          {event.status}
                        </p>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                        <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Sender</h4>
                  <p className="font-heading font-semibold text-foreground">{shipment.sender}</p>
                  <p className="text-sm text-muted-foreground mt-1">{shipment.origin}</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Receiver</h4>
                  <p className="font-heading font-semibold text-foreground">{shipment.receiver}</p>
                  <p className="text-sm text-muted-foreground mt-1">{shipment.destination}</p>
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!shipment && !error && (
            <div className="max-w-md mx-auto text-center py-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-muted/50 flex items-center justify-center">
                <Package className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">
                Enter your tracking number above to get real-time updates on your shipment.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Track;

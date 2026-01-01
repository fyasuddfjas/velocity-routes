import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, FileText, TrendingUp, Users, Plus, Search, Download, Edit, Eye } from "lucide-react";

// Mock data
const mockShipments = [
  { id: "HAWB-2024-0001", tracking: "SN123456789", status: "in_transit", origin: "Kathmandu", destination: "New York", date: "Dec 28, 2025" },
  { id: "HAWB-2024-0002", tracking: "SN234567890", status: "delivered", origin: "Pokhara", destination: "London", date: "Dec 27, 2025" },
  { id: "HAWB-2024-0003", tracking: "SN345678901", status: "customs", origin: "Kathmandu", destination: "Dubai", date: "Dec 26, 2025" },
];

const statusColors = {
  in_transit: "status-transit",
  delivered: "status-delivered",
  customs: "status-delayed",
  processing: "bg-muted text-muted-foreground",
};

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <section className="py-16 md:py-24 min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 gradient-priority rounded-xl flex items-center justify-center glow-red">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">SN</span>
                </div>
                <h1 className="text-2xl font-heading font-bold text-foreground mb-2">Admin Login</h1>
                <p className="text-muted-foreground text-sm">Sign in to access the dashboard</p>
              </div>

              <form onSubmit={handleLogin} className="p-6 rounded-2xl bg-card border border-border/50 space-y-5">
                <div>
                  <Label className="text-foreground mb-2 block">Email</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-background border-border"
                    placeholder="admin@supremenepal.com"
                  />
                </div>
                <div>
                  <Label className="text-foreground mb-2 block">Password</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 bg-background border-border"
                    placeholder="••••••••"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full rounded-xl">
                  Sign In
                </Button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-h2 font-heading font-bold text-foreground">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground text-sm">Manage shipments, rates, and more</p>
            </div>
            <Button variant="hero">
              <Plus className="w-4 h-4" />
              New Shipment
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Package, label: "Total Shipments", value: "1,234", change: "+12%" },
              { icon: TrendingUp, label: "In Transit", value: "156", change: "+5%" },
              { icon: FileText, label: "Pending Invoices", value: "23", change: "-8%" },
              { icon: Users, label: "Active Clients", value: "89", change: "+15%" },
            ].map((stat, i) => (
              <Card key={i} className="bg-card border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs text-success font-medium">{stat.change}</span>
                  </div>
                  <p className="text-2xl font-heading font-bold text-foreground tabular-nums">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="shipments" className="space-y-6">
            <TabsList className="bg-muted/50 border border-border/50">
              <TabsTrigger value="shipments">Shipments</TabsTrigger>
              <TabsTrigger value="rates">Rates</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
            </TabsList>

            <TabsContent value="shipments">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">Recent Shipments</CardTitle>
                      <CardDescription>Manage and track all shipments</CardDescription>
                    </div>
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search shipments..."
                        className="pl-10 bg-background border-border h-10"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border/50">
                          <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">HAWB</th>
                          <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Tracking</th>
                          <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Status</th>
                          <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Route</th>
                          <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Date</th>
                          <th className="text-right py-3 px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockShipments.map((shipment) => (
                          <tr key={shipment.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-4 font-medium text-foreground tabular-nums">{shipment.id}</td>
                            <td className="py-4 px-4 text-muted-foreground tabular-nums">{shipment.tracking}</td>
                            <td className="py-4 px-4">
                              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${statusColors[shipment.status as keyof typeof statusColors]}`}>
                                {shipment.status.replace("_", " ")}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-muted-foreground">
                              {shipment.origin} → {shipment.destination}
                            </td>
                            <td className="py-4 px-4 text-muted-foreground">{shipment.date}</td>
                            <td className="py-4 px-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Download className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rates">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Rate Management</CardTitle>
                  <CardDescription>Configure shipping rates by destination</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-12">
                    Rate management interface will be available with database integration.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="invoices">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Invoices</CardTitle>
                  <CardDescription>View and download generated invoices</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-12">
                    Invoice management interface will be available with database integration.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;

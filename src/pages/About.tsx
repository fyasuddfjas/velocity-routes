import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Globe, Users, Award, TrendingUp, Target, Heart, ArrowRight } from "lucide-react";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "100K+", label: "Shipments Delivered" },
  { value: "99.8%", label: "On-Time Rate" },
];

const values = [
  {
    icon: Target,
    title: "Reliability",
    description: "We deliver on our promises, every time. Your cargo's safety and timely delivery is our top priority.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Leveraging cutting-edge technology to provide real-time tracking and seamless logistics solutions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connected to over 50 countries with established partners and efficient international routes.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Dedicated support team ensuring personalized service and solutions tailored to your needs.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 route-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-3xl md:text-h1 font-heading font-bold text-foreground mb-6">
              From Nepal to the World—<span className="gradient-velocity-text">Tracked, Timed, Trusted.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Supreme Nepal Courier & Cargo Express is a leading logistics company based in Kathmandu, Nepal. Since our founding, we've been committed to providing reliable, efficient, and technology-driven shipping solutions for businesses and individuals across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent tabular-nums mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-h2 font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in the heart of Kathmandu, Supreme Nepal began with a simple mission: to connect Nepal with the world through reliable logistics services. What started as a small courier operation has grown into a comprehensive freight and cargo company serving customers across more than 50 countries.
                </p>
                <p>
                  Our journey has been defined by a commitment to innovation and customer satisfaction. We were among the first in Nepal to implement real-time GPS tracking, automated booking systems, and digital documentation—making international shipping accessible and transparent for everyone.
                </p>
                <p>
                  Today, we continue to invest in technology and partnerships that enhance our service quality. Our team of logistics experts, combined with our global network of trusted partners, ensures that every shipment receives the care and attention it deserves.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-muted/20">
                <div className="absolute inset-0 route-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 gradient-velocity rounded-3xl flex items-center justify-center glow-cyan">
                    <span className="text-6xl font-heading font-bold text-primary-foreground">SN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-h2 font-heading font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Supreme Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-background border border-border/50 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg gradient-velocity flex items-center justify-center mb-5">
                  <value.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-h2 font-heading font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals driving Supreme Nepal's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Rajesh Sharma", role: "CEO & Founder", initials: "RS" },
              { name: "Priya Thapa", role: "Operations Director", initials: "PT" },
              { name: "Sunil Maharjan", role: "Head of Technology", initials: "SM" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-muted/50 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-accent">{member.initials}</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground">{member.name}</h4>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-h2 font-heading font-bold text-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience the Supreme Nepal difference. Get started with a quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote">
              <Button variant="hero" size="xl">
                Get a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

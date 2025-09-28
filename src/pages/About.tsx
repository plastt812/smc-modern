import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Factory,
  BadgeCheck,
  Handshake,
  Award,
  Users,
  Clock,
  Rocket,
  ArrowRight,
  Wrench,
  Cog,
  Plug,
  Hammer,
  Gauge,
  CheckCircle,
} from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  const values = [
    { icon: BadgeCheck, title: "Quality First", desc: "Relentless focus on precision, repeatability, and reliability." },
    { icon: Handshake, title: "Customer-Centric", desc: "Partnerships built on trust, transparency, and outcomes." },
    { icon: Rocket, title: "Innovation", desc: "Modern processes and continuous improvement at every layer." },
    { icon: Award, title: "Integrity", desc: "We do the right thing, especially when no one is watching." },
  ];

  const milestones = [
    { year: "1948", note: "Founded with a single workshop and a bold vision." },
    { year: "1974", note: "Expanded to high-precision industrial manufacturing." },
    { year: "1998", note: "Global clients across 3 continents." },
    { year: "2015", note: "ISO certifications and digital transformation." },
    { year: "2024", note: "1,000+ projects delivered across seven product segments." },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50"
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/dc635b40-fb4a-48bf-bbfe-9fb32de3c6b3" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/about" className="text-foreground font-medium">About Us</a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">Catalogs</a>
              <a href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <Button onClick={() => navigate("/contact")} className="ml-2">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="p-0">
        <div className="relative overflow-hidden min-h-[60vh] flex items-center justify-center">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/2bbcab05-180d-460f-b184-519c9f98ac09"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-10 select-none pointer-events-none"
          />
          <div className="relative z-10 px-6 text-center">
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Engineering Excellence Since 1948
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We design, build, and deliver industrial solutions with a legacy of precision,
              innovation, and trusted partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-3 gap-12 items-start">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Who We Are</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sanat Mansoor is a modern industrial manufacturer delivering high-quality components
                and systems for aerospace, automotive, energy, and heavy industry.
              </p>
              <p>
                Our teams blend traditional craftsmanship with advanced automation, ensuring
                repeatable quality at scale. We invest in people, process, and technology to solve
                complex challenges with clarity and speed.
              </p>
              <p>
                From prototype to production, we operate as an extension of your team—committed to
                timelines, outcomes, and long-term success.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Card className="border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Factory className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Facilities</p>
                    <p className="font-semibold">3 global sites</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team</p>
                    <p className="font-semibold">2,000+ experts</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">On-Time Delivery</p>
                    <p className="font-semibold">98.7%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Certifications</p>
                    <p className="font-semibold">ISO 9001, ISO 14001</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight mb-6">About Sanat Mansoor</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 1948 as a family-owned company, Sanat Mansoor has grown into a recognized leader in
              industrial engineering and manufacturing. With more than 1,000 projects successfully completed,
              we combine decades of expertise with advanced technology to meet the toughest challenges.
            </p>
          </div>
          <Card className="border-0">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Gauge className="h-6 w-6 text-primary" />
                <p className="text-sm text-muted-foreground">Since 1948 · 1,000+ projects</p>
              </div>
              <div className="flex items-center gap-3">
                <Cog className="h-6 w-6 text-primary" />
                <p className="text-sm text-muted-foreground">Integrated engineering and manufacturing</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Integrated Capabilities</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our strength lies in the ability to integrate multiple disciplines under one roof:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>Hydraulic system design and engineering</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>Precision and large-piece machining</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>Advanced casting through our Felez Taban foundry</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>Certified welding and fabrication</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>Reverse engineering and spare parts supply</span>
            </div>
          </div>
        </div>
      </section>

      

      {/* Values */}
      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="border-0 h-full">
                  <CardContent className="p-6">
                    <v.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Milestones</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="border-0 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{m.year}</div>
                    <p className="text-sm text-muted-foreground">{m.note}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate("/contact")} className="text-lg px-8 py-6">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/dc635b40-fb4a-48bf-bbfe-9fb32de3c6b3" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
            </div>
            <p className="text-muted-foreground">© 2024 Sanat Mansoor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
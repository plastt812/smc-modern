import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
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
import { Phone, Mail, MapPin } from "lucide-react";

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
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">Catalogs</a>
              <Button onClick={() => navigate("/contact")} className="ml-2">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero - cleaner and more focused */}
      <section className="p-0">
        <div className="relative overflow-hidden min-h-[56vh] flex items-center justify-center">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/2bbcab05-180d-460f-b184-519c9f98ac09"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-10 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-background/30" />
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative z-10 px-6 text-center max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Engineering Excellence Since 1948
            </h1>
            <p className="text-lg text-muted-foreground">
              We design, build, and deliver industrial solutions with a legacy of precision,
              innovation, and trusted partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are + Key Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="lg:col-span-7"
          >
            <div className="">
              <div className="">
                <h2 className="text-3xl font-bold tracking-tight mb-5">Who We Are</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Sanat Mansoor is a family-owned industrial company with a history dating back to 1948. From our early beginnings as a small engineering workshop, we have grown into a trusted partner for some of the most demanding industries in the world. Over the decades, we have successfully delivered more than 1,000 projects, building a reputation for reliability, precision, and innovation.
                  </p>
                  <p>
                    For over 50 years, we have worked alongside leaders in steel production, oil &amp; gas, mining, power generation, and construction. Each project has reinforced our commitment to engineering excellence and long-term partnerships. Today, Sanat Mansoor continues to combine tradition with innovation — delivering solutions that stand the test of time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.06 }}
            className="lg:col-span-5"
          >
            <div className="">
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border">
                  <Factory className="h-5 w-5 text-primary" />
                  <span className="text-sm"><span className="font-semibold">Facilities:</span> 3 global sites</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm"><span className="font-semibold">Team:</span> 2,000+ experts</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm"><span className="font-semibold">On-Time Delivery:</span> 98.7%</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm"><span className="font-semibold">Certifications:</span> ISO 9001, ISO 14001</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Legacy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ x: -18, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden">
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/c750e4c6-3f16-4d0f-b8ad-89d9006d4740"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 18, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.06 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Legacy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For over 50 years, we have worked alongside leaders in steel production, oil &amp; gas, mining, power generation, and construction. Each project has reinforced our commitment to engineering excellence and long-term partnerships. Today, Sanat Mansoor continues to combine tradition with innovation — delivering solutions that stand the test of time.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border">
                <Gauge className="h-5 w-5 text-primary" />
                <span className="text-sm">Since 1948 · 1,000+ projects</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border">
                <Cog className="h-5 w-5 text-primary" />
                <span className="text-sm">Integrated engineering and manufacturing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-3">Our Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              We bring together a wide range of engineering and manufacturing expertise under one roof:
            </p>
          </motion.div>

          <div className="p-8 max-w-4xl mx-auto">
            <div className="relative border-l pl-6 space-y-5">
              <div className="absolute left-0 top-0 bottom-0 border-l" />
              <div className="relative">
                <span className="absolute -left-3.5 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <p><span className="font-semibold">Hydraulic Engineering</span> — <span className="text-muted-foreground">Design and production of high-pressure systems.</span></p>
              </div>
              <div className="relative">
                <span className="absolute -left-3.5 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <p><span className="font-semibold">Precision &amp; Large-Piece Machining</span> — <span className="text-muted-foreground">Handling complex and oversized components.</span></p>
              </div>
              <div className="relative">
                <span className="absolute -left-3.5 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <p><span className="font-semibold">Advanced Casting</span> — <span className="text-muted-foreground">Through our subsidiary Felez Taban, we produce critical parts with strength and reliability.</span></p>
              </div>
              <div className="relative">
                <span className="absolute -left-3.5 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <p><span className="font-semibold">Certified Welding &amp; Fabrication</span> — <span className="text-muted-foreground">Building durable assemblies that meet international standards.</span></p>
              </div>
              <div className="relative">
                <span className="absolute -left-3.5 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <p><span className="font-semibold">Reverse Engineering</span> — <span className="text-muted-foreground">Developing spare parts and systems to extend equipment life.</span></p>
              </div>
              <div className="relative">
                <span className="absolute -left-3.5 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <p><span className="font-semibold">After-Sales Service</span> — <span className="text-muted-foreground">Ongoing support, maintenance, and spare parts supply.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-3">Our Brands</h2>
            <p className="text-lg text-muted-foreground">
              Sanat Mansoor operates through three specialized brands. Together, these brands enable us to deliver complete mechanical, hydraulic, and electrical solutions.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto divide-y">
            <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 360, damping: 18 }} className="py-5 flex items-start justify-between gap-6">
              <div>
                <h3 className="font-semibold">SAMIE</h3>
                <p className="text-sm text-muted-foreground">Heavy industrial equipment and custom machinery.</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 360, damping: 18 }} className="py-5 flex items-start justify-between gap-6">
              <div>
                <h3 className="font-semibold">POWERMAN</h3>
                <p className="text-sm text-muted-foreground">High-pressure hydraulic tools.</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 360, damping: 18 }} className="py-5 flex items-start justify-between gap-6">
              <div>
                <h3 className="font-semibold">SAMEE</h3>
                <p className="text-sm text-muted-foreground">Industrial electrical equipment.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-3">Industries We Serve</h2>
            <p className="text-muted-foreground">Our products and services are trusted in industries where performance is critical:</p>
          </motion.div>

          <div className="p-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="px-4 py-2 rounded-full border bg-background">🏭 <span className="font-medium">Steel Production</span></span>
              <span className="px-4 py-2 rounded-full border bg-background">⛏️ <span className="font-medium">Mining</span></span>
              <span className="px-4 py-2 rounded-full border bg-background">🛢️ <span className="font-medium">Oil &amp; Gas</span></span>
              <span className="px-4 py-2 rounded-full border bg-background">🔋 <span className="font-medium">Power Generation</span></span>
              <span className="px-4 py-2 rounded-full border bg-background">🚧 <span className="font-medium">Construction</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Our Core Values</h2>
          <div className="max-w-4xl mx-auto divide-y">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                whileHover={{ y: -2, transition: { type: "spring", stiffness: 360, damping: 18 } }}
                transition={{ type: "spring", stiffness: 220, damping: 22, delay: i * 0.06 }}
                className="py-5 flex items-start gap-4"
              >
                <v.icon className="h-8 w-8 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision for the Future */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="p-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Vision for the Future</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As we look ahead, our mission remains clear: to provide innovative, reliable, and sustainable solutions that empower industries worldwide. We are committed to continuous improvement, investing in advanced technologies, and building partnerships that last.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand + Description */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://harmless-tapir-303.convex.cloud/api/storage/dc635b40-fb4a-48bf-bbfe-9fb32de3c6b3"
                  alt="Logo"
                  className="h-9 w-9"
                />
                <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Engineering durable, high‑performance industrial solutions across heavy equipment,
                hydraulics, and electrical systems—trusted since 1948.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Catalogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Brands */}
            <div>
              <h4 className="font-semibold mb-3">Our Brands</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>SAMIE — Heavy Industrial Equipment</li>
                <li>POWERMAN — High‑Pressure Hydraulic Tools</li>
                <li>SAMEE — Electrical Equipment</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">info@sanatmansoor.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">
                    #78, 9th Street, Oshtorjan Industrial City, Isfahan Province, Iran
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-border" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
            <p className="text-sm text-muted-foreground">© 2025 Sanat Mansoor. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                Company
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">
                Catalogs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Contact() {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    toast("Message sent", {
      description: `Thanks ${data.get("name") || "there"} — we'll get back to you shortly.`,
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

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
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/dc635b40-fb4a-48bf-bbfe-9fb32de3c6b3" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
              <a href="/contact" className="text-foreground font-medium">Contact Us</a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">Catalogs</a>
              <Button onClick={() => navigate("/")} className="ml-2">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="p-0">
        <div className="relative overflow-hidden min-h-[40vh] flex items-center justify-center">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/ced5ac2e-ca71-439e-8241-8bb5230ffd64"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="relative z-10 px-6 text-center">
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Let's build something that lasts
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to discuss your project, request a quote, or learn more about our capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Get in Touch with Sanat Mansoor
            </h2>
            <p className="text-lg text-muted-foreground">
              For over 50 years, Sanat Mansoor (SMC) has been a trusted partner in industrial manufacturing,
              delivering precision-engineered machinery, hydraulic systems, and electrical equipment. Whether you
              have a question about a specific product, need a custom solution, or want to discuss a project, our
              team of experts is here to help. Reach out to us using the information below.
            </p>



            {/*
            <h3 className="text-xl font-semibold mt-6">Contact Information by Department</h3>
            <p className="text-muted-foreground">
              To ensure your inquiry is handled efficiently, please get in touch with the relevant department.
            </p>
            */}


          </motion.div>
        </div>


        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-3 gap-10 items-start">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="lg:col-span-2 self-start"
          >
            <Card className="border-0">
              <CardContent className="p-8">
                <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input name="name" placeholder="Jane Doe" required />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input name="email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input name="company" placeholder="Your company" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={8}
                      className="min-h-[98px]"
                      required
                    />
                  </div>
                  

                  <div className="sm:col-span-2">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                      <Button type="submit" className="px-8">
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 self-start"
          >
            {/* Phone card - make contents bigger */}
            <Card className="border-0">
              <CardContent className="p-8 text-sm">
                <div className="flex items-start gap-4">
                  <Phone className="h-7 w-7 text-primary mt-0.5" />
                  <div className="space-y-1">
                    <div className="font-semibold text-base">Phone</div>
                    <div className="text-muted-foreground text-[0.98rem]">+1 (555) 123-4567</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email card - make contents bigger */}
            <Card className="border-0">
              <CardContent className="p-8 text-sm">
                <div className="flex items-start gap-4">
                  <Mail className="h-7 w-7 text-primary mt-0.5" />
                  <div className="space-y-1">
                    <div className="font-semibold text-base">Email</div>
                    <div className="text-muted-foreground text-[0.98rem]">info@sanatmansoor.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address card - make contents bigger */}
            <Card className="border-0">
              <CardContent className="p-8 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="h-7 w-7 text-primary mt-0.5" />
                  <div className="space-y-1">
                    <div className="font-semibold text-base">Address</div>
                    <div className="text-muted-foreground text-[0.98rem]">
                      #78, 9th Street, Oshtorjan Industrial City, Isfahan Province, Iran
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto px-8 mt-12 space-y-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="text-2xl font-bold tracking-tight">Find Us Easily</h2>
            <p className="text-muted-foreground">
              Located within the Isfahan Province, SMC benefits from strategic partnerships that enhance our
              manufacturing capabilities. Whether you need hydraulic solutions for oil &amp; gas, electrical
              systems for mining, or custom machinery for steel production, our experts are here to help.
            </p>
          </motion.div>

          
          <Card className="border-0 overflow-hidden paddi">
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="Sanat Mansoor Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.278927552167!2d51.47626018876107!3d32.46523047664455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc250155b9cc25%3A0x3191bf5648209a7a!2sSanat%20Mansoor%20Co.!5e0!3m2!1sen!2sde!4v1759210998979!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </AspectRatio>
          </Card>
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
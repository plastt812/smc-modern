import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";

export default function Contact() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

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
              <img src="./logo.svg" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="/contact" className="text-foreground font-medium">Contact</a>
              <Button onClick={() => navigate(isAuthenticated ? "/dashboard" : "/auth")} className="ml-2">
                {isAuthenticated ? "Dashboard" : "Get Started"}
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
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Get in Touch with Sanat Mansoor
            </h2>
            <p className="text-lg text-muted-foreground">
              For over 50 years, Sanat Mansoor (SMC) has been a trusted partner in industrial manufacturing,
              delivering precision-engineered machinery, hydraulic systems, and electrical equipment. Whether you
              have a question about a specific product, need a custom solution, or want to discuss a project, our
              team of experts is here to help. Reach out to us using the information below.
            </p>
            <h3 className="text-xl font-semibold mt-6">Contact Information by Department</h3>
            <p className="text-muted-foreground">
              To ensure your inquiry is handled efficiently, please get in touch with the relevant department.
            </p>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="lg:col-span-2"
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
                    <Textarea name="message" placeholder="Tell us about your project..." rows={6} required />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" className="px-8">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="border-0">
              <CardContent className="p-6 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0">
              <CardContent className="p-6 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@sanatmansoor.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0">
              <CardContent className="p-6 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-muted-foreground">
                      123 Industrial Blvd, Manufacturing City
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="./logo.svg" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
            </div>
            <p className="text-muted-foreground">© 2024 Sanat Mansoor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
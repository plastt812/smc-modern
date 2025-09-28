import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "react-router";
import { 
  Factory, 
  Shield, 
  Zap, 
  Globe, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Wrench
} from "lucide-react";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Unrivaled Durability",
      description: "High-performance tools (up to 1,500 bar) and resilient electrical systems, engineered for safety and long-term reliability in harsh environments."
    },
    {
      icon: Wrench,
      title: "Customized Precision",
      description: "Tailored designs from SAMIE's machinery to SAMEE's cable systems, optimized for steel, mining, and energy challenges with unmatched adaptability."
    },
    {
      icon: Zap,
      title: "Proven Innovation",
      description: "Over 1,000 pioneering projects, including first-of-their-kind solutions for global leaders, showcasing our commitment to cutting-edge excellence."
    },
    {
      icon: Users,
      title: "Expert Partnership",
      description: "A team of 200+ specialists and strategic alliances, like the Esfarayen Industrial Complex, delivering integrated support for your unique industrial needs."
    }
  ];

  const stats = [
    { number: "50+", label: "Years Experience" },
    { number: "1000+", label: "Projects" },
    { number: "200+", label: "Experts" },
    { number: "99.9%", label: "Quality Rating" }
  ];

  const services = [
    "Custom Manufacturing Solutions",
    "Industrial Equipment Design",
    "Quality Control & Testing",
    "Supply Chain Management",
    "Technical Consulting",
    "Maintenance & Support"
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50"
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src="./logo.svg" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <Button 
                onClick={() => navigate(isAuthenticated ? "/dashboard" : "/auth")}
                className="ml-4"
              >
                {isAuthenticated ? "Dashboard" : "Get Started"}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="p-0">
        <div className="w-full">
          <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
            <img
              src="https://harmless-tapir-303.convex.cloud/api/storage/2bbcab05-180d-460f-b184-519c9f98ac09"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-50 select-none pointer-events-none"
            />
            <div className="relative z-10 px-6 flex flex-col items-center justify-center text-center">
              <Badge variant="secondary" className="mb-6">
                Industry Leader Since 1974
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Innovating Industrial Solutions Since 1948
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Sanat Mansoor (SMC) leads with over 1,000 groundbreaking projects across seven product segments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate(isAuthenticated ? "/dashboard" : "/auth")}
                  className="text-lg px-8 py-6"
                >
                  {isAuthenticated ? "View Dashboard" : "Start Your Project"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  View Capabilities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="services">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Why Choose Sanat Mansoor
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With over 75 years of family-owned expertise, we craft solutions that thrive in the toughest industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <feature.icon className="h-14 w-14 text-primary mb-6 mx-auto" />
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Comprehensive Industrial Services
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                From concept to delivery, we provide end-to-end manufacturing solutions 
                tailored to your specific requirements.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://harmless-tapir-303.convex.cloud/api/storage/aa6ce926-4b60-4467-8030-6d8c769b00a8"
                  alt="Industrial operations"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Built on Excellence, Driven by Innovation
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  For over five decades, IndustrialCorp has been at the forefront of manufacturing excellence. 
                  We combine traditional craftsmanship with cutting-edge technology to deliver solutions that 
                  exceed expectations.
                </p>
                <p>
                  Our commitment to quality, sustainability, and customer satisfaction has made us a trusted 
                  partner for industries ranging from aerospace to automotive, energy to electronics.
                </p>
                <p>
                  With facilities across three continents and a team of world-class engineers, we're positioned 
                  to handle projects of any scale and complexity.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-4">Our Team</h3>
                  <p className="text-muted-foreground mb-6">
                    Over 2,000 skilled professionals dedicated to delivering excellence in every project.
                  </p>
                  <Button variant="outline" className="w-full">
                    Meet Our Experts
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/80" id="contact">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team to discuss your manufacturing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground">info@industrialcorp.com</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">123 Industrial Blvd, Manufacturing City</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => navigate(isAuthenticated ? "/dashboard" : "/auth")}
              className="text-lg px-8 py-6"
            >
              {isAuthenticated ? "Access Dashboard" : "Get Started Today"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
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
            <p className="text-muted-foreground">
              © 2024 Sanat Mansoor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

type Catalog = {
  title: string;
  description: string;
  href: string;
};

const catalogs: Array<Catalog> = [
  {
    title: "POWERMAN — Hydraulic Tools Catalog",
    description: "Cylinders, pumps, torque wrenches, crimpers, hoses, and accessories (up to 700 bar).",
    href: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "SAMIE — Heavy Industrial Equipment",
    description: "Cone crushers, HPGR, liner handlers, bearings, and turnkey line solutions.",
    href: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
  },
  {
    title: "SAMEE — Electrical Equipment",
    description: "Industrial plugs & sockets, cable festoon systems, and safety sirens.",
    href: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
  },
];

export default function Catalogs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Top Nav (simple) */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50"
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src="https://harmless-tapir-303.convex.cloud/api/storage/dc635b40-fb4a-48bf-bbfe-9fb32de3c6b3" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
            <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
            <Button onClick={() => navigate("/contact")} className="ml-2">
              Get Started
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="p-0">
        <div className="relative overflow-hidden min-h-[40vh] flex items-center justify-center">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/2bbcab05-180d-460f-b184-519c9f98ac09"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="relative z-10 px-6 text-center">
            <Badge variant="secondary" className="mb-4">Library</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Technical Catalogs & Downloads
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access up-to-date product catalogs across our brands. View online or download for offline use.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="border-0 shadow-sm h-full">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://harmless-tapir-303.convex.cloud/api/storage/c750e4c6-3f16-4d0f-b8ad-89d9006d4740"
                        alt={`${c.title} cover`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-primary" />
                      <h3 className="font-bold">{c.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{c.description}</p>
                    <div className="mt-auto flex gap-3">
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full">
                          View PDF
                        </Button>
                      </a>
                      <a href={c.href} download className="w-full">
                        <Button variant="outline" className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" onClick={() => navigate("/contact")}>
              Need a specific catalog? Contact our team
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
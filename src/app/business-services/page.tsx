import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Calculator, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  Phone,
  DollarSign
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Tax Services NYC | Corporate Tax Help New York, New Jersey, Connecticut",
  description: "Professional business tax services in NYC, Manhattan, Brooklyn, Queens, Bronx, Staten Island, New Jersey & Connecticut. Corporate tax compliance, payroll tax issues, business audit defense.",
  keywords: "business tax services NYC, corporate tax help New York, business tax attorney Manhattan, small business tax Brooklyn, corporate tax compliance Queens, business tax consultant Bronx, business tax Staten Island, corporate tax New Jersey, business tax Connecticut, payroll tax help NYC, business audit defense Tristate area",
};

const businessServices = [
  {
    title: "Corporate Tax Compliance",
    description: "Complete tax compliance for NYC businesses",
    businesses: "C-Corps, S-Corps, LLCs",
    benefit: "Avoid penalties & audits"
  },
  {
    title: "Payroll Tax Issues",
    description: "Resolve 941, 940, and state payroll tax problems",
    businesses: "All business types",
    benefit: "Protect business operations"
  },
  {
    title: "Business Audit Defense",
    description: "Professional representation for business audits",
    businesses: "Corporate & partnership audits",
    benefit: "Minimize tax exposure"
  },
  {
    title: "Sales Tax Resolution",
    description: "NY, NJ, CT sales tax compliance and disputes",
    businesses: "Retail, e-commerce, services",
    benefit: "Multi-state coordination"
  }
];

const nycBusinessDistricts = [
  {
    area: "Financial District",
    businesses: "Banking, Finance, Fintech",
    specialties: ["SEC compliance coordination", "Complex partnership structures", "International tax issues"],
    contact: "+1 929 416 3020"
  },
  {
    area: "Midtown Manhattan",
    businesses: "Media, Advertising, Real Estate",
    specialties: ["Entertainment industry taxes", "Real estate syndications", "Creative business structures"],
    contact: "+1 929 416 3020"
  },
  {
    area: "Brooklyn Tech Hub",
    businesses: "Startups, Tech, Manufacturing",
    specialties: ["Startup tax optimization", "R&D credits", "Manufacturing deductions"],
    contact: "+1 929 416 3020"
  },
  {
    area: "Queens Industrial",
    businesses: "Logistics, Manufacturing, Import/Export",
    specialties: ["Import/export taxation", "Inventory accounting", "Multi-location compliance"],
    contact: "+1 929 416 3020"
  }
];

export default function BusinessServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                NYC Business Tax Specialists Since 2003
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Professional Business Tax Services in NYC & Tristate Area
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Comprehensive tax solutions for Manhattan corporations, Brooklyn startups, Queens manufacturers, 
                and businesses throughout New York, New Jersey, and Connecticut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Building2 className="mr-2 h-5 w-5" />
                  Business Tax Consultation
                </Button>
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Emergency Business Help
                </Button>
              </div>
              
              {/* Business Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <Building2 className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">800+</div>
                  <div className="text-sm opacity-90">NYC Businesses Served</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <DollarSign className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">$12M</div>
                  <div className="text-sm opacity-90">Business Taxes Saved</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Shield className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">96%</div>
                  <div className="text-sm opacity-90">Audit Success Rate</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <TrendingUp className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Business Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Services */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Complete Business Tax Solutions for NYC & Tristate
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From startup incorporation to corporate restructuring, we provide comprehensive 
                tax services for businesses across New York, New Jersey, and Connecticut.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {businessServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Calculator className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground">
                        <strong>For:</strong> {service.businesses}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.benefit}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NYC Business Districts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Specialized Service by NYC Business District
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {nycBusinessDistricts.map((district, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-primary">{district.area}</CardTitle>
                      <Badge variant="outline">{district.contact}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{district.businesses}</div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Local Business Tax Specialties:</h4>
                    <ul className="space-y-2">
                      {district.specialties.map((specialty, specIndex) => (
                        <li key={specIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your NYC Business Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don&apos;t let tax issues threaten your business operations. Our licensed professionals 
              are ready to help businesses across the NYC metro area and Tristate region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call +1 929 416 3020
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Schedule Business Review
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
"use client"

import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  AlertTriangle,
  Phone,
  Clock,
  Shield,
  DollarSign,
  CheckCircle2,
  MessageCircle,
  Users,
  Calculator,
  Scale,
  Heart,
  FileText,
  Building2,
  CreditCard,
  Gavel,
  Zap,
  Target,
  ShieldCheck
} from "lucide-react";

// Metadata moved to layout.tsx or handled differently for client component

const allServices = [
  {
    category: "EMERGENCY SERVICES",
    services: [
      {
        icon: AlertTriangle,
        title: "Emergency Tax Attorney",
        href: "/emergency-tax-attorney",
        description: "24/7 emergency tax crisis response and immediate IRS intervention",
        features: ["Same-day response", "24/7 availability", "Crisis intervention"],
        badge: "24/7 Service"
      },
      {
        icon: Shield,
        title: "Stop Wage Garnishment",
        href: "/wage-garnishment",
        description: "Immediate wage garnishment relief and paycheck protection",
        features: ["Same-day filing", "Paycheck protection", "Emergency relief"],
        badge: "Urgent"
      },
      {
        icon: Building2,
        title: "Bank Levy Release",
        href: "/irs-seized-my-bank-account",
        description: "Emergency bank account release and asset protection",
        features: ["24-48 hour release", "Asset protection", "Emergency filing"],
        badge: "Emergency"
      }
    ]
  },
  {
    category: "IRS REPRESENTATION",
    services: [
      {
        icon: Gavel,
        title: "IRS Audit Defense",
        href: "/irs-audit-defense",
        description: "Professional representation during IRS audits and examinations",
        features: ["Full representation", "Document preparation", "Audit resolution"],
        badge: "Most Popular"
      },
      {
        icon: Scale,
        title: "IRS Audit Help",
        href: "/irs-audit-help",
        description: "Comprehensive IRS audit assistance and defense strategies",
        features: ["Audit defense", "IRS communication", "Resolution strategies"],
        badge: "Expert Service"
      },
      {
        icon: Gavel,
        title: "Criminal Tax Defense",
        href: "/criminal-tax-defense",
        description: "Defense against criminal tax charges and IRS Criminal Investigation",
        features: ["Criminal defense", "CI representation", "Constitutional rights"],
        badge: "Critical"
      }
    ]
  },
  {
    category: "TAX DEBT RESOLUTION",
    services: [
      {
        icon: DollarSign,
        title: "Tax Debt Relief",
        href: "/tax-debt-relief",
        description: "Comprehensive tax debt reduction and resolution strategies",
        features: ["Debt reduction", "Payment plans", "Settlement options"],
        badge: "High Success"
      },
      {
        icon: Target,
        title: "IRS Fresh Start Program",
        href: "/irs-fresh-start-program",
        description: "Access IRS Fresh Start Program benefits for debt relief",
        features: ["Debt reduction", "Fresh start options", "Program qualification"],
        badge: "Government Program"
      },
      {
        icon: Calculator,
        title: "Offer in Compromise",
        href: "/offer-in-compromise-help",
        description: "Settle tax debt for less than the full amount owed",
        features: ["Debt settlement", "Financial analysis", "IRS negotiation"],
        badge: "Major Savings"
      },
      {
        icon: Heart,
        title: "Currently Not Collectible",
        href: "/currently-not-collectible",
        description: "Temporary relief from IRS collection due to financial hardship",
        features: ["Collection suspension", "Hardship relief", "Financial protection"],
        badge: "Immediate Relief"
      }
    ]
  },
  {
    category: "PENALTY & INTEREST RELIEF",
    services: [
      {
        icon: Zap,
        title: "Penalty Abatement",
        href: "/penalty-abatement",
        description: "Remove IRS penalties and interest charges through abatement",
        features: ["Penalty removal", "Interest relief", "First-time abatement"],
        badge: "High Success Rate"
      },
      {
        icon: Calculator,
        title: "Trust Fund Recovery Penalty",
        href: "/trust-fund-recovery-penalty",
        description: "Defense against 100% payroll tax penalties for business owners",
        features: ["Business protection", "Personal liability defense", "TFRP relief"],
        badge: "Business Critical"
      }
    ]
  },
  {
    category: "ASSET PROTECTION",
    services: [
      {
        icon: Scale,
        title: "Tax Liens & Levies",
        href: "/tax-liens-levies",
        description: "Remove tax liens and stop levies to protect your assets",
        features: ["Lien removal", "Levy release", "Asset protection"],
        badge: "Asset Protection"
      },
      {
        icon: CreditCard,
        title: "Wage Garnishment Relief",
        href: "/wage-garnishment",
        description: "Stop wage garnishments and protect your income",
        features: ["Garnishment stop", "Income protection", "Payment alternatives"],
        badge: "Income Protection"
      }
    ]
  },
  {
    category: "COMPLIANCE & FILING",
    services: [
      {
        icon: FileText,
        title: "Unfiled Tax Returns",
        href: "/unfiled-tax-returns",
        description: "Preparation and filing of delinquent tax returns",
        features: ["Return preparation", "Compliance restoration", "Penalty minimization"],
        badge: "Compliance"
      },
      {
        icon: Calculator,
        title: "Tax Planning",
        href: "/tax-planning",
        description: "Proactive tax strategies to minimize future liabilities",
        features: ["Strategic planning", "Future compliance", "Tax optimization"],
        badge: "Preventive"
      }
    ]
  },
  {
    category: "SPECIALIZED RELIEF",
    services: [
      {
        icon: Heart,
        title: "Innocent Spouse Relief",
        href: "/innocent-spouse-relief",
        description: "Protection from spouse's tax liabilities and penalties",
        features: ["Liability relief", "Spouse protection", "Legal separation"],
        badge: "Specialized"
      },
      {
        icon: ShieldCheck,
        title: "Business Tax Issues",
        href: "/business-services",
        description: "Comprehensive business tax problem resolution",
        features: ["Business audits", "Payroll tax issues", "Corporate compliance"],
        badge: "Business Focus"
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Alert Banner */}
        <div className="bg-primary text-primary-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Complete Tax Resolution Services Directory - All Problems Solved</span>
              <Phone className="h-4 w-4" />
              <span className="font-bold">+1 929 416 3020</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Complete Service Directory
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                All Tax Resolution Services
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Comprehensive Tax Problem Solutions - Every Service Under One Roof
              </p>
              <p className="text-xl mb-8 text-primary-foreground/90">
                From emergency IRS intervention to long-term tax planning, we provide complete 
                tax resolution services for individuals and businesses across NY, NJ, and CT.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Service Consultation
                </Button>
              </div>
              
              {/* Service Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Service Categories</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Emergency Services</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Problem Resolution</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">3 States</div>
                  <div className="text-sm opacity-90">NY, NJ, CT Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {allServices.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-secondary/20' : ''}`}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {category.category}
                </h2>
                <Separator className="w-24 mx-auto bg-primary" />
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-lg group">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-lg">{service.title}</div>
                            <Badge variant="secondary" className="text-xs mt-1">
                              {service.badge}
                            </Badge>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            variant="outline" 
                            className="w-full border-primary text-primary hover:bg-primary/5"
                            onClick={() => window.location.href = service.href}
                          >
                            Learn More & Get Help
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* Service Process */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              OUR COMPREHENSIVE SERVICE PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "FREE CONSULTATION",
                  description: "Complete assessment of your tax situation and immediate crisis intervention if needed"
                },
                {
                  step: "2", 
                  title: "SERVICE SELECTION",
                  description: "Expert recommendation of the most effective services for your specific tax problems"
                },
                {
                  step: "3",
                  title: "IMPLEMENTATION",
                  description: "Professional execution of selected services with full IRS representation and advocacy"
                },
                {
                  step: "4",
                  title: "RESOLUTION & PROTECTION",
                  description: "Complete problem resolution plus ongoing protection and future tax planning"
                }
              ].map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-lg px-3 py-1 border-primary text-primary">
                        STEP {step.step}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              EVERY TAX PROBLEM HAS A SOLUTION
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Don't let tax problems control your life. Get comprehensive professional help today.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 NOW</p>
              <p className="text-xl">Complete Tax Resolution Services</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Consultation • All Services Available • NYC, NJ, CT • 24/7 Emergency</p>
              <p className="text-sm mt-2 opacity-90">Every tax problem can be solved with the right professional help</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call All Services Hotline
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10 border-2 border-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Free Service Assessment
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
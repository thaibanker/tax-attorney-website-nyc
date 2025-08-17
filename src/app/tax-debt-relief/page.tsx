import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingDown, 
  Calculator, 
  FileText, 
  CheckCircle, 
  Phone,
  MapPin,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Debt Relief NYC | Back Taxes Help New York, New Jersey, Connecticut",
  description: "Professional tax debt relief services in NYC, Manhattan, Brooklyn, Queens, Bronx, Staten Island, New Jersey & Connecticut. Reduce back taxes, payment plans, Offer in Compromise. Free consultation.",
  keywords: "tax debt relief NYC, back taxes help New York, tax debt settlement Manhattan, tax debt relief Brooklyn, back taxes Queens, tax debt help Bronx, tax debt relief Staten Island, tax debt New Jersey, back taxes Connecticut, tax debt settlement Tristate area, NYC tax debt attorney, New York tax debt relief, NJ back taxes help, CT tax debt settlement, Offer in Compromise NYC",
};

const debtSolutions = [
  {
    title: "Offer in Compromise",
    description: "Settle tax debts for less than the full amount owed",
    successRate: "85%",
    avgSavings: "$25,000",
    coverage: "All NYC boroughs & Tristate area"
  },
  {
    title: "Installment Agreements", 
    description: "Manageable monthly payment plans for NYC taxpayers",
    successRate: "95%",
    avgSavings: "No penalties",
    coverage: "NYC Metro & surrounding counties"
  },
  {
    title: "Currently Not Collectible",
    description: "Temporary relief for financial hardship cases",
    successRate: "90%",
    avgSavings: "Payment suspension",
    coverage: "New York, New Jersey, Connecticut"
  }
];

const nycBoroughs = [
  { 
    name: "Manhattan", 
    phone: "+1 929 416 3020",
    specialties: ["Financial District businesses", "High-income earners", "Complex investment taxes"],
    avgDebt: "$85,000"
  },
  { 
    name: "Brooklyn", 
    phone: "+1 929 416 3020",
    specialties: ["Small business debt", "Family tax issues", "Multi-generational planning"],
    avgDebt: "$45,000"
  },
  { 
    name: "Queens", 
    phone: "+1 929 416 3020",
    specialties: ["Immigrant tax issues", "Multi-language support", "Self-employment taxes"],
    avgDebt: "$38,000"
  },
  { 
    name: "Bronx", 
    phone: "+1 929 416 3020",
    specialties: ["Wage earner plans", "EITC issues", "Local business support"],
    avgDebt: "$32,000"
  },
  { 
    name: "Staten Island", 
    phone: "+1 929 416 3020",
    specialties: ["Property tax coordination", "Suburban business tax", "Transportation deductions"],
    avgDebt: "$42,000"
  }
];

export default function TaxDebtReliefPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                NYC&apos;s #1 Tax Debt Relief Specialists
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Professional Tax Debt Relief in New York, New Jersey & Connecticut
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Reduce or eliminate back taxes for Manhattan, Brooklyn, Queens, Bronx, Staten Island, 
                New Jersey, and Connecticut taxpayers. Licensed professionals with proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <TrendingDown className="mr-2 h-5 w-5" />
                  Free Debt Analysis
                </Button>
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Calculate Savings
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$2.5M+</div>
                  <div className="text-sm opacity-90">Debt Eliminated</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">1,200+</div>
                  <div className="text-sm opacity-90">NYC Cases Resolved</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Emergency Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Debt Relief Solutions */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Tax Debt Relief Solutions for NYC & Tristate Area
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive tax debt reduction strategies tailored for New York, New Jersey, 
                and Connecticut taxpayers facing IRS and state tax obligations.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {debtSolutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{solution.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-success/10 rounded-lg">
                        <div className="font-bold text-success text-lg">{solution.successRate}</div>
                        <div className="text-xs text-muted-foreground">Success Rate</div>
                      </div>
                      <div className="text-center p-3 bg-primary/10 rounded-lg">
                        <div className="font-bold text-primary text-lg">{solution.avgSavings}</div>
                        <div className="text-xs text-muted-foreground">Avg Savings</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{solution.coverage}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NYC Borough Coverage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Tax Debt Relief Across All NYC Boroughs
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {nycBoroughs.map((borough, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-primary">{borough.name}</CardTitle>
                      <Badge variant="outline">{borough.avgDebt} avg debt</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{borough.phone}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Local Specialties:</h4>
                    <ul className="space-y-1">
                      {borough.specialties.map((specialty, specIndex) => (
                        <li key={specIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
              
              {/* Tristate Coverage Card */}
              <Card className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-center text-primary">Extended Tristate Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">New Jersey</h4>
                      <p className="text-sm text-muted-foreground">Bergen, Essex, Hudson, Union, Middlesex Counties</p>
                      <p className="text-sm font-medium">+1 929 416 3020</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Connecticut</h4>
                      <p className="text-sm text-muted-foreground">Fairfield, New Haven, Hartford Counties</p>
                      <p className="text-sm font-medium">+1 929 416 3020</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Westchester</h4>
                      <p className="text-sm text-muted-foreground">White Plains, Yonkers, New Rochelle</p>
                      <p className="text-sm font-medium">+1 929 416 3020</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Our NYC Tax Debt Relief Process
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  step: "1",
                  title: "Free Analysis",
                  description: "Comprehensive review of your NYC tax debt situation",
                  icon: Calculator
                },
                {
                  step: "2", 
                  title: "Strategy Development",
                  description: "Customized plan based on NY/NJ/CT tax laws",
                  icon: FileText
                },
                {
                  step: "3",
                  title: "IRS Negotiation",
                  description: "Professional representation with tax authorities",
                  icon: Users
                },
                {
                  step: "4",
                  title: "Documentation",
                  description: "Complete paperwork and compliance filing",
                  icon: CheckCircle
                },
                {
                  step: "5",
                  title: "Resolution",
                  description: "Successful debt reduction or elimination",
                  icon: TrendingDown
                }
              ].map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-sm font-bold text-primary mb-2">Step {step.step}</div>
                      <CardTitle className="text-base">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              NYC Tristate Tax Debt Success Stories
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  location: "Manhattan Financial District",
                  debt: "$180,000",
                  settlement: "$35,000",
                  savings: "81%",
                  type: "Business Owner"
                },
                {
                  location: "Brooklyn Small Business",
                  debt: "$95,000", 
                  settlement: "Payment Plan",
                  savings: "No penalties",
                  type: "Restaurant Owner"
                },
                {
                  location: "New Jersey Family",
                  debt: "$65,000",
                  settlement: "$12,000",
                  savings: "82%",
                  type: "Healthcare Worker"
                }
              ].map((story, index) => (
                <Card key={index} className="bg-gradient-to-br from-success/10 to-primary/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{story.location}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">{story.type}</Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Original Debt</div>
                      <div className="text-xl font-bold text-destructive">{story.debt}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Final Settlement</div>
                      <div className="text-xl font-bold text-primary">{story.settlement}</div>
                    </div>
                    <div className="bg-success/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-success">{story.savings}</div>
                      <div className="text-sm text-muted-foreground">Total Savings</div>
                    </div>
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
              Start Your NYC Tax Debt Relief Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don&apos;t let tax debt control your life. Our licensed professionals are ready to help 
              taxpayers across Manhattan, Brooklyn, Queens, Bronx, Staten Island, New Jersey, and Connecticut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call (212) TAX-DEBT
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Calculator className="mr-2 h-5 w-5" />
                Free Debt Calculator
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  Home, 
  AlertTriangle, 
  Shield, 
  CheckCircle, 
  Phone,
  MapPin,
  Clock,
  FileText,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Lien & Levy Removal NYC | IRS Lien Release New York, New Jersey, Connecticut",
  description: "Professional tax lien and levy removal in NYC, Manhattan, Brooklyn, Queens, Bronx, Staten Island, New Jersey & Connecticut. Protect your property, assets, and credit. Emergency service available.",
  keywords: "tax lien removal NYC, IRS levy release New York, tax lien help Manhattan, tax levy Brooklyn, IRS lien removal Queens, tax levy Bronx, tax lien Staten Island, tax levy New Jersey, IRS lien Connecticut, tax lien attorney NYC, tax levy relief Tristate area, property tax lien NYC, asset protection New York",
};

const lienLevyTypes = [
  {
    title: "Federal Tax Liens",
    description: "IRS liens on NYC and Tristate area properties",
    impact: "Credit damage, property sale issues",
    timeline: "Remove in 30-90 days",
    coverage: "All NYC boroughs + NJ/CT"
  },
  {
    title: "Bank Account Levies", 
    description: "Immediate asset seizure protection",
    impact: "Account freezing, business disruption",
    timeline: "Emergency same-day relief",
    coverage: "NYC Metro banking network"
  },
  {
    title: "Property Seizure",
    description: "Real estate and asset protection",
    impact: "Forced sale, equity loss",
    timeline: "Prevent within 30 days",
    coverage: "NYC, Westchester, NJ, CT properties"
  }
];

const nycPropertyTypes = [
  {
    type: "Manhattan Condos/Co-ops",
    avgValue: "$1.2M",
    commonIssues: ["Co-op board complications", "High-value assessments", "Market timing concerns"],
    protection: "Specialized NYC real estate experience"
  },
  {
    type: "Brooklyn Brownstones",
    avgValue: "$850K",
    commonIssues: ["Historic property considerations", "Multi-family complications", "Renovation liens"],
    protection: "Borough-specific expertise"
  },
  {
    type: "Queens Family Homes",
    avgValue: "$650K",
    commonIssues: ["Family property disputes", "Multi-generational ownership", "Property tax coordination"],
    protection: "Family-focused solutions"
  },
  {
    type: "Staten Island Properties",
    avgValue: "$550K",
    commonIssues: ["Property tax appeals", "Zoning considerations", "Commuter tax issues"],
    protection: "Staten Island specialists"
  },
  {
    type: "NJ/CT Properties",
    avgValue: "$475K",
    commonIssues: ["Multi-state tax complications", "Commuter tax disputes", "Cross-border liens"],
    protection: "Tri-state coordination"
  }
];

const urgencyIndicators = [
  { level: "CRITICAL", timeframe: "10 days or less", action: "Property seizure imminent", color: "destructive" },
  { level: "HIGH", timeframe: "30 days", action: "Lien filed, credit affected", color: "warning" },
  { level: "MODERATE", timeframe: "60+ days", action: "Notice received, time to act", color: "primary" }
];

export default function TaxLiensLeviesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                NYC Property & Asset Protection Specialists
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Tax Lien & Levy Removal in New York, New Jersey & Connecticut
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Protect your Manhattan condo, Brooklyn brownstone, Queens home, and Tristate area assets 
                from IRS liens and levies. Licensed professionals with NYC property expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Home className="mr-2 h-5 w-5" />
                  Protect My Property
                </Button>
                <Button size="xl" variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white">
                  <Shield className="mr-2 h-5 w-5" />
                  Emergency Asset Protection
                </Button>
              </div>
              
              {/* Urgency Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {urgencyIndicators.map((indicator, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <Badge 
                      variant={indicator.color as "destructive" | "default" | "secondary" | "outline"} 
                      className="mb-2"
                    >
                      {indicator.level} URGENCY
                    </Badge>
                    <div className="text-sm">
                      <div className="font-semibold">{indicator.timeframe}</div>
                      <div className="opacity-90">{indicator.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lien & Levy Types */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Complete Tax Lien & Levy Protection for NYC & Tristate Area
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive asset protection services for property owners throughout 
                New York City, New Jersey, and Connecticut.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {lienLevyTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{type.description}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
                        <span className="text-sm font-medium">Impact:</span>
                        <span className="text-sm text-destructive">{type.impact}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                        <span className="text-sm font-medium">Resolution:</span>
                        <span className="text-sm text-success">{type.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{type.coverage}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NYC Property Protection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              NYC Property Type Specialists
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {nycPropertyTypes.map((property, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-primary">{property.type}</CardTitle>
                      <Badge variant="outline">{property.avgValue} avg</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{property.protection}</div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Common Protection Issues:</h4>
                    <ul className="space-y-2">
                      {property.commonIssues.map((issue, issueIndex) => (
                        <li key={issueIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Asset Protection Process */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              NYC Asset Protection Process
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  step: "1",
                  title: "Emergency Assessment",
                  description: "Immediate threat evaluation for NYC properties",
                  icon: AlertTriangle,
                  timeframe: "Same day"
                },
                {
                  step: "2", 
                  title: "Asset Inventory",
                  description: "Complete property and asset documentation",
                  icon: FileText,
                  timeframe: "2-3 days"
                },
                {
                  step: "3",
                  title: "Legal Strategy",
                  description: "Customized protection plan for your situation",
                  icon: Shield,
                  timeframe: "1 week"
                },
                {
                  step: "4",
                  title: "IRS Negotiation",
                  description: "Professional representation with tax authorities",
                  icon: Scale,
                  timeframe: "2-4 weeks"
                },
                {
                  step: "5",
                  title: "Lien Release",
                  description: "Complete removal and credit restoration",
                  icon: CheckCircle,
                  timeframe: "30-90 days"
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
                      <Badge variant="secondary" className="text-xs mt-2">{step.timeframe}</Badge>
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

        {/* NYC Market Impact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Why NYC Property Owners Need Immediate Lien Protection
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "NYC Real Estate Market Impact",
                      description: "Tax liens can prevent sale in the competitive NYC market, costing thousands daily in lost equity",
                      impact: "Up to $500/day in market appreciation loss"
                    },
                    {
                      title: "Co-op & Condo Board Issues",
                      description: "Many NYC buildings require clear title, making liens particularly problematic for owners",
                      impact: "Board approval complications"
                    },
                    {
                      title: "Credit Score Destruction", 
                      description: "NYC's high cost of living makes credit crucial for refinancing and financial flexibility",
                      impact: "150+ point credit score drop"
                    },
                    {
                      title: "Multi-State Complications",
                      description: "Tristate residents face complex jurisdictional issues requiring specialized expertise",
                      impact: "Compound penalties and interest"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 bg-destructive/10 rounded-lg flex items-center justify-center">
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground mb-2">{benefit.description}</p>
                        <Badge variant="destructive" className="text-xs">{benefit.impact}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center text-primary">NYC Property Protection Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-white rounded-lg p-4">
                      <Home className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold text-primary">450+</div>
                      <p className="text-xs text-muted-foreground">NYC properties protected</p>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4">
                      <TrendingUp className="h-6 w-6 mx-auto mb-2 text-success" />
                      <div className="text-2xl font-bold text-success">$2.8M</div>
                      <p className="text-xs text-muted-foreground">Equity preserved</p>
                    </div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <Clock className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold text-accent">72 Hours</div>
                    <p className="text-xs text-muted-foreground">Average emergency response time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Trusted by NYC property owners since 2003
                    </p>
                    <Badge variant="secondary">20+ Years Experience</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-destructive text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your NYC Property Before It&apos;s Too Late
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don&apos;t let tax liens destroy your property value or prevent your sale in NYC&apos;s competitive market. 
              Our emergency response team protects assets across Manhattan, Brooklyn, Queens, Bronx, Staten Island, 
              New Jersey, and Connecticut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Property Protection
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Home className="mr-2 h-5 w-5" />
                Free Property Assessment
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-90">
              Available 24/7 for property seizure emergencies • Licensed in NY, NJ, CT
            </p>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
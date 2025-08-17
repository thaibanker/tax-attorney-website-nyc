import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone,
  MapPin,
  DollarSign,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Stop Wage Garnishment NYC | Wage Garnishment Relief New York, New Jersey, Connecticut",
  description: "Emergency wage garnishment relief in NYC, Manhattan, Brooklyn, Queens, Bronx, Staten Island, New Jersey & Connecticut. Stop wage garnishment immediately. Licensed professionals available 24/7.",
  keywords: "stop wage garnishment NYC, wage garnishment relief New York, wage garnishment help Manhattan, stop wage garnishment Brooklyn, wage garnishment relief Queens, stop wage garnishment Bronx, wage garnishment Staten Island, wage garnishment New Jersey, stop wage garnishment Connecticut, wage garnishment attorney NYC, wage garnishment relief Tristate area, emergency wage garnishment help NYC",
};

const garnishmentTypes = [
  {
    title: "Federal Wage Garnishment",
    description: "IRS wage garnishment affecting NYC area workers",
    urgency: "Emergency",
    maxRate: "25% of income",
    coverage: "All 5 NYC boroughs"
  },
  {
    title: "State Tax Garnishment", 
    description: "NY State, NJ, CT wage garnishment relief",
    urgency: "High Priority",
    maxRate: "10% of income",
    coverage: "Tristate area coverage"
  },
  {
    title: "Bank Account Levy",
    description: "Immediate asset protection for NYC residents",
    urgency: "Critical",
    maxRate: "Full account freeze",
    coverage: "NYC Metro & surrounding areas"
  }
];

const emergencyStats = [
  { metric: "2 Hours", label: "Average Response Time", icon: Clock },
  { metric: "24/7", label: "Emergency Availability", icon: Shield },
  { metric: "97%", label: "Success Stopping Garnishment", icon: CheckCircle },
  { metric: "Same Day", label: "Court Filing Available", icon: FileText }
];

const nycEmployerTypes = [
  {
    sector: "Financial Services",
    location: "Manhattan (Wall St, Midtown)",
    commonIssues: ["High-income garnishments", "Complex bonus structures", "Stock option impacts"],
    protection: "Immediate relief available"
  },
  {
    sector: "Healthcare Workers",
    location: "All NYC Boroughs + NJ/CT",
    commonIssues: ["Shift worker pay protection", "Multiple employer situations", "Union considerations"],
    protection: "Specialized healthcare support"
  },
  {
    sector: "Small Business Employees",
    location: "Brooklyn, Queens, Bronx",
    commonIssues: ["Family business complications", "Cash payment issues", "Employer cooperation"],
    protection: "Business-friendly solutions"
  },
  {
    sector: "Government Workers",
    location: "NYC, NY State, Federal",
    commonIssues: ["Pension protection", "Federal vs state priorities", "Security clearance impacts"],
    protection: "Government employee specialists"
  }
];

export default function WageGarnishmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Emergency Hero Section */}
        <section className="relative bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6 animate-pulse">
                ⚠️ EMERGENCY WAGE GARNISHMENT RELIEF ⚠️
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Stop Wage Garnishment Immediately in NYC, New Jersey & Connecticut
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-destructive-foreground/90">
                Emergency protection for Manhattan, Brooklyn, Queens, Bronx, Staten Island, 
                New Jersey, and Connecticut workers facing wage garnishment. Licensed professionals available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="xl" variant="secondary" className="bg-white text-destructive hover:bg-white/90 animate-pulse">
                  <Phone className="mr-2 h-5 w-5" />
                  EMERGENCY HOTLINE: (212) STOP-NOW
                </Button>
                <Button size="xl" variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white">
                  <Shield className="mr-2 h-5 w-5" />
                  Immediate Protection
                </Button>
              </div>
              
              {/* Emergency Response Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {emergencyStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <IconComponent className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-xl font-bold">{stat.metric}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Garnishment Types */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Wage Garnishment Protection Across NYC & Tristate Area
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Immediate relief for all types of wage garnishment affecting workers throughout 
                New York City, New Jersey, and Connecticut.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {garnishmentTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-destructive">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-6 w-6 text-destructive" />
                        <CardTitle className="text-lg">{type.title}</CardTitle>
                      </div>
                      <Badge variant="destructive">{type.urgency}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{type.description}</p>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-destructive/10 rounded-lg p-3">
                        <div className="font-semibold text-destructive">Max Garnishment Rate</div>
                        <div className="text-sm">{type.maxRate}</div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-3">
                        <div className="font-semibold text-primary">Service Area</div>
                        <div className="text-sm">{type.coverage}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Action CTA */}
            <Card className="bg-gradient-to-r from-destructive/10 to-primary/10 border-destructive/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Your Paycheck is Being Garnished Right Now?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Don&apos;t wait until your next paycheck is affected. We can often stop garnishment within hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="destructive">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Emergency Line Now
                  </Button>
                  <Button size="lg" variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white">
                    Text for Immediate Help
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* NYC Employer Sectors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Wage Garnishment Relief by NYC Employment Sector
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {nycEmployerTypes.map((employer, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-primary">{employer.sector}</CardTitle>
                      <Badge variant="outline">{employer.protection}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{employer.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Common Garnishment Issues:</h4>
                    <ul className="space-y-2">
                      {employer.commonIssues.map((issue, issueIndex) => (
                        <li key={issueIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
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

        {/* Protection Process */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Emergency Wage Garnishment Protection Process
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Emergency Call",
                  description: "Immediate consultation for NYC area workers",
                  timeframe: "0-30 minutes",
                  icon: Phone
                },
                {
                  step: "2", 
                  title: "Document Review",
                  description: "Rapid analysis of garnishment notice",
                  timeframe: "30-60 minutes",
                  icon: FileText
                },
                {
                  step: "3",
                  title: "Legal Action",
                  description: "File emergency motions to stop garnishment",
                  timeframe: "Same day",
                  icon: Shield
                },
                {
                  step: "4",
                  title: "Protection Active",
                  description: "Garnishment stopped, income protected",
                  timeframe: "24-48 hours",
                  icon: CheckCircle
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
                      <Badge variant="secondary" className="text-xs">{step.timeframe}</Badge>
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

        {/* Income Protection Calculator */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">
                NYC Wage Garnishment Impact Calculator
              </h2>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-center">Protect Your NYC Income</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-destructive/10 rounded-lg p-6">
                      <DollarSign className="h-8 w-8 mx-auto mb-3 text-destructive" />
                      <h3 className="font-semibold text-lg mb-2">Without Protection</h3>
                      <div className="text-2xl font-bold text-destructive">Up to 25%</div>
                      <p className="text-sm text-muted-foreground">of disposable income</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-6">
                      <Shield className="h-8 w-8 mx-auto mb-3 text-primary" />
                      <h3 className="font-semibold text-lg mb-2">With Our Help</h3>
                      <div className="text-2xl font-bold text-primary">0% - 5%</div>
                      <p className="text-sm text-muted-foreground">or complete elimination</p>
                    </div>
                    <div className="bg-success/10 rounded-lg p-6">
                      <CheckCircle className="h-8 w-8 mx-auto mb-3 text-success" />
                      <h3 className="font-semibold text-lg mb-2">Protected Income</h3>
                      <div className="text-2xl font-bold text-success">$2,850+</div>
                      <p className="text-sm text-muted-foreground">avg monthly savings</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Based on NYC median income. Results may vary by location and circumstances.
                    </p>
                    <Button className="bg-primary text-primary-foreground">
                      Calculate Your Protection
                    </Button>
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
              Don&apos;t Let Wage Garnishment Destroy Your NYC Lifestyle
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Every day you wait means more money taken from your paycheck. Our emergency response team 
              is standing by to protect workers across Manhattan, Brooklyn, Queens, Bronx, Staten Island, 
              New Jersey, and Connecticut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: (212) GARNISH
              </Button>
              <Button size="xl" variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white">
                <Clock className="mr-2 h-5 w-5" />
                24/7 Emergency Text Line
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-90">
              Available evenings, weekends, and holidays for wage garnishment emergencies
            </p>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
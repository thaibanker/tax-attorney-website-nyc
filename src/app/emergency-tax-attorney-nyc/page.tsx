import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  AlertTriangle,
  Phone,
  Clock,
  Shield,
  Zap,
  DollarSign,
  Building,
  FileWarning,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  MapPin,
  Users,
  Ban
} from "lucide-react";

export const metadata: Metadata = {
  title: "EMERGENCY Tax Attorney NYC - IMMEDIATE Help Available 24/7",
  description: "IRS coming after you? We can STOP them TODAY. Emergency tax attorney services in NYC - wage garnishment, bank levy, asset seizure. Available 24/7. Call +1 929 416 3020",
  keywords: "emergency tax attorney NYC, IRS levy help, wage garnishment attorney NYC, bank levy release Manhattan, tax crisis lawyer Brooklyn, IRS seizure attorney Queens, emergency tax help Bronx, tax warrant attorney Staten Island, NYC tax emergency, immediate IRS help",
};

const emergencyServices = [
  {
    title: "STOP Wage Garnishment",
    description: "Before your next paycheck",
    icon: Ban,
    urgent: true
  },
  {
    title: "RELEASE Bank Levy",
    description: "Get your frozen money back",
    icon: DollarSign,
    urgent: true
  },
  {
    title: "PREVENT Property Seizure",
    description: "Save your home/business",
    icon: Building,
    urgent: true
  },
  {
    title: "RESPOND to Final Notices",
    description: "CP504, Letter 1058, CP90",
    icon: FileWarning,
    urgent: true
  },
  {
    title: "STOP Asset Seizure",
    description: "Protect your retirement, cars, property",
    icon: Shield,
    urgent: true
  },
  {
    title: "EMERGENCY Court Hearings",
    description: "Tomorrow's deadline? We're ready",
    icon: Clock,
    urgent: true
  }
];

const processSteps = [
  {
    step: "1",
    title: "IMMEDIATE CRISIS ASSESSMENT",
    time: "Within 1 Hour",
    actions: [
      "Emergency consultation to assess your situation",
      "Identify immediate threats to your assets",
      "Determine fastest path to protection"
    ]
  },
  {
    step: "2",
    title: "URGENT ACTION FILING",
    time: "Same Day",
    actions: [
      "File emergency stays and appeals",
      "Contact IRS Revenue Officers directly",
      "Submit hardship applications if qualified"
    ]
  },
  {
    step: "3",
    title: "LONG-TERM RESOLUTION",
    time: "Within 30 Days",
    actions: [
      "Negotiate payment plans or settlements",
      "Resolve underlying tax debt",
      "Prevent future enforcement actions"
    ]
  }
];

const nycOffices = [
  { name: "NYC Tax Court", address: "1 Centre Street procedures" },
  { name: "NYS DTF Appeals", address: "Albany and NYC offices" },
  { name: "Manhattan IRS Office", address: "290 Broadway protocols" },
  { name: "Brooklyn IRS Office", address: "625 Fulton Street procedures" },
  { name: "Queens IRS Office", address: "159-35 Union Turnpike processes" }
];

const urgentFAQs = [
  {
    question: "The IRS is garnishing my wages tomorrow. Can you stop it?",
    answer: "YES. We can file emergency stays and contact your payroll department directly. Call us immediately - every hour counts."
  },
  {
    question: "My bank account is frozen. How fast can you get my money back?",
    answer: "Most bank levies can be released within 24-48 hours if we act immediately. Don't wait - call now."
  },
  {
    question: "I received a CP504 notice. How long do I have?",
    answer: "You have 30 days to respond, but the IRS can levy immediately after that. Call us TODAY."
  },
  {
    question: "Can the IRS really take my house in NYC?",
    answer: "Yes, but there are strong protections we can invoke. NYC homestead exemptions and hardship provisions can protect you."
  },
  {
    question: "What if I can't afford an attorney?",
    answer: "We offer payment plans and often work on contingency for levy releases. Your first emergency consultation is FREE."
  }
];

const crisisSituations = [
  {
    category: "IRS ENFORCEMENT ACTIONS",
    items: [
      "Wage Garnishment - Up to 70% of your paycheck",
      "Bank Levies - Frozen accounts, seized funds", 
      "Asset Seizure - Cars, homes, business equipment",
      "Business Closures - Padlocked doors, lost revenue"
    ]
  },
  {
    category: "NYS DEPARTMENT OF TAXATION",
    items: [
      "NYS Income Execution - State wage garnishment",
      "NYS Warrants - Arrest warrants for tax debt",
      "NYS Bank Levies - State account seizures", 
      "NYS Asset Seizure - Property and vehicle seizure"
    ]
  },
  {
    category: "NYC DEPARTMENT OF FINANCE",
    items: [
      "NYC Tax Warrants - City enforcement actions",
      "Business License Suspension - Can't operate legally",
      "Property Tax Liens - Foreclosure threats",
      "Commercial Rent Tax - Business closure risks"
    ]
  }
];

export default function Page1EmergencyTaxAttorneyNYCPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Emergency Alert Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>IRS EMERGENCY? We&apos;re Available 24/7</span>
              <Phone className="h-4 w-4" />
              <span className="font-bold">+1 929 416 3020</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                <AlertCircle className="mr-1 h-3 w-3" />
                24/7 Emergency Response Team
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                EMERGENCY Tax Attorney NYC
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                IRS Coming After You? We Can STOP Them TODAY
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                Your assets, paycheck, and bank account are in IMMEDIATE DANGER. 
                Don&apos;t wait another minute.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL NOW: +1 929 416 3020
                </Button>
                <Button size="lg" variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Live Chat Available
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Garnishments Stopped</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">88%</div>
                  <div className="text-sm opacity-90">Levies Released</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$50M+</div>
                  <div className="text-sm opacity-90">Debt Resolved</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">24hr</div>
                  <div className="text-sm opacity-90">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Services Grid */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8 text-destructive" />
                EMERGENCY SITUATIONS WE HANDLE RIGHT NOW
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {emergencyServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-destructive" />
                        </div>
                        <span className="text-lg">{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                      {service.urgent && (
                        <Badge variant="destructive" className="mt-3">
                          <Clock className="mr-1 h-3 w-3" />
                          Immediate Action Required
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* NYC Tax Crisis Situations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              NYC TAX CRISIS SITUATIONS WE HANDLE
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {crisisSituations.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-destructive">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
                          <AlertCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-primary/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="mx-auto mb-4">SUCCESS STORY</Badge>
                <CardTitle className="text-2xl text-primary">
                  Manhattan Business Owner Saved in 24 Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;The IRS was about to seize my business bank account with $75,000. 
                  I called at 11 PM on Friday, and by Monday morning, the levy was released. 
                  They saved my business and my employees&apos; jobs.&quot;
                </blockquote>
                <p className="text-right font-semibold">- Michael R., Manhattan</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $75,000 bank account released, business saved, payment plan established</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              OUR 3-STEP EMERGENCY PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-primary"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        STEP {step.step}
                      </Badge>
                      <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                        {step.time}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NYC-Specific Procedures */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              NYC-SPECIFIC PROCEDURES WE KNOW
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {nycOffices.map((office, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">{office.name}</p>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Credentials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">YOUR EMERGENCY TAX ATTORNEY TEAM</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">25+ Years NYC Tax Crisis Experience</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Former IRS Revenue Officers on staff
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        NYC Bar Association members
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        NYS Department of Taxation alumni
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Thousands of NYC cases resolved
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">SUCCESS STATISTICS</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-primary">95%</div>
                        <div className="text-xs text-muted-foreground">Garnishments Stopped</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-primary">88%</div>
                        <div className="text-xs text-muted-foreground">Levies Released</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-primary">$50M+</div>
                        <div className="text-xs text-muted-foreground">Debt Resolved</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-primary">24hr</div>
                        <div className="text-xs text-muted-foreground">Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Urgent FAQ */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              URGENT FAQ - Your Crisis Questions Answered
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {urgentFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What Happens If You Wait */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-destructive/20">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-2xl text-destructive">
                  WHAT HAPPENS IF YOU WAIT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-destructive mb-3">If You Wait:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Tomorrow:</strong> IRS can proceed with enforcement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Next Week:</strong> Bank accounts frozen, wages garnished</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Next Month:</strong> Property seizure, business closure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Long Term:</strong> Credit destroyed, assets gone forever</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">If You Call NOW:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span>We STOP enforcement actions immediately</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span>We PROTECT your assets and income</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span>We NEGOTIATE directly with the IRS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span>We RESOLVE your tax crisis permanently</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              DON&apos;T WAIT - YOUR ASSETS ARE AT RISK
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              The IRS doesn&apos;t wait. Neither should you.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 NOW</p>
              <p className="text-xl">24/7 Emergency Tax Crisis Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Emergency Consultation • Same-Day Response • All NYC Boroughs</p>
              <p className="text-sm mt-2 opacity-90">Manhattan • Brooklyn • Queens • Bronx • Staten Island</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Hotline
              </Button>
              <Button size="lg" variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
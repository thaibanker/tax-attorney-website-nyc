import { ProfessionalFooter } from "@/components/professional-footer";
import { ProfessionalHeader } from "@/components/professional-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    AlertCircle,
    AlertTriangle,
    Ban,
    Building,
    Calculator,
    CheckCircle2,
    Clock,
    DollarSign,
    FileWarning,
    Mail,
    MessageCircle,
    Phone,
    Shield,
    Smartphone,
    Users,
    Zap
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STOP Wage Garnishment TODAY in NYC - Emergency Release Available",
  description: "IRS taking your paycheck? We can STOP it before your next pay date. Emergency wage garnishment release services in NYC. Available 24/7. Call +1 929 416 3020",
  keywords: "stop wage garnishment NYC, IRS paycheck garnishment relief, wage garnishment attorney NYC, garnishment release Manhattan, payroll levy stop Brooklyn, IRS wage levy Queens, garnishment help Bronx, paycheck protection Staten Island, NYC wage garnishment lawyer, emergency garnishment stop",
};

const garnishmentServices = [
  {
    title: "STOP Current Garnishment",
    description: "Before your next paycheck",
    icon: Ban,
    urgent: true
  },
  {
    title: "RELEASE Garnished Funds",
    description: "Get back money already taken",
    icon: DollarSign,
    urgent: true
  },
  {
    title: "PREVENT Future Garnishments",
    description: "Permanent protection",
    icon: Shield,
    urgent: true
  },
  {
    title: "NEGOTIATE Payment Plans",
    description: "Affordable monthly payments",
    icon: FileWarning,
    urgent: true
  },
  {
    title: "FILE Hardship Claims",
    description: "Reduce or eliminate garnishments",
    icon: Building,
    urgent: true
  },
  {
    title: "PROTECT Your Job",
    description: "Stop employer harassment",
    icon: Users,
    urgent: true
  }
];

const employeeTypes = [
  {
    category: "PRIVATE SECTOR EMPLOYEES",
    types: [
      "Corporate Payroll Systems - We know how to work with ADP, Paychex",
      "Small Business Employers - Direct contact with business owners",
      "Union Jobs - Special protections under collective bargaining",
      "Commission-Based Pay - Complex calculations we handle"
    ]
  },
  {
    category: "PUBLIC SECTOR EMPLOYEES",
    types: [
      "NYC Department of Education - Teacher/staff garnishments",
      "NYPD/FDNY - First responder special considerations",
      "NYC Health + Hospitals - Healthcare worker protections",
      "MTA/Transit - Transportation worker garnishments"
    ]
  },
  {
    category: "SELF-EMPLOYED/1099 WORKERS",
    types: [
      "Bank Account Levies - Instead of wage garnishments",
      "Asset Seizures - Business equipment and inventory",
      "Estimated Tax Penalties - Ongoing compliance issues"
    ]
  }
];

const garnishmentExamples = [
  {
    title: "NYC Single Person, $50,000 Salary",
    weeklyGross: "$961",
    protectedAmount: "$221 (federal minimum)",
    irsCanTake: "$740/week ($38,480/year)"
  },
  {
    title: "NYC Married Couple, $75,000 Salary",
    weeklyGross: "$1,442",
    protectedAmount: "$490 (married exemption)",
    irsCanTake: "$952/week ($49,504/year)"
  }
];

const garnishmentRates = [
  { status: "Single, 1 Exemption", rate: "Up to 77% of your paycheck" },
  { status: "Married, 2 Exemptions", rate: "Up to 66% of your paycheck" },
  { status: "Head of Household", rate: "Up to 71% of your paycheck" }
];

const processSteps = [
  {
    step: "1",
    title: "IMMEDIATE GARNISHMENT ANALYSIS",
    time: "Within 2 Hours",
    actions: [
      "Calculate your protected income under NYC/NYS law",
      "Identify errors in IRS garnishment calculations",
      "Determine fastest path to garnishment release"
    ]
  },
  {
    step: "2",
    title: "EMERGENCY FILING & CONTACT",
    time: "Same Day",
    actions: [
      "File Collection Due Process (CDP) appeals",
      "Contact your employer's payroll department directly",
      "Submit hardship applications to IRS",
      "File emergency court motions if necessary"
    ]
  },
  {
    step: "3",
    title: "PERMANENT RESOLUTION",
    time: "Within 15 Days",
    actions: [
      "Negotiate affordable payment arrangements",
      "Set up automatic payments to prevent future garnishments",
      "Resolve underlying tax debt permanently"
    ]
  }
];

const urgentFAQs = [
  {
    question: "My employer just told me about a garnishment. How fast can you stop it?",
    answer: "If we act immediately, we can often stop the garnishment before your next paycheck. Call NOW."
  },
  {
    question: "Can I get back the money they already took from my paychecks?",
    answer: "In many cases, YES. We can recover garnished funds, especially if the garnishment was improper or excessive."
  },
  {
    question: "Will my employer fire me for having a garnishment?",
    answer: "NO. It's illegal in NYC and NYS to terminate someone for wage garnishment. We protect your employment rights."
  },
  {
    question: "How much of my paycheck can they really take?",
    answer: "The IRS can take up to 77% of your paycheck, but we can often reduce this to $0 with proper hardship filings."
  },
  {
    question: "I'm already behind on rent because of the garnishment. What can I do?",
    answer: "We can file emergency hardship claims showing you can't afford basic living expenses. This often stops garnishments immediately."
  }
];

export default function Page2StopWageGarnishmentTodayPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Emergency Alert Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>WAGE GARNISHMENT EMERGENCY? Call Now</span>
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
                24/7 Garnishment Emergency Line
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                STOP Wage Garnishment TODAY
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                IRS Taking Your Paycheck? We Can STOP It Before Your Next Pay Date
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                Your wages are being garnished RIGHT NOW. Every day costs you hundreds of dollars. 
                We can stop it TODAY.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  EMERGENCY: +1 929 416 3020
                </Button>
                <Button size="lg" variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Live Chat Available
                </Button>
              </div>
              
              {/* Garnishment Rate Display */}
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">HOW MUCH ARE YOU LOSING?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {garnishmentRates.map((rate, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-4">
                      <div className="text-lg font-bold">{rate.status}</div>
                      <div className="text-sm opacity-90">{rate.rate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loss Calculator Section */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Calculator className="h-8 w-8 text-destructive" />
                NYC GARNISHMENT LOSS CALCULATOR
              </h2>
            </div>
            
            <Card className="max-w-4xl mx-auto border-destructive/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-destructive">
                  NYC Employee Making $60,000/Year Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-destructive mb-2">$885</div>
                    <div className="text-sm text-muted-foreground">Weekly Garnishment</div>
                    <div className="text-xs text-muted-foreground">(out of $1,154 gross)</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-destructive mb-2">$3,540</div>
                    <div className="text-sm text-muted-foreground">Monthly Loss</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-destructive mb-2">$42,480</div>
                    <div className="text-sm text-muted-foreground">Annual Loss</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-xl font-bold text-destructive">YOU CAN&apos;T AFFORD TO WAIT ANOTHER DAY</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Garnishment Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8 text-destructive" />
                IMMEDIATE WAGE GARNISHMENT RELIEF
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {garnishmentServices.map((service, index) => {
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

        {/* Success Story */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-primary/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="mx-auto mb-4">SUCCESS STORY</Badge>
                <CardTitle className="text-2xl text-primary">
                  Brooklyn Teacher Saves $2,400/Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;The IRS was taking $2,400 from my monthly teacher&apos;s salary. I couldn&apos;t pay rent or buy groceries for my kids. These attorneys stopped the garnishment in 24 hours and got me a payment plan for just $300/month.&quot;
                </blockquote>
                <p className="text-right font-semibold">- Sarah M., Brooklyn Public School Teacher</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $2,400/month garnishment STOPPED, $300/month payment plan, family saved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              OUR EMERGENCY GARNISHMENT STOP PROCESS
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

        {/* Employee Types */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              NYC PAYROLL GARNISHMENT SITUATIONS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {employeeTypes.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-destructive">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.types.map((type, typeIndex) => (
                        <li key={typeIndex} className="flex items-start gap-2 text-sm">
                          <AlertCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                          <span>{type}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Employment Protection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">PROTECT YOUR EMPLOYMENT</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">NYC Employment Law Protections:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        No Termination - Employer cannot fire you for garnishment
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Privacy Protection - Limited disclosure to coworkers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Reasonable Accommodation - Work with payroll confidentially
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Employer Relations Management:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        We handle all communications with your employer
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Minimize workplace embarrassment and stress
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Ensure legal compliance with NYC employment laws
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Maintain professional relationships
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              MULTIPLE EMERGENCY CONTACT OPTIONS
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center text-white">
                  <Phone className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">GARNISHMENT EMERGENCY LINE</h4>
                  <p className="text-xl font-bold">+1 929 416 3020</p>
                  <p className="text-sm opacity-90 mt-1">Answered 24/7</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center text-white">
                  <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">URGENT CHAT</h4>
                  <p className="text-sm opacity-90">Available on this page</p>
                  <p className="text-sm opacity-90 mt-1">Immediate response</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center text-white">
                  <Mail className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">EMERGENCY EMAIL</h4>
                  <p className="text-sm font-medium">wages@strategictaxnynj.com</p>
                  <p className="text-sm opacity-90 mt-1">Monitored every hour</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center text-white">
                  <Smartphone className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">TEXT ALERTS</h4>
                  <p className="text-sm">Text &quot;STOP&quot; to +1 929 416 3020</p>
                  <p className="text-sm opacity-90 mt-1">15-minute callback</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Urgent FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              URGENT GARNISHMENT FAQ
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

        {/* Garnishment Examples */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              GARNISHMENT CALCULATION EXAMPLES
            </h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {garnishmentExamples.map((example, index) => (
                <Card key={index} className="border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-destructive">
                      {example.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Weekly Gross:</span>
                      <span>{example.weeklyGross}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Protected Amount:</span>
                      <span>{example.protectedAmount}</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-bold text-destructive">IRS Can Take:</span>
                      <span className="font-bold text-destructive">{example.irsCanTake}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-xl font-bold text-destructive">These calculations show why IMMEDIATE action is critical</p>
            </div>
          </div>
        </section>

        {/* Cost of Waiting */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-destructive/20">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-2xl text-destructive">
                  THE COST OF WAITING
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-destructive mb-3">If You Don&apos;t Call TODAY:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Next Paycheck:</strong> Garnished again (hundreds lost)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>This Month:</strong> $1,000-$3,000+ taken from your pay</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Next 3 Months:</strong> $5,000-$10,000+ in lost wages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Long Term:</strong> Financial ruin, credit destruction</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">If You Call RIGHT NOW:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span><strong>Today:</strong> Garnishment stop process begins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span><strong>Tomorrow:</strong> IRS contacted, employer notified</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span><strong>This Week:</strong> Garnishment stopped or reduced</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span><strong>Long Term:</strong> Affordable payment plan, financial freedom</span>
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
              YOUR PAYCHECK IS AT RISK RIGHT NOW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Your next paycheck is being garnished. Don&apos;t lose another dollar.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency Wage Garnishment Release Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Garnishment Analysis • Same-Day Action • All NYC Boroughs</p>
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
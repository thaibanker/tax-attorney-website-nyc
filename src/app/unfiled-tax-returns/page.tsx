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
  FileX,
  Calendar,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Users,
  Gavel,
  Calculator,
  Building2,
  FileCheck,
  CreditCard,
  Ban
} from "lucide-react";

export const metadata: Metadata = {
  title: "Unfiled Tax Returns - Catch Up on Missing Returns Before IRS Finds You",
  description: "Haven't filed tax returns? Don't wait for IRS enforcement. We help catch up on unfiled returns, minimize penalties, and prevent criminal charges. Call +1 929 416 3020",
  keywords: "unfiled tax returns, missing tax returns, catch up tax returns, tax return preparation, IRS substitute return, tax compliance, unfiled returns penalty, tax return help NYC NJ",
};

const unfiledConsequences = [
  {
    title: "IRS SUBSTITUTE RETURNS",
    description: "IRS files returns for you with no deductions - maximum tax owed",
    icon: FileX,
    timeframe: "After 3+ years unfiled",
    severity: "Critical"
  },
  {
    title: "MASSIVE PENALTIES",
    description: "Failure to file penalty: 25% of taxes owed per year",
    icon: DollarSign, 
    timeframe: "Immediate - compounds monthly",
    severity: "High"
  },
  {
    title: "CRIMINAL PROSECUTION",
    description: "Willful failure to file is a federal crime",
    icon: Gavel,
    timeframe: "After 6 years unfiled typically",
    severity: "Critical"
  },
  {
    title: "ASSET SEIZURE",
    description: "IRS can seize bank accounts, wages, property",
    icon: Building2,
    timeframe: "After assessment on substitute returns",
    severity: "Critical"
  },
  {
    title: "NO REFUNDS LOST",
    description: "Lose refunds permanently after 3 years",
    icon: Ban,
    timeframe: "3-year time limit",
    severity: "High"
  },
  {
    title: "CREDIT DESTRUCTION",
    description: "Tax liens destroy credit rating and financing ability",
    icon: CreditCard,
    timeframe: "Once liens filed",
    severity: "High"
  }
];

const catchUpServices = [
  {
    service: "PRIORITY FILING SERVICE",
    description: "Expedited preparation of all missing returns",
    features: [
      "Rush processing of multiple years",
      "Professional tax preparation",
      "Maximize deductions and credits",
      "Minimize tax liability legally"
    ],
    icon: Calendar
  },
  {
    service: "PENALTY REDUCTION STRATEGY",
    description: "Aggressive penalty abatement and reduction",
    features: [
      "Reasonable cause penalty abatement",
      "First-time penalty abatement",
      "Hardship-based penalty reduction",
      "Interest suspension requests"
    ],
    icon: Calculator
  },
  {
    service: "CRIMINAL PROTECTION",
    description: "Prevent criminal prosecution for unfiled returns",
    features: [
      "Voluntary disclosure programs",
      "Criminal defense coordination",
      "Cooperation with IRS Criminal Investigation",
      "Minimize exposure through compliance"
    ],
    icon: Shield
  }
];

const filingProcess = [
  {
    step: "1",
    title: "URGENT ASSESSMENT",
    time: "Same Day",
    actions: [
      "Identify all unfiled tax years requiring returns",
      "Assess criminal exposure and prosecution risk",
      "Gather available tax documents and records",
      "Determine priority filing order and strategy"
    ]
  },
  {
    step: "2",
    title: "DOCUMENT RECONSTRUCTION", 
    time: "1-2 Weeks",
    actions: [
      "Obtain wage and income documents (W-2s, 1099s)",
      "Reconstruct business records and expenses",
      "Research available deductions and credits",
      "Prepare professional-quality tax returns"
    ]
  },
  {
    step: "3",
    title: "STRATEGIC FILING",
    time: "Immediate Upon Completion",
    actions: [
      "File all returns simultaneously to minimize penalties",
      "Submit penalty abatement requests",
      "Negotiate payment plans if taxes owed",
      "Establish ongoing compliance plan"
    ]
  }
];

const unfiledSituations = [
  {
    category: "BUSINESS OWNERS",
    description: "Multiple years of unfiled business and personal returns",
    risks: [
      "Substitute returns with no business expenses",
      "Trust fund tax liability for payroll taxes",
      "Business closure and asset seizure",
      "Criminal prosecution for tax evasion"
    ],
    urgency: "CRITICAL - Immediate action required"
  },
  {
    category: "INDIVIDUALS",
    description: "Personal income tax returns unfiled for multiple years",
    risks: [
      "Maximum tax assessment with no deductions",
      "Lost refunds and credits permanently",
      "Wage garnishment up to 70%",
      "Bank account seizure and asset levies"
    ],
    urgency: "HIGH - Penalties compound daily"
  },
  {
    category: "CONTRACTORS/FREELANCERS",
    description: "1099 income reported but no returns filed",
    risks: [
      "IRS matching program flags unreported income",
      "Self-employment tax penalties",
      "Professional license suspension",
      "Criminal investigation referral"
    ],
    urgency: "HIGH - IRS has your income records"
  }
];

const timeframes = [
  {
    years: "1-2 Years Unfiled",
    status: "MANAGEABLE",
    approach: "Standard filing with penalty minimization",
    penalties: "5% per month up to 25%",
    action: "File immediately to limit penalties"
  },
  {
    years: "3-5 Years Unfiled", 
    status: "SERIOUS",
    approach: "Aggressive penalty abatement strategy",
    penalties: "Substantial - compounding monthly",
    action: "Urgent professional intervention required"
  },
  {
    years: "6+ Years Unfiled",
    status: "CRITICAL",
    approach: "Criminal protection and voluntary disclosure",
    penalties: "Maximum plus criminal exposure",
    action: "EMERGENCY response - criminal prosecution likely"
  }
];

const unfiledFAQs = [
  {
    question: "What happens if I have unfiled tax returns for multiple years?",
    answer: "The IRS will eventually file substitute returns for you using only the income they know about with no deductions. This results in maximum tax liability plus massive penalties. Acting quickly is essential."
  },
  {
    question: "Can I go to jail for not filing tax returns?",
    answer: "Yes. Willful failure to file tax returns is a federal crime punishable by up to 1 year in prison per year unfiled. However, voluntary compliance and working with professionals can prevent prosecution."
  },
  {
    question: "How far back can the IRS go for unfiled returns?",
    answer: "There's no time limit for the IRS to assess tax on unfiled returns. They can go back decades. However, you only lose refunds after 3 years, so timing is critical."
  },
  {
    question: "Can you help if I don't have any tax documents?",
    answer: "Absolutely. We can obtain wage and income documents directly from the IRS and reconstruct your tax situation from available records. Missing documents are not a barrier to getting compliant."
  },
  {
    question: "How much will it cost to catch up on multiple years of unfiled returns?",
    answer: "The cost of professional help is typically far less than the penalties you'll face. Many clients save tens of thousands in penalties, making our fees a fraction of the potential savings."
  }
];

const complianceSteps = [
  {
    priority: "IMMEDIATE (24-48 Hours)",
    items: [
      "Stop all IRS correspondence and collection actions",
      "Begin document gathering for all unfiled years", 
      "Assess criminal exposure and protection needs",
      "Prioritize filing order based on refund potential"
    ]
  },
  {
    priority: "SHORT TERM (1-2 Weeks)",
    items: [
      "Complete professional preparation of all returns",
      "Maximize all available deductions and credits",
      "File all returns simultaneously for penalty relief",
      "Submit penalty abatement requests immediately"
    ]
  },
  {
    priority: "LONG TERM (Ongoing)",
    items: [
      "Establish quarterly estimated tax payments",
      "Implement record-keeping and compliance systems",
      "Monitor IRS acceptance and processing of returns",
      "Maintain ongoing tax compliance and filing"
    ]
  }
];

export default function UnfiledTaxReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Alert Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>UNFILED RETURNS? The IRS is Coming - Act NOW</span>
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
                <FileX className="mr-1 h-3 w-3" />
                CRISIS LEVEL 9/10
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Unfiled Tax Returns
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Catch Up Before the IRS Catches You
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                Every day you wait makes it worse. The IRS will file substitute returns 
                for you with NO deductions, resulting in maximum tax liability and criminal exposure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Emergency Filing Service
                </Button>
              </div>
              
              {/* Crisis Stats */}
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">UNFILED RETURNS CRISIS LEVEL 9/10:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">25%</div>
                    <div className="text-sm opacity-90">Annual Penalty Rate</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">3 Years</div>
                    <div className="text-sm opacity-90">Refund Time Limit</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">Prison</div>
                    <div className="text-sm opacity-90">Criminal Penalties</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">Total</div>
                    <div className="text-sm opacity-90">Asset Seizure Risk</div>
                  </div>
                </div>
                <p className="text-lg font-bold mt-4">EVERY DAY INCREASES YOUR LIABILITY</p>
              </div>
            </div>
          </div>
        </section>

        {/* Consequences Grid */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                CONSEQUENCES OF UNFILED TAX RETURNS
              </h2>
              <p className="text-xl text-muted-foreground">The IRS doesn't wait forever - and neither should you</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {unfiledConsequences.map((consequence, index) => {
                const IconComponent = consequence.icon;
                return (
                  <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-destructive" />
                        </div>
                        <span className="text-lg">{consequence.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">{consequence.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="border-destructive text-destructive">
                          {consequence.timeframe}
                        </Badge>
                        <Badge variant="destructive">
                          {consequence.severity} Risk
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeframe Risk Assessment */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              RISK ASSESSMENT BY YEARS UNFILED
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {timeframes.map((timeframe, index) => {
                const statusColor = timeframe.status === "MANAGEABLE" ? "success" : 
                                   timeframe.status === "SERIOUS" ? "warning" : "destructive";
                return (
                  <Card key={index} className={`border-${statusColor}/20 hover:border-${statusColor}/40 transition-colors`}>
                    <CardHeader>
                      <CardTitle className="text-center">
                        {timeframe.years}
                      </CardTitle>
                      <div className="text-center">
                        <Badge variant={statusColor === "success" ? "secondary" : 
                                      statusColor === "warning" ? "outline" : "destructive"}>
                          {timeframe.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm">Approach:</p>
                        <p className="text-sm text-muted-foreground">{timeframe.approach}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Penalties:</p>
                        <p className="text-sm text-muted-foreground">{timeframe.penalties}</p>
                      </div>
                      <div className={`bg-${statusColor}/5 rounded-lg p-3`}>
                        <p className="font-semibold text-sm">Immediate Action:</p>
                        <p className="text-sm mt-1">{timeframe.action}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Catch Up Services */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              COMPREHENSIVE CATCH-UP SERVICES
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {catchUpServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-primary">
                        <IconComponent className="h-6 w-6" />
                        {service.service}
                      </CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Unfiled Situations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              COMMON UNFILED RETURN SITUATIONS
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {unfiledSituations.map((situation, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{situation.category}</CardTitle>
                    <p className="text-muted-foreground">{situation.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm mb-2">Major Risks:</p>
                      <ul className="space-y-1">
                        {situation.risks.map((risk, riskIndex) => (
                          <li key={riskIndex} className="flex items-start gap-2 text-sm">
                            <AlertCircle className="h-3 w-3 text-destructive mt-1 flex-shrink-0" />
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-destructive/5 rounded-lg p-3">
                      <p className="font-bold text-destructive text-sm">{situation.urgency}</p>
                    </div>
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
                  NJ Contractor Catches Up 7 Years, Saves $95,000 in Penalties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  "I hadn't filed tax returns for 7 years. The IRS was threatening criminal prosecution and had already filed substitute returns showing I owed $150,000. These attorneys got all my returns filed within 3 weeks, reduced my actual tax liability to $55,000, and eliminated most penalties through reasonable cause. They literally saved my business and kept me out of prison."
                </blockquote>
                <p className="text-right font-semibold">- Tony M., New Jersey Contractor</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $150,000 reduced to $55,000 - $95,000 SAVED + Criminal prosecution avoided</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Filing Process */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              OUR EMERGENCY FILING PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {filingProcess.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-primary"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-lg px-3 py-1 border-destructive text-destructive">
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
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
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

        {/* Compliance Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              YOUR PATH TO TAX COMPLIANCE
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {complianceSteps.map((phase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {phase.priority}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
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

        {/* FAQ */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              UNFILED RETURNS FAQ
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {unfiledFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <FileCheck className="h-5 w-5 text-primary mt-0.5" />
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

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <FileX className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              STOP RUNNING - START FILING TODAY
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Every day you wait increases your liability and criminal exposure.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency Unfiled Returns Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Crisis Consultation • Same-Day Filing • Criminal Protection</p>
              <p className="text-sm mt-2 opacity-90">Don't let unfiled returns destroy your future</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Filing
              </Button>
              <Button size="lg" variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Catch-Up Process
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
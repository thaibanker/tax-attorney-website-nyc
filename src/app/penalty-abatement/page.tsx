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
  DollarSign,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Users,
  Calculator,
  FileText,
  Award,
  Target,
  Zap,
  TrendingDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "IRS Penalty Abatement - Remove Tax Penalties & Interest NYC NJ CT",
  description: "Remove IRS penalties and interest charges. First-time penalty abatement, reasonable cause relief. Expert penalty removal attorneys serving NYC, NJ, CT. Call +1 929 416 3020",
  keywords: "IRS penalty abatement, penalty removal, first time penalty abatement, reasonable cause penalty relief, IRS penalty forgiveness, tax penalty removal NYC NJ CT",
};

const penaltyTypes = [
  {
    title: "FAILURE TO FILE PENALTY",
    description: "5% per month (up to 25%) for not filing tax returns on time",
    icon: FileText,
    maxPenalty: "25% of unpaid taxes",
    abatementRate: "90-100%",
    commonReasons: ["Medical emergencies", "Natural disasters", "Missing records"]
  },
  {
    title: "FAILURE TO PAY PENALTY",
    description: "0.5% per month (up to 25%) for not paying taxes when due",
    icon: DollarSign,
    maxPenalty: "25% of unpaid taxes",
    abatementRate: "85-100%",
    commonReasons: ["Financial hardship", "Erroneous IRS advice", "System failures"]
  },
  {
    title: "ESTIMATED TAX PENALTY",
    description: "Quarterly penalty for insufficient estimated tax payments",
    icon: Calculator,
    maxPenalty: "Variable based on underpayment",
    abatementRate: "80-100%",
    commonReasons: ["Income fluctuations", "Casualty losses", "Retirement"]
  },
  {
    title: "ACCURACY-RELATED PENALTY",
    description: "20% penalty for substantial understatement of tax",
    icon: Target,
    maxPenalty: "20% of underpayment",
    abatementRate: "70-100%",
    commonReasons: ["Reasonable cause", "Good faith effort", "Professional reliance"]
  },
  {
    title: "TRUST FUND RECOVERY PENALTY",
    description: "100% penalty for unpaid employment taxes",
    icon: Shield,
    maxPenalty: "100% of unpaid trust fund taxes",
    abatementRate: "60-90%",
    commonReasons: ["Not responsible person", "Financial impossibility", "Duress"]
  },
  {
    title: "LATE DEPOSIT PENALTY",
    description: "2-15% penalty for late payroll tax deposits",
    icon: Clock,
    maxPenalty: "15% of deposit amount",
    abatementRate: "85-100%",
    commonReasons: ["Banking errors", "Mailing delays", "Electronic system issues"]
  }
];

const abatementStrategies = [
  {
    strategy: "FIRST-TIME PENALTY ABATEMENT (FTA)",
    description: "One-time relief for taxpayers with clean compliance history",
    requirements: [
      "Filed all required returns (or filed extensions)",
      "Paid or arranged to pay all taxes owed",
      "No penalties in prior 3 tax years",
      "Currently compliant with filing and payment requirements"
    ],
    successRate: "95-100%",
    processingTime: "30-60 days"
  },
  {
    strategy: "REASONABLE CAUSE ABATEMENT",
    description: "Relief based on circumstances beyond taxpayer control",
    requirements: [
      "Demonstrate ordinary business care and prudence",
      "Show cause prevented compliance despite good faith effort",
      "Provide documentation supporting reasonable cause",
      "Act was not due to willful neglect"
    ],
    successRate: "70-90%",
    processingTime: "60-120 days"
  },
  {
    strategy: "ADMINISTRATIVE WAIVER",
    description: "Automatic relief for certain low-dollar penalties",
    requirements: [
      "Penalty amount under specific thresholds",
      "Meet administrative waiver criteria",
      "Return filed and taxes paid",
      "No pattern of non-compliance"
    ],
    successRate: "100%",
    processingTime: "Immediate"
  }
];

const reasonableCauses = [
  {
    category: "UNAVOIDABLE CIRCUMSTANCES",
    examples: [
      "Death or serious illness of taxpayer or immediate family",
      "Unavoidable absence from business",
      "Natural disasters affecting taxpayer or records",
      "Civil disturbances or other extraordinary circumstances"
    ]
  },
  {
    category: "RELIANCE ON PROFESSIONAL",
    examples: [
      "Tax professional made error despite receiving accurate information",
      "Reliance on erroneous written IRS advice",
      "Computer system failure at tax preparation firm",
      "Professional negligence with documented evidence"
    ]
  },
  {
    category: "FINANCIAL HARDSHIP",
    examples: [
      "Unable to obtain funds to pay taxes despite reasonable efforts",
      "Payment would prevent meeting basic living expenses",
      "Significant financial loss due to circumstances beyond control",
      "Economic hardship preventing timely filing or payment"
    ]
  },
  {
    category: "SYSTEM OR PROCEDURAL ISSUES",
    examples: [
      "IRS processing delays or errors",
      "Mail delivery problems with documented evidence",
      "Electronic filing system failures",
      "Bank or financial institution errors"
    ]
  }
];

const abatementProcess = [
  {
    step: "1",
    title: "PENALTY ANALYSIS & STRATEGY",
    time: "Same Day",
    actions: [
      "Complete review of all penalties and underlying reasons",
      "Determine best abatement strategy (FTA vs Reasonable Cause)",
      "Calculate potential savings and success probability",
      "Develop comprehensive penalty removal plan"
    ]
  },
  {
    step: "2",
    title: "DOCUMENTATION & APPLICATION",
    time: "3-7 Days",
    actions: [
      "Gather supporting documentation for reasonable cause claims",
      "Prepare professional penalty abatement requests",
      "Draft compelling reasonable cause statements",
      "Submit strategically positioned applications to IRS"
    ]
  },
  {
    step: "3",
    title: "IRS RESPONSE & APPEALS",
    time: "30-120 Days",
    actions: [
      "Monitor IRS processing and respond to additional requests",
      "Appeal any denials through administrative process",
      "Negotiate partial abatements when full relief denied",
      "Secure maximum penalty reduction possible"
    ]
  }
];

const abatementBenefits = [
  {
    benefit: "IMMEDIATE SAVINGS",
    description: "Eliminate thousands in penalty charges with successful abatement",
    icon: DollarSign,
    impact: "50-100% penalty reduction"
  },
  {
    benefit: "REDUCED PAYMENT BURDEN",
    description: "Lower total tax debt makes payment plans more affordable",
    icon: TrendingDown,
    impact: "More manageable payments"
  },
  {
    benefit: "IMPROVED COMPLIANCE",
    description: "Fresh start motivation to maintain future tax compliance",
    icon: CheckCircle2,
    impact: "Long-term tax health"
  },
  {
    benefit: "CREDIT PROTECTION",
    description: "Lower tax debt reduces impact on credit scores and liens",
    icon: Shield,
    impact: "Better financial standing"
  },
  {
    benefit: "PEACE OF MIND",
    description: "Relief from crushing penalty burden and collection pressure",
    icon: Award,
    impact: "Reduced stress and anxiety"
  },
  {
    benefit: "FINANCIAL RECOVERY",
    description: "Savings can be used for business recovery or family needs",
    icon: Target,
    impact: "Capital preservation"
  }
];

const abatementFAQs = [
  {
    question: "What types of IRS penalties can be abated or removed?",
    answer: "Most IRS penalties can potentially be abated including failure to file, failure to pay, estimated tax penalties, accuracy-related penalties, and trust fund recovery penalties. Each has specific requirements and strategies for removal."
  },
  {
    question: "What is First-Time Penalty Abatement and do I qualify?",
    answer: "FTA is automatic relief for taxpayers with clean compliance history (no penalties in prior 3 years). You must have filed all returns, paid or arranged payment, and be currently compliant. It's the easiest penalty relief to obtain."
  },
  {
    question: "How much can I save through penalty abatement?",
    answer: "Savings vary but often range from 50-100% of penalty amounts. For businesses with large penalties, savings can be $10,000-$100,000+. Even modest penalties of $2,000-$5,000 are worth pursuing for removal."
  },
  {
    question: "What documentation do I need for reasonable cause penalty abatement?",
    answer: "Documentation depends on your situation but may include medical records, death certificates, insurance claims, professional correspondence, bank records, or other evidence supporting your reasonable cause claim."
  },
  {
    question: "How long does the penalty abatement process take?",
    answer: "FTA requests typically process in 30-60 days. Reasonable cause requests take 60-120 days. Complex cases or appeals may take longer, but most cases resolve within 6 months."
  },
  {
    question: "Can penalties be abated if I've already paid them?",
    answer: "Yes! You can request refunds of penalties paid within 2-3 years (depending on penalty type). Many taxpayers don't realize they can recover penalties already paid to the IRS."
  }
];

export default function PenaltyAbatementPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Alert Banner */}
        <div className="bg-warning text-warning-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>IRS Penalty Removal - Save 50-100% on Tax Penalties</span>
              <Phone className="h-4 w-4" />
              <span className="font-bold">+1 929 416 3020</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-warning via-warning/95 to-warning/90 text-warning-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                <Target className="mr-1 h-3 w-3" />
                Penalty Elimination Specialists
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                IRS Penalty Abatement
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Remove Tax Penalties & Interest - Save Thousands in Charges
              </p>
              <p className="text-xl mb-8 text-warning-foreground/90">
                Don't pay IRS penalties you don't owe. Most penalties can be removed through 
                First-Time Penalty Abatement or Reasonable Cause relief.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-warning hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-warning-foreground hover:bg-white/10 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Penalty Analysis
                </Button>
              </div>
              
              {/* Penalty Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">FTA Success Rate</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$2M+</div>
                  <div className="text-sm opacity-90">Penalties Removed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Maximum Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">30 Days</div>
                  <div className="text-sm opacity-90">Average Processing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Penalty Types */}
        <section className="py-16 bg-warning/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Calculator className="h-8 w-8 text-warning" />
                TYPES OF IRS PENALTIES WE REMOVE
              </h2>
              <p className="text-xl text-muted-foreground">Comprehensive penalty abatement for all IRS penalty types</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {penaltyTypes.map((penalty, index) => {
                const IconComponent = penalty.icon;
                return (
                  <Card key={index} className="border-warning/20 hover:border-warning/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-warning/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-warning" />
                        </div>
                        <span className="text-lg">{penalty.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">{penalty.description}</p>
                      <div className="space-y-2">
                        <div className="bg-destructive/5 rounded-lg p-3">
                          <p className="text-sm font-medium text-destructive">Maximum Penalty:</p>
                          <p className="text-sm text-muted-foreground">{penalty.maxPenalty}</p>
                        </div>
                        <div className="bg-success/5 rounded-lg p-3">
                          <p className="text-sm font-medium text-success">Abatement Rate:</p>
                          <p className="text-sm text-muted-foreground">{penalty.abatementRate}</p>
                        </div>
                        <div className="bg-primary/5 rounded-lg p-3">
                          <p className="text-sm font-medium text-primary">Common Reasons:</p>
                          <ul className="text-sm text-muted-foreground mt-1">
                            {penalty.commonReasons.map((reason, reasonIndex) => (
                              <li key={reasonIndex} className="flex items-start gap-1">
                                <span className="text-xs">•</span>
                                <span>{reason}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Abatement Strategies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              PENALTY ABATEMENT STRATEGIES
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {abatementStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {strategy.strategy}
                    </CardTitle>
                    <p className="text-center text-muted-foreground">{strategy.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {strategy.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-success/5 rounded-lg p-3 text-center">
                        <p className="text-xs font-medium text-success">Success Rate</p>
                        <p className="text-sm font-bold">{strategy.successRate}</p>
                      </div>
                      <div className="bg-warning/5 rounded-lg p-3 text-center">
                        <p className="text-xs font-medium text-warning">Timeline</p>
                        <p className="text-sm font-bold">{strategy.processingTime}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reasonable Cause Examples */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              REASONABLE CAUSE EXAMPLES
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {reasonableCauses.map((cause, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {cause.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cause.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                          <span>{example}</span>
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
        <section className="py-16 bg-gradient-to-r from-warning/5 to-success/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-warning/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="mx-auto mb-4">SUCCESS STORY</Badge>
                <CardTitle className="text-2xl text-primary">
                  Brooklyn Restaurant Owner Saves $47,000 in Penalties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  "COVID-19 devastated my restaurant business. I fell behind on payroll taxes and the IRS hit me with $47,000 in penalties on top of the taxes I owed. These attorneys used reasonable cause penalty abatement to eliminate 100% of the penalties. They saved my business and my family's livelihood."
                </blockquote>
                <p className="text-right font-semibold">- Antonio M., Brooklyn Restaurant Owner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $47,000 in penalties completely eliminated through reasonable cause abatement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              OUR PENALTY ABATEMENT PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {abatementProcess.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-warning to-success"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-lg px-3 py-1 border-warning text-warning">
                        STEP {step.step}
                      </Badge>
                      <Badge variant="secondary" className="bg-warning/10 text-warning">
                        {step.time}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
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

        {/* Benefits */}
        <section className="py-16 bg-warning/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              PENALTY ABATEMENT BENEFITS
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {abatementBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="border-warning/20 hover:border-warning/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-warning/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-warning" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">{benefit.benefit}</div>
                          <div className="text-xs text-muted-foreground">{benefit.impact}</div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              PENALTY ABATEMENT FAQ
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {abatementFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Target className="h-5 w-5 text-warning mt-0.5" />
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
        <section className="py-20 bg-gradient-to-br from-warning via-warning/95 to-warning/90 text-warning-foreground">
          <div className="container mx-auto px-4 text-center">
            <Target className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              STOP PAYING PENALTIES YOU DON'T OWE
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Most IRS penalties can be removed. Let us eliminate your penalty burden.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 TODAY</p>
              <p className="text-xl">Penalty Abatement Specialists</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Analysis • 95% Success Rate • NYC, NJ, CT • Same-Day Response</p>
              <p className="text-sm mt-2 opacity-90">Don't pay penalties you can eliminate</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-warning hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Penalty Experts
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-warning-foreground hover:bg-white/10 border-2 border-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Penalty Removal
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
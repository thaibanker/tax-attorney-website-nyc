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
  Building2,
  Gavel,
  Target,
  UserCheck,
  FileText,
  Scale,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trust Fund Recovery Penalty Defense - Protect Business Owners NYC NJ",
  description: "Defend against Trust Fund Recovery Penalty (TFRP). 100% penalty for unpaid payroll taxes. Expert TFRP defense attorneys serving NYC, NJ, CT business owners. Call +1 929 416 3020",
  keywords: "trust fund recovery penalty, TFRP defense, payroll tax penalty, responsible person penalty, business owner tax liability, employment tax penalty NYC NJ CT",
};

const tfrpBasics = [
  {
    title: "100% PERSONAL LIABILITY",
    description: "Responsible persons face 100% of unpaid trust fund taxes personally",
    icon: DollarSign,
    severity: "Critical",
    timeframe: "Immediate personal exposure"
  },
  {
    title: "PIERCES CORPORATE VEIL",
    description: "Personal liability despite corporate protection and limited liability",
    icon: Building2,
    severity: "Critical", 
    timeframe: "Corporate protection eliminated"
  },
  {
    title: "JOINT & SEVERAL LIABILITY",
    description: "Multiple responsible persons can be held 100% liable for entire amount",
    icon: Users,
    severity: "High",
    timeframe: "All responsible persons at risk"
  },
  {
    title: "NO DISCHARGE IN BANKRUPTCY",
    description: "TFRP debt generally cannot be discharged through bankruptcy",
    icon: Shield,
    severity: "Critical",
    timeframe: "Permanent personal liability"
  },
  {
    title: "AGGRESSIVE IRS COLLECTION",
    description: "IRS pursues TFRP with full collection powers including asset seizure",
    icon: Gavel,
    severity: "Critical",
    timeframe: "Immediate collection actions"
  },
  {
    title: "CRIMINAL EXPOSURE POSSIBLE",
    description: "Willful failure to pay trust fund taxes can result in criminal charges",
    icon: AlertTriangle,
    severity: "Critical",
    timeframe: "Criminal referral possible"
  }
];

const responsiblePersonFactors = [
  {
    category: "AUTHORITY & CONTROL",
    description: "Decision-making authority over business financial affairs",
    factors: [
      "Authority to sign checks and make payments",
      "Control over business financial decisions",
      "Power to determine payment priorities",
      "Authority to hire and fire employees"
    ],
    weight: "High"
  },
  {
    category: "KNOWLEDGE & AWARENESS",
    description: "Knowledge of unpaid employment taxes and business finances",
    factors: [
      "Awareness of unpaid payroll tax obligations",
      "Knowledge of business financial difficulties",
      "Receipt of IRS notices and correspondence",
      "Understanding of trust fund tax requirements"
    ],
    weight: "High"
  },
  {
    category: "DUTY & RESPONSIBILITY",
    description: "Legal duty to ensure payment of employment taxes",
    factors: [
      "Fiduciary duty to pay trust fund taxes",
      "Responsibility for tax compliance and reporting",
      "Legal obligation to withhold and remit taxes",
      "Duty to prioritize trust fund tax payments"
    ],
    weight: "Critical"
  },
  {
    category: "WILLFULNESS DETERMINATION",
    description: "Intentional or reckless disregard of tax obligations",
    factors: [
      "Voluntary and intentional violation of duty",
      "Payment of other creditors instead of IRS",
      "Knowledge that taxes were due and unpaid",
      "Reckless disregard of tax obligations"
    ],
    weight: "Critical"
  }
];

const defenseStrategies = [
  {
    strategy: "NOT A RESPONSIBLE PERSON",
    description: "Challenge designation as responsible person under IRC Section 6672",
    tactics: [
      "Demonstrate lack of authority over financial decisions",
      "Show absence of check-signing authority",
      "Prove limited role in business operations",
      "Document delegation of tax responsibilities to others"
    ],
    successRate: "70-90% when applicable"
  },
  {
    strategy: "LACK OF WILLFULNESS",
    description: "Prove absence of willful failure to collect or pay trust fund taxes",
    tactics: [
      "Show reasonable reliance on professional advice",
      "Demonstrate good faith efforts to pay taxes",
      "Prove ignorance of unpaid tax obligations",
      "Document business emergency circumstances"
    ],
    successRate: "60-80% with strong evidence"
  },
  {
    strategy: "REASONABLE CAUSE DEFENSE",
    description: "Establish reasonable cause for failure to pay employment taxes",
    tactics: [
      "Document undue hardship or business emergency",
      "Show reliance on erroneous professional advice",
      "Prove inability to pay due to circumstances beyond control",
      "Demonstrate good faith compliance efforts"
    ],
    successRate: "50-70% depending on circumstances"
  },
  {
    strategy: "STATUTE OF LIMITATIONS",
    description: "Challenge TFRP assessment based on expired statute of limitations",
    tactics: [
      "Verify assessment was made within 3-year statute",
      "Challenge extension agreements and waivers",
      "Document gaps in IRS assessment procedures",
      "Prove untimely TFRP assessment"
    ],
    successRate: "95-100% when statute expired"
  }
];

const tfrpProcess = [
  {
    step: "1",
    title: "INITIAL IRS INVESTIGATION",
    time: "30-90 Days",
    actions: [
      "IRS Revenue Officer identifies potential responsible persons",
      "Form 4180 interviews conducted with officers, directors, and key employees",
      "Investigation of business structure, authority, and financial control",
      "Determination of willfulness and responsible person status"
    ],
    strategy: "Critical to control narrative and protect rights during investigation"
  },
  {
    step: "2",
    title: "TFRP ASSESSMENT NOTICE",
    time: "60 Days to Respond",
    actions: [
      "Form 2751 Notice of Proposed Assessment sent to responsible persons",
      "60-day period to protest assessment and request administrative hearing",
      "Opportunity to present evidence challenging responsible person determination",
      "Last chance to avoid assessment through administrative process"
    ],
    strategy: "File strong protest with compelling evidence and legal arguments"
  },
  {
    step: "3",
    title: "COLLECTION & APPEALS",
    time: "Ongoing",
    actions: [
      "TFRP assessment becomes final if no protest filed",
      "IRS begins aggressive collection activities against personal assets",
      "Appeals process available through Office of Appeals",
      "Tax Court petition available for portion of penalty paid"
    ],
    strategy: "Aggressive defense through appeals and litigation if necessary"
  }
];

const tfrpConsequences = [
  {
    consequence: "PERSONAL ASSET SEIZURE",
    description: "IRS can seize homes, cars, bank accounts, and other personal assets",
    timeline: "Immediate after assessment",
    protection: "Emergency collection holds and asset protection strategies"
  },
  {
    consequence: "WAGE GARNISHMENT",
    description: "Up to 70% of wages can be garnished for TFRP collection",
    timeline: "Within 30 days of demand notice",
    protection: "Hardship applications and currently not collectible status"
  },
  {
    consequence: "CREDIT DESTRUCTION",
    description: "Federal tax liens filed against all personal property and assets",
    timeline: "Typically within 60-90 days",
    protection: "Lien withdrawal and subordination applications"
  },
  {
    consequence: "BUSINESS IMPACT",
    description: "Personal financial stress affects business operations and decisions",
    timeline: "Ongoing collection pressure",
    protection: "Installment agreements and offer in compromise negotiations"
  }
];

const businessProtection = [
  {
    protection: "CORPORATE GOVERNANCE",
    strategies: [
      "Implement formal board resolutions for tax matters",
      "Establish clear delegation of tax responsibilities",
      "Document decision-making authority and limitations",
      "Create written policies for payroll tax compliance"
    ]
  },
  {
    protection: "FINANCIAL CONTROLS",
    strategies: [
      "Segregate payroll tax funds in separate accounts",
      "Automate payroll tax deposits and payments",
      "Implement multi-signature requirements for large payments",
      "Regular monitoring of payroll tax compliance status"
    ]
  },
  {
    protection: "PROFESSIONAL ADVICE",
    strategies: [
      "Retain qualified payroll tax professionals",
      "Document reliance on professional tax advice",
      "Regular consultation on payroll tax obligations",
      "Professional review of payroll tax procedures"
    ]
  },
  {
    protection: "CRISIS MANAGEMENT",
    strategies: [
      "Immediate notification of payroll tax issues",
      "Priority payment of trust fund taxes over other debts",
      "Professional representation in IRS matters",
      "Proactive communication with tax professionals"
    ]
  }
];

const tfrpFAQs = [
  {
    question: "What is the Trust Fund Recovery Penalty and who can be held liable?",
    answer: "TFRP is a 100% penalty imposed on 'responsible persons' for unpaid employment taxes. Responsible persons include officers, directors, shareholders, or employees with authority over financial decisions who willfully failed to pay trust fund taxes."
  },
  {
    question: "Can multiple people be held liable for the same Trust Fund Recovery Penalty?",
    answer: "Yes. The IRS can assess the full 100% penalty against multiple responsible persons (joint and several liability). However, they can only collect 100% total, not 100% from each person."
  },
  {
    question: "What does 'willfulness' mean for Trust Fund Recovery Penalty purposes?",
    answer: "Willfulness means the responsible person voluntarily, consciously, and intentionally acted to prefer other creditors over the IRS. It doesn't require intent to defraud - reckless disregard of tax obligations is sufficient."
  },
  {
    question: "Can I challenge a Trust Fund Recovery Penalty assessment?",
    answer: "Yes. You have 60 days from the notice to file a protest and request an administrative hearing. You can challenge responsible person determination, willfulness, or the penalty amount with proper evidence and legal arguments."
  },
  {
    question: "Does corporate protection shield me from Trust Fund Recovery Penalty?",
    answer: "No. TFRP pierces the corporate veil and creates personal liability regardless of corporate structure, LLC protection, or limited liability. Responsible persons face personal liability for the full penalty amount."
  },
  {
    question: "Can Trust Fund Recovery Penalty be discharged in bankruptcy?",
    answer: "Generally no. TFRP is considered a trust fund tax that survives bankruptcy discharge. However, certain limited circumstances may allow discharge after waiting periods and meeting specific requirements."
  }
];

export default function TrustFundRecoveryPenaltyPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Alert Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>TFRP Assessment? Protect Your Personal Assets - Call NOW</span>
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
                <Building2 className="mr-1 h-3 w-3" />
                Business Owner Protection
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Trust Fund Recovery Penalty Defense
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Protect Your Personal Assets from 100% Payroll Tax Penalty
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                The Trust Fund Recovery Penalty makes business owners personally liable for 100% 
                of unpaid payroll taxes. Defend your assets and financial future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-destructive-foreground hover:bg-white/10 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Emergency TFRP Defense
                </Button>
              </div>
              
              {/* TFRP Crisis Stats */}
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">TRUST FUND RECOVERY PENALTY CRISIS LEVEL 10/10:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">100%</div>
                    <div className="text-sm opacity-90">Personal Liability</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">No</div>
                    <div className="text-sm opacity-90">Corporate Protection</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">60 Days</div>
                    <div className="text-sm opacity-90">To Challenge</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">Criminal</div>
                    <div className="text-sm opacity-90">Exposure Possible</div>
                  </div>
                </div>
                <p className="text-lg font-bold mt-4">IMMEDIATE PROFESSIONAL DEFENSE REQUIRED</p>
              </div>
            </div>
          </div>
        </section>

        {/* TFRP Basics */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Gavel className="h-8 w-8 text-destructive" />
                TRUST FUND RECOVERY PENALTY DANGERS
              </h2>
              <p className="text-xl text-muted-foreground">Understanding the severe consequences of TFRP assessment</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tfrpBasics.map((basic, index) => {
                const IconComponent = basic.icon;
                return (
                  <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-destructive" />
                        </div>
                        <span className="text-lg">{basic.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">{basic.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="destructive">
                          {basic.severity} Risk
                        </Badge>
                        <p className="text-sm text-muted-foreground">{basic.timeframe}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Responsible Person Factors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              RESPONSIBLE PERSON DETERMINATION FACTORS
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {responsiblePersonFactors.map((factor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {factor.category}
                    </CardTitle>
                    <p className="text-center text-muted-foreground text-sm">{factor.description}</p>
                    <div className="text-center">
                      <Badge variant={factor.weight === "Critical" ? "destructive" : 
                                   factor.weight === "High" ? "outline" : "secondary"}>
                        {factor.weight} Weight
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {factor.factors.map((item, itemIndex) => (
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

        {/* Defense Strategies */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              TFRP DEFENSE STRATEGIES
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {defenseStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {strategy.strategy}
                    </CardTitle>
                    <p className="text-muted-foreground">{strategy.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Defense Tactics:</h4>
                      <ul className="space-y-1">
                        {strategy.tactics.map((tactic, tacticIndex) => (
                          <li key={tacticIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{tactic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-success/5 rounded-lg p-3 text-center">
                      <p className="font-bold text-success">{strategy.successRate}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TFRP Process Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              TRUST FUND RECOVERY PENALTY PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {tfrpProcess.map((step, index) => (
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
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-warning/5 rounded-lg p-3">
                      <p className="text-sm font-medium text-warning">Defense Strategy:</p>
                      <p className="text-sm text-muted-foreground mt-1">{step.strategy}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TFRP Consequences */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              TFRP COLLECTION CONSEQUENCES
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {tfrpConsequences.map((consequence, index) => (
                <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-destructive">
                      {consequence.consequence}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{consequence.description}</p>
                    <div className="bg-destructive/5 rounded-lg p-3">
                      <p className="text-xs font-medium text-destructive">Timeline:</p>
                      <p className="text-xs text-muted-foreground mt-1">{consequence.timeline}</p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-xs font-medium text-primary">Protection:</p>
                      <p className="text-xs text-muted-foreground mt-1">{consequence.protection}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-success/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-primary/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="mx-auto mb-4">SUCCESS STORY</Badge>
                <CardTitle className="text-2xl text-primary">
                  Manufacturing Company Owner Defeats $340,000 TFRP Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  "The IRS assessed me personally for $340,000 in Trust Fund Recovery Penalty from my manufacturing company's payroll tax debt. These attorneys proved I wasn't a responsible person by showing the CFO had exclusive authority over tax decisions. The entire TFRP was eliminated through administrative appeal."
                </blockquote>
                <p className="text-right font-semibold">- Michael R., Manufacturing Company Owner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $340,000 TFRP completely eliminated - Personal assets protected</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Business Protection Strategies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              BUSINESS PROTECTION STRATEGIES
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {businessProtection.map((protection, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {protection.protection}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {protection.strategies.map((strategy, strategyIndex) => (
                        <li key={strategyIndex} className="flex items-start gap-2 text-sm">
                          <Shield className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span>{strategy}</span>
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
              TRUST FUND RECOVERY PENALTY FAQ
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {tfrpFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-primary mt-0.5" />
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
            <Building2 className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              PROTECT YOUR PERSONAL ASSETS NOW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              TFRP can destroy your financial future. Fight back with aggressive professional defense.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">TFRP Defense Emergency Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Crisis Consultation • 60-Day Deadline • NYC, NJ, CT • Immediate Action</p>
              <p className="text-sm mt-2 opacity-90">Don't let TFRP destroy your business and personal wealth</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call TFRP Defense
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-destructive-foreground hover:bg-white/10 border-2 border-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Emergency Protection
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
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
  Heart,
  Home,
  Baby,
  TrendingDown,
  Pause,
  RefreshCw,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Currently Not Collectible Status - Stop IRS Collection Actions NYC NJ",
  description: "Get Currently Not Collectible (CNC) status to stop IRS collection. Financial hardship relief from wage garnishment, levies. NYC, NJ, CT tax attorneys. Call +1 929 416 3020",
  keywords: "currently not collectible, CNC status, IRS collection suspension, financial hardship tax relief, stop IRS collection, uncollectible status NYC NJ CT",
};

const cncBenefits = [
  {
    title: "IMMEDIATE COLLECTION RELIEF",
    description: "Stop all IRS collection activities including wage garnishments and levies",
    icon: Shield,
    timeframe: "Effective immediately upon approval",
    protection: "Complete collection suspension"
  },
  {
    title: "FINANCIAL BREATHING ROOM",
    description: "Focus on basic living expenses without IRS collection pressure",
    icon: Heart,
    timeframe: "Duration of financial hardship",
    protection: "Income and asset protection"
  },
  {
    title: "NO PAYMENT REQUIRED",
    description: "No monthly payments required while in CNC status",
    icon: Pause,
    timeframe: "Until financial situation improves",
    protection: "Zero payment obligation"
  },
  {
    title: "PREVENTS ASSET SEIZURE",
    description: "Protects home, car, and other essential assets from IRS seizure",
    icon: Home,
    timeframe: "Continuous protection while in CNC",
    protection: "Asset preservation"
  },
  {
    title: "MAINTAINS FAMILY STABILITY",
    description: "Keeps family income intact for basic living needs",
    icon: Baby,
    timeframe: "Protection for dependents",
    protection: "Family financial security"
  },
  {
    title: "TIME TO RECOVER",
    description: "Opportunity to improve financial situation without collection pressure",
    icon: RefreshCw,
    timeframe: "Recovery period flexibility",
    protection: "Financial rehabilitation"
  }
];

const qualificationCriteria = [
  {
    category: "INCOME REQUIREMENTS",
    description: "Monthly income must be at or below necessary living expenses",
    criteria: [
      "Income covers only basic living expenses",
      "No disposable income after essential costs",
      "Living expenses meet IRS allowable standards",
      "Unable to pay even minimum monthly payment"
    ],
    icon: DollarSign
  },
  {
    category: "ASSET LIMITATIONS",
    description: "Limited assets that cannot be liquidated for tax payment",
    criteria: [
      "Equity in assets below IRS exemption thresholds",
      "Assets necessary for producing income or basic living",
      "Liquidation would create economic hardship",
      "No luxury assets or excessive equity"
    ],
    icon: Home
  },
  {
    category: "HARDSHIP CIRCUMSTANCES",
    description: "Demonstrable financial hardship preventing tax payment",
    criteria: [
      "Medical expenses or disability affecting income",
      "Unemployment or reduced income circumstances",
      "Supporting dependents on limited resources",
      "Collection would prevent meeting basic needs"
    ],
    icon: Users
  }
];

const livingExpenseCategories = [
  {
    category: "HOUSING & UTILITIES",
    allowances: [
      "Rent or mortgage payment",
      "Property taxes and insurance",
      "Electric, gas, water, sewage",
      "Telephone and basic internet",
      "Home repairs and maintenance"
    ]
  },
  {
    category: "TRANSPORTATION",
    allowances: [
      "Car payment or lease",
      "Auto insurance and registration", 
      "Fuel and maintenance",
      "Public transportation costs",
      "Parking fees"
    ]
  },
  {
    category: "FOOD & PERSONAL CARE",
    allowances: [
      "Groceries and household items",
      "Clothing and laundry",
      "Personal care items",
      "Prescription medications",
      "Basic healthcare expenses"
    ]
  },
  {
    category: "DEPENDENT CARE",
    allowances: [
      "Childcare expenses",
      "Child support obligations",
      "School expenses and supplies",
      "Medical care for dependents",
      "Elder care expenses"
    ]
  }
];

const cncProcess = [
  {
    step: "1",
    title: "FINANCIAL HARDSHIP ANALYSIS",
    time: "1-2 Days",
    actions: [
      "Complete detailed financial analysis including income and expenses",
      "Calculate monthly disposable income and living expense allowances",
      "Assess asset values and liquidation potential for hardship determination",
      "Determine CNC eligibility and develop supporting documentation strategy"
    ]
  },
  {
    step: "2",
    title: "FORM 433-A/433-F PREPARATION",
    time: "3-5 Days",
    actions: [
      "Prepare comprehensive Collection Information Statement (Form 433-A or 433-F)",
      "Gather and organize supporting financial documentation and evidence",
      "Document hardship circumstances with medical records, unemployment notices, etc.",
      "Create compelling hardship narrative with legal positioning for approval"
    ]
  },
  {
    step: "3",
    title: "IRS SUBMISSION & FOLLOW-UP",
    time: "30-90 Days",
    actions: [
      "Submit CNC application with comprehensive supporting documentation package",
      "Respond to IRS requests for additional information or clarification",
      "Negotiate with Revenue Officers to secure CNC status approval",
      "Monitor case status and maintain compliance with ongoing requirements"
    ]
  }
];

const cncLimitations = [
  {
    limitation: "DEBT CONTINUES TO GROW",
    description: "Interest continues to accrue on tax debt while in CNC status",
    mitigation: "Monitor total debt growth and plan for future resolution",
    icon: TrendingDown
  },
  {
    limitation: "PERIODIC REVIEWS",
    description: "IRS reviews financial status every 1-3 years",
    mitigation: "Maintain documentation and prepare for review process",
    icon: RefreshCw
  },
  {
    limitation: "IMPROVED FINANCES",
    description: "Must report significant income or asset improvements",
    mitigation: "Plan transition strategy when financial situation improves",
    icon: AlertCircle
  },
  {
    limitation: "STATUTE OF LIMITATIONS",
    description: "10-year collection statute continues to run",
    mitigation: "Track statute expiration dates for debt resolution",
    icon: Clock
  }
];

const cncAlternatives = [
  {
    alternative: "OFFER IN COMPROMISE",
    description: "Settle tax debt for less than full amount owed",
    betterWhen: "Have some assets or income but cannot pay full debt",
    requirements: "Demonstrate doubt as to collectibility or economic hardship"
  },
  {
    alternative: "INSTALLMENT AGREEMENT",
    description: "Monthly payment plan based on ability to pay",
    betterWhen: "Have modest disposable income for monthly payments",
    requirements: "Demonstrate ability to make consistent monthly payments"
  },
  {
    alternative: "PARTIAL PAYMENT PLAN",
    description: "Reduced monthly payments that don't pay debt in full",
    betterWhen: "Some payment ability but not enough for full payment plan",
    requirements: "Financial analysis shows inability to pay in full"
  }
];

const cncFAQs = [
  {
    question: "What is Currently Not Collectible (CNC) status and how does it work?",
    answer: "CNC status is IRS recognition that collecting tax debt would create economic hardship. It immediately stops all collection actions including wage garnishments and levies, providing relief while you recover financially."
  },
  {
    question: "How long does Currently Not Collectible status last?",
    answer: "CNC status lasts until your financial situation improves or the 10-year collection statute expires. The IRS reviews your status every 1-3 years to determine if you can resume payments."
  },
  {
    question: "Will my tax debt be forgiven under CNC status?",
    answer: "No, CNC doesn't forgive the debt. Interest continues to accrue, but collection activities stop. The debt may be forgiven if the 10-year collection statute expires while in CNC status."
  },
  {
    question: "What happens if my financial situation improves while in CNC?",
    answer: "You must report significant improvements in income or assets. The IRS may remove CNC status and resume collection activities. We help plan for this transition and explore other resolution options."
  },
  {
    question: "Can I get CNC status if I'm currently being garnished?",
    answer: "Yes! Applying for CNC status typically stops active garnishments and levies while the IRS reviews your financial situation. Emergency CNC requests can provide immediate relief."
  },
  {
    question: "What documentation do I need for CNC status?",
    answer: "You'll need Form 433-A or 433-F (Collection Information Statement), bank statements, pay stubs, proof of expenses, and documentation supporting your hardship circumstances."
  }
];

export default function CurrentlyNotCollectiblePage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Alert Banner */}
        <div className="bg-primary text-primary-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Currently Not Collectible Status - Stop IRS Collection Immediately</span>
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
                <Heart className="mr-1 h-3 w-3" />
                Financial Hardship Relief
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Currently Not Collectible
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Stop IRS Collection When You Can't Pay - Get Financial Relief
              </p>
              <p className="text-xl mb-8 text-primary-foreground/90">
                If paying your tax debt would prevent you from meeting basic living expenses, 
                Currently Not Collectible status can stop all IRS collection activities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Hardship Assessment
                </Button>
              </div>
              
              {/* CNC Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Collection Stopped</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$0</div>
                  <div className="text-sm opacity-90">Monthly Payment Required</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">Immediate</div>
                  <div className="text-sm opacity-90">Relief Timeline</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm opacity-90">Approval Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CNC Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                CURRENTLY NOT COLLECTIBLE BENEFITS
              </h2>
              <p className="text-xl text-muted-foreground">Comprehensive protection during financial hardship</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cncBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-lg">{benefit.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">{benefit.description}</p>
                      <div className="space-y-2">
                        <div className="bg-primary/5 rounded-lg p-3">
                          <p className="text-sm font-medium text-primary">Duration:</p>
                          <p className="text-sm text-muted-foreground">{benefit.timeframe}</p>
                        </div>
                        <div className="bg-success/5 rounded-lg p-3">
                          <p className="text-sm font-medium text-success">Protection:</p>
                          <p className="text-sm text-muted-foreground">{benefit.protection}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Qualification Criteria */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              CNC QUALIFICATION CRITERIA
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {qualificationCriteria.map((criteria, index) => {
                const IconComponent = criteria.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-center text-primary flex items-center gap-2 justify-center">
                        <IconComponent className="h-5 w-5" />
                        {criteria.category}
                      </CardTitle>
                      <p className="text-center text-muted-foreground text-sm">{criteria.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {criteria.criteria.map((criterion, criterionIndex) => (
                          <li key={criterionIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{criterion}</span>
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

        {/* Living Expense Allowances */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              IRS ALLOWABLE LIVING EXPENSES
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {livingExpenseCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.allowances.map((allowance, allowanceIndex) => (
                        <li key={allowanceIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span>{allowance}</span>
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
        <section className="py-16 bg-gradient-to-r from-primary/5 to-success/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-primary/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="mx-auto mb-4">SUCCESS STORY</Badge>
                <CardTitle className="text-2xl text-primary">
                  Single Mother Gets CNC Status - Keeps Home and Income Safe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  "After my divorce, I owed $45,000 in taxes from my ex-husband's business. The IRS was garnishing my wages and I couldn't afford rent and groceries for my kids. These attorneys got me Currently Not Collectible status in 30 days. The garnishment stopped immediately and I can finally breathe again."
                </blockquote>
                <p className="text-right font-semibold">- Sarah K., Queens Single Mother</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: Wage garnishment stopped, family income protected, $0 monthly payment required</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CNC Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              CURRENTLY NOT COLLECTIBLE APPLICATION PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {cncProcess.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-success"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-lg px-3 py-1 border-primary text-primary">
                        STEP {step.step}
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
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

        {/* CNC Limitations */}
        <section className="py-16 bg-warning/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              IMPORTANT CNC CONSIDERATIONS
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cncLimitations.map((limitation, index) => {
                const IconComponent = limitation.icon;
                return (
                  <Card key={index} className="border-warning/20 hover:border-warning/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-warning/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-warning" />
                        </div>
                        <span className="text-sm font-bold">{limitation.limitation}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{limitation.description}</p>
                      <div className="bg-primary/5 rounded-lg p-3">
                        <p className="text-xs font-medium text-primary">Strategy:</p>
                        <p className="text-xs text-muted-foreground mt-1">{limitation.mitigation}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Alternatives to CNC */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              ALTERNATIVES TO CURRENTLY NOT COLLECTIBLE
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {cncAlternatives.map((alternative, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {alternative.alternative}
                    </CardTitle>
                    <p className="text-center text-muted-foreground">{alternative.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-success/5 rounded-lg p-3">
                      <p className="text-sm font-medium text-success">Better When:</p>
                      <p className="text-sm text-muted-foreground mt-1">{alternative.betterWhen}</p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-sm font-medium text-primary">Requirements:</p>
                      <p className="text-sm text-muted-foreground mt-1">{alternative.requirements}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              CURRENTLY NOT COLLECTIBLE FAQ
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {cncFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
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
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              GET FINANCIAL RELIEF TODAY
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              If collection would create hardship, you may qualify for Currently Not Collectible status.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">CNC Status Specialists</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Hardship Assessment • Stop Collection Now • NYC, NJ, CT</p>
              <p className="text-sm mt-2 opacity-90">Protect your family's financial future</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call CNC Experts
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10 border-2 border-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Hardship Application
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
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
  TrendingUp,
  Target,
  PieChart,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Users,
  Building2,
  DollarSign,
  Shield,
  Lightbulb,
  Calendar,
  FileText,
  Briefcase,
  Calculator
} from "lucide-react";

export const metadata: Metadata = {
  title: "Strategic Tax Planning - Minimize Taxes, Maximize Wealth Building",
  description: "Professional tax planning services to legally minimize your tax burden. Estate planning, business structures, retirement strategies. NYC, NJ, CT tax planning experts. Call +1 929 416 3020",
  keywords: "tax planning, tax strategy, tax minimization, estate tax planning, business tax planning, retirement tax planning, tax efficient investing, tax planning NYC NJ CT",
};

const planningServices = [
  {
    title: "BUSINESS TAX OPTIMIZATION",
    description: "Strategic entity selection and tax-efficient business structures",
    icon: Building2,
    savings: "15-40% annual tax reduction",
    urgent: false
  },
  {
    title: "ESTATE TAX PLANNING",
    description: "Minimize estate taxes and maximize wealth transfer",
    icon: Shield,
    savings: "Up to 40% estate tax savings",
    urgent: false
  },
  {
    title: "RETIREMENT TAX STRATEGIES",
    description: "Tax-efficient retirement planning and distribution strategies",
    icon: TrendingUp,
    savings: "20-50% retirement tax reduction",
    urgent: false
  },
  {
    title: "INVESTMENT TAX PLANNING",
    description: "Tax-loss harvesting and capital gains optimization",
    icon: PieChart,
    savings: "10-25% investment tax reduction",
    urgent: false
  },
  {
    title: "YEAR-END TAX STRATEGIES",
    description: "Last-minute moves to minimize current year tax liability",
    icon: Calendar,
    savings: "5-30% current year savings",
    urgent: true
  },
  {
    title: "MULTI-STATE TAX PLANNING",
    description: "Optimize tax liability across NY, NJ, CT, and other states",
    icon: Target,
    savings: "Up to 13% state tax reduction",
    urgent: false
  }
];

const planningStrategies = [
  {
    category: "INDIVIDUAL TAX PLANNING",
    strategies: [
      {
        name: "Income Timing Strategies",
        description: "Optimize when you receive income to minimize tax brackets",
        potential: "Save $5,000-$25,000 annually"
      },
      {
        name: "Deduction Optimization",
        description: "Maximize itemized deductions and credits",
        potential: "Save $2,000-$15,000 annually"
      },
      {
        name: "Tax-Advantaged Accounts",
        description: "Strategic use of IRAs, 401(k)s, HSAs, and 529 plans",
        potential: "Save $3,000-$20,000 annually"
      },
      {
        name: "Charitable Giving Strategies",
        description: "Tax-efficient charitable giving and donor advised funds",
        potential: "Save $1,000-$10,000 annually"
      }
    ]
  },
  {
    category: "BUSINESS TAX PLANNING",
    strategies: [
      {
        name: "Entity Structure Optimization",
        description: "Choose optimal business structure (LLC, S-Corp, C-Corp)",
        potential: "Save $10,000-$100,000 annually"
      },
      {
        name: "Employee Benefit Planning",
        description: "Tax-advantaged employee benefits and compensation",
        potential: "Save $5,000-$50,000 annually"
      },
      {
        name: "Equipment & Depreciation",
        description: "Section 179 deductions and bonus depreciation strategies",
        potential: "Save $10,000-$200,000 annually"
      },
      {
        name: "Business Credit Optimization",
        description: "Maximize R&D credits, work opportunity credits, and more",
        potential: "Save $5,000-$75,000 annually"
      }
    ]
  }
];

const planningProcess = [
  {
    step: "1",
    title: "COMPREHENSIVE TAX ANALYSIS",
    time: "1-2 Weeks",
    actions: [
      "Complete review of current tax situation",
      "Analysis of income sources and tax liabilities",
      "Identification of missed opportunities and errors",
      "Multi-year tax projection modeling"
    ]
  },
  {
    step: "2",
    title: "STRATEGIC PLAN DEVELOPMENT",
    time: "2-3 Weeks", 
    actions: [
      "Custom tax strategy development",
      "Entity structure recommendations",
      "Investment and retirement planning integration",
      "Estate planning coordination"
    ]
  },
  {
    step: "3",
    title: "IMPLEMENTATION & MONITORING",
    time: "Ongoing",
    actions: [
      "Execute recommended tax strategies",
      "Quarterly strategy reviews and adjustments",
      "Ongoing compliance and filing support",
      "Annual plan updates and optimization"
    ]
  }
];

const clientTypes = [
  {
    type: "HIGH-INCOME PROFESSIONALS",
    description: "Doctors, lawyers, executives with complex tax situations",
    challenges: [
      "High marginal tax rates in NY/NJ",
      "Alternative Minimum Tax (AMT) exposure",
      "Limited deduction phaseouts",
      "State and local tax (SALT) limitations"
    ],
    solutions: [
      "Income deferral and timing strategies",
      "Tax-advantaged retirement planning", 
      "Charitable giving optimization",
      "Multi-state residency planning"
    ]
  },
  {
    type: "BUSINESS OWNERS",
    description: "Entrepreneurs and business owners seeking tax efficiency",
    challenges: [
      "Self-employment tax optimization",
      "Business vs. personal expense allocation",
      "Entity structure inefficiencies",
      "Succession and exit planning"
    ],
    solutions: [
      "S-Corp election for SE tax savings",
      "Strategic business entity restructuring",
      "Employee benefit plan implementation",
      "Buy-sell agreement tax planning"
    ]
  },
  {
    type: "AFFLUENT FAMILIES",
    description: "Families focused on wealth preservation and transfer",
    challenges: [
      "Estate and gift tax exposure",
      "Generation-skipping transfer tax",
      "Income tax on trust distributions",
      "Family business succession planning"
    ],
    solutions: [
      "Irrevocable trust strategies",
      "Grantor trust income tax planning",
      "Family limited partnership structures",
      "Charitable remainder trust planning"
    ]
  }
];

const yearEndStrategies = [
  {
    strategy: "ACCELERATE DEDUCTIONS",
    deadline: "December 31st",
    actions: [
      "Prepay state and local taxes (within SALT limits)",
      "Accelerate business expenses and equipment purchases",
      "Make charitable contributions and donor advised fund gifts",
      "Pay outstanding professional fees and subscriptions"
    ],
    savings: "$2,000 - $25,000"
  },
  {
    strategy: "DEFER INCOME",
    deadline: "December 31st", 
    actions: [
      "Delay invoicing and payment collection",
      "Defer bonus payments to following year",
      "Time asset sales for optimal capital gains treatment",
      "Defer IRA/401(k) conversions if beneficial"
    ],
    savings: "$3,000 - $50,000"
  },
  {
    strategy: "TAX-LOSS HARVESTING",
    deadline: "December 31st",
    actions: [
      "Sell losing investments to offset capital gains",
      "Avoid wash sale rules with strategic timing",
      "Maximize $3,000 capital loss deduction",
      "Carry forward excess losses to future years"
    ],
    savings: "$1,000 - $15,000"
  },
  {
    strategy: "RETIREMENT CONTRIBUTIONS",
    deadline: "Varies by plan type",
    actions: [
      "Maximize 401(k) contributions ($23,000 for 2024)",
      "Make catch-up contributions if over 50 ($7,500 additional)",
      "Fund SEP-IRA or Solo 401(k) for business owners",
      "Consider Roth conversion strategies"
    ],
    savings: "$5,000 - $30,000"
  }
];

const planningFAQs = [
  {
    question: "When is the best time to start tax planning for next year?",
    answer: "Now! Tax planning should be year-round, not just at year-end. The earlier you start, the more strategies are available. January through March is ideal for implementing strategies for the current tax year."
  },
  {
    question: "How much can professional tax planning really save me?",
    answer: "Most clients save 2-5 times our fee in the first year alone. High-income clients often save $10,000-$100,000+ annually through strategic planning. The savings compound over time."
  },
  {
    question: "Is tax planning just for wealthy people?",
    answer: "No! Anyone with income over $75,000 can benefit from tax planning. Small business owners, professionals, and investors at all income levels can implement strategies to reduce their tax burden."
  },
  {
    question: "How is tax planning different from tax preparation?",
    answer: "Tax preparation looks backward at what happened. Tax planning looks forward to minimize future taxes. Planning involves strategic decisions throughout the year, not just filing returns in April."
  },
  {
    question: "Can you help with multi-state tax planning for NY, NJ, and CT?",
    answer: "Absolutely. We specialize in tri-state tax planning and can help you optimize your tax situation across multiple states, including residency planning and allocation strategies."
  }
];

const planningBenefits = [
  {
    benefit: "SUBSTANTIAL TAX SAVINGS",
    description: "Reduce your annual tax liability through strategic planning",
    icon: DollarSign,
    impact: "15-40% tax reduction typical"
  },
  {
    benefit: "COMPLIANCE ASSURANCE",
    description: "Stay compliant while maximizing all legal tax benefits",
    icon: Shield,
    impact: "100% compliant strategies"
  },
  {
    benefit: "WEALTH BUILDING ACCELERATION", 
    description: "Keep more money working for you instead of paying taxes",
    icon: TrendingUp,
    impact: "Compound wealth growth"
  },
  {
    benefit: "PEACE OF MIND",
    description: "Professional guidance for complex tax decisions",
    icon: CheckCircle2,
    impact: "Confident tax strategies"
  },
  {
    benefit: "PROACTIVE APPROACH",
    description: "Plan ahead instead of reacting to tax problems",
    icon: Lightbulb,
    impact: "Strategic advantage"
  },
  {
    benefit: "ONGOING OPTIMIZATION",
    description: "Continuous monitoring and adjustment of tax strategies",
    icon: Target,
    impact: "Maximum long-term savings"
  }
];

export default function TaxPlanningPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Alert Banner */}
        <div className="bg-primary text-primary-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>STRATEGIC TAX PLANNING - Minimize Taxes, Maximize Wealth</span>
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
                <Target className="mr-1 h-3 w-3" />
                Strategic Tax Optimization
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Tax Planning
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Stop Overpaying Taxes - Start Strategic Planning
              </p>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Why pay more in taxes than legally required? Professional tax planning 
                can save you thousands annually while building long-term wealth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Tax Strategy Consultation
                </Button>
              </div>
              
              {/* Planning Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$50M+</div>
                  <div className="text-sm opacity-90">Tax Savings Generated</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">25%</div>
                  <div className="text-sm opacity-90">Average Tax Reduction</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Strategic Plans Created</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Services Grid */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Calculator className="h-8 w-8 text-primary" />
                COMPREHENSIVE TAX PLANNING SERVICES
              </h2>
              <p className="text-xl text-muted-foreground">Strategic planning for every aspect of your financial life</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {planningServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-lg">{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="bg-success/5 rounded-lg p-3">
                        <p className="font-semibold text-success text-sm">Potential Savings:</p>
                        <p className="text-sm text-muted-foreground mt-1">{service.savings}</p>
                      </div>
                      {service.urgent && (
                        <Badge variant="outline" className="border-primary text-primary">
                          <Clock className="mr-1 h-3 w-3" />
                          Time Sensitive
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Year-End Strategies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                YEAR-END TAX STRATEGIES
              </h2>
              <p className="text-xl text-muted-foreground">Last-minute moves to minimize your current year taxes</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {yearEndStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-primary">{strategy.strategy}</CardTitle>
                      <Badge variant="outline" className="border-destructive text-destructive">
                        {strategy.deadline}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {strategy.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-success/5 rounded-lg p-3">
                      <p className="font-bold text-success">Potential Savings: {strategy.savings}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Types */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              SPECIALIZED PLANNING FOR YOUR SITUATION
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {clientTypes.map((client, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary text-center">{client.type}</CardTitle>
                    <p className="text-center text-muted-foreground text-sm">{client.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Common Challenges:</h4>
                      <ul className="space-y-1">
                        {client.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start gap-2 text-xs">
                            <AlertCircle className="h-3 w-3 text-destructive mt-0.5 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Our Solutions:</h4>
                      <ul className="space-y-1">
                        {client.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Planning Strategies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              PROVEN TAX PLANNING STRATEGIES
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {planningStrategies.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary text-center">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.strategies.map((strategy, strategyIndex) => (
                        <div key={strategyIndex} className="border-l-2 border-primary/20 pl-4">
                          <h4 className="font-semibold text-sm">{strategy.name}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{strategy.description}</p>
                          <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                            {strategy.potential}
                          </Badge>
                        </div>
                      ))}
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
                  Manhattan Executive Saves $47,000 Annually Through Strategic Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  "As a high-earning executive in Manhattan, I was paying over $85,000 in annual taxes. These tax planning experts restructured my compensation, implemented retirement strategies, and optimized my investment approach. Now I save $47,000 every year while building more wealth for my family's future."
                </blockquote>
                <p className="text-right font-semibold">- Robert C., Manhattan Executive</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $47,000 annual tax savings + accelerated wealth building</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Planning Process */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              OUR COMPREHENSIVE PLANNING PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {planningProcess.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
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

        {/* Planning Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              BENEFITS OF PROFESSIONAL TAX PLANNING
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {planningBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
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

        {/* Tax Planning FAQ */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              TAX PLANNING FAQ
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {planningFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
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
            <Target className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              STOP OVERPAYING TAXES - START PLANNING TODAY
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Every year without strategic planning is money left on the table.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 TODAY</p>
              <p className="text-xl">Strategic Tax Planning Consultation</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Strategy Session • NYC, NJ, CT • Year-Round Planning</p>
              <p className="text-sm mt-2 opacity-90">Start building wealth through strategic tax planning</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Planning Team
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10 border-2 border-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Strategic Planning
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
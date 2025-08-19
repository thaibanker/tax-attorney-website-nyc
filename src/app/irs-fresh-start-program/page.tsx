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
  Lightbulb,
  Calculator,
  FileText,
  TrendingUp,
  Target,
  Award,
  Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "IRS Fresh Start Program - Tax Debt Forgiveness & Relief Options NYC NJ",
  description: "Qualify for IRS Fresh Start Program tax debt relief. Reduce tax liability, stop collection actions, get payment plans. NYC, NJ, CT tax attorneys. Call +1 929 416 3020",
  keywords: "IRS Fresh Start program, tax debt forgiveness, Fresh Start Initiative, IRS payment plans, tax relief program, Offer in Compromise, tax debt reduction NYC NJ CT",
};

const freshStartPrograms = [
  {
    title: "OFFER IN COMPROMISE (OIC)",
    description: "Settle tax debt for less than the full amount owed",
    icon: DollarSign,
    savings: "Pay 10-30% of original debt",
    eligibility: "Financial hardship or doubt as to collectibility",
    timeframe: "6-12 months processing"
  },
  {
    title: "STREAMLINED INSTALLMENT AGREEMENTS",
    description: "Simplified payment plans for qualifying taxpayers",
    icon: Calculator,
    savings: "Reduced penalties and interest",
    eligibility: "Owe $50,000 or less in combined tax, penalties, and interest",
    timeframe: "30-60 days approval"
  },
  {
    title: "CURRENTLY NOT COLLECTIBLE (CNC)",
    description: "Temporary suspension of collection activities",
    icon: Shield,
    savings: "Stop all collection actions",
    eligibility: "Financial hardship prevents payment",
    timeframe: "Immediate protection once approved"
  },
  {
    title: "PENALTY RELIEF & ABATEMENT",
    description: "Remove or reduce costly penalties and interest",
    icon: Target,
    savings: "Eliminate 50-100% of penalties",
    eligibility: "First-time penalty abatement or reasonable cause",
    timeframe: "30-90 days processing"
  },
  {
    title: "LIEN WITHDRAWAL",
    description: "Remove federal tax liens from credit reports",
    icon: Award,
    savings: "Improve credit score immediately",
    eligibility: "Payment plan in place or debt satisfied",
    timeframe: "30-45 days after qualification"
  },
  {
    title: "LEVY RELEASE",
    description: "Stop wage garnishments and bank levies",
    icon: Star,
    savings: "Immediate income protection",
    eligibility: "Financial hardship or payment agreement",
    timeframe: "24-72 hours emergency relief"
  }
];

const eligibilityFactors = [
  {
    category: "FINANCIAL HARDSHIP",
    criteria: [
      "Unable to pay basic living expenses",
      "Loss of income or employment",
      "Medical expenses or disability",
      "Supporting dependents on limited income"
    ],
    icon: Users
  },
  {
    category: "DOUBT AS TO COLLECTIBILITY",
    criteria: [
      "Assets and income less than tax debt",
      "Unlikely to pay full amount before statute expires",
      "Economic circumstances prevent full payment",
      "Collection would create undue hardship"
    ],
    icon: Calculator
  },
  {
    category: "EFFECTIVE TAX ADMINISTRATION",
    criteria: [
      "Exceptional circumstances exist",
      "Collection would be unfair or inequitable",
      "Taxpayer compliance with tax laws going forward",
      "Public policy favors compromise"
    ],
    icon: Shield
  }
];

const freshStartBenefits = [
  {
    benefit: "STOP COLLECTION ACTIONS",
    description: "Immediate halt to wage garnishments, bank levies, and asset seizures",
    icon: Shield
  },
  {
    benefit: "REDUCED TAX LIABILITY",
    description: "Settle for significantly less than the full amount owed",
    icon: DollarSign
  },
  {
    benefit: "AFFORDABLE PAYMENT PLANS",
    description: "Extended payment terms based on your ability to pay",
    icon: Calculator
  },
  {
    benefit: "PENALTY ELIMINATION",
    description: "Remove or substantially reduce penalties and interest charges",
    icon: Target
  },
  {
    benefit: "CREDIT IMPROVEMENT",
    description: "Remove tax liens and improve your credit score",
    icon: TrendingUp
  },
  {
    benefit: "FRESH START",
    description: "Clean slate to rebuild your financial future",
    icon: Lightbulb
  }
];

const applicationProcess = [
  {
    step: "1",
    title: "QUALIFICATION ASSESSMENT",
    time: "1-2 Days",
    actions: [
      "Complete financial analysis and asset evaluation",
      "Determine best Fresh Start program for your situation", 
      "Calculate reasonable collection potential (RCP)",
      "Review all available relief options and strategies"
    ]
  },
  {
    step: "2",
    title: "DOCUMENTATION & APPLICATION",
    time: "1-2 Weeks",
    actions: [
      "Gather required financial documentation and tax records",
      "Prepare professional application packages for IRS submission",
      "Complete Forms 656, 433-A/B, and supporting schedules",
      "Submit comprehensive application with strategic positioning"
    ]
  },
  {
    step: "3",
    title: "IRS NEGOTIATION & APPROVAL",
    time: "6-12 Months",
    actions: [
      "Respond to IRS requests for additional information",
      "Negotiate terms and address any IRS objections or concerns",
      "Appeal unfavorable decisions through administrative process",
      "Secure final approval and establish compliance requirements"
    ]
  }
];

const successStories = [
  {
    situation: "Small Business Owner - $180,000 Tax Debt",
    result: "Settled for $15,000 through Offer in Compromise",
    savings: "$165,000 saved (92% reduction)",
    timeframe: "8 months"
  },
  {
    situation: "Divorced Mother - $75,000 Tax Debt",
    result: "Currently Not Collectible status approved",
    savings: "Collection stopped indefinitely",
    timeframe: "45 days"
  },
  {
    situation: "Retired Couple - $95,000 Tax Debt",
    result: "$500/month payment plan with penalty abatement",
    savings: "$35,000 in penalties eliminated",
    timeframe: "60 days"
  }
];

const freshStartFAQs = [
  {
    question: "What is the IRS Fresh Start Program and how does it work?",
    answer: "The Fresh Start Program is a collection of IRS initiatives designed to help taxpayers resolve tax debts more easily. It includes expanded Offer in Compromise eligibility, streamlined payment plans, easier lien withdrawals, and increased Currently Not Collectible thresholds."
  },
  {
    question: "Do I qualify for the Fresh Start Program?",
    answer: "Qualification depends on your financial situation, tax debt amount, and ability to pay. Generally, if you owe $50,000 or less, have experienced financial hardship, or cannot pay the full amount, you may qualify for various Fresh Start options."
  },
  {
    question: "How much can I save through the Fresh Start Program?",
    answer: "Savings vary by program. Offer in Compromise can reduce debt by 70-90%, penalty abatement can eliminate 50-100% of penalties, and payment plans can reduce monthly payments by 60-80% compared to IRS demands."
  },
  {
    question: "How long does the Fresh Start application process take?",
    answer: "Timeline varies by program: Currently Not Collectible (30-60 days), Installment Agreements (30-60 days), Offer in Compromise (6-12 months), Penalty Abatement (30-90 days)."
  },
  {
    question: "Can the Fresh Start Program stop IRS collection actions?",
    answer: "Yes! Filing certain Fresh Start applications creates an automatic stay of collection activities. Wage garnishments, bank levies, and asset seizures must stop while your application is being processed."
  }
];

export default function IRSFreshStartProgramPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Alert Banner */}
        <div className="bg-success text-success-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Star className="h-4 w-4" />
              <span>IRS Fresh Start Program - Reduce Your Tax Debt by 70-90%</span>
              <Phone className="h-4 w-4" />
              <span className="font-bold">+1 929 416 3020</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-success via-success/95 to-success/90 text-success-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                <Lightbulb className="mr-1 h-3 w-3" />
                IRS Fresh Start Initiative
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                IRS Fresh Start Program
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Reduce Your Tax Debt by 70-90% - Get a Fresh Financial Start
              </p>
              <p className="text-xl mb-8 text-success-foreground/90">
                The IRS Fresh Start Program offers multiple ways to resolve tax debt for less money 
                and more time. Stop collection actions and get the relief you deserve.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-success hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-success-foreground hover:bg-white/10 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Fresh Start Consultation
                </Button>
              </div>
              
              {/* Fresh Start Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">90%</div>
                  <div className="text-sm opacity-90">Maximum Debt Reduction</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$25M+</div>
                  <div className="text-sm opacity-90">Tax Debt Eliminated</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">1,000+</div>
                  <div className="text-sm opacity-90">Fresh Start Cases</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Client Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fresh Start Programs */}
        <section className="py-16 bg-success/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Star className="h-8 w-8 text-success" />
                FRESH START PROGRAM OPTIONS
              </h2>
              <p className="text-xl text-muted-foreground">Multiple paths to tax debt relief and financial freedom</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {freshStartPrograms.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card key={index} className="border-success/20 hover:border-success/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-success/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-success" />
                        </div>
                        <span className="text-lg">{program.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">{program.description}</p>
                      <div className="space-y-2">
                        <div className="bg-success/5 rounded-lg p-3">
                          <p className="text-sm font-medium text-success">Potential Savings:</p>
                          <p className="text-sm text-muted-foreground">{program.savings}</p>
                        </div>
                        <div className="bg-primary/5 rounded-lg p-3">
                          <p className="text-sm font-medium text-primary">Eligibility:</p>
                          <p className="text-sm text-muted-foreground">{program.eligibility}</p>
                        </div>
                        <div className="bg-warning/5 rounded-lg p-3">
                          <p className="text-sm font-medium text-warning">Timeline:</p>
                          <p className="text-sm text-muted-foreground">{program.timeframe}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Eligibility Factors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              FRESH START ELIGIBILITY CRITERIA
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {eligibilityFactors.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-center text-primary flex items-center gap-2 justify-center">
                        <IconComponent className="h-5 w-5" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.criteria.map((criterion, criterionIndex) => (
                          <li key={criterionIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
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

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-r from-success/5 to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              FRESH START PROGRAM BENEFITS
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {freshStartBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="border-success/20 hover:border-success/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-success/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-success" />
                        </div>
                        <span className="text-sm font-bold">{benefit.benefit}</span>
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

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              FRESH START SUCCESS STORIES
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {successStories.map((story, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge variant="secondary" className="mx-auto mb-4">SUCCESS STORY</Badge>
                    <CardTitle className="text-lg text-center text-primary">
                      {story.situation}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-center">
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="font-semibold text-success">{story.result}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-primary">{story.savings}</p>
                      <p className="text-sm text-muted-foreground">Timeline: {story.timeframe}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-success/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              FRESH START APPLICATION PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {applicationProcess.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-success to-primary"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-lg px-3 py-1 border-success text-success">
                        STEP {step.step}
                      </Badge>
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        {step.time}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
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

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              FRESH START PROGRAM FAQ
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {freshStartFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Star className="h-5 w-5 text-success mt-0.5" />
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
        <section className="py-20 bg-gradient-to-br from-success via-success/95 to-success/90 text-success-foreground">
          <div className="container mx-auto px-4 text-center">
            <Star className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              GET YOUR FRESH START TODAY
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Don't let tax debt control your life. The Fresh Start Program can give you the relief you need.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 NOW</p>
              <p className="text-xl">Fresh Start Program Specialists</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Consultation • 90% Debt Reduction Possible • NYC, NJ, CT</p>
              <p className="text-sm mt-2 opacity-90">Start your path to financial freedom today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-success hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Fresh Start Team
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-success-foreground hover:bg-white/10 border-2 border-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Application Process
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
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
  Heart,
  Scale,
  FileText,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Users,
  Home,
  Baby,
  DollarSign,
  Gavel,
  UserCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Innocent Spouse Relief - Protect Yourself from Your Spouse's Tax Debt",
  description: "Facing tax debt from your spouse's actions? Get innocent spouse relief protection. We help spouses avoid liability for partner's tax mistakes. Free consultation. Call +1 929 416 3020",
  keywords: "innocent spouse relief, spouse tax debt protection, IRS form 8857, separate liability election, equitable relief, injured spouse, tax debt divorce, spousal tax protection NYC NJ",
};

const reliefTypes = [
  {
    title: "INNOCENT SPOUSE RELIEF",
    description: "Complete protection from spouse's tax debt and penalties",
    icon: Shield,
    criteria: "Understatement of tax due to spouse's erroneous items",
    urgent: true
  },
  {
    title: "SEPARATION OF LIABILITY",
    description: "Allocate tax debt based on individual responsibility",
    icon: Scale,
    criteria: "Divorced, separated, or living apart for 12+ months",
    urgent: true
  },
  {
    title: "EQUITABLE RELIEF",
    description: "Relief when other options don't apply but fairness demands it",
    icon: Heart,
    criteria: "Unfair to hold you liable under the circumstances",
    urgent: true
  }
];

const qualificationFactors = [
  {
    category: "RELATIONSHIP STATUS",
    factors: [
      "Currently married and filing jointly",
      "Divorced from spouse who caused tax debt",
      "Legally separated from responsible spouse",
      "Widowed with surviving tax liability"
    ],
    icon: Users
  },
  {
    category: "KNOWLEDGE & PARTICIPATION", 
    factors: [
      "Had no knowledge of spouse's tax errors",
      "Did not significantly benefit from understatement",
      "Not involved in business causing tax debt",
      "Spouse controlled finances and tax preparation"
    ],
    icon: UserCheck
  },
  {
    category: "HARDSHIP FACTORS",
    factors: [
      "Economic hardship if held liable",
      "Domestic violence or abuse situation",
      "Spouse misappropriated funds or hid income",
      "Unable to obtain financial information from spouse"
    ],
    icon: Home
  }
];

const reliefProcess = [
  {
    step: "1",
    title: "ELIGIBILITY ASSESSMENT",
    time: "Same Day",
    actions: [
      "Complete review of your tax situation and marriage history",
      "Analysis of spouse's actions that created tax liability", 
      "Determination of strongest relief option available",
      "Review of IRS deadlines and time-sensitive issues"
    ]
  },
  {
    step: "2",
    title: "FORM 8857 PREPARATION",
    time: "Within 3 Days",
    actions: [
      "Professional preparation of Form 8857 request",
      "Gathering and organization of supporting documentation",
      "Detailed statement of facts and legal arguments",
      "Strategic positioning for maximum chance of approval"
    ]
  },
  {
    step: "3",
    title: "IRS REPRESENTATION & APPEALS",
    time: "Throughout Process",
    actions: [
      "Full representation in IRS communications",
      "Response to IRS requests for additional information",
      "Appeals representation if initially denied",
      "Tax Court petition if necessary"
    ]
  }
];

const commonScenarios = [
  {
    scenario: "Business Owner Spouse",
    description: "Spouse operated business and failed to report income or pay taxes",
    reliefOptions: ["Innocent Spouse Relief", "Separation of Liability"],
    urgency: "High - Business tax debt can be substantial"
  },
  {
    scenario: "Hidden Income Spouse", 
    description: "Spouse had unreported income (gambling, side business, investments)",
    reliefOptions: ["Innocent Spouse Relief", "Equitable Relief"],
    urgency: "High - Criminal exposure possible"
  },
  {
    scenario: "Divorced with Tax Debt",
    description: "Discovered tax debt after divorce from years spouse controlled taxes",
    reliefOptions: ["Separation of Liability", "Equitable Relief"], 
    urgency: "Critical - Time limits may apply"
  },
  {
    scenario: "Abusive Spouse Situation",
    description: "Domestic violence prevented involvement in tax matters",
    reliefOptions: ["Innocent Spouse Relief", "Equitable Relief"],
    urgency: "Critical - Special protections available"
  }
];

const innocentSpouseFAQs = [
  {
    question: "Can I get innocent spouse relief if I signed the tax return?",
    answer: "YES. Signing a joint return doesn't disqualify you from innocent spouse relief. The key is whether you knew about the errors and whether it would be unfair to hold you liable."
  },
  {
    question: "How long do I have to file for innocent spouse relief?",
    answer: "Generally 2 years from when the IRS first tries to collect from you, but there are exceptions. Some relief options have longer time limits. Don't wait - call immediately."
  },
  {
    question: "Will innocent spouse relief stop IRS collection actions against me?",
    answer: "Yes, filing Form 8857 typically stops collection actions while the IRS considers your request. We can also request immediate suspension of collection."
  },
  {
    question: "Can I get innocent spouse relief if I'm still married?",
    answer: "Absolutely. You don't have to be divorced to qualify. Many married couples successfully obtain innocent spouse relief when one spouse created tax debt without the other's knowledge."
  },
  {
    question: "What if the IRS denies my innocent spouse relief request?",
    answer: "You have appeal rights and can petition Tax Court. We have extensive experience winning denied cases through appeals and court challenges."
  }
];

const protectionBenefits = [
  {
    benefit: "COMPLETE TAX DEBT ELIMINATION",
    description: "Remove 100% of spouse's tax debt from your liability",
    icon: DollarSign
  },
  {
    benefit: "PENALTY & INTEREST REMOVAL", 
    description: "Eliminate penalties and interest related to spouse's errors",
    icon: CheckCircle2
  },
  {
    benefit: "ASSET PROTECTION",
    description: "Prevent IRS seizure of your separate assets and income",
    icon: Home
  },
  {
    benefit: "CREDIT PROTECTION",
    description: "Prevent tax liens from damaging your individual credit",
    icon: Shield
  },
  {
    benefit: "REFUND RECOVERY",
    description: "Recover refunds applied to spouse's tax debt",
    icon: FileText
  },
  {
    benefit: "FUTURE PROTECTION",
    description: "Prevent future collection actions on resolved years",
    icon: Baby
  }
];

export default function InnocentSpouseReliefPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Alert Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>Innocent Spouse? Protect Yourself from Partner's Tax Debt</span>
              <Phone className="h-4 w-4" />
              <span className="font-bold">+1 929 416 3020</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-accent-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                <Heart className="mr-1 h-3 w-3" />
                Spousal Tax Protection
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Innocent Spouse Relief
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Don't Pay for Your Spouse's Tax Mistakes
              </p>
              <p className="text-xl mb-8 text-accent-foreground/90">
                You shouldn't be held responsible for tax debt created by your spouse's actions. 
                Innocent spouse relief can completely eliminate your liability and protect your assets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-accent-foreground hover:bg-white/10 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Protection Consultation
                </Button>
              </div>
              
              {/* Protection Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm opacity-90">Relief Cases Won</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$5M+</div>
                  <div className="text-sm opacity-90">Tax Debt Eliminated</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">2 Years</div>
                  <div className="text-sm opacity-90">Time Limit to File</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Collection Stopped</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Relief */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                THREE TYPES OF INNOCENT SPOUSE RELIEF
              </h2>
              <p className="text-xl text-muted-foreground">We'll determine which option gives you the best protection</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {reliefTypes.map((relief, index) => {
                const IconComponent = relief.icon;
                return (
                  <Card key={index} className="border-accent/20 hover:border-accent/40 transition-colors h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                        <span className="text-lg">{relief.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">{relief.description}</p>
                      <div className="bg-accent/5 rounded-lg p-3">
                        <p className="text-sm font-medium text-accent">Key Criteria:</p>
                        <p className="text-sm text-muted-foreground mt-1">{relief.criteria}</p>
                      </div>
                      {relief.urgent && (
                        <Badge variant="outline" className="border-accent text-accent">
                          <Shield className="mr-1 h-3 w-3" />
                          Full Protection Available
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Qualification Factors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              DO YOU QUALIFY FOR INNOCENT SPOUSE RELIEF?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {qualificationFactors.map((category, index) => {
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
                        {category.factors.map((factor, factorIndex) => (
                          <li key={factorIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{factor}</span>
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

        {/* Common Scenarios */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              COMMON INNOCENT SPOUSE SITUATIONS
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {commonScenarios.map((scenario, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{scenario.scenario}</CardTitle>
                    <p className="text-muted-foreground">{scenario.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-2">Available Relief Options:</p>
                      <div className="flex flex-wrap gap-2">
                        {scenario.reliefOptions.map((option, optionIndex) => (
                          <Badge key={optionIndex} variant="secondary" className="text-xs">
                            {option}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-destructive/5 rounded-lg p-3">
                      <p className="text-sm font-medium text-destructive">Urgency Level:</p>
                      <p className="text-sm text-muted-foreground mt-1">{scenario.urgency}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Protection Benefits */}
        <section className="py-16 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              BENEFITS OF INNOCENT SPOUSE RELIEF
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {protectionBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-accent" />
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

        {/* Success Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-accent/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="mx-auto mb-4">SUCCESS STORY</Badge>
                <CardTitle className="text-2xl text-primary">
                  Queens Mother Eliminates $89,000 Tax Debt Through Innocent Spouse Relief
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  "My ex-husband ran a cash business and never told me he wasn't paying taxes. After our divorce, the IRS came after me for $89,000. These attorneys filed innocent spouse relief and proved I had no knowledge of his tax fraud. The entire debt was eliminated, and I got my seized refunds back."
                </blockquote>
                <p className="text-right font-semibold">- Maria S., Queens</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $89,000 tax debt ELIMINATED + $8,500 in refunds recovered</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Relief Process */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              OUR INNOCENT SPOUSE RELIEF PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {reliefProcess.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-lg px-3 py-1 border-accent text-accent">
                        STEP {step.step}
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {step.time}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
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

        {/* Innocent Spouse FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              INNOCENT SPOUSE RELIEF FAQ
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {innocentSpouseFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Heart className="h-5 w-5 text-accent mt-0.5" />
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

        {/* Time Sensitive Warning */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-destructive/20">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-2xl text-destructive">
                  TIME LIMITS APPLY - DON'T WAIT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-destructive mb-3">If You Wait Too Long:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
                        <span>You lose the right to innocent spouse relief forever</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
                        <span>IRS can seize your assets and garnish wages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
                        <span>Tax debt continues growing with interest and penalties</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-3">If You Act NOW:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span>Complete elimination of spouse's tax debt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span>Immediate stop to IRS collection actions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span>Protection of your assets and future earnings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              PROTECT YOURSELF - YOU'RE NOT RESPONSIBLE
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Don't suffer for your spouse's tax mistakes. Get the relief you deserve.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 NOW</p>
              <p className="text-xl">Innocent Spouse Relief Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Consultation • Time-Sensitive Relief • NYC, NJ, CT</p>
              <p className="text-sm mt-2 opacity-90">Don't let time limits destroy your chance for relief</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Protection Hotline
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-accent-foreground hover:bg-white/10 border-2 border-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Relief Process
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
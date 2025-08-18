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
  Scale,
  FileSearch,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Users,
  Gavel,
  Calculator,
  Building2,
  BookOpen,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "IRS Audit Defense - Comprehensive Protection & Aggressive Representation",
  description: "Facing IRS audit? Get aggressive professional defense. We challenge IRS findings, reduce assessments, and protect your rights. Expert audit defense attorneys. Call +1 929 416 3020",
  keywords: "IRS audit defense, audit attorney, tax audit lawyer, IRS audit representation, audit defense services, professional audit help, IRS challenge, audit appeal, tax defense NYC NJ",
};

const defenseServices = [
  {
    title: "AGGRESSIVE AUDIT DEFENSE",
    description: "Challenge every IRS finding and assessment",
    icon: Gavel,
    urgent: true
  },
  {
    title: "COMPREHENSIVE CASE REVIEW",
    description: "Full analysis of IRS audit procedures and findings",
    icon: FileSearch,
    urgent: true
  },
  {
    title: "PENALTY ABATEMENT",
    description: "Eliminate or reduce costly penalties and interest",
    icon: Calculator,
    urgent: true
  },
  {
    title: "DOCUMENTATION STRATEGY",
    description: "Professional organization of audit evidence",
    icon: BookOpen,
    urgent: true
  },
  {
    title: "APPEALS REPRESENTATION",
    description: "Challenge unfavorable audit results in appeals",
    icon: Scale,
    urgent: true
  },
  {
    title: "TAX COURT DEFENSE",
    description: "Litigation support if case goes to court",
    icon: Building2,
    urgent: true
  }
];

const defenseStrategies = [
  {
    strategy: "Procedural Defense",
    description: "Challenge IRS procedures and statute of limitations",
    tactics: [
      "Verify proper audit notification procedures",
      "Challenge statute of limitations issues",
      "Ensure IRS follows required protocols",
      "Contest improper record requests"
    ]
  },
  {
    strategy: "Substantive Defense", 
    description: "Challenge the merits of IRS audit findings",
    tactics: [
      "Dispute income reconstruction methods",
      "Challenge deduction disallowances",
      "Contest basis determinations",
      "Argue reasonable cause defenses"
    ]
  },
  {
    strategy: "Settlement Strategy",
    description: "Negotiate favorable audit resolutions",
    tactics: [
      "Partial agreement negotiations",
      "Offer in Compromise discussions",
      "Installment agreement planning",
      "Penalty abatement requests"
    ]
  }
];

const auditDefenseProcess = [
  {
    step: "1",
    title: "IMMEDIATE CASE ASSESSMENT",
    time: "Within 24 Hours",
    actions: [
      "Complete review of audit notice and IRS correspondence",
      "Analysis of requested documentation and issues",
      "Identification of defense strategies and opportunities",
      "Development of comprehensive response plan"
    ]
  },
  {
    step: "2", 
    title: "AGGRESSIVE DEFENSE PREPARATION",
    time: "Within 1 Week",
    actions: [
      "Professional organization of supporting documentation",
      "Preparation of legal and factual arguments",
      "Development of alternative position statements",
      "Strategic planning for audit meetings/conferences"
    ]
  },
  {
    step: "3",
    title: "AUDIT REPRESENTATION & APPEALS",
    time: "Throughout Process",
    actions: [
      "Full representation in all IRS communications",
      "Aggressive challenge of adverse findings",
      "Appeals process if necessary",
      "Tax Court petition if required"
    ]
  }
];

const commonAuditIssues = [
  {
    category: "BUSINESS AUDITS",
    items: [
      "Schedule C Business Income/Expenses",
      "Business Use of Home Deductions",
      "Vehicle Expense Allocations", 
      "Business Entertainment/Meals",
      "Independent Contractor Classifications"
    ]
  },
  {
    category: "INDIVIDUAL AUDITS",
    items: [
      "Unreported Income Issues",
      "Itemized Deduction Challenges",
      "Charitable Contribution Disputes",
      "Medical Expense Disallowances",
      "Dependency Exemption Contests"
    ]
  },
  {
    category: "INVESTMENT AUDITS",
    items: [
      "Capital Gains/Loss Reporting",
      "Cost Basis Determinations", 
      "Passive Activity Loss Rules",
      "Like-Kind Exchange Issues",
      "Cryptocurrency Transactions"
    ]
  }
];

const defenseFAQs = [
  {
    question: "How is audit defense different from regular audit representation?",
    answer: "Audit defense is aggressive and adversarial. While basic representation may accept IRS positions, we challenge everything, fight for every deduction, and use every legal strategy to minimize your tax liability."
  },
  {
    question: "Can you really challenge IRS audit findings successfully?",
    answer: "Absolutely. The IRS makes mistakes regularly. We've overturned audit findings in over 70% of our cases through aggressive defense, appeals, and court challenges when necessary."
  },
  {
    question: "What if the audit has already been completed with adverse results?",
    answer: "You still have rights! We can file appeals, request penalty abatements, and even petition Tax Court within the statute of limitations. Many cases can still be won."
  },
  {
    question: "How much can professional audit defense save me?",
    answer: "Our clients typically save 60-90% of the original IRS assessment through aggressive defense strategies. The cost of defense is usually a fraction of potential savings."
  },
  {
    question: "Do you handle audits that might become criminal investigations?",
    answer: "Yes. We have extensive experience with civil audits that may have criminal exposure. Early intervention with proper defense strategies is critical to avoid criminal referral."
  }
];

export default function IRSAuditDefensePage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Alert Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>IRS AUDIT? Fight Back with Professional Defense</span>
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
                <Shield className="mr-1 h-3 w-3" />
                Aggressive Defense Strategy
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                IRS Audit Defense
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Don't Accept IRS Findings - FIGHT BACK with Aggressive Defense
              </p>
              <p className="text-xl mb-8 text-primary-foreground/90">
                The IRS isn't always right. We challenge their findings, contest their methods, 
                and fight aggressively to minimize your tax liability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Aggressive Defense Consultation
                </Button>
              </div>
              
              {/* Defense Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">70%</div>
                  <div className="text-sm opacity-90">Audit Findings Overturned</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm opacity-90">Penalties Eliminated</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">$10M+</div>
                  <div className="text-sm opacity-90">Tax Liability Reduced</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years Defense Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Defense Services Grid */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Target className="h-8 w-8 text-primary" />
                COMPREHENSIVE AUDIT DEFENSE SERVICES
              </h2>
              <p className="text-xl text-muted-foreground">We don't just represent you - we fight for you</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {defenseServices.map((service, index) => {
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
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                      {service.urgent && (
                        <Badge variant="outline" className="mt-3 border-primary text-primary">
                          <Zap className="mr-1 h-3 w-3" />
                          Aggressive Strategy
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Defense Strategies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              OUR PROVEN AUDIT DEFENSE STRATEGIES
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {defenseStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary text-center">
                      {strategy.strategy}
                    </CardTitle>
                    <p className="text-center text-muted-foreground">{strategy.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.tactics.map((tactic, tacticIndex) => (
                        <li key={tacticIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Issues We Handle */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              COMMON AUDIT ISSUES WE DEFEND
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {commonAuditIssues.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
                          <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
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
                  Brooklyn Business Owner Saves $225,000 Through Aggressive Defense
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  "The IRS claimed I owed $275,000 after a brutal 18-month audit. These attorneys didn't just represent me - they fought like warriors. They challenged every finding, contested their methods, and took it all the way to appeals. Final result: $50,000 settlement with no penalties."
                </blockquote>
                <p className="text-right font-semibold">- James K., Brooklyn Construction Company</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $275,000 audit reduced to $50,000 through aggressive defense - $225,000 SAVED</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Defense Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              OUR AGGRESSIVE AUDIT DEFENSE PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {auditDefenseProcess.map((step, index) => (
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

        {/* Team Credentials */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">YOUR AUDIT DEFENSE TEAM</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Experienced Audit Defense Attorneys</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Former IRS agents and attorneys on staff
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        15+ years audit defense experience
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Tax Court litigation experience
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Appeals level representation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">DEFENSE SUCCESS RATE</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                        <div className="text-xl font-bold text-primary">70%</div>
                        <div className="text-xs text-muted-foreground">Findings Overturned</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                        <div className="text-xl font-bold text-primary">85%</div>
                        <div className="text-xs text-muted-foreground">Penalties Eliminated</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                        <div className="text-xl font-bold text-primary">92%</div>
                        <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                        <div className="text-xl font-bold text-primary">500+</div>
                        <div className="text-xs text-muted-foreground">Audits Defended</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Defense FAQ */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              AUDIT DEFENSE FAQ - Your Questions Answered
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {defenseFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Gavel className="h-5 w-5 text-primary mt-0.5" />
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
            <Gavel className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              DON'T ACCEPT IRS FINDINGS - FIGHT BACK
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              The IRS expects you to give up. We expect to WIN.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 TODAY</p>
              <p className="text-xl">Aggressive Audit Defense Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Defense Strategy Consultation • NYC, NJ, CT • Immediate Response</p>
              <p className="text-sm mt-2 opacity-90">We fight the IRS so you don't have to surrender</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Defense Team
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10 border-2 border-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Defense Strategy
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
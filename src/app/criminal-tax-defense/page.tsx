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
  Gavel,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Users,
  FileText,
  Scale,
  Eye,
  Ban,
  Lock,
  UserX,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Criminal Tax Defense Attorney - Tax Evasion & Criminal Investigation NYC NJ",
  description: "Criminal tax defense attorney for IRS criminal investigations, tax evasion charges, and federal tax crimes. Expert criminal tax lawyers serving NYC, NJ, CT. Call +1 929 416 3020",
  keywords: "criminal tax defense, tax evasion attorney, criminal tax investigation, tax crime lawyer, federal tax defense, IRS criminal investigation NYC NJ CT",
};

const criminalTaxCrimes = [
  {
    title: "TAX EVASION (26 USC § 7201)",
    description: "Willfully attempting to evade or defeat any tax or payment thereof",
    penalty: "Up to 5 years prison + $250,000 fine",
    severity: "Felony",
    icon: Ban,
    examples: ["Underreporting income", "False deductions", "Hiding assets", "Offshore accounts"]
  },
  {
    title: "FAILURE TO FILE (26 USC § 7203)",
    description: "Willful failure to file tax returns, supply information, or pay tax",
    penalty: "Up to 1 year prison + $25,000 fine",
    severity: "Misdemeanor",
    icon: FileText,
    examples: ["Not filing returns", "Missing deadlines", "Incomplete information", "False statements"]
  },
  {
    title: "FALSE STATEMENTS (26 USC § 7206)",
    description: "Making false statements under penalties of perjury",
    penalty: "Up to 3 years prison + $250,000 fine",
    severity: "Felony",
    icon: UserX,
    examples: ["False income reporting", "Fraudulent deductions", "Perjury", "Document fraud"]
  },
  {
    title: "CONSPIRACY (18 USC § 371)",
    description: "Conspiracy to commit tax crimes or defraud the United States",
    penalty: "Up to 5 years prison + $250,000 fine",
    severity: "Felony",
    icon: Users,
    examples: ["Multiple parties involved", "Planning tax crimes", "Covering up violations", "Coordinated fraud"]
  },
  {
    title: "MONEY LAUNDERING (18 USC § 1956)",
    description: "Concealing the source of illegally obtained money through tax schemes",
    penalty: "Up to 20 years prison + $500,000 fine",
    severity: "Felony",
    icon: Lock,
    examples: ["Structuring transactions", "Shell companies", "Cash businesses", "Offshore laundering"]
  },
  {
    title: "STRUCTURING (31 USC § 5324)",
    description: "Breaking up transactions to avoid reporting requirements",
    penalty: "Up to 5 years prison + fine",
    severity: "Felony",
    icon: Eye,
    examples: ["Bank deposit structuring", "Cash transaction splitting", "Currency reporting avoidance"]
  }
];

const investigationStages = [
  {
    stage: "ADMINISTRATIVE INVESTIGATION",
    description: "IRS civil examination that may reveal criminal indicators",
    duration: "6-18 months",
    actions: [
      "Civil audit discovers potential fraud indicators",
      "Revenue Agent identifies badges of fraud",
      "Suspicious Activity Reports (SARs) filed",
      "Internal referral to IRS Criminal Investigation"
    ],
    riskLevel: "Moderate",
    defense: "Monitor civil audit closely, control information flow, assess criminal exposure"
  },
  {
    stage: "CRIMINAL INVESTIGATION (CI)",
    description: "IRS Criminal Investigation special agents conduct criminal inquiry",
    duration: "12-36 months",
    actions: [
      "Criminal Investigation Division (CID) special agents assigned",
      "Financial records analyzed for criminal violations",
      "Interviews conducted with taxpayer and third parties",
      "Search warrants and subpoenas executed if necessary"
    ],
    riskLevel: "High",
    defense: "Immediately retain criminal tax counsel, exercise Fifth Amendment rights"
  },
  {
    stage: "PROSECUTION DECISION",
    description: "Department of Justice decides whether to file criminal charges",
    duration: "3-12 months",
    actions: [
      "IRS CI submits case to DOJ Tax Division",
      "Federal prosecutors review evidence and legal sufficiency",
      "Grand jury investigation may be initiated",
      "Indictment decision made by prosecution team"
    ],
    riskLevel: "Critical",
    defense: "Proactive cooperation, voluntary disclosure, plea negotiations if appropriate"
  }
];

const defenseStrategies = [
  {
    strategy: "LACK OF WILLFULNESS",
    description: "Prove absence of intent to violate tax laws",
    elements: [
      "Good faith reliance on professional advice",
      "Reasonable interpretation of complex tax law",
      "Mistake of fact or law",
      "Mental health or capacity issues"
    ],
    successRate: "High with proper evidence"
  },
  {
    strategy: "INSUFFICIENT EVIDENCE",
    description: "Challenge government's evidence and proof requirements",
    elements: [
      "Lack of intent to evade taxes",
      "Insufficient evidence of tax deficiency",
      "Procedural violations by government",
      "Constitutional violations (4th, 5th, 6th Amendment)"
    ],
    successRate: "Variable based on evidence"
  },
  {
    strategy: "ADVICE OF COUNSEL",
    description: "Defense based on reasonable reliance on attorney advice",
    elements: [
      "Full disclosure to competent tax attorney",
      "Reasonable reliance on professional advice",
      "Good faith follow advice received",
      "Waiver of attorney-client privilege required"
    ],
    successRate: "High if properly documented"
  },
  {
    strategy: "VOLUNTARY DISCLOSURE",
    description: "Proactive cooperation before formal investigation",
    elements: [
      "Disclosure before investigation begins",
      "Full cooperation with authorities",
      "Payment of taxes, penalties, and interest",
      "Demonstration of good faith compliance going forward"
    ],
    successRate: "Excellent if done properly and timely"
  }
];

const criminalVsCivil = [
  {
    aspect: "BURDEN OF PROOF",
    civil: "Preponderance of evidence (more likely than not)",
    criminal: "Beyond a reasonable doubt (extremely high standard)",
    advantage: "Criminal defense has much higher burden for prosecution"
  },
  {
    aspect: "CONSTITUTIONAL RIGHTS",
    civil: "Limited constitutional protections",
    criminal: "Full constitutional rights (4th, 5th, 6th Amendment)",
    advantage: "Criminal defendants have extensive constitutional protections"
  },
  {
    aspect: "DISCOVERY RIGHTS",
    civil: "Limited discovery from IRS",
    criminal: "Extensive discovery and Brady material",
    advantage: "Criminal defendants get more evidence from government"
  },
  {
    aspect: "PENALTIES",
    civil: "Monetary penalties and interest only",
    criminal: "Prison time plus fines and civil penalties",
    advantage: "Civil cases cannot result in imprisonment"
  },
  {
    aspect: "STATUTE OF LIMITATIONS",
    civil: "Generally 3 years (6 years for substantial omissions)",
    criminal: "6 years for most tax crimes",
    advantage: "Civil statute may expire before criminal"
  }
];

const cooperationOptions = [
  {
    option: "VOLUNTARY DISCLOSURE PROGRAM",
    description: "Proactive disclosure before investigation begins",
    requirements: [
      "Disclosure made before IRS investigation starts",
      "Taxpayer cooperates fully with IRS",
      "Payment of all taxes, penalties, and interest",
      "Truthful and complete disclosure of violations"
    ],
    benefits: "Generally avoids criminal prosecution",
    timeline: "Must be done before investigation"
  },
  {
    option: "COOPERATION AGREEMENT",
    description: "Agreement to cooperate in exchange for reduced charges",
    requirements: [
      "Full cooperation with government investigation",
      "Truthful testimony against co-conspirators",
      "Assistance in prosecution of others",
      "Continued cooperation throughout proceedings"
    ],
    benefits: "Reduced charges and sentencing considerations",
    timeline: "After charges filed but before trial"
  },
  {
    option: "PLEA AGREEMENT",
    description: "Guilty plea in exchange for sentencing concessions",
    requirements: [
      "Admission of guilt to specific charges",
      "Cooperation with ongoing investigations",
      "Payment of restitution and fines",
      "Agreement to sentencing guidelines"
    ],
    benefits: "Reduced charges and predictable sentencing",
    timeline: "After indictment but before trial"
  }
];

const criminalFAQs = [
  {
    question: "What is the difference between tax evasion and tax avoidance?",
    answer: "Tax avoidance is legal - using legitimate methods to minimize taxes. Tax evasion is criminal - willfully attempting to evade taxes through illegal means like hiding income, false deductions, or not filing returns."
  },
  {
    question: "When does a civil tax matter become a criminal investigation?",
    answer: "Criminal investigations typically begin when IRS discovers 'badges of fraud' during civil audits, such as substantial underreporting of income, false documents, or patterns suggesting intentional evasion."
  },
  {
    question: "Can I be prosecuted criminally if I've already paid the taxes owed?",
    answer: "Yes. Payment of taxes doesn't eliminate criminal liability for past willful violations. However, voluntary payment before investigation can be a factor in prosecution decisions and sentencing."
  },
  {
    question: "Should I cooperate with IRS Criminal Investigation agents?",
    answer: "Never speak to CI agents without criminal tax counsel present. You have the right to remain silent and anything you say can be used against you in criminal proceedings. Exercise your Fifth Amendment rights."
  },
  {
    question: "What is voluntary disclosure and can it prevent criminal prosecution?",
    answer: "Voluntary disclosure is proactively reporting tax violations before investigation begins. While not a guarantee, it generally results in civil treatment rather than criminal prosecution if done properly and timely."
  },
  {
    question: "Can my accountant or tax preparer's mistakes lead to criminal charges against me?",
    answer: "Generally no, unless you willfully participated in the fraud or knew the preparer was filing false returns. However, you remain responsible for the accuracy of your tax returns regardless of who prepared them."
  }
];

export default function CriminalTaxDefensePage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Alert Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>Criminal Tax Investigation? Exercise Your Rights - Call Immediately</span>
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
                <Scale className="mr-1 h-3 w-3" />
                Criminal Tax Defense
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Criminal Tax Defense
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Protect Your Freedom - Expert Defense Against Tax Crime Charges
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                Facing criminal tax charges or IRS Criminal Investigation? Your freedom is at stake. 
                Aggressive criminal tax defense to protect your rights and liberty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-destructive-foreground hover:bg-white/10 border-2 border-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Emergency Criminal Defense
                </Button>
              </div>
              
              {/* Criminal Defense Stats */}
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">CRIMINAL TAX DEFENSE CRISIS LEVEL 10/10:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">Prison</div>
                    <div className="text-sm opacity-90">Up to 5+ Years</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">$250K+</div>
                    <div className="text-sm opacity-90">Criminal Fines</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">Felony</div>
                    <div className="text-sm opacity-90">Criminal Record</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">5th Amendment</div>
                    <div className="text-sm opacity-90">Exercise Rights Now</div>
                  </div>
                </div>
                <p className="text-lg font-bold mt-4">NEVER SPEAK TO IRS CI WITHOUT COUNSEL</p>
              </div>
            </div>
          </div>
        </section>

        {/* Criminal Tax Crimes */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Gavel className="h-8 w-8 text-destructive" />
                FEDERAL TAX CRIMES & PENALTIES
              </h2>
              <p className="text-xl text-muted-foreground">Understanding criminal tax charges and their severe consequences</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {criminalTaxCrimes.map((crime, index) => {
                const IconComponent = crime.icon;
                return (
                  <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                          <div className="text-lg">{crime.title}</div>
                          <Badge variant="destructive" className="text-xs">
                            {crime.severity}
                          </Badge>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground text-sm">{crime.description}</p>
                      <div className="bg-destructive/5 rounded-lg p-3">
                        <p className="text-sm font-medium text-destructive">Maximum Penalty:</p>
                        <p className="text-sm text-muted-foreground">{crime.penalty}</p>
                      </div>
                      <div className="bg-warning/5 rounded-lg p-3">
                        <p className="text-sm font-medium text-warning">Common Examples:</p>
                        <ul className="text-xs text-muted-foreground mt-1">
                          {crime.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Investigation Stages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              CRIMINAL TAX INVESTIGATION STAGES
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {investigationStages.map((stage, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-primary"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-sm px-3 py-1 border-destructive text-destructive">
                        STAGE {index + 1}
                      </Badge>
                      <Badge variant={stage.riskLevel === "Critical" ? "destructive" : 
                                   stage.riskLevel === "High" ? "outline" : "secondary"}>
                        {stage.riskLevel} Risk
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{stage.stage}</CardTitle>
                    <p className="text-muted-foreground text-sm">{stage.description}</p>
                    <Badge variant="secondary" className="bg-warning/10 text-warning w-fit">
                      Duration: {stage.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Investigation Actions:</h4>
                      <ul className="space-y-1">
                        {stage.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2 text-xs">
                            <AlertCircle className="h-3 w-3 text-destructive mt-0.5 flex-shrink-0" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-xs font-medium text-primary">Defense Strategy:</p>
                      <p className="text-xs text-muted-foreground mt-1">{stage.defense}</p>
                    </div>
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
              CRIMINAL TAX DEFENSE STRATEGIES
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
                      <h4 className="font-semibold text-sm mb-2">Key Elements:</h4>
                      <ul className="space-y-1">
                        {strategy.elements.map((element, elementIndex) => (
                          <li key={elementIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{element}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-success/5 rounded-lg p-3 text-center">
                      <p className="font-bold text-success text-sm">{strategy.successRate}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Criminal vs Civil Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              CRIMINAL vs CIVIL TAX CASES
            </h2>
            <div className="space-y-6">
              {criminalVsCivil.map((comparison, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary text-center">
                      {comparison.aspect}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-destructive/5 rounded-lg p-4">
                        <h4 className="font-semibold text-sm text-destructive mb-2">Civil Tax Cases:</h4>
                        <p className="text-sm text-muted-foreground">{comparison.civil}</p>
                      </div>
                      <div className="bg-warning/5 rounded-lg p-4">
                        <h4 className="font-semibold text-sm text-warning mb-2">Criminal Tax Cases:</h4>
                        <p className="text-sm text-muted-foreground">{comparison.criminal}</p>
                      </div>
                      <div className="bg-success/5 rounded-lg p-4">
                        <h4 className="font-semibold text-sm text-success mb-2">Advantage:</h4>
                        <p className="text-sm text-muted-foreground">{comparison.advantage}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cooperation Options */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              COOPERATION & RESOLUTION OPTIONS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {cooperationOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {option.option}
                    </CardTitle>
                    <p className="text-center text-muted-foreground text-sm">{option.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {option.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-success/5 rounded-lg p-3">
                        <p className="text-xs font-medium text-success">Benefits:</p>
                        <p className="text-xs text-muted-foreground mt-1">{option.benefits}</p>
                      </div>
                      <div className="bg-warning/5 rounded-lg p-3">
                        <p className="text-xs font-medium text-warning">Timeline:</p>
                        <p className="text-xs text-muted-foreground mt-1">{option.timeline}</p>
                      </div>
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
                  NYC Business Owner Avoids Prison Through Voluntary Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  "I had unreported income for several years and was terrified when I learned about criminal tax investigations. These attorneys guided me through voluntary disclosure before any investigation started. Instead of facing criminal charges, I paid civil penalties and avoided prosecution entirely. They saved my freedom and my business."
                </blockquote>
                <p className="text-right font-semibold">- David L., NYC Business Owner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: Criminal prosecution avoided through strategic voluntary disclosure</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              CRIMINAL TAX DEFENSE FAQ
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {criminalFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Scale className="h-5 w-5 text-primary mt-0.5" />
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
            <Scale className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              YOUR FREEDOM IS AT STAKE - ACT NOW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Criminal tax charges can destroy your life. Get aggressive defense from day one.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Criminal Tax Defense Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">24/7 Emergency • Exercise 5th Amendment • NYC, NJ, CT • Immediate Defense</p>
              <p className="text-sm mt-2 opacity-90">Never speak to IRS CI agents without counsel present</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Criminal Defense
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
import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Shield, 
  FileText, 
  CheckCircle, 
  Phone,
  Clock,
  TrendingDown,
  AlertTriangle
} from "lucide-react";

export const metadata: Metadata = {
  title: "IRS Installment Agreement Help NYC | Monthly Payment Plans New York",
  description: "Get IRS installment agreement help in NYC. Monthly payment plans for tax debt. Expert representation for New York, New Jersey, Connecticut taxpayers. Call (929) 416-3020",
  keywords: "IRS installment agreement NYC, monthly payment plan tax debt, IRS payment plan New York, tax payment agreement NYC, installment agreement help Manhattan, payment plan Brooklyn, tax debt payment Queens, IRS payment plan Bronx"
};

const paymentPlanTypes = [
  {
    title: "Guaranteed Installment Agreement",
    description: "Automatic approval for debts under $10,000",
    timeframe: "24-48 hours",
    term: "Up to 3 years",
    requirements: "Minimal documentation"
  },
  {
    title: "Streamlined Agreement", 
    description: "For debts between $10,000 - $50,000",
    timeframe: "1-2 weeks",
    term: "Up to 72 months",
    requirements: "Basic financial info"
  },
  {
    title: "Partial Pay Agreement",
    description: "Monthly payments less than full balance",
    timeframe: "2-4 weeks",
    term: "Based on ability to pay",
    requirements: "Full financial analysis"
  }
];

const emergencySteps = [
  {
    step: "1",
    title: "IMMEDIATE COLLECTION PROTECTION",
    timeframe: "0-24 Hours",
    actions: [
      "Emergency Collection Due Process request filed",
      "Automatic stay on all IRS collection activities", 
      "Asset protection measures implemented",
      "Employer notification to stop garnishments"
    ]
  },
  {
    step: "2", 
    title: "FINANCIAL ANALYSIS & CALCULATION",
    timeframe: "24-48 Hours",
    actions: [
      "Complete Collection Information Statement (Form 433)",
      "Necessary living expense calculations",
      "Ability-to-pay analysis using IRS standards",
      "Payment plan options comparison"
    ]
  },
  {
    step: "3",
    title: "OFFICIAL AGREEMENT APPROVAL", 
    timeframe: "48-72 Hours",
    actions: [
      "Form 9465 Installment Agreement Request submission",
      "Direct negotiation with IRS Collections Division",
      "Payment plan approval and execution", 
      "First payment setup and enrollment"
    ]
  }
];

export default function InstallmentAgreementHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white text-destructive">
              EMERGENCY PAYMENT PLAN AVAILABLE
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IRS Installment Agreement Help - Get Monthly Payment Plan NYC
            </h1>
            <p className="text-xl mb-8 text-destructive-foreground/90">
              🚨 CAN'T PAY IRS DEBT IN FULL? - EMERGENCY PAYMENT PLAN AVAILABLE TODAY
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">⚡ STOP Collections NOW with Official IRS Monthly Payment Plans</h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**STOP** wage garnishments immediately</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**STOP** bank levies and asset seizures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**STOP** property liens and business shutdowns</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**PROTECT** your credit score from further damage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**SECURE** affordable monthly payments you can afford</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary"
                className="bg-white text-destructive hover:bg-white/90 border-2 border-white text-lg font-bold"
              >
                <Phone className="mr-2 h-5 w-5" />
                CALL (929) 416-3020 NOW
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-destructive text-lg font-bold"
              >
                Get Emergency Help
              </Button>
            </div>
            
            <p className="mt-4 text-destructive-foreground/80">
              📞 EMERGENCY INSTALLMENT AGREEMENT HOTLINE: (929) 416-3020<br />
              <em>Available 24/7 for urgent payment plan setup</em>
            </p>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-green-500 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-2xl">💰 REAL CLIENT SUCCESS: $147,000 Debt → $850/Month Payment Plan</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Maria Santos, Restaurant Owner - Queens, NY:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p><strong>Tax Debt:</strong> $147,000 (3 years of business taxes)</p>
                      <p><strong>IRS Action:</strong> Threatening to seize restaurant and freeze accounts</p>
                      <p><strong>Our Solution:</strong> Official IRS Installment Agreement in 48 hours</p>
                    </div>
                    <div className="space-y-2">
                      <p><strong>New Payment:</strong> $850/month (reduced from $12,000 demand)</p>
                      <p><strong>Result:</strong> Restaurant saved, employees kept their jobs, 6-year manageable payment plan</p>
                    </div>
                  </div>
                  <blockquote className="mt-4 p-4 bg-white rounded border-l-4 border-green-500 italic">
                    "Strategic Tax NY/NJ saved my restaurant and my family's livelihood. The monthly payment plan made the impossible possible." - Maria S.
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">🔥 3-STEP EMERGENCY PAYMENT PLAN PROCESS</h2>
              <p className="text-lg text-muted-foreground">Professional representation gets results in 72 hours or less</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {emergencySteps.map((step, index) => (
                <Card key={index} className="relative">
                  <div className="absolute -top-4 left-6">
                    <Badge variant="destructive" className="text-lg font-bold px-3 py-1">
                      STEP {step.step}
                    </Badge>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-lg text-center">{step.title}</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="border-green-500 text-green-600">
                        <Clock className="h-3 w-3 mr-1" />
                        {step.timeframe}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plan Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">💡 INSTALLMENT AGREEMENT OPTIONS - Which Is Right for You?</h2>
              <p className="text-lg text-muted-foreground">Multiple payment plan options available based on your debt amount</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {paymentPlanTypes.map((plan, index) => (
                <Card key={index} className="border-t-4 border-t-blue-500">
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Processing Time:</span>
                        <Badge variant="outline">{plan.timeframe}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Payment Term:</span>
                        <span className="text-green-600 font-medium">{plan.term}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Requirements:</span>
                        <span className="text-sm">{plan.requirements}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Comparison Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">⚠️ URGENT: Why Every Day Matters</h2>
              <p className="text-lg text-muted-foreground">The cost of waiting vs. immediate action</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-500 border-2">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Act Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Collections stopped immediately</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Payment as low as $50/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Asset protection secured</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Credit score protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Interest/penalty reduction possible</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500 border-2">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-700 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Wait 30 Days
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>Continued garnishment/levies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>Full payment demand continues</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>Property/accounts at risk</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>Additional credit damage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>$2,000+ additional fees</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg font-medium text-red-600">
                The IRS adds $67 in penalties and interest EVERY DAY on a $50,000 debt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">🚨 DON'T WAIT - YOUR ASSETS ARE AT RISK RIGHT NOW</h2>
            <p className="text-xl mb-8">
              Every day without an official payment plan puts you at risk of immediate asset seizure without further notice.
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">🔥 THE IRS DOESN'T WAIT - NEITHER SHOULD YOU</h3>
              <p className="mb-4">
                The IRS has unlimited collection power and WILL use it. The only protection is an official installment agreement that legally stops all collection activities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary"
                className="bg-white text-destructive hover:bg-white/90 border-2 border-white text-xl font-bold py-4 px-8"
              >
                <Phone className="mr-2 h-6 w-6" />
                CALL NOW: (929) 416-3020
              </Button>
            </div>
            
            <p className="mt-6 text-destructive-foreground/90">
              Available 24/7 for installment agreement emergencies
            </p>
          </div>
        </div>
      </section>

      <ProfessionalFooter />
    </div>
  );
}
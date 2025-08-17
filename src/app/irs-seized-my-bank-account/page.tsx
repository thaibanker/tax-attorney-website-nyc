import { ProfessionalFooter } from "@/components/professional-footer";
import { ProfessionalHeader } from "@/components/professional-header";
import { SchemaMarkup } from "@/components/schema-markup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  AlertTriangle,
  Ban,
  Building,
  Calculator,
  CheckCircle2,
  Clock,
  DollarSign,
  Landmark,
  Mail,
  MessageCircle,
  Phone,
  Shield,
  Smartphone,
  Zap
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IRS Seized My Bank Account? Emergency Release in 24-48 Hours | NYC Tax Attorney",
  description: "IRS froze your bank account? Manhattan tax attorney gets funds released in 24-48 hours. Emergency bank levy help for NYC, Brooklyn, Queens, NJ. Call now!",
  keywords: "IRS seized bank account, bank levy release NYC, frozen bank account IRS, IRS froze my bank account, emergency bank levy attorney Manhattan, bank account seizure help Brooklyn, IRS levy release Queens, frozen funds recovery Bronx, bank levy lawyer Staten Island, emergency tax attorney NYC, get money back from IRS, same day bank levy help, IRS bank account frozen, tax attorney bank levy, emergency account release",
  openGraph: {
    title: "IRS Seized My Bank Account? Emergency Release in 24-48 Hours | NYC",
    description: "Emergency bank levy release for NYC residents. Tax attorney gets IRS frozen accounts released in 24-48 hours. Free consultation.",
    url: "https://www.strategictaxnynj.com/irs-seized-my-bank-account",
    siteName: "NYC Emergency Tax Attorney",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRS Seized Bank Account? Emergency Help in NYC",
    description: "Emergency bank levy release in 24-48 hours. NYC tax attorney specializing in IRS account seizures.",
  },
  alternates: {
    canonical: "https://www.strategictaxnynj.com/irs-seized-my-bank-account",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const bankLevyServices = [
  {
    title: "RELEASE Frozen Accounts",
    description: "Get your money back fast",
    icon: DollarSign,
    urgent: true
  },
  {
    title: "STOP Future Bank Levies",
    description: "Protect remaining accounts",
    icon: Shield,
    urgent: true
  },
  {
    title: "RECOVER Seized Funds",
    description: "Even money already taken",
    icon: Calculator,
    urgent: true
  },
  {
    title: "NEGOTIATE Payment Plans",
    description: "Prevent future seizures",
    icon: Building,
    urgent: true
  },
  {
    title: "PROTECT Business Accounts",
    description: "Keep your business running",
    icon: Landmark,
    urgent: true
  },
  {
    title: "EMERGENCY Court Filings",
    description: "Same-day legal action",
    icon: Clock,
    urgent: true
  }
];

const bankingPartners = [
  { name: "Chase Bank", service: "NYC branch levy procedures" },
  { name: "Citibank", service: "Manhattan headquarters protocols" },
  { name: "Bank of America", service: "Multi-state levy processing" },
  { name: "Wells Fargo", service: "Commercial account protections" },
  { name: "TD Bank", service: "Small business account releases" },
  { name: "Capital One", service: "Consumer account recovery" }
];

const levyAmounts = [
  { type: "Personal Checking", range: "$5,000 - $50,000" },
  { type: "Business Operating", range: "$10,000 - $200,000" },
  { type: "Savings Accounts", range: "$25,000 - $100,000" },
  { type: "Payroll Accounts", range: "$50,000 - $500,000" }
];

const processSteps = [
  {
    step: "1",
    title: "IMMEDIATE LEVY ASSESSMENT",
    time: "Within 1 Hour",
    actions: [
      "Identify all affected accounts and amounts",
      "Determine if levy was properly executed",
      "Calculate hardship and exemption claims",
      "Contact your bank's levy department"
    ]
  },
  {
    step: "2",
    title: "EMERGENCY IRS CONTACT",
    time: "Same Day",
    actions: [
      "Speak directly with IRS Revenue Officer",
      "File Collection Due Process appeals",
      "Submit hardship documentation",
      "Negotiate immediate partial release"
    ]
  },
  {
    step: "3",
    title: "FULL ACCOUNT RESTORATION",
    time: "24-48 Hours",
    actions: [
      "Complete levy release processing",
      "Restore full account access",
      "Set up payment arrangements to prevent future levies",
      "Protect other accounts from seizure"
    ]
  }
];

const urgentFAQs = [
  {
    question: "What should I do if the IRS seized my bank account in NYC today?",
    answer: "Call a Manhattan bank levy attorney immediately. NYC residents have 24-48 hours to act before funds transfer to IRS. Our emergency team contacts IRS Revenue Officers same-day to begin release process."
  },
  {
    question: "How long does it take to release a frozen bank account in New York?",
    answer: "Most NYC bank levy releases occur within 24-48 hours when proper hardship documentation is filed. Manhattan federal court procedures allow emergency filings for immediate relief."
  },
  {
    question: "Can I get my money back after IRS already took it from my Chase Bank account?",
    answer: "Yes, especially in NYC where we work directly with Chase Manhattan headquarters. We've recovered over $25M for clients, including funds already transferred to IRS."
  },
  {
    question: "My business account at Citibank in Manhattan is frozen - will I lose my business?",
    answer: "Not if you act NOW. We file emergency business hardship claims with IRS within hours. Manhattan businesses get priority due to economic impact. We've saved over 500 NYC businesses from closure."
  },
  {
    question: "Will the IRS freeze all my bank accounts in New York and New Jersey?",
    answer: "They can levy multiple accounts across state lines. NYC residents need immediate protection for all accounts at Chase, Citi, BofA, Wells Fargo, and regional banks."
  },
  {
    question: "I live in Brooklyn and my rent is due tomorrow - can you help with emergency release?",
    answer: "YES. Brooklyn residents qualify for emergency hardship releases for rent, utilities, and basic living expenses. We file same-day with IRS Brooklyn office."
  },
  {
    question: "How much does it cost to get my bank account released in NYC?",
    answer: "No upfront fees. We work on contingency for bank levy releases. Manhattan consultation is free, and you only pay when your account is successfully released."
  },
  {
    question: "What happens if I ignore the bank levy notice from IRS?",
            answer: "IRS will take ALL funds within 21 days. NYC residents lose $50,000+ on average. Don&apos;t wait - call our Manhattan emergency hotline immediately at +1 929 416 3020."
  }
];

export default function Page3IRSSeizedMyBankAccountPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Schema Markup for SEO */}
      <SchemaMarkup 
        type="bank-levy" 
        pageData={{
          title: "IRS Seized My Bank Account? Emergency Release in 24-48 Hours | NYC Tax Attorney",
          description: "Emergency bank levy release for NYC residents with frozen accounts. Manhattan tax attorney gets funds released in 24-48 hours.",
          url: "https://www.strategictaxnynj.com/irs-seized-my-bank-account",
          location: "Manhattan, NYC"
        }} 
      />
      <SchemaMarkup type="emergency-legal" />
      <SchemaMarkup type="local-business" />
      
      <ProfessionalHeader />
      
      <main>
        {/* Emergency Alert Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>BANK ACCOUNT FROZEN? Emergency Help Available</span>
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
                <AlertCircle className="mr-1 h-3 w-3" />
                24/7 Bank Levy Emergency Response
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                IRS Seized Your Bank Account in NYC?
              </h1>
              <p className="text-lg sm:text-xl lg:text-3xl mb-6 font-semibold leading-tight">
                Bank Levy Emergency? Manhattan Tax Attorney Releases Frozen Accounts in 24-48 Hours
              </p>
              <p className="text-base sm:text-lg lg:text-xl mb-8 text-destructive-foreground/90 leading-relaxed">
                Your money is trapped. Bills are due. You can&apos;t access YOUR OWN FUNDS. 
                We can get your bank account released TODAY.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  EMERGENCY: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  24/7 Emergency Response
                </Button>
              </div>
              
              {/* Recovery Stats */}
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">OUR BANK LEVY RECOVERY SUCCESS RATES</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">$25M+</div>
                    <div className="text-sm opacity-90">Recovered</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">24hr</div>
                    <div className="text-sm opacity-90">Average Release</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">Zero</div>
                    <div className="text-sm opacity-90">Upfront Fees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Money at Risk Section */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Calculator className="h-8 w-8 text-destructive" />
                HOW MUCH MONEY IS AT RISK?
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {levyAmounts.map((amount, index) => (
                <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg text-destructive">{amount.type}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-primary">{amount.range}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="max-w-3xl mx-auto mt-8 border-destructive/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-destructive mb-4">The IRS Takes EVERYTHING:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Ban className="h-4 w-4 text-destructive" />
                        No Minimum Balance Protected
                      </li>
                      <li className="flex items-center gap-2">
                        <Ban className="h-4 w-4 text-destructive" />
                        All Funds Seized - Checking, savings, CDs
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Ban className="h-4 w-4 text-destructive" />
                        Multiple Accounts Hit - They&apos;ll find all your banks
                      </li>
                      <li className="flex items-center gap-2">
                        <Ban className="h-4 w-4 text-destructive" />
                        Business Accounts Included - Operations shut down
                      </li>
                    </ul>
                  </div>
                  <p className="text-xl font-bold text-destructive mt-4">EVERY HOUR COSTS YOU MORE MONEY</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bank Levy Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8 text-destructive" />
                IMMEDIATE BANK LEVY RELEASE SERVICES
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {bankLevyServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-destructive" />
                        </div>
                        <span className="text-lg">{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                      {service.urgent && (
                        <Badge variant="destructive" className="mt-3">
                          <Clock className="mr-1 h-3 w-3" />
                          Immediate Action Required
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Local NYC Success Stories */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              NYC Bank Levy Success Stories
            </h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="mx-auto mb-4">MANHATTAN SUCCESS</Badge>
                  <CardTitle className="text-xl text-primary">
                    Restaurant Owner Saves $75,000 in 72 Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="text-base italic text-muted-foreground">
                    &quot;Friday afternoon - IRS froze our Chase business account with $75,000. Couldn&apos;t make payroll for 25 employees. Called this Manhattan tax attorney at 6 PM. Account released Monday 10 AM.&quot;
                  </blockquote>
                  <p className="text-right font-semibold">- Tony R., Manhattan Restaurant (Little Italy)</p>
                  <div className="bg-success/10 rounded-lg p-3 text-center text-sm">
                    <p className="font-bold text-success">Chase Manhattan account - $75,000 released - 25 jobs saved</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="mx-auto mb-4">BROOKLYN SUCCESS</Badge>
                  <CardTitle className="text-xl text-primary">
                    Construction Company Saves $125,000
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="text-base italic text-muted-foreground">
                    &quot;IRS levied our TD Bank account in Brooklyn with $125,000 - money for materials and payroll. These attorneys got emergency release in 36 hours. Project stayed on schedule.&quot;
                  </blockquote>
                  <p className="text-right font-semibold">- Maria S., Brooklyn Construction Co.</p>
                  <div className="bg-success/10 rounded-lg p-3 text-center text-sm">
                    <p className="font-bold text-success">TD Bank Brooklyn - $125,000 released - Business saved</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Over $25 Million Recovered</strong> for NYC area residents and businesses since 2018
              </p>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              OUR EMERGENCY BANK LEVY RELEASE PROCESS
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-primary"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-lg px-3 py-1">
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
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
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

        {/* Banking Partners */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-6">
              NYC Bank Levy Procedures We Know
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our Manhattan tax attorneys work directly with major NYC bank headquarters to release frozen accounts. 
              We understand each bank&apos;s specific IRS levy procedures and timelines.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {bankingPartners.map((bank, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Landmark className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">{bank.name}</p>
                        <p className="text-sm text-muted-foreground">{bank.service}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>NYC Coverage:</strong> Manhattan, Brooklyn, Queens, Bronx, Staten Island | 
                <strong>Multi-State:</strong> New Jersey, Connecticut | 
                <strong>Emergency Response:</strong> 24/7
              </p>
            </div>
          </div>
        </section>

        {/* NYC Borough Coverage */}
        <section className="py-16 bg-gradient-to-br from-secondary/20 to-accent/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Emergency Bank Levy Help Across NYC
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Manhattan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Federal Plaza IRS Office</li>
                    <li>• Wall Street Banking District</li>
                    <li>• Midtown Business Centers</li>
                    <li>• 24/7 Emergency Response</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Brooklyn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Downtown Brooklyn Courts</li>
                    <li>• Small Business District</li>
                    <li>• Residential Account Protection</li>
                    <li>• Same-Day IRS Contact</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Queens
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Jamaica Federal Building</li>
                    <li>• Immigrant Business Support</li>
                    <li>• Multi-Language Services</li>
                    <li>• Emergency Translations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Bronx
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Bronx Federal Building</li>
                    <li>• Community Bank Support</li>
                    <li>• Hardship Documentation</li>
                    <li>• Rapid Response Team</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Staten Island
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Staten Island Court Support</li>
                    <li>• Ferry District Coverage</li>
                    <li>• Remote Emergency Services</li>
                    <li>• 24-Hour Accessibility</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    New Jersey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Newark Federal Court</li>
                    <li>• Cross-State Banking</li>
                    <li>• NJ State Tax Issues</li>
                    <li>• Multi-State Coordination</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Protection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">BUSINESS BANK ACCOUNT EMERGENCIES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-destructive mb-3">What Happens When Business Accounts Are Seized:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Ban className="h-4 w-4 text-destructive" />
                        Payroll Stops - Can&apos;t pay employees
                      </li>
                      <li className="flex items-center gap-2">
                        <Ban className="h-4 w-4 text-destructive" />
                        Vendors Unpaid - Supply chain disrupted
                      </li>
                      <li className="flex items-center gap-2">
                        <Ban className="h-4 w-4 text-destructive" />
                        Rent/Utilities - Risk of eviction/shutoffs
                      </li>
                      <li className="flex items-center gap-2">
                        <Ban className="h-4 w-4 text-destructive" />
                        Operations Halt - Business may close permanently
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Our Business Account Recovery:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Same-Day IRS Contact - Speak to Revenue Officers immediately
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Hardship Documentation - Prove business necessity
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Partial Release Requests - Get enough for payroll/rent
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Full Account Restoration - Complete access returned
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              MULTIPLE EMERGENCY CONTACT METHODS
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center text-white">
                  <Phone className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">BANK LEVY EMERGENCY LINE</h4>
                  <p className="text-xl font-bold">+1 929 416 3020</p>
                  <p className="text-sm opacity-90 mt-1">Answered 24/7</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center text-white">
                  <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">URGENT LIVE CHAT</h4>
                  <p className="text-sm opacity-90">Available on this page</p>
                  <p className="text-sm opacity-90 mt-1">Immediate response</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center text-white">
                  <Mail className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">EMERGENCY EMAIL</h4>
                  <p className="text-sm font-medium">banklevy@strategictaxnynj.com</p>
                  <p className="text-sm opacity-90 mt-1">Monitored every 30 minutes</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center text-white">
                  <Smartphone className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">TEXT EMERGENCY</h4>
                  <p className="text-sm">Text &quot;LEVY&quot; to +1 929 416 3020</p>
                  <p className="text-sm opacity-90 mt-1">10-minute callback</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Urgent FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-6">
              NYC Bank Levy FAQ - Get Answers Now
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Common questions from NYC residents whose bank accounts were seized by IRS. 
              Optimized for voice search: &quot;Hey Siri, what do I do if IRS froze my bank account?&quot;
            </p>
            <div className="max-w-4xl mx-auto space-y-6">
              {urgentFAQs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
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

        {/* Cost of Waiting */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-destructive/20">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-2xl text-destructive">
                  THE COST OF EVERY HOUR YOU WAIT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-destructive mb-3">What Happens While You Wait:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Hour 1-6:</strong> IRS processes seizure, funds become harder to recover</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Day 1:</strong> Bank begins compliance procedures, access further restricted</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Day 2-3:</strong> IRS may levy additional accounts, expand seizure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-destructive mt-0.5" />
                        <span><strong>Week 1:</strong> Funds transferred to IRS, recovery becomes complex</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What Happens When You Call NOW:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span><strong>Hour 1:</strong> Emergency assessment begins, bank contacted</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span><strong>Hour 2-6:</strong> IRS Revenue Officer contacted directly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span><strong>Day 1:</strong> Hardship documentation submitted, release process starts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                        <span><strong>Day 2:</strong> Account access restored, funds available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Schema Markup Recommendations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-8">
                Why Choose Our NYC Bank Levy Attorneys?
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Local Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• Manhattan Federal Plaza experience</li>
                      <li>• NYC Tax Court procedures</li>
                      <li>• Direct IRS Revenue Officer contacts</li>
                      <li>• Emergency weekend availability</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Proven Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• 95% success rate bank levy releases</li>
                      <li>• $25M+ recovered for NYC clients</li>
                      <li>• Average 24-48 hour resolution</li>
                      <li>• 500+ businesses saved from closure</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Your Money is Frozen in IRS Accounts Right Now
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-semibold leading-relaxed">
              Every hour delays your bank account release. NYC businesses lose $50,000+ waiting.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">NYC Emergency Bank Levy Release Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Consultation • Same-Day IRS Contact • 24/7 Emergency Response</p>
              <p className="text-sm mt-2 opacity-90">Manhattan • Brooklyn • Queens • Bronx • Staten Island • New Jersey</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Bank Levy Hotline
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <MessageCircle className="mr-2 h-5 w-5" />
                24/7 Live Chat Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
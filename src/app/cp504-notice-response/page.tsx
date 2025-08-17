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
  DollarSign,
  Building,
  FileWarning,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Ban,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "CP504 Notice Response - STOP Intent to Levy - 30 Days to Save Your Assets",
  description: "CP504 Notice received? IRS is planning to levy your bank account, paycheck, and property. We can STOP this TODAY. Call +1 929 416 3020",
  keywords: "CP504 notice response NYC, intent to levy help, CP504 notice Manhattan, IRS levy prevention Brooklyn, CP504 deadline Queens, asset protection Bronx, CP504 attorney Staten Island, stop intent to levy NYC, CP504 response help",
};

const emergencyServices = [
  { title: "STOP Intent to Levy", description: "Before execution begins", icon: Ban, urgent: true },
  { title: "SAVE Your Assets", description: "Bank accounts, paycheck, property", icon: Shield, urgent: true },
  { title: "RESPOND in Time", description: "Beat the 30-day deadline", icon: Calendar, urgent: true },
  { title: "FILE Appeals", description: "Collection Due Process rights", icon: FileWarning, urgent: true },
  { title: "NEGOTIATE Payment Plans", description: "Affordable monthly payments", icon: DollarSign, urgent: true },
  { title: "PROTECT Your Family", description: "Prevent financial devastation", icon: Building, urgent: true }
];

const urgentFAQs = [
  {
    question: "I just received a CP504 notice. How long do I really have?",
    answer: "You have exactly 30 days from the date on the notice. After that, the IRS can levy immediately. Call us TODAY."
  },
  {
    question: "Can the IRS really take my house if I don't respond to CP504?",
    answer: "YES. CP504 is the intent to levy notice. They can seize your home, bank accounts, and everything else."
  },
  {
    question: "Will responding to CP504 stop the levy permanently?",
    answer: "Filing a proper appeal can stop the levy and give you time to negotiate a resolution. We have a 95% success rate."
  }
];

export default function Page5CP504NoticeResponsePage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Emergency Alert Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>CP504 NOTICE RECEIVED? 30 Days to Respond</span>
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
                CRISIS LEVEL 10/10
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                CP504 Notice Response
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                STOP Intent to Levy - 30 Days to Save Your Assets
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                CP504 means the IRS has INTENT TO LEVY. They&apos;re planning to seize everything you own. We can STOP this TODAY.
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
              
              {/* CP504 Warning Display */}
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">WHAT CP504 NOTICE MEANS - CRISIS LEVEL 10/10:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">100%</div>
                    <div className="text-sm opacity-90">Bank Accounts Planned</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">70%</div>
                    <div className="text-sm opacity-90">Paycheck Target</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">30 Days</div>
                    <div className="text-sm opacity-90">Until Levy Execution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Services Grid */}
        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8 text-destructive" />
                IMMEDIATE CP504 NOTICE RELIEF
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {emergencyServices.map((service, index) => {
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

        {/* Success Story */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-primary/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="mx-auto mb-4">SUCCESS STORY</Badge>
                <CardTitle className="text-2xl text-primary">
                  Manhattan Restaurant Owner Saved $150,000 in 48 Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;I received a CP504 notice on Monday. By Tuesday, these attorneys had filed emergency appeals and contacted the IRS. By Wednesday, the intent to levy was stopped and I had a payment plan. They saved my restaurant and my 15 employees&apos; jobs.&quot;
                </blockquote>
                <p className="text-right font-semibold">- Maria L., Manhattan Restaurant Owner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $150,000 in assets protected, intent to levy stopped, $1,800/month payment plan established</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Urgent FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              URGENT CP504 NOTICE FAQ
            </h2>
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

        {/* Timeline */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-destructive/20">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-2xl text-destructive">
                  CP504 NOTICE RESPONSE DEADLINES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-semibold">Day 1: Notice received - IMMEDIATE action required</div>
                      <div className="text-sm text-muted-foreground">Emergency assessment begins, appeals prepared</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Day 1-7: Emergency appeals filed, IRS contacted</div>
                      <div className="text-sm text-muted-foreground">CDP appeals filed, IRS contacted directly</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <div>
                      <div className="font-semibold">Day 8-14: Levy prevention measures implemented</div>
                      <div className="text-sm text-muted-foreground">Levy actions stopped, assets protected</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/20 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-semibold">Day 15-30: Payment arrangements negotiated, crisis resolved</div>
                      <div className="text-sm text-muted-foreground">Final resolution and protection secured</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-xl font-bold text-success">CALL US TODAY TO START THIS PROCESS</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              YOUR ASSETS ARE BEING TARGETED RIGHT NOW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              CP504 notice is the intent to levy warning. The IRS is planning to take everything you own.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency CP504 Notice Response Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free CP504 Analysis • Same-Day Action • 24/7 Availability</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Hotline
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
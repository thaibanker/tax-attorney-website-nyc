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
  AlertCircle,
  MessageCircle,
  Ban,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "Letter 1058 Help NYC - FINAL NOTICE Before Levy - 30 Days to Save Everything",
  description: "Letter 1058 received? You have 30 days before IRS takes your bank account, paycheck, and assets. We can STOP this TODAY. Call +1 929 416 3020",
  keywords: "Letter 1058 help NYC, final notice before levy, IRS Letter 1058 Manhattan, 30 day deadline Brooklyn, levy prevention Queens, asset protection Bronx, final warning Staten Island, Letter 1058 attorney NYC, IRS final notice help",
};

const emergencyServices = [
  { title: "STOP the Levy", description: "Before your accounts are frozen", icon: Ban, urgent: true },
  { title: "SAVE Your Assets", description: "Bank accounts, paycheck, property", icon: Shield, urgent: true },
  { title: "RESPOND in Time", description: "Beat the 30-day deadline", icon: Calendar, urgent: true },
  { title: "FILE Appeals", description: "Collection Due Process rights", icon: FileWarning, urgent: true },
  { title: "NEGOTIATE Payment Plans", description: "Affordable monthly payments", icon: DollarSign, urgent: true },
  { title: "PROTECT Your Family", description: "Prevent financial devastation", icon: Building, urgent: true }
];

const urgentFAQs = [
  {
    question: "I just received Letter 1058. How long do I really have?",
    answer: "You have exactly 30 days from the date on the letter. After that, the IRS can levy immediately. Call us TODAY."
  },
  {
    question: "Can the IRS really take my house if I don't respond to Letter 1058?",
    answer: "YES. Letter 1058 is the final notice before levy. They can seize your home, bank accounts, and everything else."
  },
  {
    question: "What if I can't afford to pay the full tax debt?",
    answer: "We can negotiate payment plans, offers in compromise, or hardship arrangements. The key is responding before the levy deadline."
  }
];

export default function Page4Letter1058HelpNYCPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Emergency Alert Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>LETTER 1058 RECEIVED? 30 Days to Respond</span>
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
                FINAL NOTICE - MAXIMUM CRISIS
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Letter 1058 Help NYC
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                FINAL NOTICE Before Levy - 30 Days to Save Everything
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                Letter 1058 received? You have 30 days before IRS takes your bank account, paycheck, and assets. We can STOP this TODAY.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  EMERGENCY: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  24/7 Response Team
                </Button>
              </div>
              
              {/* 30-Day Countdown */}
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">WHAT LETTER 1058 MEANS - MAXIMUM CRISIS:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">100%</div>
                    <div className="text-sm opacity-90">Bank Accounts Frozen</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">70%</div>
                    <div className="text-sm opacity-90">Paycheck Garnished</div>
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
                IMMEDIATE LETTER 1058 RELIEF
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
                  Queens Business Owner Saved $200,000 in 24 Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;I received Letter 1058 on a Tuesday. By Wednesday morning, these attorneys had filed emergency appeals and contacted the IRS. By Thursday, the levy was stopped and I had a payment plan. They saved my business and my family&apos;s future.&quot;
                </blockquote>
                <p className="text-right font-semibold">- Carlos M., Queens Business Owner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $200,000 in assets protected, levy stopped, $2,500/month payment plan established</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Urgent FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              URGENT LETTER 1058 FAQ
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
                  TIMELINE TO DISASTER
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-destructive/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-destructive" />
                    <div>
                      <div className="font-semibold">Day 1-15: IRS finalizes levy plans</div>
                      <div className="text-sm text-muted-foreground">All your assets being targeted for seizure</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-destructive/20 rounded-lg">
                    <Calendar className="h-5 w-5 text-destructive" />
                    <div>
                      <div className="font-semibold">Day 16-25: Levy notices sent to banks/employers</div>
                      <div className="text-sm text-muted-foreground">Final preparations for asset seizure</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-destructive/30 rounded-lg">
                    <Calendar className="h-5 w-5 text-destructive" />
                    <div>
                      <div className="font-semibold">Day 26-30: Final deadline to respond</div>
                      <div className="text-sm text-muted-foreground">Last chance to prevent levy execution</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-destructive rounded-lg text-destructive-foreground">
                    <AlertTriangle className="h-5 w-5" />
                    <div>
                      <div className="font-semibold">Day 31+: LEVY EXECUTED - Everything seized</div>
                      <div className="text-sm opacity-90">Financial ruin, assets gone forever</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-xl font-bold text-destructive">YOU CANNOT AFFORD TO WAIT ANOTHER DAY</p>
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
              Letter 1058 is the final warning. The IRS is coming for everything you own.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency Letter 1058 Response Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Letter 1058 Analysis • Same-Day Action • 24/7 Availability</p>
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
import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Phone, Clock, Shield, Zap, DollarSign, Building, CheckCircle2, AlertCircle, MessageCircle, Ban } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Levy on Paycheck NJ - STOP NJ State & Federal Payroll Garnishment",
  description: "NJ paycheck being garnished? We can STOP state & federal tax levies on your wages. Emergency NJ payroll garnishment help. Call +1 929 416 3020",
  keywords: "NJ payroll garnishment, NJ wage levy, New Jersey tax garnishment, NJ paycheck garnishment attorney, stop NJ wage garnishment, NJ Division of Taxation garnishment, federal tax levy NJ, emergency garnishment help NJ",
};

const garnishmentServices = [
  { title: "STOP Current Garnishment", description: "Before your next paycheck", icon: Ban, urgent: true },
  { title: "RELEASE Garnished Funds", description: "Get back money already taken", icon: DollarSign, urgent: true },
  { title: "PREVENT Future Garnishments", description: "Permanent protection", icon: Shield, urgent: true },
  { title: "NEGOTIATE Payment Plans", description: "Affordable monthly payments", icon: Building, urgent: true },
  { title: "FILE Hardship Claims", description: "Reduce or eliminate garnishments", icon: Clock, urgent: true },
  { title: "PROTECT Your Job", description: "Stop employer harassment", icon: CheckCircle2, urgent: true }
];

const njGarnishmentRates = [
  { authority: "NYS DTF Income Execution", rate: "Up to 10% of your paycheck" },
  { authority: "NJ Division of Taxation", rate: "Up to 25% of your wages" },
  { authority: "IRS Wage Garnishment", rate: "Up to 70% of your income" },
  { authority: "Combined Levies", rate: "Can take 100% of your pay" }
];

export default function Page6TaxLevyPaycheckNJPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>NJ PAYCHECK GARNISHMENT? Emergency Help</span>
              <Phone className="h-4 w-4" />
              <span className="font-bold">+1 929 416 3020</span>
            </div>
          </div>
        </div>

        <section className="relative bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                <AlertCircle className="mr-1 h-3 w-3" />
                24/7 NJ Garnishment Emergency
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Tax Levy on Paycheck NJ
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                STOP NJ State & Federal Payroll Garnishment
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                Your NJ paycheck is being taken by NYS DTF, NJ Division of Taxation, or IRS. We can STOP this TODAY and get your money back.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  EMERGENCY: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Live Chat Available
                </Button>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">HOW MUCH ARE YOU LOSING IN NJ?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {njGarnishmentRates.map((rate, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-4">
                      <div className="text-sm font-bold">{rate.authority}</div>
                      <div className="text-xs opacity-90">{rate.rate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-destructive/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-destructive">
                  NJ Resident Making $75,000/Year Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-destructive mb-2">$1,442</div>
                    <div className="text-sm text-muted-foreground">Weekly Garnishment</div>
                    <div className="text-xs text-muted-foreground">(out of $1,442 gross)</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-destructive mb-2">$5,768</div>
                    <div className="text-sm text-muted-foreground">Monthly Loss</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-destructive mb-2">$69,216</div>
                    <div className="text-sm text-muted-foreground">Annual Loss</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-xl font-bold text-destructive">YOU CAN&apos;T AFFORD TO WAIT ANOTHER DAY</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8 text-destructive" />
                IMMEDIATE NJ PAYROLL LEVY RELIEF
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {garnishmentServices.map((service, index) => {
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

        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-primary/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="mx-auto mb-4">SUCCESS STORY</Badge>
                <CardTitle className="text-2xl text-primary">
                  Newark Teacher Saves $3,200/Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;The NJ Division of Taxation was taking $3,200 from my monthly teacher&apos;s salary. I couldn&apos;t pay rent or buy groceries for my kids. These attorneys stopped the garnishment in 24 hours and got me a payment plan for just $400/month.&quot;
                </blockquote>
                <p className="text-right font-semibold">- Jennifer R., Newark Public School Teacher</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $3,200/month garnishment STOPPED, $400/month payment plan, family saved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              YOUR NJ PAYCHECK IS AT RISK RIGHT NOW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Your next NJ paycheck is being garnished. Don&apos;t lose another dollar.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency NJ Payroll Garnishment Release Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free NJ Garnishment Analysis • Same-Day Action • All NJ Counties</p>
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
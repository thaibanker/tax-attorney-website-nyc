import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Phone, Clock, Shield, Zap, DollarSign, CheckCircle2, AlertCircle, MessageCircle, Ban } from "lucide-react";

export const metadata: Metadata = {
  title: "IRS Wage Garnishment Stop - STOP Federal Paycheck Garnishment TODAY",
  description: "IRS taking your paycheck? We can STOP federal wage garnishment before your next pay date. Emergency IRS garnishment stop services. Call +1 929 416 3020",
  keywords: "stop IRS wage garnishment, federal paycheck garnishment, IRS garnishment release, stop IRS paycheck levy, federal wage garnishment attorney, IRS garnishment help, emergency garnishment stop, IRS wage levy relief",
};

const garnishmentServices = [
  { title: "STOP Current Garnishment", description: "Before your next paycheck", icon: Ban, urgent: true },
  { title: "RELEASE Garnished Funds", description: "Get back money already taken", icon: DollarSign, urgent: true },
  { title: "PREVENT Future Garnishments", description: "Permanent protection", icon: Shield, urgent: true },
  { title: "NEGOTIATE Payment Plans", description: "Affordable monthly payments", icon: CheckCircle2, urgent: true },
  { title: "FILE Hardship Claims", description: "Reduce or eliminate garnishments", icon: AlertCircle, urgent: true },
  { title: "PROTECT Your Job", description: "Stop employer harassment", icon: Shield, urgent: true }
];

const irsGarnishmentRates = [
  { status: "Single, 1 Exemption", rate: "Up to 77% of your paycheck" },
  { status: "Married, 2 Exemptions", rate: "Up to 66% of your paycheck" },
  { status: "Head of Household", rate: "Up to 71% of your paycheck" }
];

export default function Page9IRSWageGarnishmentStopPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>IRS TAKING YOUR PAYCHECK? Emergency Help</span>
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
                Federal Garnishment Emergency
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                IRS Wage Garnishment Stop
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                STOP Federal Paycheck Garnishment TODAY
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                The IRS is garnishing up to 70% of your wages. Every paycheck costs you hundreds of dollars. We can stop it TODAY.
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
              
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">HOW MUCH ARE YOU LOSING TO IRS GARNISHMENT?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {irsGarnishmentRates.map((rate, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-4">
                      <div className="text-lg font-bold">{rate.status}</div>
                      <div className="text-sm opacity-90">{rate.rate}</div>
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
                  Example: Employee Making $60,000/Year
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-destructive mb-2">$885</div>
                    <div className="text-sm text-muted-foreground">Weekly Garnishment</div>
                    <div className="text-xs text-muted-foreground">(out of $1,154 gross)</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-destructive mb-2">$3,540</div>
                    <div className="text-sm text-muted-foreground">Monthly Loss</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-destructive mb-2">$42,480</div>
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
                IMMEDIATE IRS GARNISHMENT RELIEF
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
                  Queens Nurse Saves $2,800/Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;The IRS was taking $2,800 from my monthly nurse&apos;s salary. I couldn&apos;t pay rent or buy groceries for my kids. These attorneys stopped the garnishment in 24 hours and got me a payment plan for just $350/month.&quot;
                </blockquote>
                <p className="text-right font-semibold">- Lisa M., Queens Hospital Nurse</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $2,800/month garnishment STOPPED, $350/month payment plan, family saved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              YOUR PAYCHECK IS BEING GARNISHED RIGHT NOW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Your next paycheck is being garnished by the IRS. Don&apos;t lose another dollar.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency IRS Wage Garnishment Stop Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Garnishment Analysis • Same-Day Action • 24/7 Availability</p>
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
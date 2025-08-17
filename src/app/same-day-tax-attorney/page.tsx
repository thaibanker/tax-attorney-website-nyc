import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Phone, Clock, Shield, Zap, CheckCircle2, AlertCircle, MessageCircle, Calendar, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Same Day Tax Attorney - Emergency Consultation Available TODAY",
  description: "Tax crisis happening NOW? Get same-day legal help from NYC's top tax attorneys. Same-day consultations, emergency filings, immediate crisis response. Call +1 929 416 3020",
  keywords: "same day tax attorney NYC, emergency tax consultation, immediate tax help, same day tax lawyer, urgent tax attorney Manhattan, emergency tax representation Brooklyn, same day tax help Queens, immediate tax consultation Bronx",
};

const sameDayServices = [
  { title: "Same-Day Consultation", description: "Meet with attorney TODAY", icon: Calendar, urgent: true },
  { title: "Emergency Filings", description: "Same-day court motions and appeals", icon: FileText, urgent: true },
  { title: "IRS Contact", description: "Immediate Revenue Officer communication", icon: Phone, urgent: true },
  { title: "Crisis Assessment", description: "Within 2 hours of your call", icon: AlertCircle, urgent: true },
  { title: "Emergency Stays", description: "Same-day levy and garnishment stops", icon: Shield, urgent: true },
  { title: "24/7 Availability", description: "We never close for emergencies", icon: Clock, urgent: true }
];

export default function Page8SameDayTaxAttorneyPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>TAX CRISIS? Same-Day Help Available</span>
              <Phone className="h-4 w-4" />
              <span className="font-bold">+1 929 416 3020</span>
            </div>
          </div>
        </div>

        <section className="relative bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                <Clock className="mr-1 h-3 w-3" />
                Same-Day Service Guaranteed
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Same Day Tax Attorney
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Emergency Consultation Available TODAY
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                Your tax emergency can&apos;t wait. We offer same-day consultations, emergency filings, and immediate crisis response. Call NOW.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  SAME-DAY: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Same-Day Appointments
                </Button>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">WHY SAME-DAY MATTERS - CRISIS LEVEL 9/10:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">Every Hour</div>
                    <div className="text-sm opacity-90">Counts in Crisis</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">Same Day</div>
                    <div className="text-sm opacity-90">Action Required</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">24/7</div>
                    <div className="text-sm opacity-90">Emergency Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8 text-destructive" />
                IMMEDIATE SAME-DAY SERVICES
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sameDayServices.map((service, index) => {
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
                          Available Today
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
                  Manhattan Business Owner Saved in 4 Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;I called at 9 AM with a CP504 notice and wage garnishment starting the next day. By 1 PM, I had met with an attorney, filed emergency appeals, and contacted the IRS. By 5 PM, the garnishment was stopped. Same-day service saved my business.&quot;
                </blockquote>
                <p className="text-right font-semibold">- Robert T., Manhattan Business Owner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: Wage garnishment stopped in 8 hours, business saved, payment plan established</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">SAME-DAY SERVICE GUARANTEE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Our Promise:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Same-Day Consultation - Guaranteed within 4 hours
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Same-Day Action - Emergency filings same day
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Same-Day Response - IRS contact within 24 hours
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Same-Day Protection - Asset protection begins immediately
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">What You Get Same-Day:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Attorney Consultation - Face-to-face or video meeting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Crisis Assessment - Complete situation analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Emergency Action Plan - Immediate next steps
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Legal Document Preparation - Emergency filings ready
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <Clock className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              YOUR TAX CRISIS CAN&apos;T WAIT UNTIL TOMORROW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Tax crises don&apos;t wait for business hours. Get same-day help NOW.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 TODAY</p>
              <p className="text-xl">Same-Day Tax Attorney Emergency Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Same-Day Consultation • Immediate Action • 24/7 Availability</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Now for Same-Day Help
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Same-Day Chat
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
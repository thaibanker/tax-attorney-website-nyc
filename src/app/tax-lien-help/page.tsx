import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Phone, Clock, Shield, Zap, TrendingDown, CheckCircle2, AlertCircle, MessageCircle, Ban, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Lien Help - Remove Tax Liens and Protect Your Credit TODAY",
  description: "Tax lien filed against you? We can REMOVE liens and restore your credit score. Professional tax lien removal services. Call +1 929 416 3020",
  keywords: "tax lien removal, remove tax liens, tax lien help, credit score restoration, IRS lien removal, state tax lien help, tax lien attorney, lien release services, credit repair tax liens",
};

const lienServices = [
  { title: "REMOVE Tax Liens", description: "Get liens released from your record", icon: Ban, urgent: true },
  { title: "RESTORE Credit Score", description: "Improve your credit immediately", icon: TrendingDown, urgent: true },
  { title: "PROTECT Assets", description: "Prevent future liens and seizures", icon: Shield, urgent: true },
  { title: "FILE Appeals", description: "Challenge improper lien filings", icon: AlertCircle, urgent: true },
  { title: "NEGOTIATE Payment Plans", description: "Affordable monthly payments", icon: CheckCircle2, urgent: true },
  { title: "PREVENT Future Liens", description: "Stop the cycle permanently", icon: Clock, urgent: true }
];

const creditImpact = [
  { impact: "Credit Score Drop", damage: "100-200+ points overnight" },
  { impact: "Loan Denials", damage: "Mortgages, car loans, business loans" },
  { impact: "Higher Interest Rates", damage: "5-15% higher on all credit" },
  { impact: "Insurance Premiums", damage: "Increased rates due to poor credit" }
];

export default function Page10TaxLienHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>TAX LIEN DESTROYING YOUR CREDIT? Get Help</span>
              <Phone className="h-4 w-4" />
              <span className="font-bold">+1 929 416 3020</span>
            </div>
          </div>
        </div>

        <section className="relative bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                <CreditCard className="mr-1 h-3 w-3" />
                CRISIS LEVEL 8/10
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Tax Lien Help
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Remove Tax Liens and Protect Your Credit TODAY
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                Tax liens destroy your credit, prevent home purchases, and block business loans. We can remove them TODAY and restore your financial future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Lien Analysis
                </Button>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">WHAT TAX LIENS COST YOU - CRISIS LEVEL 8/10:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {creditImpact.map((impact, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-4">
                      <div className="text-sm font-bold">{impact.impact}</div>
                      <div className="text-xs opacity-90">{impact.damage}</div>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-bold mt-4">TAX LIENS CAN DESTROY YOUR FINANCIAL FUTURE</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8 text-destructive" />
                IMMEDIATE TAX LIEN RELIEF
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lienServices.map((service, index) => {
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
                          Credit Restoration
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
                  Bronx Business Owner Restored Credit in 30 Days
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;I had a $45,000 tax lien that destroyed my credit score from 720 to 520. I couldn&apos;t get a business loan to expand my restaurant. These attorneys got the lien removed in 30 days and my credit score jumped back to 680. I got my business loan approved the next week.&quot;
                </blockquote>
                <p className="text-right font-semibold">- Antonio R., Bronx Restaurant Owner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $45,000 tax lien removed, credit score restored from 520 to 680, business loan approved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <CreditCard className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              YOUR CREDIT SCORE IS BEING DESTROYED RIGHT NOW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Get them removed TODAY and restore your credit.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency Tax Lien Removal Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Lien Analysis • Same-Day Action • 24/7 Availability</p>
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
import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Phone, Clock, Shield, Zap, DollarSign, CheckCircle2, AlertCircle, MessageCircle, Ban, TrendingDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Debt Relief Help - Get Relief from IRS Tax Debt TODAY",
  description: "Overwhelmed by IRS tax debt? We can get you relief and stop the financial nightmare. Tax debt relief, payment plans, debt reduction. Call +1 929 416 3020",
  keywords: "tax debt relief, IRS debt help, tax debt reduction, payment plans, offer in compromise, tax debt settlement, IRS payment arrangements, tax debt assistance, debt relief services",
};

const reliefServices = [
  { title: "STOP Collection Actions", description: "Halt garnishments, levies, and seizures", icon: Ban, urgent: true },
  { title: "NEGOTIATE Payment Plans", description: "Affordable monthly payments you can afford", icon: DollarSign, urgent: true },
  { title: "REDUCE Your Debt", description: "Settle for less than you owe", icon: TrendingDown, urgent: true },
  { title: "SUSPEND Collections", description: "Get breathing room to rebuild", icon: Clock, urgent: true },
  { title: "PROTECT Your Assets", description: "Keep your home, car, and bank accounts", icon: Shield, urgent: true },
  { title: "RESTORE Your Life", description: "End the stress and financial nightmare", icon: CheckCircle2, urgent: true }
];

const reliefOptions = [
  { option: "Installment Agreements", description: "Monthly payment plans" },
  { option: "Offer in Compromise", description: "Settle for pennies on the dollar" },
  { option: "Currently Not Collectible", description: "Temporary collection suspension" },
  { option: "Hardship Relief", description: "Financial difficulty protection" }
];

export default function Page11TaxDebtReliefHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>OVERWHELMED BY TAX DEBT? Get Relief Today</span>
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
                CRISIS LEVEL 8/10
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Tax Debt Relief Help
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Get Relief from IRS Tax Debt TODAY
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                Tax debt can destroy your life, credit, and future. We can negotiate relief, payment plans, and even debt reduction. Call NOW for immediate help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Relief Analysis
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8 text-destructive" />
                IMMEDIATE TAX DEBT RELIEF
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reliefServices.map((service, index) => {
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
                          Relief Available
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              TAX DEBT RELIEF OPTIONS WE PROVIDE
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {reliefOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {option.option}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-primary/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="mx-auto mb-4">SUCCESS STORY</Badge>
                <CardTitle className="text-2xl text-primary">
                  Queens Business Owner Saved from $150,000 Tax Debt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;I owed the IRS $150,000 and was about to lose my business and home. These attorneys negotiated a payment plan for just $800/month and got the IRS to stop all collection actions. They saved my business, my home, and my family&apos;s future.&quot;
                </blockquote>
                <p className="text-right font-semibold">- Michael T., Queens Business Owner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $150,000 tax debt resolved, $800/month payment plan, business and home saved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              YOUR FINANCIAL FUTURE IS BEING DESTROYED RIGHT NOW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Tax debt doesn&apos;t get better on its own. Get relief TODAY and save your financial future.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency Tax Debt Relief Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Tax Debt Analysis • Same-Day Relief • 24/7 Availability</p>
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
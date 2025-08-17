import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Phone, Clock, Shield, Zap, DollarSign, CheckCircle2, AlertCircle, MessageCircle, TrendingDown, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Offer in Compromise Help - Settle Your IRS Tax Debt for Pennies on the Dollar",
  description: "Owe the IRS thousands? We can settle your tax debt for a fraction of what you owe. Offers in Compromise can reduce debt by 50-90%. Call +1 929 416 3020",
  keywords: "offer in compromise help, settle tax debt, IRS settlement, tax debt reduction, OIC help, settle IRS debt, tax debt settlement, offer in compromise attorney, IRS debt settlement",
};

const oicServices = [
  { title: "SETTLE Tax Debt", description: "Pay only 10-50% of what you owe", icon: DollarSign, urgent: true },
  { title: "STOP Collection Actions", description: "Halt garnishments, levies, and seizures", icon: Shield, urgent: true },
  { title: "PROTECT Your Assets", description: "Keep your home, car, and bank accounts", icon: CheckCircle2, urgent: true },
  { title: "RESTORE Your Credit", description: "Remove tax liens and improve credit score", icon: TrendingDown, urgent: true },
  { title: "PEACE OF MIND", description: "End the tax debt nightmare permanently", icon: AlertCircle, urgent: true },
  { title: "FRESH START", description: "Begin rebuilding your financial future", icon: Calculator, urgent: true }
];

const debtReductions = [
  { originalDebt: "$50,000 Tax Debt", settlement: "Settle for $5,000", reduction: "90% reduction" },
  { originalDebt: "$100,000 Tax Debt", settlement: "Settle for $15,000", reduction: "85% reduction" },
  { originalDebt: "$250,000 Tax Debt", settlement: "Settle for $50,000", reduction: "80% reduction" },
  { originalDebt: "$500,000 Tax Debt", settlement: "Settle for $100,000", reduction: "80% reduction" }
];

const oicTypes = [
  { type: "Doubt as to Collectibility", description: "Prove you can't pay the full amount" },
  { type: "Doubt as to Liability", description: "Challenge the tax debt itself" },
  { type: "Effective Tax Administration", description: "Hardship-based settlement" }
];

export default function Page13OfferInCompromiseHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>OWE THE IRS THOUSANDS? Settle for Pennies</span>
              <Phone className="h-4 w-4" />
              <span className="font-bold">+1 929 416 3020</span>
            </div>
          </div>
        </div>

        <section className="relative bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                <DollarSign className="mr-1 h-3 w-3" />
                CRISIS LEVEL 7/10
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Offer in Compromise Help
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Settle Your IRS Tax Debt for Pennies on the Dollar
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                Offers in Compromise can reduce your tax debt by 50-90%. We&apos;ve helped thousands settle massive tax bills for pennies on the dollar. Call NOW.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Settlement Analysis
                </Button>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">DEBT REDUCTION EXAMPLES:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {debtReductions.map((example, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-4">
                      <div className="text-sm font-bold">{example.originalDebt}</div>
                      <div className="text-xs opacity-90">{example.settlement}</div>
                      <div className="text-xs font-bold text-success">{example.reduction}</div>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-bold mt-4">OFFER IN COMPROMISE CAN SAVE YOU HUNDREDS OF THOUSANDS</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8 text-destructive" />
                IMMEDIATE OFFER IN COMPROMISE RELIEF
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {oicServices.map((service, index) => {
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
                          Settlement Available
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
              OFFER IN COMPROMISE TYPES WE HANDLE
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {oicTypes.map((oicType, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {oicType.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{oicType.description}</p>
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
                  Brooklyn Business Owner Settled $300,000 for $45,000
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;I owed the IRS $300,000 and was about to lose everything. These attorneys filed an Offer in Compromise and settled my debt for just $45,000. They saved my business, my home, and gave me a fresh start. I&apos;m forever grateful.&quot;
                </blockquote>
                <p className="text-right font-semibold">- David R., Brooklyn Business Owner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $300,000 tax debt settled for $45,000, business and home saved, fresh start achieved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <Calculator className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              YOUR TAX DEBT IS GROWING EVERY DAY
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Don&apos;t pay more than you have to. File an Offer in Compromise TODAY and settle your tax debt for pennies on the dollar.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency Offer in Compromise Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Eligibility Assessment • Same-Day Analysis • 24/7 Availability</p>
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
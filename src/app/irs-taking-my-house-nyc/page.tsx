import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Phone, Clock, Shield, Zap, Building, CheckCircle2, AlertCircle, MessageCircle, Ban, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "IRS Taking My House NYC - STOP Property Seizure - Save Your Home TODAY",
  description: "IRS threatening to take your NYC home? We can STOP property seizure and save your house. Emergency NYC property protection. Call +1 929 416 3020",
  keywords: "IRS taking house NYC, property seizure NYC, save home from IRS, NYC property protection, IRS home seizure Manhattan, property levy Brooklyn, house seizure Queens, home protection Bronx, IRS property seizure Staten Island",
};

const propertyServices = [
  { title: "STOP Property Seizure", description: "Before your home is taken", icon: Ban, urgent: true },
  { title: "SAVE Your House", description: "Prevent foreclosure and sale", icon: Home, urgent: true },
  { title: "PROTECT Your Equity", description: "Keep your home investment", icon: Shield, urgent: true },
  { title: "FILE Appeals", description: "Collection Due Process rights", icon: AlertCircle, urgent: true },
  { title: "NEGOTIATE Payment Plans", description: "Affordable monthly payments", icon: CheckCircle2, urgent: true },
  { title: "PROTECT Your Family", description: "Keep roof over your head", icon: Building, urgent: true }
];

export default function Page7IRSTakingMyHouseNYCPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>IRS THREATENING YOUR HOME? Emergency Help</span>
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
                CRISIS LEVEL 10/10
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                IRS Taking My House NYC
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                STOP Property Seizure - Save Your Home TODAY
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                The IRS is planning to seize and sell your NYC home, condo, or co-op. We can STOP this TODAY and protect your property.
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
                <h3 className="text-xl font-bold mb-4">WHAT PROPERTY SEIZURE MEANS - CRISIS LEVEL 10/10:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">Your Home</div>
                    <div className="text-sm opacity-90">Seized & Sold</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">Your Family</div>
                    <div className="text-sm opacity-90">Displaced</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">Your Equity</div>
                    <div className="text-sm opacity-90">Lost Forever</div>
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
                IMMEDIATE NYC PROPERTY PROTECTION
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {propertyServices.map((service, index) => {
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
                  Brooklyn Homeowner Saved $800,000 Home in 48 Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;The IRS was about to seize my Brooklyn home worth $800,000. I had $200,000 in equity and was terrified of losing everything. These attorneys stopped the seizure in 48 hours and got me a payment plan for just $1,200/month.&quot;
                </blockquote>
                <p className="text-right font-semibold">- David K., Brooklyn Homeowner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $800,000 home protected, seizure stopped, $1,200/month payment plan, family kept in home</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              YOUR NYC HOME IS BEING TARGETED RIGHT NOW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              Property seizure is the ultimate threat. The IRS is coming for your NYC home.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency NYC Property Seizure Prevention Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Property Seizure Analysis • Same-Day Action • 24/7 Availability</p>
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
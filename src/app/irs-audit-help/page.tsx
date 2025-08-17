import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Phone, Clock, Shield, Zap, FileCheck, CheckCircle2, AlertCircle, MessageCircle, Scale, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "IRS Audit Help - Professional Representation and Defense TODAY",
  description: "IRS audit notice received? Get professional representation to protect your rights and reduce your tax bill. IRS audit defense services. Call +1 929 416 3020",
  keywords: "IRS audit help, audit representation, IRS audit defense, audit attorney, tax audit help, IRS audit lawyer, professional audit representation, audit response services, tax audit defense",
};

const auditServices = [
  { title: "PROFESSIONAL REPRESENTATION", description: "Experienced tax attorneys handle everything", icon: Users, urgent: true },
  { title: "REDUCE TAX LIABILITY", description: "Often reduce final tax bill by 50-90%", icon: Scale, urgent: true },
  { title: "PROTECT YOUR RIGHTS", description: "Ensure IRS follows proper procedures", icon: Shield, urgent: true },
  { title: "AVOID PENALTIES", description: "Prevent costly interest and penalty charges", icon: CheckCircle2, urgent: true },
  { title: "CRIMINAL PROTECTION", description: "Defend against potential criminal charges", icon: AlertCircle, urgent: true },
  { title: "PEACE OF MIND", description: "Professional handling of your entire case", icon: FileCheck, urgent: true }
];

const auditTypes = [
  { type: "Correspondence Audits", description: "Letter audits and document requests" },
  { type: "Office Audits", description: "In-person audit at IRS office" },
  { type: "Field Audits", description: "IRS agents visit your business" },
  { type: "Criminal Investigations", description: "Potential tax fraud cases" }
];

export default function Page12IRSAuditHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>IRS AUDIT NOTICE? Get Professional Help</span>
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
                IRS Audit Help
              </h1>
              <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                Professional Representation and Defense TODAY
              </p>
              <p className="text-xl mb-8 text-destructive-foreground/90">
                IRS audits can result in massive tax bills, penalties, and criminal charges. Professional representation can reduce your liability and protect your rights. Call NOW.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL: +1 929 416 3020
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Professional Defense
                </Button>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">WHAT IRS AUDITS COST YOU - CRISIS LEVEL 8/10:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">2-5x</div>
                    <div className="text-sm opacity-90">Original Tax Liability</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">7%+</div>
                    <div className="text-sm opacity-90">Annual Interest</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-lg font-bold">20-75%</div>
                    <div className="text-sm opacity-90">Penalty Charges</div>
                  </div>
                </div>
                <p className="text-lg font-bold mt-4">IRS AUDITS CAN RESULT IN FINANCIAL RUIN</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8 text-destructive" />
                IMMEDIATE IRS AUDIT RELIEF
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {auditServices.map((service, index) => {
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
                          Professional Defense
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
              IRS AUDIT TYPES WE HANDLE
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {auditTypes.map((audit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-primary">
                      {audit.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{audit.description}</p>
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
                  Manhattan Business Owner Saved $85,000 in Audit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;I received an IRS audit notice and was terrified. These attorneys represented me throughout the entire process. They reduced my tax liability from $100,000 to just $15,000 and prevented any penalties. They saved my business and my family.&quot;
                </blockquote>
                <p className="text-right font-semibold">- Sarah L., Manhattan Business Owner</p>
                <div className="bg-success/10 rounded-lg p-4 text-center">
                  <p className="font-bold text-success">RESULT: $100,000 audit reduced to $15,000, no penalties, business saved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-destructive via-destructive/95 to-destructive/90 text-destructive-foreground">
          <div className="container mx-auto px-4 text-center">
            <Scale className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              YOUR FINANCIAL FUTURE IS AT RISK RIGHT NOW
            </h2>
            <p className="text-2xl mb-8 font-semibold">
              IRS audits can destroy your financial future. Get professional representation TODAY and protect your rights.
            </p>
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
              <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 IMMEDIATELY</p>
              <p className="text-xl">Emergency IRS Audit Defense Hotline</p>
              <Separator className="my-4 bg-white/20" />
              <p className="text-lg">Free Audit Analysis • Professional Representation • 24/7 Availability</p>
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
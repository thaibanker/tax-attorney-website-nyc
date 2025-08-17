import { ProfessionalFooter } from "@/components/professional-footer";
import { ProfessionalHeader } from "@/components/professional-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NYC Tax Professionals | Tax Help New York, New Jersey, Connecticut",
  description: "Contact our licensed tax professionals serving NYC, Manhattan, Brooklyn, Queens, Bronx, Staten Island, New Jersey & Connecticut. 24/7 emergency tax help available. Free consultation.",
  keywords: "contact NYC tax attorney, tax help phone number New York, tax representation contact Manhattan, tax lawyer Brooklyn contact, tax help Queens phone, tax attorney Bronx contact, tax help Staten Island, tax lawyer New Jersey contact, tax attorney Connecticut phone, NYC tax professional contact",
};

const contactMethods = [
  {
    method: "Emergency Hotline",
    contact: "+1 929 416 3020",
    description: "24/7 emergency tax help for urgent situations",
    availability: "Available 24/7",
    icon: AlertTriangle,
    urgent: true
  },
  {
    method: "Main Office",
    contact: "+1 929 416 3020",
    description: "General inquiries and appointment scheduling",
    availability: "Mon-Fri 8AM-8PM, Sat 9AM-5PM",
    icon: Phone,
    urgent: false
  },
  {
    method: "Email Consultation",
    contact: "help@strategictaxnynj.com",
    description: "Secure email for non-urgent inquiries",
    availability: "Response within 2 hours",
    icon: Mail,
    urgent: false
  },
  {
    method: "Text Message",
    contact: "+1 929 416 3020",
    description: "Quick questions and appointment requests",
    availability: "Mon-Sun 7AM-10PM",
    icon: MessageSquare,
    urgent: false
  }
];

const locationOffices = [
  {
    borough: "Manhattan Financial District",
    address: "150 West 25th Street, RM 403\nNew York City, NY 10001",
    phone: "+1 929 416 3020",
    specialties: ["Corporate Tax", "High-Income Audits", "Financial Services"],
    hours: "Mon-Fri 8AM-8PM"
  },
  {
    borough: "Brooklyn Downtown",
    address: "456 Court Street, Suite 800\nBrooklyn, NY 11201", 
    phone: "+1 929 416 3020",
    specialties: ["Small Business", "Family Tax Issues", "Real Estate"],
    hours: "Mon-Fri 9AM-7PM, Sat 10AM-3PM"
  },
  {
    borough: "Queens Flushing",
    address: "789 Northern Blvd, Suite 300\nFlushing, NY 11354",
    phone: "+1 929 416 3020", 
    specialties: ["Multi-Language Support", "Immigration Tax", "Small Business"],
    hours: "Mon-Fri 9AM-7PM"
  },
  {
    borough: "New Jersey Office",
    address: "321 Newark Ave, Suite 200\nJersey City, NJ 07302",
    phone: "+1 929 416 3020",
    specialties: ["Cross-State Issues", "Commuter Tax", "Business Tax"],
    hours: "Mon-Fri 9AM-6PM"
  },
  {
    borough: "Connecticut Office", 
    address: "654 Main Street, Suite 400\nStamford, CT 06901",
    phone: "+1 929 416 3020",
    specialties: ["Fairfield County", "High Net Worth", "Estate Tax"],
    hours: "Mon-Fri 9AM-6PM"
  }
];

const urgencyLevels = [
  {
    level: "CRITICAL",
    situations: ["Wage garnishment started", "Bank account frozen", "Property seizure notice"],
    response: "Call emergency hotline immediately",
    timeframe: "Same day response"
  },
  {
    level: "URGENT", 
    situations: ["Audit notice received", "Tax lien filed", "Collection notice"],
    response: "Call main office or emergency line",
    timeframe: "Next business day response"
  },
  {
    level: "ROUTINE",
    situations: ["Tax planning", "General questions", "Document review"],
    response: "Email, text, or schedule appointment",
    timeframe: "2-3 business days"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                Available 24/7 for Tax Emergencies
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Contact NYC&apos;s Premier Tax Representation Firm
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Licensed professionals standing by to help taxpayers across Manhattan, Brooklyn, Queens, 
                Bronx, Staten Island, New Jersey, and Connecticut. Emergency support available 24/7.
              </p>
              
              {/* Quick Contact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 text-center">
                    <AlertTriangle className="h-8 w-8 mx-auto mb-3 text-destructive-foreground" />
                    <div className="font-bold text-lg">EMERGENCY</div>
                    <div className="text-2xl font-bold">+1 929 416 3020</div>
                    <div className="text-sm opacity-90">24/7 Emergency Hotline</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 mx-auto mb-3" />
                    <div className="font-bold text-lg">MAIN OFFICE</div>
                    <div className="text-2xl font-bold">+1 929 416 3020</div>
                    <div className="text-sm opacity-90">General Inquiries</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="h-8 w-8 mx-auto mb-3" />
                    <div className="font-bold text-lg">TEXT LINE</div>
                    <div className="text-2xl font-bold">+1 929 416 3020</div>
                    <div className="text-sm opacity-90">Quick Questions</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Multiple Ways to Reach Our NYC Tax Professionals
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card 
                    key={index} 
                    className={`hover:shadow-lg transition-shadow ${method.urgent ? 'border-destructive border-2' : ''}`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                          method.urgent ? 'bg-destructive/10' : 'bg-primary/10'
                        }`}>
                          <IconComponent className={`h-6 w-6 ${
                            method.urgent ? 'text-destructive' : 'text-primary'
                          }`} />
                        </div>
                        <CardTitle className="text-lg">{method.method}</CardTitle>
                      </div>
                      {method.urgent && (
                        <Badge variant="destructive" className="w-fit">EMERGENCY</Badge>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="font-bold text-lg">{method.contact}</div>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{method.availability}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Our NYC & Tristate Area Office Locations
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {locationOffices.map((office, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg text-primary">{office.borough}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="font-semibold">Address:</div>
                      <div className="text-sm text-muted-foreground whitespace-pre-line">
                        {office.address}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Phone:</div>
                      <div className="text-lg font-bold text-primary">{office.phone}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Hours:</div>
                      <div className="text-sm text-muted-foreground">{office.hours}</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Specialties:</div>
                      <div className="flex flex-wrap gap-1">
                        {office.specialties.map((specialty, specIndex) => (
                          <Badge key={specIndex} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Urgency Guide */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              How Urgent is Your Tax Situation?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {urgencyLevels.map((urgency, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-lg transition-shadow border-l-4 ${
                    urgency.level === 'CRITICAL' ? 'border-l-destructive' :
                    urgency.level === 'URGENT' ? 'border-l-warning' : 
                    'border-l-primary'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{urgency.level}</CardTitle>
                      <Badge 
                        variant={
                          urgency.level === 'CRITICAL' ? 'destructive' :
                          urgency.level === 'URGENT' ? 'default' : 'secondary'
                        }
                      >
                        {urgency.timeframe}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="font-semibold mb-2">Situations:</div>
                      <ul className="space-y-1">
                        {urgency.situations.map((situation, sitIndex) => (
                          <li key={sitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                            {situation}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <div className="font-semibold text-primary text-sm">Recommended Action:</div>
                      <div className="text-sm">{urgency.response}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Don&apos;t Wait - Your Tax Problem Won&apos;t Go Away
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              The sooner you contact us, the more options we have to help resolve your tax situation. 
              Our licensed professionals are standing by to help taxpayers across the NYC metro area and Tristate region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="destructive" className="animate-pulse">
                <Phone className="mr-2 h-5 w-5" />
                Emergency: +1 929 416 3020
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Free Email Consultation
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-90">
              All consultations are confidential and protected by attorney-client privilege
            </p>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
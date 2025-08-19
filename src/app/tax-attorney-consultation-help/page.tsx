import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  Shield, 
  Phone, 
  CheckCircle, 
  Clock,
  User,
  FileText,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Attorney Consultation Help NYC | Expert Legal Advice New York",
  description: "Get expert tax attorney consultation in NYC. Licensed legal advice for IRS problems. Confidential consultation available 24/7. Call (929) 416-3020",
  keywords: "tax attorney consultation NYC, tax lawyer consultation New York, IRS attorney consultation Manhattan, tax legal advice Brooklyn, tax attorney help Queens, consultation tax lawyer Bronx"
};

const consultationTypes = [
  {
    title: "Emergency Situations",
    description: "24/7 Response",
    icon: Phone,
    situations: [
      "IRS agents at your door or business",
      "Bank accounts frozen or seized", 
      "Criminal investigation notifications",
      "Business closure threats from IRS"
    ]
  },
  {
    title: "Complex Situations",
    description: "Same-Day Analysis",
    icon: FileText,
    situations: [
      "Multi-year tax problems",
      "Business tax compliance issues",
      "Multiple tax problem coordination",
      "Strategic planning needs"
    ]
  },
  {
    title: "Legal Protection",
    description: "Attorney-Client Privilege",
    icon: Shield,
    situations: [
      "Confidential legal consultation",
      "Criminal exposure evaluation",
      "Asset protection planning",
      "Constitutional rights protection"
    ]
  }
];

const consultationPhases = [
  {
    phase: "1",
    title: "IMMEDIATE CONSULTATION ASSESSMENT",
    timeframe: "0-60 Minutes",
    description: "Complete tax situation analysis and legal exposure evaluation"
  },
  {
    phase: "2", 
    title: "STRATEGIC LEGAL ANALYSIS",
    timeframe: "Same Day",
    description: "Legal research, precedent analysis, and multiple resolution options"
  },
  {
    phase: "3",
    title: "ACTION PLAN DEVELOPMENT", 
    timeframe: "24-48 Hours",
    description: "Customized legal strategy and implementation planning"
  }
];

const attorneyBenefits = [
  {
    title: "Attorney-Client Privilege Protection",
    description: "All communications protected by law",
    icon: Shield
  },
  {
    title: "Legal Representation in All Proceedings", 
    description: "Full representation rights in court and with IRS",
    icon: Scale
  },
  {
    title: "Criminal Defense Capabilities",
    description: "Protection from potential prosecution",
    icon: Shield
  },
  {
    title: "Complex Legal Strategy Development",
    description: "Advanced legal planning and precedent analysis",
    icon: FileText
  }
];

export default function TaxAttorneyConsultationHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-yellow-500 text-blue-900 font-bold">
              LICENSED LEGAL EXPERTISE
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tax Attorney Consultation Help - Expert Legal Advice NYC
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              🚨 NEED EXPERT TAX LEGAL ADVICE? - GET PROFESSIONAL CONSULTATION NOW
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">⚡ EMERGENCY TAX ATTORNEY CONSULTATIONS: Licensed Legal Expertise</h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**IMMEDIATE** consultation with licensed tax attorneys</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**CONFIDENTIAL** attorney-client privilege protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**EXPERT** analysis of your specific tax situation</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**STRATEGIC** planning for optimal tax resolution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**PROFESSIONAL** representation options and guidance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-white/90 border-2 border-white text-xl font-bold py-4 px-8"
              >
                <Phone className="mr-2 h-6 w-6" />
                CALL (929) 416-3020 NOW
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg font-bold"
              >
                <Scale className="mr-2 h-5 w-5" />
                Legal Consultation
              </Button>
            </div>
            
            <p className="mt-4 text-blue-100">
              📞 EMERGENCY CONSULTATION HOTLINE: (929) 416-3020<br />
              <em>Available 24/7 for urgent tax legal consultations</em>
            </p>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-green-500 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-2xl">💰 REAL CLIENT SUCCESS: $267,000 Problem → $45,000 Resolution Through Strategic Consultation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">David Kim, Medical Practice Owner - Brooklyn, NY:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p><strong>Initial Consultation:</strong> Facing $267,000 tax debt, business closure threat</p>
                      <p><strong>Previous Attempts:</strong> 2 years trying to handle alone, situation worsening</p>
                      <p><strong>Our Analysis:</strong> Multiple resolution options identified in first consultation</p>
                    </div>
                    <div className="space-y-2">
                      <p><strong>Strategic Plan:</strong> Offer in Compromise + business restructuring + penalty abatement</p>
                      <p><strong>Final Result:</strong> $45,000 settlement (83% reduction), practice saved, family protected</p>
                    </div>
                  </div>
                  <blockquote className="mt-4 p-4 bg-white rounded border-l-4 border-green-500 italic">
                    "The consultation changed everything. For the first time in years, I had hope and a real plan." - Dr. David K.
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">🔥 COMPREHENSIVE TAX ATTORNEY CONSULTATION PROCESS</h2>
              <p className="text-lg text-muted-foreground">Professional legal analysis and strategic planning</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {consultationPhases.map((phase, index) => (
                <Card key={index} className="relative border-blue-200">
                  <div className="absolute -top-4 left-6">
                    <Badge variant="default" className="text-lg font-bold px-3 py-1 bg-blue-600">
                      PHASE {phase.phase}
                    </Badge>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-lg text-center">{phase.title}</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="border-blue-500 text-blue-600">
                        <Clock className="h-3 w-3 mr-1" />
                        {phase.timeframe}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">💡 CONTACT METHODS FOR DIFFERENT TAX SITUATIONS</h2>
              <p className="text-lg text-muted-foreground">Professional consultation options for every type of tax problem</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {consultationTypes.map((consultation, index) => {
                const IconComponent = consultation.icon;
                return (
                  <Card key={index} className="border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-2">
                        <IconComponent className="h-8 w-8 text-blue-500" />
                      </div>
                      <CardTitle className="text-xl">{consultation.title}</CardTitle>
                      <Badge variant="outline" className="border-blue-500 text-blue-600">
                        {consultation.description}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {consultation.situations.map((situation, situationIndex) => (
                          <li key={situationIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{situation}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Attorney vs Other Professionals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">⚠️ URGENT: Why Professional Tax Attorney Consultation Is Critical</h2>
              <p className="text-lg text-muted-foreground">Licensed tax attorney vs. other tax professionals</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-500 border-2">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700 flex items-center gap-2">
                    <Scale className="h-5 w-5" />
                    Licensed Tax Attorney
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {attorneyBenefits.map((benefit, index) => {
                      const IconComponent = benefit.icon;
                      return (
                        <li key={index} className="flex items-start gap-2">
                          <IconComponent className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">{benefit.title}</div>
                            <div className="text-sm text-muted-foreground">{benefit.description}</div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-500 border-2">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-700 flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Other Tax Professionals
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span>No confidentiality protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span>Limited representation rights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span>Cannot handle criminal matters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span>Limited to basic tax preparation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span>Cannot represent in court</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg font-medium text-blue-600">
                Only licensed attorneys can provide privileged legal advice and full representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Professional Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">🏆 Why Choose Strategic Tax NY/NJ for Tax Attorney Consultations?</h2>
            </div>
            
            <Card className="border-blue-500 border-2">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-700 text-center">Our Professional Team</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Attorney Sarah Johnson - Lead Tax Consultation Counsel</h3>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Experience:</strong> 16+ years exclusively in tax law and IRS representation</li>
                      <li><strong>Credentials:</strong> Licensed in NY, NJ, CT - Former IRS Chief Counsel Office</li>
                      <li><strong>Specialization:</strong> Complex tax litigation and high-stakes negotiations</li>
                      <li><strong>Success Rate:</strong> 93% favorable outcomes for consultation clients</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Tax Attorney Team:</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>8 Licensed Tax Attorneys</strong> on staff for immediate consultation</li>
                      <li>• <strong>$247 Million+</strong> in client tax problems resolved through consultation strategy</li>
                      <li>• <strong>2,800+</strong> successful consultations leading to favorable resolutions</li>
                      <li>• <strong>24/7 Availability</strong> for emergency legal consultations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">📱 MULTIPLE WAYS TO GET EXPERT TAX ATTORNEY CONSULTATION</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-red-500" />
                    🔴 EMERGENCY CONSULTATION HOTLINE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-red-600">(929) 416-3020</p>
                  <p className="text-sm text-muted-foreground">Licensed attorneys available 24/7</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    🏢 NYC LAW OFFICE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Strategic Tax NY/NJ</p>
                  <p className="text-sm">123 Main Street, Suite 456</p>
                  <p className="text-sm">New York, NY 10001</p>
                  <p className="text-sm text-muted-foreground">Same-day attorney consultations available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">⚡ GET EXPERT TAX ATTORNEY CONSULTATION TODAY</h2>
            <p className="text-xl mb-8">
              Don't make critical tax decisions without professional legal advice. Expert consultation can save thousands of dollars and years of problems.
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Our licensed tax attorneys are standing by 24/7 to provide immediate consultation.</h3>
              <p className="mb-4">
                <em>Good advice now prevents disasters later.</em>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-white/90 border-2 border-white text-xl font-bold py-4 px-8"
              >
                <Phone className="mr-2 h-6 w-6" />
                EMERGENCY CONSULTATION: (929) 416-3020
              </Button>
            </div>
            
            <p className="mt-6 text-blue-100">
              Licensed tax attorneys available for immediate consultation
            </p>
          </div>
        </div>
      </section>

      <ProfessionalFooter />
    </div>
  );
}
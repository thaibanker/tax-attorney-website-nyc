import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Shield, 
  Phone, 
  CheckCircle, 
  Clock,
  Zap,
  Users,
  TrendingDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Tax Relief Help NYC | 24/7 IRS Crisis Response New York",
  description: "Emergency tax relief help available 24/7 in NYC. Immediate IRS crisis response for wage garnishments, bank levies, asset seizures. Call (929) 416-3020 now.",
  keywords: "emergency tax relief NYC, 24/7 tax help New York, IRS emergency response, tax crisis help Manhattan, emergency tax attorney Brooklyn, immediate tax relief Queens, urgent tax help Bronx"
};

const emergencyTypes = [
  {
    title: "Asset Seizure Emergency",
    description: "Bank accounts, property, business assets taken",
    response: "24-48 Hour Response",
    urgency: "CRITICAL",
    icon: AlertTriangle
  },
  {
    title: "Wage Garnishment Crisis",
    description: "Paycheck being seized, family can't survive", 
    response: "24-48 Hour Response",
    urgency: "CRITICAL",
    icon: TrendingDown
  },
  {
    title: "Business Closure Threat",
    description: "IRS threatening to shut down operations",
    response: "24-48 Hour Response", 
    urgency: "CRITICAL",
    icon: AlertTriangle
  },
  {
    title: "Criminal Investigation",
    description: "IRS-CI investigating for potential prosecution",
    response: "24-48 Hour Response",
    urgency: "CRITICAL", 
    icon: Shield
  }
];

const emergencyPhases = [
  {
    phase: "1",
    title: "IMMEDIATE CRISIS STABILIZATION",
    timeframe: "0-24 Hours",
    description: "Emergency triage of all active tax problems"
  },
  {
    phase: "2", 
    title: "COMPREHENSIVE PROBLEM ANALYSIS",
    timeframe: "24-72 Hours",
    description: "Complete tax history and liability review"
  },
  {
    phase: "3",
    title: "PROFESSIONAL CRISIS RESOLUTION", 
    timeframe: "72+ Hours",
    description: "Simultaneous multi-problem resolution execution"
  }
];

export default function EmergencyTaxReliefHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-yellow-500 text-red-900 font-bold animate-pulse">
              ⚡ 24/7 EMERGENCY RESPONSE
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency Tax Relief Help - Immediate IRS Solutions NYC
            </h1>
            <p className="text-xl mb-8 text-red-100">
              🚨 TAX EMERGENCY? - GET IMMEDIATE PROFESSIONAL RELIEF NOW
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">⚡ 24/7 EMERGENCY TAX CRISIS RESPONSE: All IRS Problems Solved</h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**STOP** all IRS collection actions within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**RESOLVE** any tax crisis regardless of complexity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**PROTECT** all personal and business assets immediately</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**NEGOTIATE** the best possible resolution for your situation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>**GUARANTEE** professional representation throughout crisis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary"
                className="bg-white text-red-600 hover:bg-white/90 border-2 border-white text-xl font-bold py-4 px-8 animate-pulse"
              >
                <Phone className="mr-2 h-6 w-6" />
                EMERGENCY: (929) 416-3020
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 text-lg font-bold"
              >
                <Zap className="mr-2 h-5 w-5" />
                24/7 Crisis Response
              </Button>
            </div>
            
            <p className="mt-4 text-red-100">
              📞 24/7 EMERGENCY TAX CRISIS HOTLINE: (929) 416-3020<br />
              <em>Immediate response for ANY tax emergency</em>
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
                  <Users className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-2xl">💰 REAL CLIENT SUCCESS: Multiple Crisis → Complete Resolution in 60 Days</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Sandra Rodriguez, Real Estate Broker - Manhattan, NY:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p><strong>Crisis Combination:</strong> $89,000 tax debt + wage garnishment + bank levy + audit + criminal investigation threat</p>
                      <p><strong>Timeline:</strong> 6 years of tax problems escalating to crisis level</p>
                      <p><strong>Panic Level:</strong> Couldn't sleep, business failing, marriage stressed</p>
                    </div>
                    <div className="space-y-2">
                      <p><strong>Our Emergency Response:</strong> Complete crisis management in 60 days</p>
                      <p><strong>Final Resolution:</strong> $29,000 settlement, all collection stopped, audit closed favorably, no criminal prosecution</p>
                    </div>
                  </div>
                  <blockquote className="mt-4 p-4 bg-white rounded border-l-4 border-green-500 italic">
                    "I thought my life was over. Strategic Tax NY/NJ handled everything and gave me my life back in 2 months." - Sandra R.
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Response Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">🔥 COMPREHENSIVE EMERGENCY TAX RELIEF PROCESS</h2>
              <p className="text-lg text-muted-foreground">Professional crisis management for any tax emergency</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {emergencyPhases.map((phase, index) => (
                <Card key={index} className="relative border-red-200">
                  <div className="absolute -top-4 left-6">
                    <Badge variant="destructive" className="text-lg font-bold px-3 py-1">
                      PHASE {phase.phase}
                    </Badge>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-lg text-center">{phase.title}</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="border-red-500 text-red-600">
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

      {/* Emergency Situations Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">⚠️ EMERGENCY TAX SITUATIONS - We Handle ALL Crisis Types</h2>
              <p className="text-lg text-muted-foreground">Immediate professional response for every type of tax emergency</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {emergencyTypes.map((emergency, index) => {
                const IconComponent = emergency.icon;
                return (
                  <Card key={index} className="border-t-4 border-t-red-500 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-2">
                        <IconComponent className="h-8 w-8 text-red-500" />
                      </div>
                      <Badge variant="destructive" className="mb-2 font-bold">
                        {emergency.urgency}
                      </Badge>
                      <CardTitle className="text-lg">{emergency.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{emergency.description}</p>
                      <Badge variant="outline" className="w-full justify-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {emergency.response}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Professional vs Alone Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">⚠️ URGENT: Tax Emergencies Require Immediate Professional Help</h2>
              <p className="text-lg text-muted-foreground">Professional emergency response vs. handling alone</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-500 border-2">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Professional Emergency Relief
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Immediate protection for all assets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Expert handling of multiple problems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Strategic resolution planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Legal protection from mistakes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Stress relief and professional support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500 border-2">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-700 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Handling Tax Emergency Alone
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>Continued asset seizure and loss</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>Overwhelmed by complexity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>Random panic-driven responses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>Every action can make it worse</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>Crushing stress and anxiety</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg font-medium text-red-600">
                Tax emergencies handled incorrectly can result in permanent financial destruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning Signs */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-red-700">🚨 SIGNS YOU NEED EMERGENCY TAX RELIEF</h2>
              <p className="text-lg text-muted-foreground">Call immediately if you have any of these warning signs</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-500 border-2">
                <CardHeader className="bg-red-100">
                  <CardTitle className="text-red-700">IMMEDIATE EMERGENCY SIGNALS:</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>**IRS agents at your door or business**</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>**Bank accounts frozen or seized**</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>**Wages being garnished**</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>**Business operations threatened with shutdown**</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>**Criminal investigation letter received**</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span>**Can't sleep or function due to tax stress**</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-500 border-2">
                <CardHeader className="bg-orange-100">
                  <CardTitle className="text-orange-700">DON'T WAIT DURING TAX EMERGENCIES</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">Tax emergencies are like medical emergencies - immediate professional intervention can save everything, but delay can result in permanent damage or destruction.</p>
                  <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                    <p className="font-medium">🔥 DON'T WAIT - TAX EMERGENCIES GET WORSE EVERY DAY</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">⚡ GET EMERGENCY TAX RELIEF NOW</h2>
            <p className="text-xl mb-8">
              Don't let tax problems destroy your life, business, or family. Emergency tax relief is available 24/7 for ANY tax crisis.
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Our emergency tax team is standing by RIGHT NOW to save your financial life.</h3>
              <p className="mb-4">
                <em>This is your emergency. This is our specialty.</em>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary"
                className="bg-white text-red-600 hover:bg-white/90 border-2 border-white text-xl font-bold py-4 px-8 animate-pulse"
              >
                <Phone className="mr-2 h-6 w-6" />
                24/7 EMERGENCY: (929) 416-3020
              </Button>
            </div>
            
            <p className="mt-6 text-red-100">
              Available 24/7 for ANY tax emergency
            </p>
          </div>
        </div>
      </section>

      <ProfessionalFooter />
    </div>
  );
}
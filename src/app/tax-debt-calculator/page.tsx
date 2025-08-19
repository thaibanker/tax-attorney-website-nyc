"use client"

import { useState } from "react";
import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ContactFormModal } from "@/components/contact-form-modal";
import { 
  Calculator,
  Phone,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  MessageCircle,
  TrendingDown,
  Shield,
  Target,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Tax Debt Calculator - Estimate Your Tax Resolution Options NYC NJ",
  description: "Free tax debt calculator to estimate your Offer in Compromise, payment plan options, and potential savings. Instant results for NYC, NJ, CT taxpayers. Call +1 929 416 3020",
  keywords: "tax debt calculator, offer in compromise calculator, tax resolution calculator, tax debt estimate, IRS debt calculator NYC NJ CT",
};

export default function TaxDebtCalculatorPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    totalTaxDebt: '',
    monthlyIncome: '',
    monthlyExpenses: '',
    assetValue: '',
    filingStatus: 'single',
    dependents: ''
  });

  const [results, setResults] = useState<{
    oicEstimate: number;
    monthlyPayment: number;
    potentialSavings: number;
    recommendedOption: string;
  } | null>(null);

  const calculateResults = () => {
    const debt = parseFloat(formData.totalTaxDebt) || 0;
    const income = parseFloat(formData.monthlyIncome) || 0;
    const expenses = parseFloat(formData.monthlyExpenses) || 0;
    const assets = parseFloat(formData.assetValue) || 0;
    const dependents = parseInt(formData.dependents) || 0;

    // Disposable income calculation
    const disposableIncome = Math.max(0, income - expenses);
    
    // Basic OIC calculation (simplified)
    const livingAllowances = 3000 + (dependents * 500); // Simplified allowances
    const futureIncome = Math.max(0, (income - livingAllowances)) * 12; // 12 months future income potential
    const assetEquity = Math.max(0, assets - 10000); // Simplified asset calculation
    const oicEstimate = Math.max(assetEquity + futureIncome, debt * 0.05); // Minimum 5% of debt
    
    // Monthly payment estimate (if not OIC eligible)
    const monthlyPayment = Math.min(disposableIncome * 0.8, debt / 72); // Max 72 months
    
    // Potential savings
    const potentialSavings = debt - oicEstimate;
    
    // Recommendation logic
    let recommendedOption = '';
    if (oicEstimate < debt * 0.3) {
      recommendedOption = 'Offer in Compromise - Excellent candidate for major debt reduction';
    } else if (disposableIncome > debt / 72) {
      recommendedOption = 'Installment Agreement - Manageable monthly payments';
    } else if (disposableIncome <= 0) {
      recommendedOption = 'Currently Not Collectible - Temporary relief from collection';
    } else {
      recommendedOption = 'Partial Payment Plan - Reduced monthly payments';
    }

    setResults({
      oicEstimate: Math.round(oicEstimate),
      monthlyPayment: Math.round(monthlyPayment),
      potentialSavings: Math.round(potentialSavings),
      recommendedOption
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <div className="min-h-screen bg-background">
        <ProfessionalHeader />
        
        <main>
          {/* Alert Banner */}
          <div className="bg-primary text-primary-foreground py-3">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-2 text-sm font-medium">
                <Calculator className="h-4 w-4" />
                <span>Free Tax Debt Calculator - Get Instant Debt Resolution Estimates</span>
                <Phone className="h-4 w-4" />
                <span className="font-bold">+1 929 416 3020</span>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                  <Calculator className="mr-1 h-3 w-3" />
                  Free Calculation Tool
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Tax Debt Calculator
                </h1>
                <p className="text-2xl lg:text-3xl mb-6 font-semibold">
                  Discover Your Tax Resolution Options - Get Instant Estimates
                </p>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Use our free calculator to estimate your Offer in Compromise potential, 
                  payment plan options, and total savings opportunities.
                </p>
                
                {/* Calculator Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">FREE</div>
                    <div className="text-sm opacity-90">No Cost Calculator</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">INSTANT</div>
                    <div className="text-sm opacity-90">Immediate Results</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">ACCURATE</div>
                    <div className="text-sm opacity-90">IRS Formula Based</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">PRIVATE</div>
                    <div className="text-sm opacity-90">Secure & Confidential</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Input Form */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary flex items-center gap-2">
                        <Calculator className="h-6 w-6" />
                        Enter Your Information
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Provide your financial details for accurate tax resolution estimates
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label htmlFor="totalTaxDebt">Total Tax Debt Owed</Label>
                        <Input
                          id="totalTaxDebt"
                          type="number"
                          placeholder="$50,000"
                          value={formData.totalTaxDebt}
                          onChange={(e) => handleInputChange('totalTaxDebt', e.target.value)}
                          className="text-lg"
                        />
                      </div>

                      <div>
                        <Label htmlFor="monthlyIncome">Monthly Gross Income</Label>
                        <Input
                          id="monthlyIncome"
                          type="number"
                          placeholder="$8,000"
                          value={formData.monthlyIncome}
                          onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                          className="text-lg"
                        />
                      </div>

                      <div>
                        <Label htmlFor="monthlyExpenses">Monthly Living Expenses</Label>
                        <Input
                          id="monthlyExpenses"
                          type="number"
                          placeholder="$6,500"
                          value={formData.monthlyExpenses}
                          onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
                          className="text-lg"
                        />
                      </div>

                      <div>
                        <Label htmlFor="assetValue">Total Asset Value</Label>
                        <Input
                          id="assetValue"
                          type="number"
                          placeholder="$150,000"
                          value={formData.assetValue}
                          onChange={(e) => handleInputChange('assetValue', e.target.value)}
                          className="text-lg"
                        />
                      </div>

                      <div>
                        <Label htmlFor="dependents">Number of Dependents</Label>
                        <Input
                          id="dependents"
                          type="number"
                          placeholder="2"
                          value={formData.dependents}
                          onChange={(e) => handleInputChange('dependents', e.target.value)}
                          className="text-lg"
                        />
                      </div>

                      <Button 
                        onClick={calculateResults}
                        className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
                        size="lg"
                      >
                        <Calculator className="mr-2 h-5 w-5" />
                        Calculate My Tax Resolution Options
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Results */}
                  <Card className="border-success/20">
                    <CardHeader>
                      <CardTitle className="text-2xl text-success flex items-center gap-2">
                        <Target className="h-6 w-6" />
                        Your Estimated Results
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {results ? "Based on your information:" : "Enter your details to see estimates"}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {results ? (
                        <>
                          <div className="bg-success/5 rounded-lg p-6">
                            <h3 className="font-bold text-lg text-success mb-2">Offer in Compromise Estimate</h3>
                            <div className="text-3xl font-bold text-success">
                              ${results.oicEstimate.toLocaleString()}
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              Potential settlement amount with the IRS
                            </p>
                          </div>

                          <div className="bg-primary/5 rounded-lg p-6">
                            <h3 className="font-bold text-lg text-primary mb-2">Potential Savings</h3>
                            <div className="text-3xl font-bold text-primary">
                              ${results.potentialSavings.toLocaleString()}
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              Money you could save with professional help
                            </p>
                          </div>

                          <div className="bg-warning/5 rounded-lg p-6">
                            <h3 className="font-bold text-lg text-warning mb-2">Monthly Payment Option</h3>
                            <div className="text-3xl font-bold text-warning">
                              ${results.monthlyPayment.toLocaleString()}
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              Estimated installment agreement payment
                            </p>
                          </div>

                          <div className="bg-destructive/5 rounded-lg p-6 border-l-4 border-destructive">
                            <h3 className="font-bold text-lg text-destructive mb-2">Recommended Option</h3>
                            <p className="text-sm">{results.recommendedOption}</p>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-12">
                          <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">
                            Enter your financial information to see personalized tax resolution estimates
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Important Disclaimer */}
          <section className="py-12 bg-warning/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="border-warning/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-warning">
                      <AlertTriangle className="h-5 w-5" />
                      Important Calculator Disclaimer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      <strong>These are estimates only.</strong> Actual results depend on many factors including your complete financial situation, 
                      IRS policies, and specific circumstances of your case.
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Offer in Compromise approval rates vary and require detailed financial analysis</li>
                      <li>IRS may require additional documentation and verification</li>
                      <li>Payment plans depend on current IRS collection policies</li>
                      <li>Professional representation significantly improves success rates</li>
                    </ul>
                    <div className="bg-primary/10 rounded-lg p-4 mt-4">
                      <p className="font-semibold text-primary">
                        For accurate assessment and professional representation, contact our tax resolution experts today.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <Shield className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">
                READY TO TAKE ACTION ON YOUR TAX DEBT?
              </h2>
              <p className="text-2xl mb-8 font-semibold">
                Get professional help to turn these estimates into real tax savings.
              </p>
              <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-8">
                <p className="text-3xl font-bold mb-2">CALL +1 929 416 3020 NOW</p>
                <p className="text-xl">Tax Resolution Specialists</p>
                <Separator className="my-4 bg-white/20" />
                <p className="text-lg">Free Consultation • Same-Day Response • NYC, NJ, CT</p>
                <p className="text-sm mt-2 opacity-90">Turn calculator estimates into real tax relief</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Tax Resolution Experts
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-primary-foreground hover:bg-white/10 border-2 border-white"
                  onClick={() => setIsModalOpen(true)}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Professional Consultation
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <ProfessionalFooter />
      </div>
    </>
  );
}
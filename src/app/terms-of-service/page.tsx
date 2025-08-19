import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Scale, FileText, AlertTriangle, DollarSign, Shield, Clock, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Strategic Tax NY/NJ | Tax Representation Agreement",
  description: "Terms of Service for Strategic Tax NY/NJ tax representation services. Client agreements, service limitations, and legal terms.",
  keywords: "terms of service, tax attorney agreement, legal terms, client responsibilities, service limitations",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Scale className="h-10 w-10 text-primary" />
                <h1 className="text-4xl font-bold text-primary">Terms of Service</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Effective Date: January 1, 2025 | Last Updated: January 18, 2025
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  These Terms of Service ("Terms") govern your use of Strategic Tax NY/NJ's website and services. By accessing 
                  our website or engaging our services, you agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p>
                  If you do not agree to these Terms, you may not use our website or services. We reserve the right to modify 
                  these Terms at any time, and such modifications will be effective immediately upon posting.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Services Provided</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Strategic Tax NY/NJ provides professional tax representation and resolution services, including:</p>
                <ul className="space-y-2">
                  <li>• IRS audit defense and representation</li>
                  <li>• Tax debt relief and resolution services</li>
                  <li>• Penalty abatement and interest relief</li>
                  <li>• Offer in Compromise negotiations</li>
                  <li>• Currently Not Collectible status applications</li>
                  <li>• Installment agreement negotiations</li>
                  <li>• Trust Fund Recovery Penalty defense</li>
                  <li>• Criminal tax defense</li>
                  <li>• Business tax problem resolution</li>
                  <li>• Tax planning and compliance services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  No Guarantee of Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong>IMPORTANT:</strong> While we will use our best professional efforts to represent your interests, 
                  we cannot and do not guarantee any specific outcome or result. Tax matters involve complex legal and factual 
                  issues, and results depend on many factors beyond our control.
                </p>
                <ul className="space-y-2">
                  <li>• IRS and state tax agency decisions are beyond our control</li>
                  <li>• Each case is unique and past results do not guarantee future outcomes</li>
                  <li>• Success depends on accurate information provided by clients</li>
                  <li>• Settlement amounts and payment plans are subject to agency approval</li>
                  <li>• Penalty abatement success depends on qualifying circumstances</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Client Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>As our client, you agree to:</p>
                <ul className="space-y-2">
                  <li>• Provide complete, accurate, and truthful information</li>
                  <li>• Submit all requested documents and records promptly</li>
                  <li>• Respond to our communications in a timely manner</li>
                  <li>• Pay all fees and costs as agreed</li>
                  <li>• Comply with all tax obligations going forward</li>
                  <li>• Notify us of any changes in your financial situation</li>
                  <li>• Follow our advice and recommendations</li>
                  <li>• Maintain confidentiality of strategy discussions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Fees and Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Fee Structure</h3>
                  <ul className="space-y-2">
                    <li>• Consultation fees: As agreed during initial consultation</li>
                    <li>• Flat fees: For specific services as outlined in engagement letter</li>
                    <li>• Hourly rates: For complex matters requiring extended representation</li>
                    <li>• Retainer fees: May be required for ongoing representation</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Payment Terms</h3>
                  <ul className="space-y-2">
                    <li>• Payment is due upon signing of engagement letter unless other arrangements are made</li>
                    <li>• Monthly payment plans may be available with approved credit</li>
                    <li>• All fees are earned when services are performed</li>
                    <li>• Refunds are provided only for unearned fees</li>
                    <li>• Interest may be charged on past due accounts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Termination of Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Client Termination</h3>
                  <p>
                    You may terminate our services at any time by providing written notice. You will be responsible for 
                    payment of all services performed up to the termination date.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Our Right to Terminate</h3>
                  <p>We may terminate our representation if:</p>
                  <ul className="space-y-2 mt-2">
                    <li>• Fees are not paid as agreed</li>
                    <li>• You fail to provide necessary information or documentation</li>
                    <li>• You fail to follow our advice on material matters</li>
                    <li>• A conflict of interest arises</li>
                    <li>• You engage in conduct that we believe is illegal or unethical</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Confidentiality and Attorney-Client Privilege
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We maintain strict confidentiality of all client information and communications. Information shared with 
                  us for the purpose of legal representation is protected by attorney-client privilege, except:
                </p>
                <ul className="space-y-2">
                  <li>• When disclosure is required by law or court order</li>
                  <li>• When you waive the privilege</li>
                  <li>• When disclosure is necessary to prevent imminent harm</li>
                  <li>• When disclosure is necessary to defend against claims you bring against us</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
                </p>
                <ul className="space-y-2">
                  <li>• Our liability is limited to the amount of fees you paid for services</li>
                  <li>• We are not liable for consequential, incidental, or punitive damages</li>
                  <li>• We are not liable for results beyond our reasonable control</li>
                  <li>• Our liability does not extend to actions of government agencies</li>
                  <li>• Time limitations apply to any claims against us</li>
                </ul>
                <p className="mt-4">
                  <strong>Some states do not allow the exclusion or limitation of certain damages, so some of the above 
                  limitations may not apply to you.</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Website Use and Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Permitted Use</h3>
                  <p>
                    You may use our website for informational purposes only. You may not copy, distribute, transmit, 
                    display, perform, reproduce, publish, license, modify, create derivative works from, transfer, or 
                    sell any content without our written permission.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Prohibited Activities</h3>
                  <ul className="space-y-2">
                    <li>• Attempting to gain unauthorized access to our systems</li>
                    <li>• Using our website for any illegal purpose</li>
                    <li>• Transmitting viruses or malicious code</li>
                    <li>• Interfering with the proper functioning of our website</li>
                    <li>• Harvesting or collecting user information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">No Attorney-Client Relationship</h3>
                  <p>
                    Visiting our website or contacting us does not create an attorney-client relationship. An attorney-client 
                    relationship is established only when we agree in writing to represent you.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">General Information Only</h3>
                  <p>
                    Information on our website is for general informational purposes only and should not be considered 
                    legal advice. Tax laws are complex and constantly changing. You should not rely on general information 
                    for specific situations.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Third-Party Links</h3>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the content, 
                    privacy practices, or terms of use of any third-party websites.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Statute of Limitations
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Any claim against us must be brought within one (1) year of the date when you knew or should have 
                  known of the facts giving rise to the claim. This limitation period applies regardless of the form 
                  of action, whether in contract, tort, or otherwise.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Any disputes arising under these Terms or our representation will be resolved through:
                </p>
                <ol className="space-y-2">
                  <li>1. <strong>Direct Discussion:</strong> Good faith effort to resolve disputes directly</li>
                  <li>2. <strong>Mediation:</strong> Binding mediation if direct discussion fails</li>
                  <li>3. <strong>Arbitration:</strong> Binding arbitration if mediation fails</li>
                </ol>
                <p className="mt-4">
                  Disputes will be governed by the laws of New York State, without regard to conflict of law principles.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Severability and Entire Agreement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain 
                  in full force and effect. These Terms, together with our Privacy Policy and any signed engagement 
                  letter, constitute the entire agreement between us.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Questions about these Terms of Service? Contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>info@strategictaxnynj.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+1 929 416 3020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>NYC & Tri-State Area (NY, NJ, CT)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Monday - Friday: 9:00 AM - 7:00 PM EST</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
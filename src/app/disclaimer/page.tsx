import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, FileText, Scale, Globe, Eye, Shield, Clock, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer - Strategic Tax NY/NJ | Tax Attorney Disclaimers",
  description: "Legal disclaimers for Strategic Tax NY/NJ tax representation services. Important legal notices and limitations.",
  keywords: "legal disclaimer, tax attorney disclaimer, professional liability, legal notices, tax representation limitations",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <AlertTriangle className="h-10 w-10 text-warning" />
                <h1 className="text-4xl font-bold text-primary">Legal Disclaimer</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Important Legal Notices and Limitations
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Last Updated: January 18, 2025
              </p>
            </div>

            <Card className="mb-8 border-warning/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <AlertTriangle className="h-5 w-5" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-semibold text-foreground">
                  READ CAREFULLY: The information contained on this website and in our communications is provided for 
                  general informational purposes only and should not be construed as legal advice.
                </p>
                <p className="text-muted-foreground">
                  Each tax situation is unique and complex. The information provided may not apply to your specific 
                  circumstances. You should not rely on general information for making decisions about your tax matters. 
                  Always consult with a qualified tax attorney for advice specific to your situation.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  No Attorney-Client Relationship
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Viewing this website, submitting information through contact forms, or communicating with us 
                  does not create an attorney-client relationship.</strong> An attorney-client relationship is established 
                  only when:
                </p>
                <ul className="space-y-2">
                  <li>• We agree in writing to represent you</li>
                  <li>• You sign a formal engagement letter or retainer agreement</li>
                  <li>• We confirm our representation in writing</li>
                  <li>• Fees are paid or arrangements are made as agreed</li>
                </ul>
                <p className="mt-4 font-semibold text-warning">
                  Until an attorney-client relationship is formally established, any information you provide may not be 
                  protected by attorney-client privilege.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  No Guarantee of Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong>We cannot and do not guarantee any specific outcome or result in tax matters.</strong> While we 
                  will use our best professional efforts to represent your interests, success in tax representation depends 
                  on many factors, including:
                </p>
                <ul className="space-y-2">
                  <li>• The specific facts and circumstances of your case</li>
                  <li>• IRS or state agency policies and procedures</li>
                  <li>• Changes in tax laws and regulations</li>
                  <li>• The accuracy and completeness of information provided</li>
                  <li>• Economic and political factors beyond our control</li>
                  <li>• The discretion of tax agency personnel</li>
                </ul>
                <p className="mt-4 font-semibold text-destructive">
                  Past results do not guarantee, warrant, or predict future outcomes. Each case is unique and must be 
                  evaluated on its own merits.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Case Results and Testimonials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Any case results, success stories, or client testimonials mentioned on this website represent outcomes 
                  in specific cases and should not be taken as a promise or guarantee of similar results in your case.
                </p>
                <ul className="space-y-2">
                  <li>• Results shown are for specific cases with unique facts</li>
                  <li>• Your case may have different facts and circumstances</li>
                  <li>• Settlement amounts depend on individual financial circumstances</li>
                  <li>• IRS and state agencies make independent decisions</li>
                  <li>• Success rates are estimates based on historical data</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Website Information Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  While we strive to keep the information on our website current and accurate, we make no representations 
                  or warranties of any kind about:
                </p>
                <ul className="space-y-2">
                  <li>• The completeness, accuracy, reliability, or suitability of the information</li>
                  <li>• The availability or functionality of the website</li>
                  <li>• The currency of tax law information presented</li>
                  <li>• Links to third-party websites or resources</li>
                </ul>
                <p className="mt-4">
                  Tax laws change frequently, and information may become outdated. Always verify current law with qualified 
                  professionals before making decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Third-Party Links and References</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our website may contain links to third-party websites, resources, or references to other professionals 
                  or organizations. These links and references are provided for convenience only.
                </p>
                <ul className="space-y-2">
                  <li>• We do not endorse or control third-party content</li>
                  <li>• We are not responsible for third-party privacy practices</li>
                  <li>• Third-party information may be inaccurate or outdated</li>
                  <li>• Links may become broken or unavailable</li>
                </ul>
                <p className="mt-4">
                  Use of third-party websites is at your own risk and subject to their terms and conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Professional Conduct and Ethics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We are committed to maintaining the highest standards of professional conduct and ethics in accordance with:
                </p>
                <ul className="space-y-2">
                  <li>• New York State Bar Association Rules of Professional Conduct</li>
                  <li>• New Jersey Rules of Professional Conduct</li>
                  <li>• American Bar Association Model Rules</li>
                  <li>• Treasury Circular 230 (Practice Before the IRS)</li>
                  <li>• All applicable state and federal regulations</li>
                </ul>
                <p className="mt-4">
                  Any concerns about professional conduct should be directed to the appropriate state bar association 
                  disciplinary authority.
                </p>
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
                  <li>• We disclaim all warranties, express or implied</li>
                  <li>• We are not liable for any indirect, incidental, special, or consequential damages</li>
                  <li>• Our liability is limited to the fees paid for our services</li>
                  <li>• We are not responsible for decisions made by tax agencies</li>
                  <li>• We are not liable for website errors, omissions, or technical issues</li>
                </ul>
                <p className="mt-4 text-sm">
                  Some jurisdictions do not allow the exclusion or limitation of certain damages, so some limitations 
                  may not apply to you.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Privacy and Confidentiality
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  While we maintain strict confidentiality policies, please be aware that:
                </p>
                <ul className="space-y-2">
                  <li>• Email and website communications may not be secure</li>
                  <li>• Information sent through contact forms may not be privileged</li>
                  <li>• Public Wi-Fi and unsecured networks pose risks</li>
                  <li>• Third-party service providers may have access to certain information</li>
                </ul>
                <p className="mt-4">
                  For sensitive matters, contact us directly by phone to discuss secure communication methods.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Advertising and Marketing Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  This website and our marketing materials comply with applicable attorney advertising rules, including:
                </p>
                <ul className="space-y-2">
                  <li>• New York Attorney Advertising Rules</li>
                  <li>• New Jersey Attorney Advertising Guidelines</li>
                  <li>• Connecticut Professional Conduct Rules</li>
                  <li>• American Bar Association Model Rules</li>
                </ul>
                <p className="mt-4 font-semibold text-warning">
                  This website may be considered attorney advertising under applicable rules.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Time Limitations
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  <strong>Important:</strong> Tax matters are subject to strict deadlines and statutes of limitations. 
                  Failure to act within required time periods can result in loss of rights and additional penalties.
                </p>
                <p className="mt-4 font-semibold text-destructive">
                  Do not delay in seeking professional assistance if you have tax problems. Time is often critical in 
                  tax matters, and waiting can limit your options and increase your liability.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Jurisdiction and Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  These disclaimers and any disputes arising from the use of this website or our services shall be 
                  governed by the laws of New York State, without regard to conflict of law principles.
                </p>
                <p>
                  Any legal proceedings must be brought in the appropriate courts of New York State or the United States 
                  District Court for the Southern District of New York.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Severability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  If any provision of this disclaimer is held to be invalid, illegal, or unenforceable, the validity, 
                  legality, and enforceability of the remaining provisions shall not be affected or impaired.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Changes to This Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  We reserve the right to modify this disclaimer at any time. Changes will be posted on this page with 
                  an updated revision date. Your continued use of our website after changes are posted constitutes your 
                  acceptance of the modified disclaimer.
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
                  Questions about this disclaimer or our services? Contact us:
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
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  <strong>Emergency Tax Matters:</strong> If you have received IRS notices with immediate deadlines or are 
                  facing imminent collection actions, contact us immediately. Time-sensitive matters require prompt attention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
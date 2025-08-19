import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Eye, UserCheck, FileText, Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Strategic Tax NY/NJ | Tax Representation Services",
  description: "Privacy Policy for Strategic Tax NY/NJ. Learn how we protect your personal and financial information in our tax representation services.",
  keywords: "privacy policy, data protection, tax attorney privacy, confidential information, GDPR, CCPA",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="h-10 w-10 text-primary" />
                <h1 className="text-4xl font-bold text-primary">Privacy Policy</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Effective Date: January 1, 2025 | Last Updated: January 18, 2025
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Strategic Tax NY/NJ ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website or use our tax representation services.
                </p>
                <p>
                  By using our services, you consent to the data practices described in this policy. If you do not agree with 
                  the terms of this privacy policy, please do not access our website or use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Name, address, email address, and phone number</li>
                    <li>• Social Security Number and Tax Identification Numbers</li>
                    <li>• Financial information including income, assets, and tax debt details</li>
                    <li>• Tax returns and IRS correspondence</li>
                    <li>• Employment and business information</li>
                    <li>• Bank account and payment information</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• IP address and browser type</li>
                    <li>• Device information and operating system</li>
                    <li>• Pages visited and time spent on our website</li>
                    <li>• Referring website addresses</li>
                    <li>• Location data (country/state level only)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="space-y-2">
                  <li>• Provide tax representation and resolution services</li>
                  <li>• Communicate with the IRS and state tax authorities on your behalf</li>
                  <li>• Prepare and file necessary tax documents and appeals</li>
                  <li>• Respond to your inquiries and provide customer support</li>
                  <li>• Send administrative information and service updates</li>
                  <li>• Comply with legal obligations and court orders</li>
                  <li>• Improve our website and services</li>
                  <li>• Prevent fraud and enhance security</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Information Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
                </p>
                <ul className="space-y-2">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Secure data storage with encryption at rest</li>
                  <li>• Limited access to personal information on a need-to-know basis</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Employee training on data protection and confidentiality</li>
                  <li>• Secure document destruction policies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Information Sharing & Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="space-y-2">
                  <li>• <strong>With your consent:</strong> When you authorize us to share information with specific parties</li>
                  <li>• <strong>Tax authorities:</strong> As required to represent you before the IRS and state tax agencies</li>
                  <li>• <strong>Service providers:</strong> Third-party vendors who assist in providing our services (under strict confidentiality agreements)</li>
                  <li>• <strong>Legal requirements:</strong> When required by law, court order, or government request</li>
                  <li>• <strong>Protection of rights:</strong> To protect our rights, property, or safety, or that of others</li>
                  <li>• <strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your Rights & Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="space-y-2">
                  <li>• <strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                  <li>• <strong>Opt-out:</strong> Opt-out of marketing communications at any time</li>
                  <li>• <strong>Portability:</strong> Request your data in a portable format</li>
                  <li>• <strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <strong>info@strategictaxnynj.com</strong> or call <strong>+1 929 416 3020</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Cookies & Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small 
                  data files stored on your device that help us:
                </p>
                <ul className="space-y-2">
                  <li>• Remember your preferences and settings</li>
                  <li>• Understand how you use our website</li>
                  <li>• Improve website functionality and performance</li>
                  <li>• Provide relevant content and services</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may limit your ability to 
                  use certain features of our website.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Attorney-Client Privilege</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Communications between you and our attorneys may be protected by attorney-client privilege. This privilege 
                  protects confidential communications made for the purpose of seeking or providing legal advice. We maintain 
                  the confidentiality of all privileged communications in accordance with applicable law and professional ethics rules.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We retain your personal information for as long as necessary to provide our services and comply with legal 
                  obligations. Generally, we retain:
                </p>
                <ul className="space-y-2">
                  <li>• Tax records and related documents: Minimum of 7 years</li>
                  <li>• Client communication records: 7 years after case closure</li>
                  <li>• Financial transaction records: As required by law</li>
                  <li>• Marketing preferences: Until you opt-out</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal 
                  information from children. If we become aware that we have collected information from a child under 18, we 
                  will take steps to delete such information promptly.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>California Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  California residents have additional rights under the California Consumer Privacy Act (CCPA), including the 
                  right to know what personal information is collected, the right to delete personal information, the right to 
                  opt-out of the sale of personal information (which we do not do), and the right to non-discrimination for 
                  exercising privacy rights.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy 
                  Policy periodically for any changes.
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
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
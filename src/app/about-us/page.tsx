import type { Metadata } from "next";
import { ProfessionalHeader } from "@/components/professional-header";
import { ProfessionalFooter } from "@/components/professional-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  MapPin, 
  Phone,
  CheckCircle,
  Star,
  Building2,
  Scale
} from "lucide-react";

export const metadata: Metadata = {
  title: "About NYC Tax Representation Experts | Licensed Tax Professionals New York, New Jersey, Connecticut",
  description: "Meet our licensed tax professionals serving NYC, Manhattan, Brooklyn, Queens, Bronx, Staten Island, New Jersey & Connecticut. 20+ years of tax representation experience in the Tristate area.",
  keywords: "about NYC tax professionals, licensed tax attorneys New York, enrolled agents NYC, tax representation firm Manhattan, NYC tax experts, Tristate tax professionals, experienced tax lawyers New York, certified tax specialists NYC",
};

const teamStats = [
  { number: "20+", label: "Years Experience", icon: Award },
  { number: "5,000+", label: "Cases Resolved", icon: CheckCircle },
  { number: "98%", label: "Client Satisfaction", icon: Star },
  { number: "24/7", label: "Support Available", icon: Phone }
];

const credentials = [
  "Licensed Tax Attorneys",
  "Certified Enrolled Agents", 
  "CPA Tax Specialists",
  "Former IRS Agents",
  "NY, NJ, CT Bar Admissions",
  "Federal Tax Court Experience"
];

const serviceAreas = [
  { area: "Manhattan", specialties: ["Financial District", "Midtown", "Upper East/West Side"] },
  { area: "Brooklyn", specialties: ["DUMBO", "Park Slope", "Williamsburg", "Bay Ridge"] },
  { area: "Queens", specialties: ["Astoria", "Flushing", "Forest Hills", "Long Island City"] },
  { area: "Bronx", specialties: ["Riverdale", "South Bronx", "Fordham", "Throggs Neck"] },
  { area: "Staten Island", specialties: ["St. George", "New Dorp", "Tottenville"] },
  { area: "New Jersey", specialties: ["Bergen County", "Essex County", "Hudson County"] },
  { area: "Connecticut", specialties: ["Fairfield County", "New Haven County", "Hartford County"] }
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
                NYC&apos;s Most Trusted Tax Representation Firm
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Licensed Tax Professionals Serving NYC & Tristate Area Since 2003
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Our team of licensed attorneys, enrolled agents, and tax specialists has been protecting 
                Manhattan, Brooklyn, Queens, Bronx, Staten Island, New Jersey, and Connecticut taxpayers for over two decades.
              </p>
              
              {/* Team Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {teamStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <IconComponent className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{stat.number}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Protecting NYC Taxpayers Since 2003
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in the heart of Manhattan, our firm has grown to become the Tristate area&apos;s 
                    most trusted tax representation practice. We understand the unique challenges facing 
                    New York City taxpayers, from complex state and local tax obligations to the high-stakes 
                    financial pressures of metropolitan life.
                  </p>
                  <p>
                    Our team combines deep local knowledge with national expertise. We&apos;ve successfully 
                    represented everyone from Wall Street executives to Brooklyn small business owners, 
                    always with the same commitment to achieving the best possible outcome for our clients.
                  </p>
                  <p>
                    What sets us apart is our understanding of the NYC market. We know how tax problems 
                    can impact your ability to maintain your lifestyle in one of the world&apos;s most expensive cities. 
                    That&apos;s why we work around the clock to resolve your tax issues quickly and effectively.
                  </p>
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center text-primary">Our Professional Credentials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {credentials.map((credential, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">{credential}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-success/10 rounded-lg text-center">
                    <Award className="h-8 w-8 mx-auto mb-2 text-success" />
                    <div className="font-semibold text-success">A+ BBB Rating</div>
                    <div className="text-sm text-muted-foreground">20+ Years of Excellence</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Comprehensive NYC & Tristate Area Coverage
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {serviceAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{area.area}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {area.specialties.map((specialty, specIndex) => (
                        <li key={specIndex} className="text-sm text-muted-foreground">
                          • {specialty}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Why NYC Taxpayers Choose Our Firm
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Local NYC Expertise",
                  description: "Deep understanding of NYC, NY State, and Tristate tax laws and procedures",
                  icon: Building2
                },
                {
                  title: "Proven Track Record",
                  description: "Over 5,000 successful cases with a 98% client satisfaction rate",
                  icon: Award
                },
                {
                  title: "24/7 Availability",
                  description: "Emergency support when you need it most, including evenings and weekends",
                  icon: Phone
                },
                {
                  title: "Licensed Professionals",
                  description: "Only work with licensed attorneys, enrolled agents, and certified tax specialists",
                  icon: Scale
                },
                {
                  title: "Personalized Service",
                  description: "Every case is unique, and we develop customized strategies for each client",
                  icon: Users
                },
                {
                  title: "Transparent Pricing",
                  description: "Clear, upfront pricing with no hidden fees or surprise charges",
                  icon: CheckCircle
                }
              ].map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Work with NYC&apos;s Top Tax Professionals?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied clients across Manhattan, Brooklyn, Queens, Bronx, Staten Island, 
              New Jersey, and Connecticut who have successfully resolved their tax problems with our help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Free Consultation
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Learn About Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
}
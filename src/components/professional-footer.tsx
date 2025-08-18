import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Award, Clock, Mail, MapPin, Phone, Shield, Users } from "lucide-react"

export function ProfessionalFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TR</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Tax Representation</h3>
                <p className="text-sm text-primary-foreground/80">Professional Tax Services</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Expert tax representation and IRS audit defense for individuals and businesses 
              in New York, New Jersey, and the Tri-State area.
            </p>
            <div className="flex gap-3">
              <Badge variant="secondary" className="bg-success text-white">
                Licensed Professionals
              </Badge>
              <Badge variant="secondary" className="bg-warning text-white">
                20+ Years Experience
              </Badge>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <nav className="space-y-2">
              {[
                { name: "IRS Audit Defense", href: "/irs-audit-defense" },
                { name: "Tax Debt Relief", href: "/tax-debt-relief" },
                { name: "Wage Garnishment Relief", href: "/wage-garnishment" },
                { name: "Tax Liens & Levies", href: "/tax-liens-levies" },
                { name: "Innocent Spouse Relief", href: "/innocent-spouse-relief" },
                { name: "Unfiled Tax Returns", href: "/unfiled-tax-returns" },
                { name: "Business Tax Issues", href: "/business-services" },
                { name: "Tax Planning", href: "/tax-planning" }
              ].map((service, index) => (
                <a 
                  key={index}
                  href={service.href}
                  className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {service.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm font-medium">+1 929 416 3020</p>
                  <p className="text-xs text-primary-foreground/70">Free Consultation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm">info@strategictaxnynj.com</p>
                  <p className="text-xs text-primary-foreground/70">24/7 Email Support</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm">NYC & Tri-State Area</p>
                  <p className="text-xs text-primary-foreground/70">Serving NY, NJ, CT</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm">Mon-Fri: 9AM-7PM</p>
                  <p className="text-xs text-primary-foreground/70">Emergency Services Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Why Choose Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Licensed & Insured</p>
                  <p className="text-xs text-primary-foreground/70">Full professional credentials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Proven Track Record</p>
                  <p className="text-xs text-primary-foreground/70">Thousands of cases resolved</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Client-Focused Service</p>
                  <p className="text-xs text-primary-foreground/70">Personalized solutions</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-full">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-primary-foreground/80">
            © 2025 Tax Representation Services. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
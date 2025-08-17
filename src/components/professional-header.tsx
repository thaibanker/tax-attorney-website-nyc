"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function ProfessionalHeader() {
  const handleLearnMore = () => {
    window.location.href = '/about-us';
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+19294163020';
  };

  return (
    <header className="bg-white border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 929 416 3020</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@strategictaxnynj.com</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Free Consultation
              </Badge>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">TR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Tax Representation</h1>
                <p className="text-sm text-muted-foreground">Professional Tax & IRS Services</p>
              </div>
            </div>
          </div>

          {/* Location and CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Serving NY, NJ & Tri-State Area</span>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleLearnMore}
                aria-label="Learn more about our company and team"
              >
                Learn More
              </Button>
              <Button 
                size="sm" 
                className="bg-success hover:bg-success/90"
                onClick={handleCallNow}
                aria-label="Call our office now"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:justify-start gap-1 py-3">
            {[
              { name: "Home", href: "/" },
              { name: "Emergency Help", href: "/emergency-tax-attorney" },
              { name: "IRS Audit Help", href: "/irs-audit-help" },
              { name: "Tax Debt Relief", href: "/tax-debt-relief" }, 
              { name: "Wage Garnishment", href: "/wage-garnishment" },
              { name: "Tax Liens & Levies", href: "/tax-liens-levies" },
              { name: "Business Services", href: "/business-services" },
              { name: "About Us", href: "/about-us" },
              { name: "Contact", href: "/contact" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-background rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
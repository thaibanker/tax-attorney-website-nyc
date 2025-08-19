"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactFormModal } from "./contact-form-modal"
import {
    AlertTriangle,
    Calculator,
    CreditCard,
    DollarSign,
    FileText,
    Heart,
    Scale,
    ShieldCheck
} from "lucide-react"

const services = [
  {
    icon: AlertTriangle,
    title: "IRS Audit Defense",
    description: "Expert representation during IRS audits and examinations. We handle all communications with the IRS.",
    features: ["Document preparation", "IRS representation", "Audit resolution"],
    badge: "Most Popular"
  },
  {
    icon: DollarSign,
    title: "Tax Debt Relief",
    description: "Comprehensive solutions for back taxes, including Offers in Compromise and payment plans.",
    features: ["Payment plans", "Offer in Compromise", "Penalty abatement"],
    badge: "High Success Rate"
  },
  {
    icon: Scale,
    title: "Tax Liens & Levies",
    description: "Immediate action to release tax liens and stop wage garnishments or bank levies.",
    features: ["Lien removal", "Levy release", "Asset protection"],
    badge: "Urgent"
  },
  {
    icon: CreditCard,
    title: "Wage Garnishment Relief",
    description: "Stop wage garnishments and bank levies to protect your income and assets.",
    features: ["Immediate relief", "Income protection", "Payment negotiation"],
    badge: "Emergency Service"
  },
  {
    icon: Heart,
    title: "Innocent Spouse Relief",
    description: "Protection for spouses who shouldn't be held responsible for their partner's tax debts.",
    features: ["Liability relief", "Legal protection", "Documentation support"],
    badge: "Specialized"
  },
  {
    icon: FileText,
    title: "Unfiled Tax Returns",
    description: "Preparation and filing of delinquent tax returns with penalty minimization strategies.",
    features: ["Return preparation", "Penalty reduction", "Compliance restoration"],
    badge: "Common Issue"
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Proactive tax strategies to minimize future liabilities and optimize your tax position.",
    features: ["Strategic planning", "Future compliance", "Tax optimization"],
    badge: "Preventive"
  },
  {
    icon: ShieldCheck,
    title: "Business Tax Issues",
    description: "Specialized representation for businesses facing complex tax challenges and compliance issues.",
    features: ["Business audits", "Payroll tax issues", "Corporate compliance"],
    badge: "Business Focus"
  }
]

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <section 
        id="services-section" 
        className="py-16 lg:py-24 bg-secondary/30 scroll-mt-20"
      >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Comprehensive Tax Resolution Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide expert tax representation across all areas of tax law, helping individuals and businesses 
            resolve their tax problems efficiently and effectively.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="relative h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="professional" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Don&apos;t see your specific tax issue? We handle all types of tax problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Schedule Free Consultation
            </button>
            <button 
              onClick={() => window.location.href = '/services'}
              className="border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}
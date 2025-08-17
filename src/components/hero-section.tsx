"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, ChevronDown, Shield, Users } from "lucide-react"
import { ScrollButton } from "./scroll-button"
import { ContactFormModal } from "./contact-form-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Expert Tax & IRS Representation
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
                  Resolve Your Tax Problems with
                  <span className="text-accent"> Confidence</span>
                </h1>
                <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                  Professional tax representation and IRS audit defense serving New York, New Jersey, and the Tri-State area.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="xl" 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Free Consultation
                </Button>
                <ScrollButton />
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-sm font-medium">Licensed Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-sm font-medium">Confidential Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-300" />
                  <span className="text-sm font-medium">20+ Years Experience</span>
                </div>
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="grid gap-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/20 p-3">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Personalized Solutions</h3>
                      <p className="text-primary-foreground/80">
                        Every tax situation is unique. We develop customized strategies for your specific needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-success/20 p-3">
                      <Shield className="h-6 w-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
                      <p className="text-primary-foreground/80">
                        Successfully resolved thousands of tax cases with favorable outcomes for our clients.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-white/70 text-sm">
              <span>Scroll to explore services</span>
              <ChevronDown className="h-4 w-4 mt-1" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
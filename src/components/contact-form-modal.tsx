"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Phone, Mail, MessageSquare, User, Building, AlertCircle } from "lucide-react"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    taxIssue: "",
    message: "",
    urgency: "medium"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Free Consultation Form'
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          onClose()
          setIsSuccess(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            taxIssue: "",
            message: "",
            urgency: "medium"
          })
        }, 3000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please call us directly at +1 929 416 3020.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close form"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              FREE CONSULTATION
            </Badge>
            <Badge variant="destructive" className="bg-destructive/90">
              <AlertCircle className="mr-1 h-3 w-3" />
              24HR RESPONSE
            </Badge>
          </div>
          
          <CardTitle className="text-2xl font-bold">
            Get Your Free Tax Consultation
          </CardTitle>
          <p className="text-primary-foreground/90">
            Licensed tax professionals will review your case within 24 hours. All consultations are completely confidential.
          </p>
        </CardHeader>

        <CardContent className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Consultation Request Submitted!</h3>
              <p className="text-muted-foreground mb-4">
                We&apos;ve received your request and will contact you within 24 hours.
              </p>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="font-semibold text-primary">Need immediate help?</p>
                <p className="text-lg font-bold text-destructive">Call +1 929 416 3020</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    <Building className="inline h-4 w-4 mr-1" />
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="taxIssue" className="block text-sm font-medium mb-2">
                    Tax Issue Type *
                  </label>
                  <select
                    id="taxIssue"
                    name="taxIssue"
                    required
                    value={formData.taxIssue}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select your tax issue</option>
                    <option value="irs-audit">IRS Audit</option>
                    <option value="wage-garnishment">Wage Garnishment</option>
                    <option value="tax-liens-levies">Tax Liens & Levies</option>
                    <option value="bank-seizure">Bank Account Seizure</option>
                    <option value="tax-debt">Tax Debt Relief</option>
                    <option value="offer-in-compromise">Offer in Compromise</option>
                    <option value="installment-agreement">Payment Plan</option>
                    <option value="business-taxes">Business Tax Issues</option>
                    <option value="other">Other Tax Problem</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium mb-2">
                    Urgency Level *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="medium">Medium - Need help soon</option>
                    <option value="high">High - Urgent situation</option>
                    <option value="emergency">EMERGENCY - Immediate help needed</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  <MessageSquare className="inline h-4 w-4 mr-1" />
                  Describe Your Tax Situation *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Please describe your tax problem, any notices you've received, amounts owed, deadlines, etc."
                />
              </div>

              <div className="bg-primary/5 rounded-lg p-4 text-sm">
                <p className="font-semibold text-primary mb-1">Your Privacy is Protected:</p>
                <p className="text-muted-foreground">
                  All information is confidential and protected by attorney-client privilege. 
                  We will never share your information with the IRS or any third parties.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Consultation"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>Or call us directly: <span className="font-bold text-destructive">+1 929 416 3020</span></p>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
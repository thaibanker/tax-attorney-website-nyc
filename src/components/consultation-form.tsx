"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  Mail, 
  Calendar, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  User,
  Building,
  DollarSign
} from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  issue: string
  urgency: string
  description: string
  preferredContact: string
  bestTime: string
}

const urgencyLevels = [
  { value: "critical", label: "CRITICAL - Same Day Response", icon: AlertTriangle, color: "text-red-600" },
  { value: "urgent", label: "URGENT - 24 Hour Response", icon: Clock, color: "text-orange-600" },
  { value: "moderate", label: "MODERATE - 2-3 Day Response", icon: Calendar, color: "text-blue-600" }
]

const taxIssues = [
  "IRS Audit",
  "Bank Levy",
  "Wage Garnishment", 
  "Tax Lien",
  "Back Taxes",
  "Offer in Compromise",
  "Installment Agreement",
  "Penalty Abatement",
  "Innocent Spouse Relief",
  "Business Tax Issues",
  "Other"
]

export function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    issue: "",
    urgency: "moderate",
    description: "",
    preferredContact: "phone",
    bestTime: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // EmailJS configuration
      const templateParams = {
        to_email: "info@strategictaxnynj.com",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        from_phone: formData.phone,
        issue: formData.issue,
        urgency: formData.urgency,
        description: formData.description,
        preferred_contact: formData.preferredContact,
        best_time: formData.bestTime,
        subject: `New Consultation Request - ${formData.issue} (${formData.urgency})`
      }

      // Send email using EmailJS
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          issue: "",
          urgency: "moderate",
          description: "",
          preferredContact: "phone",
          bestTime: ""
        })
      } else {
        throw new Error('Failed to send consultation request')
      }
    } catch (err) {
      setError("Failed to send consultation request. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Consultation Request Sent!
          </h2>
          <p className="text-green-700 mb-4">
            Thank you for reaching out. Our team will contact you within the timeframe you specified.
          </p>
          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="text-sm text-green-600">
              <strong>Next Steps:</strong>
            </p>
            <ul className="text-sm text-green-600 mt-2 space-y-1">
              <li>• We'll review your case within 1-2 hours</li>
              <li>• A tax professional will contact you at your preferred time</li>
              <li>• Free initial consultation scheduled</li>
            </ul>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  taxIssue: string
  message: string
  urgency: string
  timestamp: string
  source: string
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.taxIssue || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format urgency level for display
    const urgencyDisplay = {
      low: 'Low Priority',
      medium: 'Medium Priority', 
      high: 'High Priority',
      emergency: '🚨 EMERGENCY - IMMEDIATE ATTENTION REQUIRED 🚨'
    }[formData.urgency] || formData.urgency

    // Create email content
    const emailContent = `
New Free Consultation Request - ${urgencyDisplay}

CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.company ? `Company: ${formData.company}` : ''}

TAX ISSUE DETAILS:
Issue Type: ${formData.taxIssue}
Urgency Level: ${urgencyDisplay}

MESSAGE:
${formData.message}

SUBMISSION DETAILS:
Source: ${formData.source}
Timestamp: ${formData.timestamp}
IP Address: ${request.ip || 'Unknown'}

${formData.urgency === 'emergency' ? '⚠️ THIS IS AN EMERGENCY REQUEST - CONTACT IMMEDIATELY ⚠️' : ''}
`

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY || 'demo-key')
    
    try {
      const emailResponse = await resend.emails.send({
        from: 'Strategic Tax NY/NJ <onboarding@resend.dev>',
        to: 'thaibanker@gmail.com',
        subject: `🔥 ${urgencyDisplay} - Free Consultation Request from ${formData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e40af, #dc2626); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">🔥 New Free Consultation Request</h1>
              <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">${urgencyDisplay}</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px;">
              <h2 style="color: #1e40af; margin-top: 0;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td style="padding: 8px 0;">${formData.name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${formData.email}">${formData.email}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;"><a href="tel:${formData.phone}">${formData.phone}</a></td></tr>
                ${formData.company ? `<tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td style="padding: 8px 0;">${formData.company}</td></tr>` : ''}
              </table>

              <h2 style="color: #1e40af;">Tax Issue Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold;">Issue Type:</td><td style="padding: 8px 0;">${formData.taxIssue}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Urgency:</td><td style="padding: 8px 0;">${urgencyDisplay}</td></tr>
              </table>

              <h2 style="color: #1e40af;">Client Message</h2>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1e40af;">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>

              <h2 style="color: #1e40af;">Submission Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold;">Source:</td><td style="padding: 8px 0;">${formData.source}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Timestamp:</td><td style="padding: 8px 0;">${new Date(formData.timestamp).toLocaleString()}</td></tr>
              </table>

              ${formData.urgency === 'emergency' ? `
                <div style="background: #dc2626; color: white; padding: 15px; border-radius: 5px; margin-top: 20px; text-align: center;">
                  <h3 style="margin: 0;">⚠️ EMERGENCY REQUEST ⚠️</h3>
                  <p style="margin: 5px 0 0 0;">Contact this client immediately!</p>
                </div>
              ` : ''}
            </div>
          </div>
        `,
        replyTo: formData.email
      })
      
      console.log('Email sent successfully:', emailResponse)
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Continue with success response even if email fails
      // You might want to implement a backup notification system
    }

    // Log the submission for backup
    console.log('Form submission received:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      taxIssue: formData.taxIssue,
      urgency: formData.urgency,
      timestamp: formData.timestamp
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request submitted successfully',
        urgency: formData.urgency
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
// utils/mailer.ts
import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  subject: string
  text?: string
  html?: string
}

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  try {
    // Create a transport for sending email (update with your email settings)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Determine whether to send an HTML email or plain text email
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to,
      subject,
    } as any // Use 'any' type to allow adding either 'text' or 'html' property

    if (html) {
      mailOptions.html = html // Send HTML email if HTML content is provided
    } else {
      mailOptions.text = text // Send plain text email if HTML content is not provided
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    console.log(`Email sent to ${to}`)
  } catch (error) {
    console.error('Error sending email:', error)
    // throw error // Rethrow the error for handling in the route
  }
}

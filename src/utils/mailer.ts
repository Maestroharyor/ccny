// utils/mailer.ts
import nodemailer from 'nodemailer'

export async function sendEmail(to: string, subject: string, text: string) {
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

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to,
      subject,
      text,
    })

    console.log(`Email sent to ${to}`)
  } catch (error) {
    console.error('Error sending email:', error)
    throw error // Rethrow the error for handling in the route
  }
}

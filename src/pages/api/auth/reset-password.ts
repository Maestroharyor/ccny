// pages/api/reset-password.ts
import PasswordResetCode from '@/models/PasswordResetCode'
import { generateRandomCode } from '@/utils'
import { sendEmail } from '@/utils/mailer'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body

      // Check if email is provided
      if (!email) {
        return res.status(400).json({
          success: false,
          message: 'Email is required for password reset.',
        })
      }

      // Generate a unique reset code (use a library like crypto)
      const resetCode = generateRandomCode(6)

      // Calculate the expiration time (e.g., 1 hour from now)
      const expirationDate = new Date()
      expirationDate.setHours(expirationDate.getHours() + 1)

      // Save the reset code in the database
      const passwordResetCode = new PasswordResetCode({
        email,
        code: resetCode,
        expiresAt: expirationDate,
      })
      await passwordResetCode.save()

      // Send the reset code email to the user
      // await sendEmail(email, 'Password Reset Code', `Your password reset code is: ${resetCode}`)

      res.status(200).json({
        success: true,
        message: 'Password reset code sent successfully.',
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to send reset code.',
        error: error.message,
      })
    }
  } else {
    res.status(405).json({
      success: false,
      message: 'Method not allowed.',
    })
  }
}

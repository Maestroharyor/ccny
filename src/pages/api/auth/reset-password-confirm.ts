// pages/api/reset-password-confirm.ts
import PasswordResetCode from '@/models/PasswordResetCode'
import User from '@/models/User'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, code, newPassword } = req.body

      // Find the reset code in the database
      const resetCodeDoc = await PasswordResetCode.findOne({
        email,
        code,
        expiresAt: { $gt: new Date() }, // Check if the code hasn't expired
      })

      if (!resetCodeDoc) {
        return res.status(400).json({
          success: false,
          message: 'Invalid or expired reset code.',
        })
      }

      // Update the user's password
      const user = await User.findOneAndUpdate({ email }, { password: newPassword }, { new: true })

      // Remove the reset code from the database
      await resetCodeDoc.deleteOne({
        email,
      })

      res.status(200).json({
        success: true,
        message: 'Password reset successfully.',
        user,
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to reset password.',
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

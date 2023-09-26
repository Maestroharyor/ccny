// pages/api/update-user.ts
import User from '@/models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    try {
      const { userId, firstName, lastName, email } = req.body

      // Check if userId is provided
      if (!userId) {
        return res.status(400).json({
          success: false,
          message: 'User ID is required for updating user information.',
        })
      }

      // Find the user by userId
      const user = await User.findById(userId)

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found.',
        })
      }

      // Update user information
      if (firstName) {
        user.firstName = firstName
      }

      if (lastName) {
        user.lastName = lastName
      }

      if (email) {
        user.email = email
      }

      // Save the updated user
      await user.save()

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET) // Replace with your secret key

      res.status(200).json({
        success: true,
        message: 'User information updated successfully.',
        data: { user, token },
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to update user information.',
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

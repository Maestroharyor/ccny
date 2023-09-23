// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/db'
import User from '@/models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

connectDB()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, phoneNumber, password } = req.body

      // Find the user by email or phone number
      const user = await User.findOne({
        $or: [{ email }, { phoneNumber }],
      })

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        })
      }

      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: 'Incorrect password',
        })
      }

      // Generate a token for authentication
      const token = jwt.sign({ userId: user._id }, 'your-secret-key') // Replace with your secret key

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: { user, token }, // Include both user data and token
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Login failed',
        error: error.message,
      })
    }
  } else {
    res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }
}

// pages/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/db'
import User from '@/models/User'
import jwt from 'jsonwebtoken'
import { generateRandomCode } from '@/utils'

connectDB()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        portfolio,
        amountPaid,
        dateOfBirth,
        zone,
        gender,
        password,
        paymentTransaction,
        paymentTransactionReference,
        userRole,
      } = req.body

      if (!email && !phoneNumber) {
        return res.status(400).json({
          success: false,
          message: 'Email or phone number is required',
        })
      }

      // Generate a unique 6-digit alphanumeric code (You can use a library like shortid)
      const uniqueCode = generateRandomCode(6) // Replace with actual code generation logic

      // Check if email, phone number, and uniqueCode are unique
      const existingUser = await User.findOne({
        $or: [{ email }, { phoneNumber }],
      })

      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'Email or phone number is already in use',
        })
      }

      const user = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        portfolio,
        amountPaid,
        dateOfBirth,
        zone,
        uniqueCode,
        gender,
        password,
        paymentTransaction,
        paymentTransactionReference,
        userRole: userRole ? userRole : 'user',
      })

      await user.save()

      // Generate a token for authentication
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET) // Replace with your secret key

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: { user, token }, // Include both user data and token
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Registration failed',
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

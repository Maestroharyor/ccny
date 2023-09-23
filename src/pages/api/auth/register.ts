// pages/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/db'
import User from '@/models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
        password,
      } = req.body

      // Generate a unique 6-digit alphanumeric code (You can use a library like shortid)
      const uniqueCode = 'ABC123' // Replace with actual code generation logic

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
        password,
      })

      // Hash the password before saving the user
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      user.password = hashedPassword

      // Generate a token for authentication
      const token = jwt.sign({ userId: user._id }, 'your-secret-key') // Replace with your secret key

      await user.save()

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: { user, token }, // Include both user data and token
      })
    } catch (error) {
      res.status(500).json({
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

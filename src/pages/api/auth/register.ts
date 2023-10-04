// pages/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/db'
import User from '@/models/User'
import jwt from 'jsonwebtoken'
// import multer from 'multer' // For file uploads
import path from 'path'
import { generateRandomCode } from '@/utils'
import { sendEmail } from '@/utils/mailer'
import {
  generateRegistrationSuccessHTMLToAdmin,
  generateRegistrationSuccessHTMLToUser,
} from '@/utils/emails'

// // Set up multer for handling image uploads
// const storage = multer.diskStorage({
//   destination: path.join(__dirname, 'uploads'), // Set the upload directory
//   filename: (req, file, callback) => {
//     callback(null, Date.now() + path.extname(file.originalname)) // Rename uploaded files with timestamps
//   },
// })

// const upload = multer({ storage })

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
        paymentMethod,
        paymentTransaction,
        paymentTransactionReference,
        userRole,
        bankName,
        accountName,
        accountNumber,
        paymentProofImage,
      } = req.body

      console.log(
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
        paymentMethod,
        paymentTransaction,
        paymentTransactionReference,
        userRole,
        bankName,
        accountName,
        accountNumber,
        paymentProofImage
      )

      // console.log(req.body)

      if (!email && !phoneNumber) {
        return res.status(400).json({
          success: false,
          message: 'Email or phone number is required',
        })
      }

      // Handle file upload for paymentProofImage
      // upload.single('paymentProofImage')(req, res, async (err) => {
      // if (err) {
      //   return res.status(400).json({
      //     success: false,
      //     message: 'Error uploading file',
      //     error: err.message,
      //   })
      // }

      // const uniqueCode = generateRandomCode(6)
      // Calculate the next unique code based on the number of admin users
      const adminUserCount = await User.countDocuments({ userRole: 'user' })
      const uniqueCode = `NYSC${String(1000 + adminUserCount).padStart(4, '0')}`

      // Create a new user with the paymentProofImagePath
      const user = new User({
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
        paymentMethod,
        paymentTransaction,
        paymentTransactionReference,
        bankName,
        accountName,
        accountNumber,
        paymentProofImage, // Include the uploaded image path
        userRole: userRole ? userRole : 'user',
        uniqueCode,
      })

      await user.save()

      // Send registration emails
      // await Promise.all([
      //   sendEmail({
      //     to: user.email,
      //     subject: 'Registration Successful',
      //     html: generateRegistrationSuccessHTMLToUser(user, 'Registration Successful'),
      //   }),
      //   sendEmail({
      //     to: process.env.ADMIN_EMAIL_NOTIFICATION,
      //     subject: 'New Registration Alert',
      //     html: generateRegistrationSuccessHTMLToAdmin(user, 'New Registration Alert'),
      //   }),
      // ])

      // Generate a token for authentication
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET) // Replace with your secret key

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: { user, token }, // Include both user data and token
      })
      // })
    } catch (error) {
      console.log(error)
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

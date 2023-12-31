// pages/api/dashboard.ts
import connectDB from '@/db'
import User from '@/models/User'
import { NextApiRequest, NextApiResponse } from 'next'

connectDB()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Get the total number of users
      const totalUsers = await User.countDocuments({ userRole: 'user' })

      // Calculate the total amountPaid among all users
      const users = await User.find({ userRole: 'user' })
      const totalAmountPaid = users.reduce((total, user) => total + user.amountPaid, 0)

      res.status(200).json({
        success: true,
        message: 'Dashboard data retrieved successfully',
        data: {
          totalUsers,
          totalAmountPaid,
        },
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve dashboard data',
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

// pages/api/users.ts
import connectDB from '@/db'
import User from '@/models/User'
import { NextApiRequest, NextApiResponse } from 'next'

connectDB()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { role, search } = req.query
      const page = parseInt(req.query.page as string) || 1
      const pageSize = parseInt(req.query.per_page as string) || 20

      const skip = (page - 1) * pageSize

      const filter: any = {}

      if (role) {
        filter.userRole = role
      }

      if (search) {
        // Perform a case-insensitive search on name and email
        filter.$or = [
          { name: { $regex: new RegExp(search as string, 'i') } },
          { email: { $regex: new RegExp(search as string, 'i') } },
        ]
      }

      const [users, totalCount] = await Promise.all([
        User.find(filter).skip(skip).limit(pageSize).select('-password').lean(), // Use lean() for improved query performance
        User.countDocuments(filter),
      ])

      const totalPages = Math.ceil(totalCount / pageSize)

      res.status(200).json({
        success: true,
        message: 'Users retrieved successfully',
        data: {
          users,
          page,
          totalPages,
          totalCount,
        },
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve users',
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

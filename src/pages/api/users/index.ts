// pages/api/users.ts
import User from '@/models/User'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Pagination parameters
      const page = parseInt(req.query.page as string) || 1
      const pageSize = parseInt(req.query.pageSize as string) || 10

      // Filter parameters
      const { role, search } = req.query
      const searchStr = Array.isArray(search) ? search.join(' ') : search
      const filter: any = {}

      if (role) {
        filter.role = role
      }

      if (search) {
        // Use a regular expression to perform case-insensitive search on name and email
        filter.$or = [
          { name: { $regex: new RegExp(searchStr, 'i') } },
          { email: { $regex: new RegExp(searchStr, 'i') } },
        ]
      }

      const [users, totalCount] = await Promise.all([
        User.find(filter)
          .skip((page - 1) * pageSize)
          .limit(pageSize)
          .select('-password'),
        User.countDocuments(filter),
      ])

      const totalPages = Math.ceil(totalCount / pageSize)

      res.status(200).json({
        success: true,
        message: 'Users retrieved successfully',
        data: { users, page, totalPages, totalCount },
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

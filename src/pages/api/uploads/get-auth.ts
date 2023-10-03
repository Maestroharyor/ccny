// pages/api/users.ts
import connectDB from '@/db'
import { NextApiRequest, NextApiResponse } from 'next'
import ImageKit from 'imagekit'
import { randomUUID } from 'crypto'

const imagekitInstance = new ImageKit({
  publicKey: (process.env.IMAGEKIT_PUBLIC_KEY as string) || '',
  privateKey: (process.env.IMAGEKIT_PRIVATE_KEY as string) || '',
  urlEndpoint: (process.env.IMAGEKIT_URL_ENDPOINT as string) || '',
})

connectDB()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    console.log('Get Auth')
    console.log(process.env.IMAGEKIT_URL_ENDPOINT)
    try {
      const token = randomUUID()
      if (!token) return res.status(401).send({ message: 'No token provided' })
      const expiration = Number(req.query.expire) || Date.now() / 1000 + 60 * 10 // Default expiration in 10 mins

      const signatureObj = imagekitInstance.getAuthenticationParameters(token, expiration)

      res.status(200).send({ message: 'Authenticated', id: signatureObj })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'An error occured', error })
    }
  } else {
    res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }
}

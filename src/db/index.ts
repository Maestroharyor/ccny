// db.ts
import mongoose, { ConnectOptions } from 'mongoose'

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI

    if (!dbURI) {
      throw new Error('MongoDB URI is not defined in the environment variables.')
    }

    const options: ConnectOptions = {
      serverSelectionTimeoutMS: 30000, // Adjust this timeout as needed
      socketTimeoutMS: 75000, // Adjust this timeout as needed
    }

    await mongoose.connect(dbURI, options)
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

export default connectDB

// db.ts
import mongoose, { ConnectOptions } from 'mongoose'

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI

    if (!dbURI) {
      throw new Error('MongoDB URI is not defined in the environment variables.')
    }

    //   const options = {

    // }

    await mongoose.connect(dbURI)
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

export default connectDB

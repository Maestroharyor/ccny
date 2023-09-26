// models/User.ts
import mongoose, { Document, Model } from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  portfolio: string
  amountPaid: number
  dateOfBirth: Date
  zone: string
  gender: string
  userRole: string
  uniqueCode: string
  password: string
  paymentTransaction: string
  paymentTransactionReference: string
}

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, lowercase: true },
    phoneNumber: { type: String, unique: true },
    portfolio: String,
    amountPaid: Number,
    dateOfBirth: Date,
    userRole: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    zone: String,
    gender: String,
    uniqueCode: String,
    password: {
      type: String,
      unique: true,
    },
    paymentTransaction: String,
    paymentTransactionReference: String,
  },
  {
    timestamps: true,
  }
)

// Hash the password before saving the user
userSchema.pre('save', async function (next) {

  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(this.password, salt)
      this.password = hashedPassword
      next()
    } catch (error) {
      next(error)
    }
  } else {
    next()
  }
})

const User: Model<IUser> = mongoose.models.User || mongoose.model('User', userSchema)

export default User

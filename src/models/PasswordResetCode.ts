// models/PasswordResetCode.ts
import mongoose, { Document, Model } from 'mongoose'

interface IPasswordResetCode extends Document {
  email: string
  code: string
  expiresAt: Date
}

const passwordResetCodeSchema = new mongoose.Schema<IPasswordResetCode>(
  {
    email: { type: String, required: true },
    code: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
)

const PasswordResetCode: Model<IPasswordResetCode> =
  mongoose.models.PasswordResetCode || mongoose.model('PasswordResetCode', passwordResetCodeSchema)

export default PasswordResetCode

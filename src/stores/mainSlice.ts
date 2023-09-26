import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserPayloadObject } from '../interfaces'

interface MainState {
  firstName: string
  lastName: string
  email: string
  _id: string
  amountPaid: number
  dateOfBirth: string
  password: string
  paymentTransaction: string
  paymentTransactionReference: string
  phoneNumber: string
  portfolio: string
  userRole: string
  uniqueCode: string
  zone: string
  token: string
  gender: string
  isLoggedIn: boolean
}

const initialState: MainState = {
  firstName: '',
  lastName: '',
  email: '',
  _id: '',
  amountPaid: 0,
  dateOfBirth: '',
  password: '',
  paymentTransaction: '',
  paymentTransactionReference: '',
  phoneNumber: '',
  portfolio: '',
  uniqueCode: '',
  userRole: '',
  zone: '',
  token: '',
  gender: '',
  isLoggedIn: false,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayloadObject>) => {
      state.firstName = action.payload.user.firstName
      state.lastName = action.payload.user.lastName
      state.email = action.payload.user.email
      state._id = action.payload.user._id
      state.amountPaid = action.payload.user.amountPaid
      state.dateOfBirth = action.payload.user.dateOfBirth
      state.password = action.payload.user.password
      state.paymentTransaction = action.payload.user.paymentTransaction
      state.paymentTransactionReference = action.payload.user.paymentTransactionReference
      state.phoneNumber = action.payload.user.phoneNumber
      state.portfolio = action.payload.user.portfolio
      state.uniqueCode = action.payload.user.uniqueCode
      state.zone = action.payload.user.zone
      state.userRole = action.payload.user.userRole
      state.token = action.payload.token
      state.gender = action.payload.user.gender
      state.isLoggedIn = true
    },
    logOut: (state) => {
      state.firstName = ''
      state.lastName = ''
      state.email = ''
      state._id = ''
      state.amountPaid = 0
      state.dateOfBirth = ''
      state.password = ''
      state.paymentTransaction = ''
      state.paymentTransactionReference = ''
      state.phoneNumber = ''
      state.portfolio = ''
      state.uniqueCode = ''
      state.zone = ''
      state.userRole = ''
      state.token = ''
      state.gender = ''
      state.isLoggedIn = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, logOut } = mainSlice.actions

export default mainSlice.reducer

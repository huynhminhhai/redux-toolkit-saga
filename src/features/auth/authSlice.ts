import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { User } from 'models/user'

export interface LoginPayload {
  username: string
  password: string
}

export interface AuthState {
  isLoggedIn: boolean
  isLogging?: boolean
  currentUser?: User
}

const initialState: AuthState = {
  isLoggedIn: false,
  isLogging: false,
  currentUser: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.isLogging = true
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLogging = false
      state.currentUser = action.payload
      state.isLoggedIn = true
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLogging = false
    },

    logout(state) {
      state.currentUser = undefined
      state.isLoggedIn = false
    }
  }
})

// Actions
export const authActions = authSlice.actions

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectIsLogging = (state: RootState) => state.auth.isLogging

// Reducer
const authReducer = authSlice.reducer
export default authReducer

import { PayloadAction } from '@reduxjs/toolkit'
import { LoginPayload, authActions } from 'features/auth/authSlice'
import { fork, take } from 'redux-saga/effects'

function* handleLogin(payload: LoginPayload) {
  console.log('handleLogin', payload)
}

function* handleLogout() {
  console.log('handleLogout')
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(authActions.login.type)
    yield fork(handleLogin, action.payload)

    yield take(authActions.logout.type)
    yield fork(handleLogout)
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow)
}

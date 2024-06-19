import { PayloadAction } from '@reduxjs/toolkit'
import { LoginPayload, authActions } from 'features/auth/authSlice'
import { call, delay, fork, put, take } from 'redux-saga/effects'

function* handleLogin(payload: LoginPayload) {
  try {
    // call api login
    yield delay(1000)
    localStorage.setItem('access_token', '123')
    // redirect to admin page
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'huynhminhhai'
      })
    )
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message))
  }
}

function* handleLogout() {
  // call api logout
  yield delay(500)
  localStorage.removeItem('access_token')
  // redirect to login page
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'))
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type)
      yield call(handleLogin, action.payload)
    } else {
      yield take(authActions.logout.type)
      yield call(handleLogout)
    }
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow)
}

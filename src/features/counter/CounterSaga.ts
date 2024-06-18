import { PayloadAction } from '@reduxjs/toolkit'
import { incrementByAmountSaga, incrementByAmountSagaSuccess } from 'features/counter/counterSlice'
import { delay, put, takeEvery } from 'redux-saga/effects'

// export function* log(action: PayloadAction) {
//   console.log('Log: ', action)
// }
function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('waiting 1s')
  // wait 1s
  yield delay(1000)

  console.log('wating done, dispatch action')
  // Dispatch action success
  yield put(incrementByAmountSagaSuccess(action.payload))
}

export default function* counterSaga() {
  console.log('Counter Saga')
  yield takeEvery(incrementByAmountSaga.toString(), handleIncrementSaga)
}

import {call, put, takeLatest} from 'redux-saga/effects';
import * as Actions from './action';


export function* watchCartSaga() {
  console.log("watchCartSaga")
  yield takeLatest(Actions.ADD_PRODUCT, workerAddProductSaga);
 
}

export function* workerAddProductSaga(action: any) {

    console.log("workerAddProductSaga", action)
}

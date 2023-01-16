import {call, put, takeLatest} from 'redux-saga/effects';
import * as Actions from './action';


export function* watchCartSaga() {
  yield takeLatest(Actions.ADD_PRODUCT, workerAddProductSaga);
 
}

export function* workerAddProductSaga(action: any) {
}

import {call, put, takeLatest} from 'redux-saga/effects';
import * as Actions from './action';
import { Endpoints } from '../../networking';
import HttpClientRequestParameters, { HttpClient } from '../../networking/HttpClient';

export function* watchProductListSaga() {

  yield takeLatest(Actions.GET_PRODUCT_LIST_REQUEST, workerProductListSaga);
 
}


export function* workerProductListSaga(action: any) {

    try {
      const response = yield call(fetchProductListAPI, action);
      yield put(Actions.getProductListSuccess(response));
    } catch (error) {
      
    }
  }

  export function fetchProductListAPI() {
    const url = Endpoints.GET_PRODUCT_LIST
  
    const httpClient = new HttpClient();
    const getParameters: HttpClientRequestParameters = {
        apiUrl: url
    };

    return httpClient.get(getParameters);
  }
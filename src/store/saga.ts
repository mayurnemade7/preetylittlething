
import { all } from "redux-saga/effects";
import { watchCartSaga } from "./cart/saga";
import { watchProductListSaga } from "./products/saga";

export default function*() {
    yield all([
      watchProductListSaga(),
      watchCartSaga()
    ]);
  }
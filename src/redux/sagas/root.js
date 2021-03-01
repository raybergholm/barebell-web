import { call, put, takeEvery } from "redux-saga/effects"

import baseActionCreators from "../actionCreators/base"
import generalActionCreators from "../actionCreators/general"

import generalActionTypes from "../actionTypes/general"

import dataApi from "../../scripts/mockDataApi"
import localCacheInterface from "../../scripts/localCacheInterface"


const api = dataApi()
const localCache = localCacheInterface()

export function* initialize() {

  const cache = localCache.loadCache()

  yield put({
    type: generalActionTypes.LoadedCache,
    payload: { cache }
  })
  yield put({
    type: generalActionTypes.InitializeEnd
  })
}

export function* endInit() {
  console.log("initialization sequence finished")
  yield true
}


export default function* rootSagas() {
  yield takeEvery(generalActionTypes.InitializeStart, initialize)
  yield takeEvery(generalActionTypes.InitializeEnd, endInit)
}
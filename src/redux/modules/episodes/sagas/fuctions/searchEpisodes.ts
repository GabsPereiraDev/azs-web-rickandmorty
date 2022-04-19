import { call, put } from "redux-saga/effects";
import { api } from "../../../../../api";
import { insertEpisodes } from '../../actions/insertEpisodes'

export function* searchEpisodes() {
    const { data } = yield call(api.get, ("/episode"));

    yield put(insertEpisodes(data))

}
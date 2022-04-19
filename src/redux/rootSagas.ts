import { SagaIterator } from "@redux-saga/types";
import { all } from 'redux-saga/effects'
import episodes from "./modules/episodes/sagas";

export default function* rootSagas(): SagaIterator {
    return yield all([
        episodes
    ])
}
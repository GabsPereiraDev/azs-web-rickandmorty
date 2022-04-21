import { SagaIterator } from "@redux-saga/types";
import { all } from 'redux-saga/effects'
import character from "./modules/characters/sagas"
import episodes from "./modules/episodes/sagas";

export default function* rootSagas(): SagaIterator {
    return yield all([
        episodes, character
    ])
}
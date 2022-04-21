import { call, put } from "redux-saga/effects";
import { api } from "../../../../../api";
import { insertEpisodeId } from "../../actions/insertEpisodeId";
import { IFindEpisodeAction } from "../../dto/dtoActions/findEpisodeId";

export function* searchEpisodeId(action: IFindEpisodeAction) {

    const { data } = yield call(api.get, `episode/${action.payload.id}`);

    yield put(insertEpisodeId(data))
}
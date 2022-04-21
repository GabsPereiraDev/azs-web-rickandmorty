import { all, takeLatest } from "redux-saga/effects";
import { FIND_EPISODES, FIND_EPISODE_ID } from "../enum/actions.enum";
import { searchEpisodeId } from "./fuctions/searchEpisodeId";
import { searchEpisodes } from "./fuctions/searchEpisodes";

export default all([
    takeLatest(FIND_EPISODES, searchEpisodes),
    takeLatest(FIND_EPISODE_ID, searchEpisodeId)
])
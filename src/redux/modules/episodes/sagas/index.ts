import { all, takeLatest } from "redux-saga/effects";
import { FIND_EPISODES } from "../enum/actions.enum";
import { searchEpisodes } from "./fuctions/searchEpisodes";

export default all([
    takeLatest(FIND_EPISODES, searchEpisodes)
])
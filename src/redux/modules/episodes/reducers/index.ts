import { Reducer } from "redux";
import { IEpisodeState } from "../dto/episodesState";
import { IEpisodes } from "../dto/IEpisodes";
import produce from "immer";

import { ISingleEpisode } from "../dto/ISingleEpisode";
import { IInfo } from "../dto/Iinfo";
import { FIND_EPISODES, FIND_EPISODE_ID, INSERT_EPISODES, INSERT_EPISODE_ID } from "../enum/actions.enum";


const INITIAL_STATE: IEpisodeState = {
    episodes: {
        info: {} as IInfo,
        results: [] as ISingleEpisode[]
    } as IEpisodes,
    singleEpisode: {} as ISingleEpisode
};


export const episodes: Reducer<IEpisodeState> = (
    state = INITIAL_STATE,
    action
) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case FIND_EPISODES:
                break;
            case FIND_EPISODE_ID:
                break;
            case INSERT_EPISODE_ID:
                const singleEpisode = action.payload.episode

                draft.singleEpisode = singleEpisode
                break;

            case INSERT_EPISODES:
                const episodes = action.payload.episodes

                draft.episodes = episodes
                break
        }
    })




}
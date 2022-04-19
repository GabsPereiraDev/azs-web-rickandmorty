import { Reducer } from "redux";
import { IEpisodeState } from "../dto/episodesState";
import { IEpisodes } from "../dto/IEpisodes";
import produce from "immer";
import { FIND_EPISODES, INSERT_EPISODES } from "../enum/actions.enum";
import { ISingleEpisode } from "../dto/ISingleEpisode";
import { IInfo } from "../dto/Iinfo";


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
            case INSERT_EPISODES:
                const episodes = action.payload.episodes

                draft.episodes = episodes
                break
        }
    })




}
import { Reducer } from "redux";
import { IEpisodeState } from "../dto/episodesState";
import { IEpisodes } from "../dto/IEpisodes";
import produce from "immer";
import { FIND_EPISODES, INSERT_EPISODES } from "../enum/actions.enum";


const INITIAL_STATE: IEpisodeState = {
    episodes: {} as IEpisodes
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
import { Reducer } from "redux";

import produce from "immer";
import { ISingleEpisode } from "../../episodes/dto/ISingleEpisode";
import { IVisaState } from "../dto/favoriteState";
import { EXCLUE_VISA, INSERT_VISA } from "../enum/actions.enum";



const INITIAL_STATE: IVisaState = {
    visa: [] as ISingleEpisode[],
};


export const visa: Reducer<IVisaState> = (
    state = INITIAL_STATE,
    action
) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case EXCLUE_VISA:
                const remove = action.payload.visaId
                const removeFavorite = draft.visa.filter(episode => episode.id !== remove)
                draft.visa = removeFavorite
                break;
            case INSERT_VISA:

                const episode = action.payload.favorite as ISingleEpisode


                const favoriteInIndex = draft.visa.findIndex(
                    (item) => item.id === episode.id
                );

                if (favoriteInIndex >= 0) {

                } else {
                    draft.visa.push(episode);
                }


                break;
        }
    })




}
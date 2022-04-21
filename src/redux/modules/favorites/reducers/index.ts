import { Reducer } from "redux";

import produce from "immer";
import { ISingleEpisode } from "../../episodes/dto/ISingleEpisode";
import { IFavoriteState } from "../dto/favoriteState";
import { EXCLUE_FAVORITES, INSERT_FAVORITES } from "../enum/actions.enum";



const INITIAL_STATE: IFavoriteState = {
    favorites: [] as ISingleEpisode[],
};


export const favorites: Reducer<IFavoriteState> = (
    state = INITIAL_STATE,
    action
) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case EXCLUE_FAVORITES:
                const remove = action.payload.episodeId
                const removeFavorite = draft.favorites.filter(episode => episode.id === remove)
                draft.favorites = removeFavorite
                break;
            case INSERT_FAVORITES:

                const episode = action.payload.favorite as ISingleEpisode


                const favoriteInIndex = draft.favorites.findIndex(
                    (item) => item.id === episode.id
                );

                if (favoriteInIndex >= 0) {

                } else {
                    draft.favorites.push(episode);
                }


                break;
        }
    })




}
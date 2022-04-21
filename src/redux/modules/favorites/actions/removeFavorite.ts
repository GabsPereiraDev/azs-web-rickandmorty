import { EXCLUE_FAVORITES } from "../enum/actions.enum";

export function removeFavorite(favoriteId: number) {
    return {
        type: EXCLUE_FAVORITES,
        payload: { favoriteId }
    }
}
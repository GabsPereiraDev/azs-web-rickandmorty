import { EXCLUE_VISA } from "../enum/actions.enum";

export function removeVisa(visaId: number) {
    return {
        type: EXCLUE_VISA,
        payload: { visaId }
    }
}
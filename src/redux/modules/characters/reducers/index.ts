import { Reducer } from "redux";

import produce from "immer";
import { FIND_CHARACTERS, INSERT_CHARACTERS } from "../enum/actions.enum";
import { ICharacterState } from "../dto/ICharacterState";
import { ICharacter } from "../dto/ICharacter";


const INITIAL_STATE: ICharacterState = {
    characters: [] as ICharacter[],



};


export const characters: Reducer<ICharacterState> = (
    state = INITIAL_STATE,
    action
) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case FIND_CHARACTERS:
                break;
            case INSERT_CHARACTERS:
                const characters = action.payload.characters
                draft.characters = characters
                break;

        }
    })




}
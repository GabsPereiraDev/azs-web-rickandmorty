import { combineReducers } from "redux";
import { characters } from "./characters/reducers";
import { episodes } from "./episodes/reducers";
import { favorites } from "./favorites/reducers";
import { visa } from "./visa/reducers";


export default combineReducers({
    episodes, characters, favorites, visa
})
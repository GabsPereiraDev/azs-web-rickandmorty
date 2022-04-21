import { AnyAction } from "redux";

export interface IFindEpisodeAction extends AnyAction {
    payload: {
        id: string;
    }
}
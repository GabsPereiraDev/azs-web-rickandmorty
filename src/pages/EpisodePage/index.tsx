
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { SingleEpisode } from "../../components/SingleEpisode";
import { findEpisodeId } from "../../redux/modules/episodes/actions/findEpisodeId";

import { findEpisodes } from "../../redux/modules/episodes/actions/findEpisodes";

export function EpisodePage() {
    const { id } = useParams<{ id: any }>()

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(findEpisodeId(id as string))
    })



    return (
        <SingleEpisode />
    )
}

import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { SingleEpisode } from "../../components/SingleEpisode";
import { findEpisodeId } from "../../redux/modules/episodes/actions/findEpisodeId";


export function EpisodePage() {
    const { id } = useParams<{ id: any }>()
  

    const dispatch = useDispatch();
    dispatch(findEpisodeId(id as string))


    return (
        <SingleEpisode />
    )
}
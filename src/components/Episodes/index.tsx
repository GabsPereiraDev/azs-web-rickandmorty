import { useSelector } from "react-redux";
import { IStore } from "../../redux";

import { IEpisodes } from "../../redux/modules/episodes/dto/IEpisodes";
import { EpisodeUI } from "../../ui/episodeUI";

import { Container } from "../SingleEpisode/style";

export function Episodes() {

    const episodes = useSelector<IStore, IEpisodes>(state => state.episodes.episodes)


    return (
        <Container>
            <h2>Lista de Episodios Rick And Morty</h2>
            <div className="container">
                {episodes.results.length > 0 && (
                    episodes.results.map((episode) => {
                        return (
                            <>
                                <EpisodeUI
                                  
                                    episode={episode.episode}
                                    name={episode.name}
                                    air_date={episode.air_date}
                                    characters={episode.characters}
                                    url={episode.url}
                                    id={episode.id}
                                />
                            </>
                        )
                    })
                )}
            </div>
        </Container>
    )
}
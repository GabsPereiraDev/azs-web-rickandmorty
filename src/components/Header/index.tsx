import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IStore } from "../../redux";
import { IEpisodes } from "../../redux/modules/episodes/dto/IEpisodes";
import { ISingleEpisode } from "../../redux/modules/episodes/dto/ISingleEpisode";
import { Container } from "./style";

export function Header() {

    const favorites = useSelector<IStore, ISingleEpisode[]>(state => state.favorites.favorites)
    const episodes = useSelector<IStore, IEpisodes>(state => state.episodes.episodes)
    const [show, setShow] = useState<boolean>(false)
    const [showfilter, setShowFilter] = useState<boolean>(false)
    const [filter, setFilter] = useState<string>("")
    const episodeFileter = episodes.results.filter(f => f.name.toLowerCase().includes(filter))

    useEffect(() => {
        filter === "" ? setShowFilter(false) : setShowFilter(true)
    }, [filter])

    return (
        <Container show={show}>
            <Link to="/"><h2>Rick and Morty</h2></Link>

            <div className="search">
                <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Procure Por um Episodio" />
                {filter !== "" && <ul>
                    {episodeFileter.map((episode) => {
                        return (
                            <li key={episode.id}>
                                <img src="https://p4.wallpaperbetter.com/wallpaper/666/73/120/tv-show-rick-and-morty-artistic-cartoon-wallpaper-preview.jpg" alt="rick" />
                                <span>
                                    <Link to={`/episode/${episode.id}`} onClick={() => setFilter('')}>
                                        <h4>{episode.episode} - {episode.name}</h4>
                                    </Link>
                                    <p>{episode.air_date}</p>
                                </span>
                            </li>
                        )
                    })}
                </ul>}
            </div>
            <div>
            <AiFillStar color={show ? "gold" : "#fff"} onClick={() => show ? setShow(false) : setShow(true)} />

                <div className="container">
                    {favorites.length > 0 ? (
                        favorites.map((favorite) => {
                            return (

                                <div key={favorite.id}>
                                    <img src="https://p4.wallpaperbetter.com/wallpaper/666/73/120/tv-show-rick-and-morty-artistic-cartoon-wallpaper-preview.jpg" alt="rick" />
                                    <span>
                                        <Link to={`/episode/${favorite.id}`}>
                                            <h4>{favorite.episode} - {favorite.name}</h4>
                                        </Link>
                                        <p>{favorite.air_date}</p>
                                    </span>
                                </div>

                            )
                        })
                    ) : (
                        <div>
                            <p>Carinho vazio</p>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}
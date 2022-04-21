
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux";
import { ICharacter } from "../../redux/modules/characters/dto/ICharacter";
import { ISingleEpisode } from "../../redux/modules/episodes/dto/ISingleEpisode";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Card, Container } from "./style";
import { useCallback } from "react";
import { insertFavorite } from "../../redux/modules/favorites/actions/insertFavorite";
import { favorites } from "../../redux/modules/favorites/reducers";
import { removeFavorite } from "../../redux/modules/favorites/actions/removeFavorite";


export function SingleEpisode() {
    const dispatch = useDispatch();

    const episode = useSelector<IStore, ISingleEpisode>(state => state.episodes.singleEpisode)
    const character = useSelector<IStore, ICharacter[]>(state => state.characters.characters)
    const favorites = useSelector<IStore, ISingleEpisode[]>(state => state.favorites.favorites)

    const handleAddToFavorite = useCallback(async () => {
        await dispatch(insertFavorite(episode))
    }, [dispatch, episode])

    const handleRemoveToFavorite = useCallback(async () => {
        await dispatch(removeFavorite(episode.id))
    }, [dispatch, episode])

    const result = favorites.find(favorite => favorite.id === episode.id);

    return (
        <Container>
            <div>
                <h1>Episodio : {episode.episode} - {episode.name}</h1>
                <p>Estreiado : {episode.air_date}</p>
                <div>
                    <span>
                        <strong>favoritos</strong>
                        {result ? (
                            <div onClick={handleRemoveToFavorite}>
                                <AiFillStar />
                            </div>
                        ) : (<div>
                            <button onClick={handleAddToFavorite}>
                                <AiOutlineStar />
                            </button>
                        </div>)}
                    </span>
                </div>
            </div>
            <div className="container">
                <h2>Personagens Participando</h2>
                <div>
                    {episode.characters.map(char => {
                        const response = character.find(e => e.id == char.replace("https://rickandmortyapi.com/api/character/", "") as string)
                        console.log(char.replace("https://rickandmortyapi.com/api/character/", ""))
                        return (
                            <Card color={
                                response?.status === "Alive" ? "#06ac06" : response?.status === "unknown" ? "#b6b615" : "red"
                            }>
                                <img src={response?.image} alt="" />
                                <div>
                                    <h3>{response?.name}</h3>
                                    <p>{response?.species}</p>
                                    <strong>{response?.status}</strong>
                                </div>
                            </Card>
                        )
                    })}
                </div>


            </div>
        </Container >
    )
}
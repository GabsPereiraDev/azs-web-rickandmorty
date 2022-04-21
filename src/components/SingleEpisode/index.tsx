
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux";
import { ICharacter } from "../../redux/modules/characters/dto/ICharacter";
import { ISingleEpisode } from "../../redux/modules/episodes/dto/ISingleEpisode";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { ImCheckmark, ImCheckmark2 } from 'react-icons/im'
import { Card, Container } from "./style";
import { useCallback } from "react";
import { insertFavorite } from "../../redux/modules/favorites/actions/insertFavorite";
import { removeFavorite } from "../../redux/modules/favorites/actions/removeFavorite";
import { insertVisa } from "../../redux/modules/visa/actions/insertVisa";
import { removeVisa } from "../../redux/modules/visa/actions/removeVisa";


export function SingleEpisode() {
    const dispatch = useDispatch();

    const episode = useSelector<IStore, ISingleEpisode>(state => state.episodes.singleEpisode)
    const character = useSelector<IStore, ICharacter[]>(state => state.characters.characters)
    const favorites = useSelector<IStore, ISingleEpisode[]>(state => state.favorites.favorites)
    const visa = useSelector<IStore, ISingleEpisode[]>(state => state.visa.visa)

    const handleAddToFavorite = useCallback(async () => {
        await dispatch(insertFavorite(episode))
    }, [dispatch, episode])

    const handleRemoveToFavorite = useCallback(async () => {
        await dispatch(removeFavorite(episode.id))
    }, [dispatch, episode])
    const handleAddToVisa = useCallback(async () => {
        await dispatch(insertVisa(episode))
    }, [dispatch, episode])

    const handleRemoveToVisa = useCallback(async () => {
        await dispatch(removeVisa(episode.id))
    }, [dispatch, episode])

    const result = favorites.find(favorite => favorite.id === episode.id);
    const resultVisa = visa.find(favorite => favorite.id === episode.id);

    return (
        <Container>
            <div>
                <h1>Episodio : {episode.episode} - {episode.name}</h1>
                <p>Estreiado : {episode.air_date}</p>
                <div className="icons">
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
                    <span>
                        <strong>Visto</strong>
                        {resultVisa ? (
                            <div onClick={handleRemoveToVisa}>
                                <ImCheckmark color="green"/>
                            </div>
                        ) : (<div>
                            <button onClick={handleAddToVisa}>
                                <ImCheckmark2 color="green" />
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
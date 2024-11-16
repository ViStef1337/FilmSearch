import {SearchFilmForm} from "../components/SearchFilmForm/SearchFilmForm.jsx";
import {useEffect, useState} from "react";
import {getSearchFilm} from "../service/filmAPI.js";
import {useSearchParams} from "react-router-dom";
import {FilmsList} from "../components/FilmsList/FilmsList.jsx";

export const SearhFilm =()=>{

    const [searchParams,setSearchParams] = useSearchParams()

    const [filmsInfo,setFilmsInfo]=useState([])

    useEffect(()=>{
        const film = searchParams.get('filmName');
        console.log(film)
        if (!film){
            return
        }
        async function fetchData (){
            try {
                const data =  await getSearchFilm(film)
                setFilmsInfo(data.results)
            }catch (error){
                console.log(error)
            }
        }
        fetchData ()
    },[searchParams])
    const search = filmName =>{
        setSearchParams({filmName})
    }

    return <>
        <SearchFilmForm search={search}/>
        <FilmsList films={filmsInfo}/>
    </>
}
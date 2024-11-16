import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {getFilmById} from "../service/filmAPI.js";
import {FilmInfoElement} from "../components/FilmInfoElement/FilmInfoElement.jsx";

export const FilmInfo =()=>{
    const {filmId} = useParams()
    const [film, setFilm]=useState({})

    const location = useLocation()
    const goBackLink = useRef(location.state || '/')
    // console.log("go back link",goBackLink)
    // console.log('Location',location)
    useEffect(()=>{
        async function fetchData (){
            try {
                const data = await getFilmById(filmId)
                setFilm(data)
            }catch (error){
                console.log(error)
            }
        }
        fetchData ()
    },[])
    return <>
        <Link to={goBackLink.current || '/'}>go back</Link>
        <FilmInfoElement film={film}/>
    </>
}
import {getFilms} from "../service/filmAPI.js";
import {useEffect, useState} from "react";
import {FilmsList} from "../components/FilmsList/FilmsList.jsx";

export const Home =()=>{
    const [films,setFilms]=useState([])
    useEffect(()=>{
        async function fetchData (){
            try{
                const data = await getFilms()
                setFilms(data.results)
            }catch (error){
                console.log(error)
            }
        }
        fetchData()
    },[])

    return <>
        <h1>Home Page</h1>
        <FilmsList films={films}/>
    </>
}
import {Link, Outlet} from "react-router-dom";

export const FilmInfoElement =({film})=>{

    return <>
        <h2>Film Info</h2>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt=""/>
            <div>
                <p>Overview: {film.overview}</p>
            </div>
        </div>
        <ul>
            <li><Link to='cast'>Cast</Link></li>
            <li><Link to='reviews'>Reviews</Link></li>
        </ul>
        <Outlet/>
    </>
}
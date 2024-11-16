import {Link, useLocation} from "react-router-dom";

export const FilmsList =({films})=>{
    const location = useLocation()
    return <ul>
        {films.map(item=>{
            return <li key={item.id}>
                <Link state={location} to={`/film/${item.id}`}>
                    <h3>{item.title}</h3>
                    <img src="" alt=""/>
                </Link>
            </li>
        })}
    </ul>
}
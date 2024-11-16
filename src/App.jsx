import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {SearhFilm} from "./pages/SearhFilm.jsx";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {FilmInfo} from "./pages/FilmInfo.jsx";
import {Cast} from "./components/Cast/Cast.jsx";
import {Reviews} from "./components/Reviews/Reviews.jsx";

function App() {

  return (
    <>
        <Navigation/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='filmSearch' element={<SearhFilm/>}/>
          <Route path='film/:filmId' element={<FilmInfo/>}>
              <Route path='cast' element={<Cast/>}/>
              <Route path='reviews' element={<Reviews/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App

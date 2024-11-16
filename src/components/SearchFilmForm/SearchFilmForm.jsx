export const SearchFilmForm =({search})=>{
    const hendleSubmit =e=>{
        e.preventDefault()
        search(e.target.text.value)
        e.target.reset()
    }
    return <>
        <h2>SearchFilm</h2>
        <form onSubmit={hendleSubmit}>
            <input type="text" name='text'/>
            <button type='submit'>submit</button>
        </form>
    </>
}
import React from "react";
import Card from "./Card";

export default function Form(){
    const[query, setQuery] = React.useState('');
    const[movies, setMovies] = React.useState([]);


    /* funcion async para llamar a la API */
    const handleSubmit = async (e) => {
        /* funcion para que no se recargue el form al hacer click */
        e.preventDefault();

        /* url de la API */
        const url = `https://api.themoviedb.org/3/search/movie?api_key=0c58aa0058f2b0303ef8fa2f96471c9e&query&language=en-US&query=${query}&page=1&include_adult=false`; 

        /* llamamos a la API con try, si no lo encuentra con catch va a tirar error*/
        try {
            const res = await fetch(url);
            const data = await res.json();
            /* le paso los datos al array de movies */
            setMovies(data.results);
        }catch(err){
            console.log(err);
        }
        
    }


    return(
        <>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input type="text" placeholder="i.e Back to the future" name="query" onChange={(e)=> setQuery(e.target.value) }/>
            <button type="submit">Search</button>
        </form>
        <div className="cast-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <Card movie={movie} key={movie.id}/>
            ))}
        </div>
        </>
        
    )
}
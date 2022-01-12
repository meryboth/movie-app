

export default function Form(){
    return(
        <form className="form">
            <label htmlFor="movieName">Movie Name</label>
            <input type="text" placeholder="Movie" />
            <button type="submit">Search</button>
        </form>
    )
}
import MovieCard from "../components/MovieCard"
import { useState } from "react";
//Tu peux utiliser useState pour stocker la valeur saisie dans la barre de recherche 
// et filtrer la liste des films en fonction de cette valeur
// movie.title.toLowerCase().startsWith(searchQuery) 
function Home() {

    const [searchQuery, setSearchQuery] = useState ("");




    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Amanda Wick", release_date: "2022"},
        {id: 3, title: "Fanta Wick", release_date: "2023"},
        {id: 4, title: "aicha Wick", release_date: "2021"},
        {id: 5, title: "ada Wick", release_date: "2025"}
    ];

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };
    return (<div className="home">
         <form onSubmit={handleSearch} className="search-form">
            <input type="text"  
            placeholder="search for movies ..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value) }/>
            <button type="submit" className="search-button">Search</button>
         </form>



        <div className="movies-grid">
            {movies.map(
                (movie) => 
               <MovieCard  movie = {movie} key = {movie.id}/>
                )}
        </div>
    </div>
    );
}

export default Home;
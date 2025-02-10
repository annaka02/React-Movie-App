function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Amanda Wick", release_date: "2022"},
        {id: 3, title: "Fanta Wick", release_date: "2023"},
        {id: 4, title: "aicha Wick", release_date: "2021"},
        {id: 5, title: "ada Wick", release_date: "2025"}
    ]
    return <div className="home">
        <div className="movies-grid">
            {movies.map(movie => )}
        </div>
    </div>
    
}
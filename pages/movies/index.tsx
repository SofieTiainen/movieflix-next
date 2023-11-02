export default function MoviesPage({ movies }: Movies) {
    return (
        <div>
            <section>
                <h2>Populära filmer</h2>
                {movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={movie.poster} alt={movie.title}/>
                        </div>
                    ) 
                })}
            </section>
        </div>
    )
}
/*Skapa en sida som listar tv-serier, gör den testdriven.
TV-serierna hittar ni från githuben.. under data -> tv.js */

export default function TvPage({series} : Series) {
    return (
        <div>
            <h2>TV serier</h2>
            {series.map((serie) => {
                return (
                    <div>
                        {serie.title}
                    </div>
                )
            })}

        </div>
    )
}


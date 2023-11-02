
/*Nu ska vi testa titel på sidan samt underrubrik */

import MoviesPage from "./movies";
import TvPage from "./tv";
import {getAllMovies} from '@/__mock__/data/movies';

import { getAllTVSeries } from "@/__mock__/data/tvseries";


export default function HomePage() {

  const movies = getAllMovies();

  return (
    <div>
    <section>
      <h1>Välkommen till MovieFlix</h1>
      <p>Vi erbjuder de senaste filmerna och TV-serierna</p>
    </section>
    <hr />
    <MoviesPage movies={movies} />
    <hr />
    <TvPage series={series} />
    </div>
  )
}

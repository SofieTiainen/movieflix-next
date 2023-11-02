import {render, screen} from '@testing-library/react';
import MoviesPage from '@/pages/movies';
import '@testing-library/jest-dom';

import { getAllMovies } from '@/__mock__/data/movies';

/*På denna sida vill vi testa oss fram till en 
heading med "Populära filmer" */

/*Här hänvisar vi till interfacet */
let movies: Movie[] = [];

describe('Movies page', () => {

    beforeEach(() => {
        movies = getAllMovies();
        render(<MoviesPage movies={movies} />);
        return movies;
    })

    xit('should have a heading Populära filmer', () => {
        // render(<MoviesPage movies={[]} />);

        /* // = reguljärt uttryck
        '' - förväntar sig att strängen ska vara exakt så */
        const heading = screen.getByRole('heading', {name: 'Populära filmer' })

        expect(heading).toBeInTheDocument();
    })

    xit('should have a list of 20 movies', () => {
        /*Arrange och act- i samma */

        // const movies = getAllMovies();

        expect(movies).toHaveLength(20);
    })

    xit('should have a poster', () => {

        /*movies[0].title} är alt texten i bilden */
        // const movies = getAllMovies();
        // render(<MoviesPage movies={movies} />);
        const poster = screen.getByRole('img', {name: movies[0].title})
        expect(poster).toBeInTheDocument();
    })
})
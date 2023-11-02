import {render, screen} from '@testing-library/react';
import TvPage from '@/pages/tv';
import '@testing-library/jest-dom';

import {getAllTVSeries} from '@/__mock__/data/tvseries';



describe('TV page', () => {
    it('should have a heading Populära filmer', () => {
        render(<TvPage/>);

        /* // = reguljärt uttryck
        '' - förväntar sig att strängen ska vara exakt så */
        const heading = screen.getByRole('heading', {name: 'TV serier' })

        expect(heading).toBeInTheDocument();
    })

    it('should have a list of 20 tv series', () => {
        const tvSeries = getAllTVSeries();
        expect(tvSeries).toHaveLength(20);
    })
})
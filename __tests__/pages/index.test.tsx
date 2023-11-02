import {render, screen} from '@testing-library/react';
/*Denna behöver vi ej ha*/
// import { describe } from 'node:test';
import HomePage from '@/pages';
import '@testing-library/jest-dom'

describe('Home page', () => {
    xit('should have a heading Välkommen till MovieFlix', () => {
        render(<HomePage />);

        const heading = screen.getByRole('heading', {name: /Välkommen till MovieFlix/i });

        expect(heading).toBeInTheDocument();
    })

    xit('it should have a description with text Vi erbjuder de senaste filmerna och TV-serierna', () => {
        render(<HomePage />);

        const description = screen.getByText('Vi erbjuder de senaste filmerna och TV-serierna')

        expect(description).toBeInTheDocument();
    })
 

})
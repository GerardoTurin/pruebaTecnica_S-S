import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from '@/app/about/page';

describe('AboutPage', () => {
    
    it('Hacemos una prueba de snapshot', () => {
        const { asFragment } = render(<AboutPage />);
        expect(asFragment()).toMatchSnapshot();

    });

    it('Muestra el título de la página', () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText('About Me')).toBeInTheDocument();

    });

});

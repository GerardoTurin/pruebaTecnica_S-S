import HomePage from '@/app/page';
import {render, screen} from '@testing-library/react';



describe('HomePage', () => {

    it('Muestra el nombre del usuario y profesión', () => {
        render(<HomePage />);
    
        expect(screen.getByText('Hola, soy Gerardo Turin')).toBeInTheDocument();
        expect(screen.getByText(/full stack developer/i)).toBeInTheDocument();
    });

});
import { InterestList } from '@/components';
import { render, screen, fireEvent } from '@testing-library/react';

describe('InterestList Component', () => {
    it('Evaluamos mostrar una lista de intereses', () => {
        render(<InterestList />);

        expect(screen.getByText('Desarrollo Web')).toBeInTheDocument();
        expect(screen.getByText('Programación')).toBeInTheDocument();
        expect(screen.getByText('Videojuegos')).toBeInTheDocument();
        expect(screen.getByText('Deportes')).toBeInTheDocument();
    });

    it('Evaluamos agregar un nuevo interés a la lista', () => {
        render(<InterestList />);

        const input = screen.getByPlaceholderText('Nuevo Interés');
        const addButton = screen.getByText('Agregar');

        fireEvent.change(input, { target: { value: 'Jugar Devil May Cry' } });  // Simulamos el cambio de valor en el input
        fireEvent.click(addButton); // Simulamos el click en el botón

        expect(screen.getByText('Jugar Devil May Cry')).toBeInTheDocument();
    });
});
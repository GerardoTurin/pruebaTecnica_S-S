import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { FormContacto } from "@/components";

// Mock para alert
global.alert = jest.fn();


// Función para llenar el formulario, recibe un objeto con los datos a llenar.
const fillForm = ({ name, email, message }) => {
    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: name } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: email } });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: message } });
};

describe("FormContacto", () => {
    
    test("renders form fields correctly", () => {
        render(<FormContacto />);
        expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
    });
    
    test("updates input values correctly", () => {
        render(<FormContacto />);
        const formData = {
            name: "Gerardo Turin",
            email: "gera@gmail.com",
            message: "AguanteBoca!"
        };

        fillForm(formData); // Llenamos el formulario con los datos de formData.

        expect(screen.getByLabelText(/Nombre/i).value).toBe(formData.name);
        expect(screen.getByLabelText(/Email/i).value).toBe(formData.email);
        expect(screen.getByLabelText(/Mensaje/i).value).toBe(formData.message);
    });
    
    test("submits the form and shows alert", () => {
        render(<FormContacto />);
        const formData = {
            name: "Gerardo Turin",
            email: "gera@gmail.com",
            message: "AguanteBoca!"
        };

        fillForm(formData);
        fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

        expect(global.alert).toHaveBeenCalledWith(`Mensaje enviado: ${formData.message}`);  // Evaluamos que se haya llamado a alert.

        expect(screen.getByLabelText(/Nombre/i).value).toBe("");
        expect(screen.getByLabelText(/Email/i).value).toBe("");
        expect(screen.getByLabelText(/Mensaje/i).value).toBe("");
    });
});

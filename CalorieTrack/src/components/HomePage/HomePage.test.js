import { render, screen } from '@testing-library/react';
import { HomePage } from "./HomePage";


test('renders component correctly', () => {
    render(<HomePage />);
    const element = screen.getByTestId('home-page');
    expect(element).toBeInTheDocument();
});

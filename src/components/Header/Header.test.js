import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
    it('renders the header with the logo', () => {
        render(<Header />);
        const logoElement = screen.getByAltText('Cuvette');
        expect(logoElement).toBeInTheDocument();
    });

    it('renders the user profile card', () => {
        render(<Header />);
        const userIconElement = screen.getByAltText('user-icon');
        expect(userIconElement).toBeInTheDocument();
        const profileNameElement = screen.getByText('Siddharth Jain');
        expect(profileNameElement).toBeInTheDocument();
    });
});

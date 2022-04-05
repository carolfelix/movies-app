import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Home from '.';

describe("Component home", () => {
    it("Deve renderizar titulo", () => {
        render(<Home />);

        expect(screen.getByText('Movies')).toBeInTheDocument();
    });
})

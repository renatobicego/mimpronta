import { render, screen } from '@testing-library/react';
import Header from '../Header.tsx'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Header', () => {
    it('renders unchanged', () => {
        const {container} = render(<Header />)
        expect(container).toMatchSnapshot()
    })

    it('renders content', () => {
        render(<Header />)
        const logo = screen.getByAltText('logo')
        const menuBtn = screen.getByText('Menú')
        const navMenu = screen.queryByRole('navigation')

        expect(logo).toBeInTheDocument()
        expect(menuBtn).toBeInTheDocument()
        expect(navMenu).toBeNull()
    })

    it('renders nav menu', async() => {
        render(<Header />)
        const menuBtn = screen.getByText('Menú')
        await userEvent.click(menuBtn)

        await new Promise(resolve => setTimeout(resolve, 1000));

        const inicioLink = screen.getByText('Inicio');
        expect(inicioLink).toBeInTheDocument();
    })
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AboutUs from '../AboutUs.tsx'

describe('About Us', () => {
    it('renders unchanged', () => {
        const {container} = render(<AboutUs />)
        expect(container).toMatchSnapshot()
    })

    it('renders content', async() => {
        render(<AboutUs />)
        const title = await screen.findByRole('heading')
        const paragraphs = await screen.findAllByRole('definition')
        const btnNuestroProposito = await screen.findByRole('button')

        expect(title).toBeInTheDocument()
        expect(btnNuestroProposito).toBeInTheDocument()
        expect(paragraphs).toHaveLength(2)
    })

});
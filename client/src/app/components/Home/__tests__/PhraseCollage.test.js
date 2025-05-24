import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import PhraseCollage from '../PhraseCollage.tsx'

describe('About Us', () => {
    it('renders unchanged', () => {
        const {container} = render(<PhraseCollage />)
        expect(container).toMatchSnapshot()
    })

    it('renders content', async() => {
        render(<PhraseCollage />)
        const title = await screen.findByRole('heading')
        const collage = await screen.findAllByRole('img')

        expect(title).toBeInTheDocument()
        expect(collage).toHaveLength(3)
    })

});
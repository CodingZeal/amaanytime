import { render, screen } from '@redwoodjs/testing/web'

import { Cover } from './Cover'
import { Cover as data, CoverNoImage } from './Cover.mocks'

describe('Cover', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Cover {...data} />)
    }).not.toThrow()
  })

  it('Displays the correct image and title', () => {
    render(<Cover {...data} />)
    expect(screen.getByAltText(data.name)).toHaveAttribute('src', data.src)
    expect(screen.getByAltText(data.name)).toBeInTheDocument()
  })

  it('creates a cover when no cover is provided', () => {
    render(<Cover {...CoverNoImage} />)
    expect(screen.getByTestId('cover')).toBeVisible()
  })
})

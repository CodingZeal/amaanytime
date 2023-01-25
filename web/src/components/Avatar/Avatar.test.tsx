import { render, screen } from '@redwoodjs/testing/web'

import { Avatar } from './Avatar'
import { Avatar as data, AvatarNoImage } from './Avatar.mocks'

describe('Avatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Avatar {...data} />)
    }).not.toThrow()
  })

  it('Displays the correct image and title', () => {
    render(<Avatar {...data} />)
    expect(screen.getByAltText(data.name)).toHaveAttribute('src', data.src)
    expect(screen.getByAltText(data.name)).toBeInTheDocument()
  })

  it('creates an avatar when no avatar is provided', () => {
    render(<Avatar {...AvatarNoImage} />)
    expect(screen.getByTestId('initials')).toHaveTextContent('A')
  })
})

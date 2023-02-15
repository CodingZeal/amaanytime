import { render, screen } from '@redwoodjs/testing/web'

import { Avatar } from './Avatar'
import { Avatar as data, AvatarNoImage } from './Avatar.mocks'

describe('Avatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Avatar
          user={{
            name: 'ZEAL',
            avatar: '',
          }}
        />
      )
    }).not.toThrow()
  })

  it('Displays the correct image and title', () => {
    render(
      <Avatar
        user={{
          name: 'First Name Last Name',
          avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        }}
        {...data}
      />
    )
    expect(screen.getByAltText(data.name)).toHaveAttribute('src', data.src)
    expect(screen.getByAltText(data.name)).toBeInTheDocument()
  })

  it('creates an avatar when no avatar is provided', async () => {
    render(
      <Avatar
        user={{
          name: 'First Last',
          avatar: '',
        }}
        {...AvatarNoImage}
      />
    )
    expect(screen.getByTestId('initials')).toHaveTextContent('F')
  })
})

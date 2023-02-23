import { render, screen } from '@redwoodjs/testing/web'

import { Cover } from './Cover'
import { Cover as data, CoverNoImage } from './Cover.mocks'

describe('Cover', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Cover
          user={{
            name: '',
          }}
          {...data}
        />
      )
    }).not.toThrow()
  })

  it('Displays the correct image and title', () => {
    render(
      <Cover
        user={{
          name: '',
        }}
        {...data}
      />
    )
    expect(screen.getByAltText(data.user.name)).toHaveAttribute('src', data.src)
    expect(screen.getByAltText(data.user.name)).toBeInTheDocument()
  })

  it('creates a cover when no cover is provided', () => {
    render(
      <Cover
        user={{
          name: '',
        }}
        {...CoverNoImage}
      />
    )
    expect(screen.getByTestId('cover')).toBeVisible()
  })
})

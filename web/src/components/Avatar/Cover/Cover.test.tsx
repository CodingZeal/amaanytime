import { render, screen } from '@redwoodjs/testing/web'

import { Cover } from './Cover'
import { Cover as data, CoverNoImage } from './Cover.mocks'

describe('Cover', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Cover
          user={{
            cover: '',
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
          cover: '',
        }}
        {...data}
      />
    )
    expect(screen.getByAltText(data.user.name)).toHaveAttribute(
      'src',
      data.user.cover
    )
    expect(screen.getByAltText(data.user.name)).toBeInTheDocument()
  })

  it('creates a cover when no cover is provided', () => {
    render(
      <Cover
        user={{
          cover: '',
        }}
        {...CoverNoImage}
      />
    )
    expect(screen.getByTestId('cover')).toBeVisible()
  })
})

import { render, screen } from '@redwoodjs/testing/web'

import { Navigation } from './Navigation'

const renderComponent = (props = {}) => render(<Navigation {...props} />)

describe('Navigation', () => {
  it('renders navigation component', () => {
    renderComponent()
    expect(screen.getByTestId('nav')).toBeVisible()
  })

  it('links available on desktop and mobile view', async () => {
    renderComponent()
    const button = screen.getAllByTestId('nav__link-item')
    expect(button.length).toBe(1)
  })
})

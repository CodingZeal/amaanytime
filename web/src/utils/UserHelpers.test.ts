import { displayName, nameColor } from './UserHelpers'

describe('User Helpers', () => {
  describe('displayName', () => {
    it('defaults to username', () => {
      const user = {
        id: 42,
        username: 'foobar',
      }
      expect(displayName(user)).toEqual('foobar')
    })

    it('displays name', () => {
      const user = {
        id: 42,
        username: 'foobar',
        name: 'Barry',
      }
      expect(displayName(user)).toEqual('Barry')
    })

    it('displays nickname', () => {
      const user = {
        id: 42,
        username: 'foobar',
        name: 'Barry',
        nickname: 'Bar',
      }
      expect(displayName(user)).toEqual('Bar')
    })
  })

  describe('nameColor', () => {
    it('displays a color', () => {
      const name = 'ackbar'
      expect(nameColor(name)).toEqual('punch')
    })

    it('displays a different color', () => {
      const name = 'umbridge'
      expect(nameColor(name)).toEqual('gray')
    })
  })
})

import { formatRelativeDate } from './DateHelpers'

describe('Date Helpers', () => {
  // Reference: https://codewithhugo.com/mocking-the-current-date-in-jest-tests/
  jest
    .spyOn(global.Date, 'now')
    .mockImplementation(() => new Date('2022-06-02T13:18:02.631Z').valueOf())

  it('Shows minutes ago', () => {
    const date = '2022-06-02T13:21:02.631Z'
    expect(formatRelativeDate(date)).toEqual('3m')
  })

  it('Shows hours ago', () => {
    const date = '2022-06-02T14:18:02.631Z'
    expect(formatRelativeDate(date)).toEqual('1h')
  })

  it('Shows yesterday', () => {
    const date = '2022-06-01T12:18:02.631Z'
    expect(formatRelativeDate(date)).toEqual('yesterday')
  })

  it('Shows days ago', () => {
    const date = '2022-05-30T12:18:02.631Z'
    expect(formatRelativeDate(date)).toEqual('3d')
  })

  it('Shows the date', () => {
    const date = '2022-03-30T12:18:02.631Z'
    expect(formatRelativeDate(date)).toEqual('March 30, 2022')
  })

  it('Handles date format from the database', () => {
    const date = '2022-05-02T20:59:11.229Z'
    expect(formatRelativeDate(date)).toEqual('May 2, 2022')
  })
})

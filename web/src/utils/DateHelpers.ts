import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  format,
  parseISO,
} from 'date-fns'

export const formatRelativeDate = (date: string): string => {
  const now = new Date(Date.now())
  const past = parseISO(date)

  // minutes ago
  if (Math.abs(differenceInMinutes(past, now)) < 60) {
    return `${Math.abs(differenceInMinutes(past, now))}m`
  }

  // hours ago
  if (Math.abs(differenceInHours(past, now)) < 24) {
    return `${Math.abs(differenceInHours(past, now))}h`
  }

  // yesterday
  if (Math.abs(differenceInDays(past, now)) < 2) {
    return `yesterday`
  }

  // days ago (within the last month)
  if (Math.abs(differenceInDays(past, now)) < 29) {
    return `${Math.abs(differenceInDays(past, now))}d`
  }

  // just display the date
  return format(past, 'MMMM d, yyyy')
}

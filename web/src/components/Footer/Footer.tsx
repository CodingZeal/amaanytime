import { getYear } from 'date-fns'

import { Link, routes } from '@redwoodjs/router'

const getCurrentYear = (): string => {
  const year = getYear(new Date(Date.now())).toString()
  return year
}

const Footer = () => {
  return (
    <footer
      className="text-center text-sm italic text-gray-500"
      data-testid="copyright"
    >
      <nav className="footer-nav w-full py-5 text-center font-semibold">
        <ul className="flex flex-wrap justify-center gap-2">
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
          <li>
            <Link to={routes.waitingList()}>Waiting List</Link>
          </li>
        </ul>
      </nav>
      <div>
        Copyright &copy;{getCurrentYear()}.{' '}
        <a
          href="http://codingzeal.com"
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
        >
          Coding ZEAL
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  )
}

export { Footer }

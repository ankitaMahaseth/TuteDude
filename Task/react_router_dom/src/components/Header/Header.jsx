
import { NavLink, Link } from 'react-router-dom'

function Header() {
const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? 'text-blue-600 font-semibold border-b'
        : 'text-gray-600 hover:text-indigo-600'
    }`
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-md font-bold text-white">
            AM
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Ankita
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
        </div>

        {/* Login/SignUp Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-md px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-md bg-indigo-600 px-5 py-2 font-semibold text-white transition hover:bg-indigo-700 text-md"
          >
            SignUp
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Header

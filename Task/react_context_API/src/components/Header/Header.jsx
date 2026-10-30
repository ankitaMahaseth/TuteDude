
import { NavLink, Link } from 'react-router-dom'

function Header() {
const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? 'text-blue-600 font-semibold border-b'
        : 'text-gray-600 hover:text-indigo-600'
    }`
  return (
    <header className="sticky top-0 z-50 w-full py-3 px-10 border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
            AM
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/">
            Categories
          </NavLink>

           <NavLink to="/">
            About Us
          </NavLink>
        </div>

        {/* Login/SignUp Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="rounded-lg px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
          >
            Sign Up
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Header

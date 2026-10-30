import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 text-center">
        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-center gap-4 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-200">
            © {currentYear} Ankita Mahaseth. All rights reserved.
          </p>

          <Link
            to="/"
            className="text-sm text-gray-400 transition hover:text-indigo-400"
          >
            Made with ❤️
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { Link } from "react-router-dom"
import { FaBars, FaRegWindowClose } from "react-icons/fa"
import { useState } from "react"

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)

  const mobileNavList = mobileNav
    ? "bg-red-900 absolute top-12 left-0 right-0 flex flex-col gap-8 py-8 items-center border-b"
    : "hidden sm:flex items-center gap-2"

  return (
    <div className="bg-red-900 w-full h-12 fixed top-0 left-0 z-10 border-b border-white">
      <header className="h-full container mx-auto p-2 flex items-center justify-between relative">
        <div className="text-white font-bold font-sourceSerifPro text-2xl">
          <Link to="/maverick-twin-realty/" onClick={() => setMobileNav(false)}>
            MAVERICK
          </Link>
        </div>
        <nav>
          <ul className={mobileNavList}>
            <li>
              <Link
                to="/about"
                onClick={() => setMobileNav(false)}
                className="text-white px-4 py-2"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setMobileNav(false)}
                className="text-white px-4 py-2"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMobileNav(false)}
                className="bg-white text-red-900 px-4 py-2 rounded"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <button
            className="text-white text-2xl sm:hidden"
            onClick={() => setMobileNav((prev) => !prev)}
          >
            {mobileNav ? <FaRegWindowClose /> : <FaBars />}
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header

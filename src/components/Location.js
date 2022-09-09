import { useState } from "react"
import { Link } from "react-router-dom"

const Location = ({ location, image }) => {
  const [showLink, setShowLink] = useState(false)

  return (
    <div
      className="bg-neutral-300 relative flex overflow-hidden rounded-md shadow shadow-black"
      onMouseEnter={() => setShowLink(true)}
      onMouseLeave={() => setShowLink(false)}
    >
      <div className="bg-black/25 position absolute z-10 inset-0 flex flex-col gap-2 items-center justify-center hover:bg-black/50">
        <h4 className="text-3xl font-bold text-white">{location}</h4>
        {showLink && (
          <Link
            to="/contact"
            className="bg-yellow-300 text-red-900 font-bold px-4 py-2 rounded"
          >
            Shedule Appointment
          </Link>
        )}
      </div>
      <img src={image} alt="House" className="w-full" />
    </div>
  )
}
export default Location

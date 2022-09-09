import { Link } from "react-router-dom"
import { FaArrowAltCircleRight } from "react-icons/fa"
import Location from "../components/Location"

const Home = () => {
  return (
    <section className="bg-red-900 px-2">
      <div className="h-screen flex flex-col pt-12 pb-2">
        <div className="flex flex-col items-center justify-center gap-2 h-1/2 md:h-3/4">
          <h1 className="text-white text-center font-bold font-dmSerifDisplay text-4xl sm:text-5xl md:text-6xl">
            MAVERICK TWIN REALTY LLC
          </h1>
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
            Real Estate Broker
          </h2>
          <p className="text-neutral-300">
            Serving the Triad and surrounding areas
          </p>
          <div>
            <Link to="/services">
              <div className="flex items-center gap-2 bg-yellow-300 max-w-max px-6 py-3 rounded text-red-900">
                <span className="font-bold">SERVICES</span>
                <FaArrowAltCircleRight size={24} />
              </div>
            </Link>
          </div>
        </div>
        <div className="h-1/2 md:h-1/4 grid gap-2 md:grid-cols-3 ">
          <Location location="GREENSBORO" image="./greensboro-house.jpg" />
          <Location
            location="WINSTON SALEM"
            image="./winston-salem-house.jpg"
          />
          <Location location="HIGH POINT" image="./high-point-house.jpg" />
        </div>
      </div>
    </section>
  )
}

export default Home

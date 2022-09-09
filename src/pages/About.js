import React from "react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section className="min-h-screen pt-12 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <h2 className="text-red-900 font-bold text-start text-3xl md:text-4xl font-dmSerifDisplay">
          ABOUT ME
        </h2>
        <p className="text-xl">
          Hello, my name is Brenda Lowe, I am the owner of Maverick Twin Realty.
        </p>
        <p className="text-xl">
          My mission is to help my clients find the home of their dreams, and to
          help them discover financial wealth with the purchase and/or rental of
          investment properties. I succeed when my clients succeed and success
          is my goal.
        </p>
        <p className="text-xl">
          Please feel free to contact me for information or the get started on
          your search for your next property.
        </p>
        <div>
          <Link
            to="/contact"
            className="px-6 py-4 rounded bg-red-900 text-yellow-300 font-bold"
          >
            CONTACT ME
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About

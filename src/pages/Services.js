import React from "react"
import ServiceType from "../components/ServiceType"

const Services = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-14 px-2 pb-2">
      <div className="flex flex-col gap-2">
        <h2 className="text-red-900 font-bold text-center text-3xl font-dmSerifDisplay">
          OUR SERVICES
        </h2>
        <ul className="grid gap-4">
          <ServiceType
            title="Finding the home of your dreams."
            image="./house-for-sale.jpeg"
          />
          <ServiceType
            title="Selling or Renting your existing home."
            image="./house-sold.jpg"
            reverse
          />
          <ServiceType
            title="Contracting home improvements."
            image="./house-renovation.jpg"
          />
          <ServiceType
            title="Cleaning of vacant properties."
            image="./house-cleaning.jpg"
            reverse
          />
        </ul>
      </div>
    </section>
  )
}

export default Services

import { BsInstagram } from "react-icons/bs"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMailOpenOutline } from "react-icons/io5"
import ContactType from "../components/ContactType"

const Contact = () => {
  return (
    <section className="pt-12 h-screen bg-red-900 flex flex-col items-center justify-center">
      <div className="bg-white p-4 max-w-3xl w-full h-[500px] flex flex-col justify-around rounded shadow-md shadow-black">
        <h3 className="text-red-900 font-bold text-4xl font-dmSerifDisplay text-center">
          CONTACT ME
        </h3>
        <ul className="bg-white px-2 grid gap-2">
          <ContactType
            title="Give Me A Call"
            link="tel:336-552-0576"
            medium="336-552-0576"
            icons={<FaPhoneAlt />}
          />
          <ContactType
            title="Follow Me On Instagram"
            link="https://www.instagram.com"
            medium="@brendalowe"
            icons={<BsInstagram />}
          />
          <ContactType
            title="Send Me A Email"
            link="mailto:mtwinrealtyllc@gmail.com"
            medium="mtwinrealtyllc@gmail.com"
            icons={<IoMailOpenOutline />}
          />
        </ul>
      </div>
    </section>
  )
}

export default Contact

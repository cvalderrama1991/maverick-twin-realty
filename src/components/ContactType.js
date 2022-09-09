const ContactType = ({ title, medium, icon, link }) => {
  return (
    <li className="border border-neutral-300 rounded p-2 flex flex-col items-center">
      <h4 className="font-bold text-xl">{title}</h4>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-900 flex items-center gap-2 text-xl"
      >
        {icon} {medium}
      </a>
    </li>
  )
}
export default ContactType

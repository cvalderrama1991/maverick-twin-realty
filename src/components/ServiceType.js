const ServiceType = ({ title, image, reverse }) => {
  return (
    <li
      className={`bg-red-900 shadow shadow-black flex flex-col justify-between ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } rounded-md overflow-hidden`}
    >
      <div className="flex items-center justify-center min-h-[100px] max-w-[500px] w-full">
        <h4 className="text-white font-bold text-xl">{title}</h4>
      </div>
      <div>
        <img src={image} alt="house" className="max-h-[500px] w-full" />
      </div>
    </li>
  )
}
export default ServiceType

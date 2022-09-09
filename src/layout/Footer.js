const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="w-full h-12 flex items-center justify-center bg-red-900 text-white">
      <p>Copyright &copy; {footerYear} Maverick Twin Realty LLC</p>
    </footer>
  )
}

export default Footer

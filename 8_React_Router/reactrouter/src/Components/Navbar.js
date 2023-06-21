import "./Navbar.css"

import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
        <Link to = "/">Home</Link>
        <a href="/about">Sobre</a>
    </nav>
  )
}

export default Navbar
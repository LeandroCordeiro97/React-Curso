import { NavLink } from "react-router-dom"
import "./Navbar.css"

function NavBar() {
  return (
   <nav>
    <NavLink to ="/" >Home</NavLink>
    <NavLink to ="/products" >Produtos</NavLink>
    <NavLink to ="/about" >About</NavLink>
   </nav>
  )
}

export default NavBar
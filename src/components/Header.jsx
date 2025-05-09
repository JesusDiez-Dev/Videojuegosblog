import { Link, NavLink } from "react-router-dom"
import logo from "../img/consola-de-juego.png"
function Header() {
  return (
    <>

        <header>

            <div className="header-logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <nav className="header-nav">
                <ul>
                    <Link to="/analisis">Análisis</Link>
                </ul>
            </nav>
        </header>

    </>
  )
}

export default Header

import Buscador from "./_buscador"
import Logo from "./_logo"
import PerfilUsuario from "./_perfilUsuario"
import './Header.css'
const Header = () => {
  return (
    <div className="header">
    <section className="navegacion">
    <Logo></Logo>
    <PerfilUsuario usuario="Cristian"></PerfilUsuario>
    </section>
    <Buscador></Buscador>
    </div>
  )
}

export default Header
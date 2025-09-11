import Buscador from "./_buscador"
import Logo from "./_logo"
import PerfilUsuario from "./_perfilUsuario"
import './Header.css'
const Header = ({usuario}) => {
  return (
    <section className="header">
    <div className="header-superior">
    <Logo></Logo>
    <PerfilUsuario usuario="Cristian"></PerfilUsuario>
    </div>
    
    <section className="bienvenida">
    <h1>Buenas noches {usuario}</h1>
    <p>Te ayudamos a encontrar los mejores restaurantes, bares
    y cafeterias </p>
    </section>
    
   
    <Buscador></Buscador>
    </section>
  )
}

export default Header
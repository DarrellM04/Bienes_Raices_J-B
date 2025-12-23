import { Link } from 'react-router'
import './footer.css'

function Footer(){
    return(
    <footer className="footer">
        <div className='footer-content'>
            <nav className='nav'>
                <Link to="./sobre">Sobre Nosotros</Link>
                <h1> Contacto </h1>
            </nav>
        </div>
    </footer>
)
}


export default Footer;
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import './header.css'

function Header(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return(
    <header className= {`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
              <nav className="navbar-expand-lg">
                    <Link to="./" className="logo">
                        <img src="/logo_prueba3.png" alt="Logo B&J" className="logo-img"></img>    
                    </Link> 
                </nav>
                <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/propiedades">Propiedades</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
        </div>
    </header>
    );
}

export default Header;
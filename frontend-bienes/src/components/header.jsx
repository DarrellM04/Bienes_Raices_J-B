import React, { useState, useEffect } from "react";
import './header.css'

function Header(){
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
            <div className="logo">
            <img src="/Logo_prueba.png" alt="Logo B&J" className="logo-img"></img>    
            </div>
            <h1>Bienes Raices Jimenez&Bogarin</h1>
        </div>
        <nav className="nav">
            <a href="#inicio">Inicio</a>
            <a href="#propiedades">Propiedades</a>
            <a href="#contacto">Contacto</a>
        </nav>
    </header>
    );
}

export default Header;
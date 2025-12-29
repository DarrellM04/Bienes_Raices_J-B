import { Link } from "react-router";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>J&B Jiménez & Bogarín</h1>
      <p>Bienes raíces con confianza y claridad</p>

      <Link to="/propiedades" className="hero-button">
        Ver propiedades
      </Link>
    </section>
  );
}

export default Hero;

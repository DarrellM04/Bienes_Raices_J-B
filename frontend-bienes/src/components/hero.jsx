import { Link } from "react-router";
import "./hero.css";

function Hero() {
  return (
    <section className="hero bg-transparent">
      <h1>J&B</h1>
      <Link to="/propiedades" className="hero-button btn">
      Ver propiedades
      </Link>
    </section>
  );
}

export default Hero;

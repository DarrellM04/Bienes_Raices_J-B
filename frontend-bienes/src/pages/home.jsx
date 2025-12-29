import Hero from "../components/hero";

function Home() {
  return (
    <main>
      <Hero />
      <section className="home-info">
        <h2>Encuentra tu próximo hogar</h2>
        <p>
          Casas y terrenos disponibles.
        </p>
      </section>
    </main>
  );
}

export default Home;

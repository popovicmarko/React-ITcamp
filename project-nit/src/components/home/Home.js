import './home.css';

export default function Home(props) {
  console.log(props)
  return (
    <div className="home">
          <h1>Dobrodošli u naš hotel!</h1>
        <section>
          <p>Naš hotel nudi vrhunski smještaj i usluge za sve goste koji žele uživati u odmoru ili posjetiti grad. Naše sobe su moderne i opremljene svim udobnostima.</p>
          <p>Za sve goste imamo besplatan WiFi, besplatan parking i dostupnost cijelo vrijeme recepcije.</p>
        </section>
    </div>
  );
}

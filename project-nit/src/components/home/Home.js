import './home.css';

export default function Home(props) {
  console.log(props)
  return (
    <div className="home">
      <div className="concent">
        <h2>Dobro dosli u moju prvu React aplikaciju!</h2>
        <h3>Hvala sto ste nas posetili, Marko Popovic.</h3>
      </div>
    </div>
  );
}

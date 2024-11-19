import logo from "./logo.svg";
import "./App.css";
import TeluguHeroines from "./components/TeluguHeroines";


function App() {
  return (
    <div className="App">
      <h1 className="headingH">Telugu Heroines Hit & Flop Movies</h1>
      <hr></hr>
      <div className="mainD">
        <h1>Name:Kajal Agarwal</h1>
        <img src="http://www.hdwallpapers.in/walls/kajal_agarwal_2013-wide.jpg" alt=""></img>
        <h2>Industry:Telugu</h2>
        <h2>Hit Movie:Magadheera</h2>
        <h2>Flop Movie:Sita</h2>
      </div>
      <div className="mainD">
        <h1>Name:Samantha</h1>
        <img src="https://images.news18.com/ibnlive/uploads/2022/09/samantha-ruth-prabhu-5-1-1-166246326216x9.jpg" alt=""></img>
        <h2>Industry:Telugu</h2>
        <h2>Hit Movie:Eega</h2>
        <h2>Flop Movie:Jaanu</h2>
      </div>
      <div className="mainD">
        <h1>Name:sreeleela</h1>
        <img src="https://www.m9.news/wp-content/uploads/2023/12/Sreeleela-5.jpg" alt=""></img>
        <h2>Industry:Telugu</h2>
        <h2>Hit Movie:Dhamaka</h2>
        <h2>Flop Movie:Pellisandadi</h2>
      </div>
      <div className="mainD">
        <h1>Name:Pooja Hegde</h1>
        <img src="image/pooja.jpg" alt=""></img>
        <h2>Industry:Telugu</h2>
        <h2>Hit Movie:Maharshi</h2>
        <h2>Flop Movie:Beast</h2>
      </div>
      <hr></hr>
      <TeluguHeroines name="Kajal Agarwal" imgURL="http://www.hdwallpapers.in/walls/kajal_agarwal_2013-wide.jpg" industry="Telugu" hitmovie="Magadheera" flopmovie="Sita"></TeluguHeroines>
      <TeluguHeroines name="Samantha" imgURL="https://images.news18.com/ibnlive/uploads/2022/09/samantha-ruth-prabhu-5-1-1-166246326216x9.jpg" industry="Telugu" hitmovie="Eega" flopmovie="Jaanu"></TeluguHeroines>
      <TeluguHeroines name="sreeleela" imgURL="https://www.m9.news/wp-content/uploads/2023/12/Sreeleela-5.jpg" industry="Telugu" hitmovie="Dhamaka" flopmovie="Pellisandadi"></TeluguHeroines>
      <TeluguHeroines name="Pooja Hegde" imgURL="image/pooja.jpg" industry="Telugu" hitmovie="Maharshi" flopmovie="Beast"></TeluguHeroines>
    </div>
  );
}

export default App;

import './App.css';
import Header from "./components/Header.js";
import Card from "./components/Card";
import places from "./sample_data/JournalData.js";

function App() {
  const cards = places.map(
    place => <Card {...place} key={place.id} />
  )
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;

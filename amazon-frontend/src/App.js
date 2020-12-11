import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import CardsList from "./components/CardsList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <CardsList />
    </div>
  );
}

export default App;

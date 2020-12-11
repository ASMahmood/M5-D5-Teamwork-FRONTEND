
import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import CardsList from "./components/CardsList";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import BackOffice from "./components/BackOffice";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Route path="/backoffice" exact={true} component={BackOffice} />
    <CardsList />
    </BrowserRouter>


      


  );
}

export default App;

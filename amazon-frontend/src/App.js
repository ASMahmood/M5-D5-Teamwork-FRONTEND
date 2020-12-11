import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import BackOffice from "./components/BackOffice";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/backoffice" exact={true} component={BackOffice} />
    </BrowserRouter>
  );
}

export default App;

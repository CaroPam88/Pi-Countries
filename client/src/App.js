import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Home, Form, Detail, Landing, NavBar } from "./Views";


function App() {
  const location = useLocation();
  return (
    <div className="App" > 
     
      {location.pathname !== "/" && <NavBar />}

      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/form">
        <Form />
      </Route>

      <Route path="/detail/:id">
        <Detail />
      </Route>

      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;

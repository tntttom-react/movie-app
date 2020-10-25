import "./App.css";
import { Router } from "@reach/router";

//Screens
import Home from "./components/Screens/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;

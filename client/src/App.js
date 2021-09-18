import Home from "./Components/Home";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Home/>
    </div>
  );
}

export default App;

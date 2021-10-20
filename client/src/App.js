import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={()=> <Home/>}/>
          <Route exact path="/resume" component={()=> <Resume/>}/>
          <Route exact path="/my-projects" component={()=> <Projects/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

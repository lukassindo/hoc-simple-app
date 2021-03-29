import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Router>
          <div>
            <ul className="navigation">
              <li>
                <Link to="/">Italian recipies</Link>
              </li>
              <li>
                <Link to="/cheese">Cheese</Link>
              </li>
              <li>
                <Link to="/pasta">Pasta</Link>
              </li>
              <li>
                <Link to="/sauces">Sauces</Link>
              </li>
            </ul>

            <hr />

          
            <Switch>
              <Route exact path="/">
                <Recipes/>
              </Route>
              <Route path="/cheese">
                <Cheese/>
              </Route>
              <Route path="/pasta">
                <Pasta/>
              </Route>
              <Route path="/sauces">
                <Sauce/>
              </Route>
             
            </Switch>
          </div>
        </Router>
         
      </main>
    </div>
  );
}

export default App;

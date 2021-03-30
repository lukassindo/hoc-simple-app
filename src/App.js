import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {RecipesList, CheeseList, PastaList, SauceList} from './Reload';


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
                <RecipesList/>
              </Route>
              <Route path="/cheese">
                <CheeseList/>
              </Route>
              <Route path="/pasta">
                <PastaList/>
              </Route>
              <Route path="/sauces">
                <SauceList/>
              </Route>
             
            </Switch>
          </div>
        </Router>
         
      </main>
    </div>
  );
}

export default App;

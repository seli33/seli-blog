import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  const title="welcome to seli's blog ";
  const likes=50;
  const link=" https://github.com/seli33/seli-blog ";

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

             <Route path="/create">
              <Create/>
            </Route>

            

            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

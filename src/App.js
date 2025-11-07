import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title="welcome to seli's blog ";
  const likes=50;
  const link=" https://github.com/seli33/seli-blog ";

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Welcome from './components/welcome'
function App() {
  return ( 
    <Router>
      <div>
        <Navbar />
        <Home />
        <News/>
        <About/>
        <Welcome/>
      </div>
    </Router>
  );
}

export default App;

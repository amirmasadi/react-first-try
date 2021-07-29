import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Switch >
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


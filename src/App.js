import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Projects/:projId">
            <ProjectDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;

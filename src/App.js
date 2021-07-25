import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NotFound from "./Pages/404";
import Contact from "./Pages/Contact";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Appointment from "./Pages/Appointment";


function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/terms-conditions">
            <TermsAndConditions />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/index">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>

  );
}

export default App;

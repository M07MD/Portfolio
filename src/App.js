// import Glogbal Style
import GlobalStyle from "./components/GlobalStyle";

// import components
import Nav from "./components/Nav";

// Router
import { Switch, Route } from "react-router-dom";

// import pages
const { default: AboutUs } = require("./pages/AboutUs");
const { default: OurWork } = require("./pages/OurWork");
const { default: ContactUs } = require("./pages/ContactUs");

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/work">
          <OurWork />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// import Glogbal Style
import GlobalStyle from "./components/GlobalStyle";

// import components
import Nav from "./components/Nav";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion";

// import pages
const { default: AboutUs } = require("./pages/AboutUs");
const { default: OurWork } = require("./pages/OurWork");
const { default: ContactUs } = require("./pages/ContactUs");
const { default: ProjectDetail } = require("./pages/ProjectDetail");

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>

          <Route path="/work/:id">
            <ProjectDetail />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

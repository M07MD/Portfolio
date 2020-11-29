// import Glogbal Style
import GlobalStyle from "./components/GlobalStyle";

// import components
import Nav from "./components/Nav";

// import pages
const { default: AboutUs } = require("./pages/AboutUs");

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;

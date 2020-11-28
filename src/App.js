// import Glogbal Style
import GlobalStyle from "./components/GlobalStyle";

// import pages
const { default: AboutUs } = require("./pages/AboutUs");

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;

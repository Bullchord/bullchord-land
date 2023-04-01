import Layouts from "./Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Layouts />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

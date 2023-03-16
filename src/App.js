import Layouts from "./Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
      <Layouts />
    </Router>
    </div>
  );
}

export default App;

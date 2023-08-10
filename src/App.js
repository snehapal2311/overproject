import './App.css';
import Allroutes from "./Allroutes"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div classNameName="App">
      <Router>
        <Navbar />
        <Allroutes />
      </Router>
    </div>
  );
}

export default App;

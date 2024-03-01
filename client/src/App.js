import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Masterofceremony from './Pages/Masterofceremony';
import Header from './Components/Header';
import Homescreen from './Pages/Homescreen';
import Fitnesstrainer from './Pages/Fitnesstrainer';
import Lifecoach from './Pages/Lifecoach';
import About from './Pages/About';
import Sidebar from './Components/UI/Sidebar';
import Contact from './Components/UI/Contact';
function App() {
  return (
    <div className="App">    
       <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/services/master of ceremony" element={<Masterofceremony />} />
        <Route path="/services/Lifecoach" element={<Lifecoach />} />
        <Route path="/services/fitness coach" element={<Fitnesstrainer />} />
        <Route path="/services/About" element={<About />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;

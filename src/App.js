import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe.js';
import Appreciations from './components/Appreciations.js';
import Breifcase from './components/Briefcase.js';
import Contact from './components/Contact.js';
import Services from './components/Services.js';

import './App.css';


function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Navigation/>
        </header>

        <Home/>
        <AboutMe/>
        <Services/>
        <Breifcase/>
        <Appreciations/>
        <Contact/>
        
    </div>
  );
}

export default App;

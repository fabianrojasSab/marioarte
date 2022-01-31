import Navigation from './components/Navigation.js';
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Navigation/>
        </header>


        
        <Home/>
        <Projects/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Experience from './components/Experience';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/Footer';
import Certs from './components/Certs';
import Education from './components/Education';
import DinoGame from './components/DinoGame';

function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition">
      <DarkModeToggle />
      <Header />
      <About />
      <Experience />
      <Education />
      <Certs />
      <DinoGame />
      <Footer /> 
      
    </div>
  );
}

export default App;

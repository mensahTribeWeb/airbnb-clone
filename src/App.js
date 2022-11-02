import NavBar from './components/NavBar';
import './App.css';
import Hero from './components/Hero';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Card 
          img="katie.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
            />
    </div>
  )
}

export default App;

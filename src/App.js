import NavBar from './components/NavBar';
import './App.css';
import Hero from './components/Hero';
import Card from './components/Card';
import CardData from './components/CardData';



export default function App() {

      const cards = CardData.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
            )
          })
return(
      <div className="App">
      <NavBar/>
      <Hero/>
      <div className="cards-list">      
       {cards}
      </div>
    </div>
)
}
  




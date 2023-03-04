import './Netflix/cards.css';
import Cards from './Netflix/Cards';
import Data from './Netflix/CardsData';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Top 6 Netflix Series in 2022</h1>
    { 
        Data.map((val, index)=>{
        return (
          <Cards key={index}
            img= {val.img}
            category={val.category}
            title={val.title}
            link={val.link}
          />
        )
        })
      }
    
    </div> 
  );
}

export default App;

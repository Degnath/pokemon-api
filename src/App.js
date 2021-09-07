// import logo from './logo.svg';
import './App.css';
// import Api from './components/Api';
import {useState} from 'react'

function App() {

    const [topPokemon, setTopPokemon] = useState([])

    const getPokemon = () => {
        console.log("confirmed")
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            console.log('*************')
            console.log(response)
            console.log('*************')
          return response.json();
      }).then(response => {
          console.log('!!!!!!!!!!!!!')
          console.log(response);
          console.log('!!!!!!!!!!!!!!')
          setTopPokemon(response.results)
      }).catch(err=>{
          console.log(err);
      });
    }
  return (
    <div className="App">
      <button className="btn btn-primary mt-3" onClick={getPokemon}>Fetch Pokemon</button>
      {topPokemon.map((pokemonName, idx)=> {
        return <div class="card">
        <div class="card-body">
          <li class="card-title">{pokemonName.name}</li>
    
        </div>
      </div>
      })}

    </div>
  );
}

export default App;

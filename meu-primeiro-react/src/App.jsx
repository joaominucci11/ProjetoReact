import { useEffect, useState } from 'react'
import './App.css'
import Buscar from './component/Buscar.jsx';
 
const Cartao = ({título}) => {
  const [curtiu, setCurtiu] = useState(false);
  const [contagem, setContagem] = useState(0);
  useEffect(()=>{
    console.log(`${título} foi curtido: ${curtiu}`);
  }, [curtiu]);
  return(
    <div className="text-3xl underline text-red-500" onClick={()=>setContagem(contagem + 1)}>
      <h2>{título}</h2>
      <h2>{contagem}</h2>
      <button onClick={()=>setCurtiu(!curtiu)}>
        {curtiu? "❤️" : "🤍"}
      </button>
    </div>
  )
}
 
const App = () => {
  const [termoBusca, setTermoBusca] = useState("");
  const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
  const API_URL_BASE = 'https://api.themoviedb.org/3';
  const API_OPCOES = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    }
  }

  const [errorMessage, setErrorMessage] = useState('')

  const fetchMovies = async () => {
    try{

    } catch(error){
      console.error(`Erro ao buscar filmes: ${error}`);
      setErrorMessage('Erro ao buscar filmes. Favor tentar mais tarde.');
    }
  }
  return(
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Banner do Herói" />
          <h1>
            Encontre Os <span className="text-gradient">Filmes</span> Que Você vai Gostar
          </h1>
        </header>
          < Buscar termoBusca={termoBusca} setTermoBusca={setTermoBusca}/>
          <h1 className="text-white">{termoBusca}</h1>
          <section className='all-movies'>
            <h2>Todos os filmes</h2>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}  
          </section>
      </div> 
    </main>
 
 
  )
}
 
export default App
 
 
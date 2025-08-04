import { useEffect, useState } from 'react'
import './App.css'
import Buscar from './component/Buscar.jsx';
 
// hooks são funções do react que permitem utilizar recursos como estado e efeitos colaterais (useState/useEffect).
 
const Cartao = ({título}) => {
  const [curtiu, setCurtiu] = useState(false);
  const [contagem, setContagem] = useState(0);
  useEffect(()=>{ // lidar com efeitos colaterais
    console.log(`${título} foi curtido: ${curtiu}`); // função lambda/callback é o primeiro parâmetro
  }, [curtiu]); // variável 'curtiu' é o segundo parâmetro, se não informada, um array com todas as variáveis é criado.
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
  const [termoBusca, setTermoBusca] = useState(""); // desestruturação (quando atribui uma variável e uma função a uma variável/constante). A função altera o valor da variável.
  const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
  const API_URL_BASE = 'https://api.themoviedb.org/3'
  const API_OPCOES = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    }
  } // o formato json é exigência da API
 
  const[errorMessage, setErrorMessage] = useState('');
 
  const fetchMovies = async () => {
    try{
      const endpoint = `${API_URL_BASE}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPCOES);
      if(!response.ok){
        throw new Error('Erro na requisição.');
      }
 
      const data = await response.json();
 
      console.log(data);
    } catch (error){
      console.error(`Erro ao buscar filmes: ${error}`);
      setErrorMessage('Erro ao buscar filmes. Favor tentar mais tarde.');
    }
  }

  useEffect(() =>{
    fetchMovies();
  }, [] )
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
        <Buscar termoBusca={termoBusca} setTermoBusca={setTermoBusca}/>
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
 
// && = Operador if, se a primeira condição for falsa, o resto da linha não é executado, etc. Não dá pra usar if no return (nem comentário, aliás).
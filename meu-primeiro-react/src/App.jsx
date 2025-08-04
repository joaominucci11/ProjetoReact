import { useEffect, useState } from 'react'
import './App.css'
import Buscar from './component/Buscar';

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
          <h2>Componente Funcional</h2>
          <Cartao título="Kill Bill"/>
          <Cartao título="Toy Story 2"/>
          <Cartao título="Blade"/>
          < Buscar/>
      </div>
    </main> 


  )
}

export default App

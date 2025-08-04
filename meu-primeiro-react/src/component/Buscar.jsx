import React from "react";

const Buscar = ({termoBusca, setTermoBusca}) =>{
    return(
        <div className="search">
            <img src="busca.svg" alt="buscar" />
            <input 
                type="text" 
                placeholder="Busque em milhares de filmes"
                aria-valuenow={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}            
            />
        </div>
    )
}
export default Buscar
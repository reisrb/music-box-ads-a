import React, {useState, useEffect} from 'react';

import api from '../api';

function Musicas() {
  
  const [listaMusicas, setListaMusicas] = useState([]);
  
  // function listar() {
  //   //get() é a mesma coisa que o -> api.get("/")
  //   api.get().then(res => {
  //     console.log(res);
  //     console.log("Dados da API", res.data);
  //     setListaMusicas(res.data);
  //   }).catch(erro => {
  //     console.log(erro);
  //   })
  // }

  useEffect(() => {
    api.get().then(res => {
      setListaMusicas(res.data)
    }).catch(erro => {
      console.log(erro);
    })
  }, [])

  return(
    <>
      <h1>Lista de músicas</h1>
      {/* <button onClick={listar}>Listar músicas</button> */}
      {
        listaMusicas.map(musica => (
          <div key={musica.id}>
            <h2>Nome da música: {musica.nome}</h2>
            <h2>Artista da música: {musica.artista}</h2>
          </div>
        ))
      }
    </>
  );
}

export default Musicas; 
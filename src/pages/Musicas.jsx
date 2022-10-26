import React, { useState, useEffect } from 'react';

import api from '../api';

import ItemMusica from '../components/ItemMusica';
import Menu from '../components/Menu';

function Musicas() {

  const [listaMusicas, setListaMusicas] = useState([]);

  useEffect(() => {
    api.get().then(res => {
      setListaMusicas(res.data)
    }).catch(erro => {
      console.log(erro);
    })
  }, [])

  return (
    <>
      <Menu />
      <div className="container">
        <div className="filter">
          <button className="btn">Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">

          {
            listaMusicas.map(musica => (
              <ItemMusica
                key={musica.id}
                nome={musica.nome}
                artista={musica.artista}
                ano={musica.ano}
                categoria={musica.genero}
                capa={musica.imagem}
                id={musica.id}
              />
            ))
          }

        </div>
      </div>
    </>
  );
}

export default Musicas; 
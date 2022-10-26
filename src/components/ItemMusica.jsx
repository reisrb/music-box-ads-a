import React, {useState} from 'react';

import deleteIcon from '../assets/imagens/delete-icon.png';
import editIcon from '../assets/imagens/edit-icon.png';
import capaPadrao from '../assets/imagens/capa.png';

import api from '../api';

function ItemMusica(props) {
  const estilo = {
    backgroundImage: `url(${props.capa ? props.capa : capaPadrao})`
  }

  const [nomeInput, setNomeInput] = useState(props.nome);
  const [artistaInput, setArtistaInput] = useState(props.artista);
  const [categoriaInput, setCategoriaInput] = useState(props.categoria);
  const [anoInput, setAnoInput] = useState(props.ano);

  const [editavel, setEditavel] = useState(false);

  function editar() {
    const musicaEditada = {
      nome: nomeInput,
      artista: artistaInput,
      genero: categoriaInput,
      ano: anoInput
    }

    // /musica-box/{id}
    api.put(`/${props.id}`, musicaEditada).then(res => {
      alert("Musica Atualizada!");
      setEditavel(false);
    }).catch(erro => {
      alert("Deu erro, se vira!");
      console.log(erro);
    })

    console.log(musicaEditada);
  }

  return (
    <>
      <div className="card-music" style={estilo}>
        <div className="icons">
          <img src={editIcon} alt="" onClick={() => setEditavel(!editavel)} />
          <img src={deleteIcon} alt="" />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input 
            className={editavel ? "input-music-enable" : "input-music-disabled"} 
            disabled={!editavel} type="text" defaultValue={nomeInput} onChange={(e) => setNomeInput(e.target.value)} />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input className={editavel ? "input-music-enable" : "input-music-disabled"} 
            disabled={!editavel} type="text" defaultValue={artistaInput} onChange={(e) => setArtistaInput(e.target.value)} />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input className={editavel ? "input-music-enable" : "input-music-disabled"} 
            disabled={!editavel} type="text" defaultValue={categoriaInput} onChange={(e) => setCategoriaInput(e.target.value)} />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input className={editavel ? "input-music-enable" : "input-music-disabled"} 
            disabled={!editavel} type="text" defaultValue={anoInput} onChange={(e) => setAnoInput(e.target.value)} />
          </p>
          <button 
            className={editavel ? "btn-salvar-enable" : "btn-salvar-disabled"} onClick={editar}>Salvar</button>
        </div>
      </div>
    </>
  )
}

export default ItemMusica;
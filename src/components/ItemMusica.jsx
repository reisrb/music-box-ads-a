import React from 'react';

import deleteIcon from '../assets/imagens/delete-icon.png';
import editIcon from '../assets/imagens/edit-icon.png';

function ItemMusica(props) {
  return (
    <>
      <div className="card-music">
        <div className="icons">
          <img src={editIcon} alt="" />
          <img src={deleteIcon} alt="" />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input className="input-music-enable" type="text" defaultValue={props.nome} />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input className="input-music-enable" type="text" defaultValue={props.artista} />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input className="input-music-enable" type="text" defaultValue={props.categoria} />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input className="input-music-enable" type="text" defaultValue={props.ano} />
          </p>
          <button className="btn-salvar-enable">Salvar</button>
        </div>
      </div>
    </>
  )
}

export default ItemMusica;
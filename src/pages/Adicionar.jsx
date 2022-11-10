import React from "react";

import api from "../api";
import imgLateral from "../assets/imagens/half-circles-pink-blue.png";
import { useNavigate } from "react-router-dom";

function Adicionar() {

  const navigate = useNavigate();

  function cadastrar(event) {
    event.preventDefault();

    const novaMusica = {
      nome: event.target.nome.value,
      artista: event.target.artista.value,
      genero: event.target.genero.value,
      ano: event.target.ano.value,
      imagem: event.target.imagem.value
    };

    api
      .post(`/`, novaMusica)
      .then((resposta) => {
        alert("Funcionou");
        navigate("/musicas");
      })
      .catch((error) => {
        alert("Deu erro");
      });
  }
  return (
    <>
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>adicionar</h1>
            <br />
            <form onSubmit={cadastrar}>
              <label>
                Música: <br />
                <input name="nome" type="text" />
              </label>
              <br />
              <label>
                Artista: <br />
                <input name="artista" type="text" />
              </label>
              <br />
              <label>
                Genêro: <br />
                <input name="genero" type="text" />
              </label>
              <br />
              <label>
                Ano de Lançamento: <br />
                <input name="ano" type="text" />
              </label>
              <br />
              <label>
                {" "}
                Imagem (url): <br />
                <input name="imagem" type="text" />
              </label>
              <br />
              <button className="btn" type="submit">
                Enviar
              </button>
            </form>
          </div>
          <div className="img-lateral">
            <img src={imgLateral} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adicionar;

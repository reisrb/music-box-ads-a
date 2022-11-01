import React from 'react';
import Rotas from './routes';

import "./assets/css/reset.css";
import "./assets/css/style.css";
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Menu />
      <Rotas />
    </>
  );
}

export default App;

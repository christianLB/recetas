import React from 'react';
import './App.scss';
import recetas from './recetas.json';

import Receta from './components/receta/receta';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recetas estúpidas</h1>
      </header>
      <section className={'main'}>
        {
          recetas.recetas.map((r, i) => {
            return <Receta key={i}
              titulo={r.titulo}
              ingredientes={r.ingredientes}
              pasos={r.pasos} 
            />
          })
        }
      </section>
      <footer></footer>
    </div>
  );
}

export default App;

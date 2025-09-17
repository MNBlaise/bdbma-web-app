import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>BDBMA</h1>
        <p>Assainir pour Vivre Digne</p>
      </header>
      <main>
        <section>
          <h2>Bopeto Génie</h2>
          <p>Fabrication • Réparation • Adaptation • Création</p>
          <button onClick={() => alert("Se connecter...")}>Se connecter comme agent</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 BDBMA — Brigade Diaconie Bopeto Mission Arche</p>
      </footer>
    </div>
  );
}

export default App;
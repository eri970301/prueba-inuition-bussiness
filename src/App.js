import './App.css';
import burro from '../src/images/burro.png';
import caballo from '../src/images/caballo.png';
import conejo from '../src/images/conejo.png';
import gallina from '../src/images/gallina.png';
import marrano from '../src/images/marrano.png';
import oveja from '../src/images/oveja.png';
import perro from '../src/images/perro.png';
import vaca from '../src/images/vaca.png';
import game from '../src/funciones';


function App() {
  return (
    <div className="App">
          <div id="count" className="position-absolute top-50 start-50 translate-middle conteo text-center fs-1 text-white fw-bold p-4 mostrar">
          </div>
          <div id="screen" className="screen mostrar">
            <div id="alerta" className="text-center position-absolute start-50 translate-middle-x card_button opacity-0">
              <div className="card-body rounded-lg" style={{ backgroundColor: "#b71ddd" }}>
                <p className="card-text fw-bold text-white" id="aviso">Haz click en el animal que produjo el sonido</p>
              </div>
            </div>
          </div>

          <div id="alerta1" className="text-center position-absolute start-50 translate-middle-x card_button">
            <div className="card-body rounded-lg" style={{ backgroundColor: "#b71ddd" }}>
              <p className="card-text fw-bold text-white">Haz click en el botón para empezar el juego.</p>
              <a href="#" className="btn fw-bold text-white" id="empezar" style={{ backgroundColor: "#5c1171" }} onClick={game}>EMPEZAR</a>
            </div>
          </div>
          <div>
            <img src={burro} className="img_animals burro" id="burro"></img>
          </div>
          <div>
            <img src={caballo} className="img_animals caballo" id="caballo"></img>
          </div>
          <div>
            <img src={perro} className="img_animals perro" id="perro"></img>
          </div>
          <div>
            <img src={vaca} className="img_animals vaca" id="vaca"></img>
          </div>
          <div>
            <img src={conejo} className="img_animals conejo" id="conejo"></img>
          </div>
          <div>
            <img src={marrano} className="img_animals marrano" id="marrano"></img>
          </div>
          <div>
            <img src={gallina} className="img_animals gallina" id="gallina"></img>
          </div>
          <div>
            <img src={oveja} className="img_animals oveja" id="oveja"></img>
          </div>
    </div>
  );
}

export default App;

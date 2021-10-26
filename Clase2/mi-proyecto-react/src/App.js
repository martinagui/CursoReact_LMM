import './App.css';
import Contador from './componentes/Contador';
import Mensaje from './componentes/Mensaje'
//import {Mensaje} from './componentes/Mensaje'

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className='jumbotron'>
          <h1>Mi Proyecto React</h1>
          <hr/>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi fugiat perferendis doloremque maxime, praesentium officiis voluptates! Iste aliquid natus magni eum excepturi impedit? Quis odit id minima quam eius.
          </p>

          <hr/>
          <div className="row">
            <div className="col-4"><Mensaje msj="Mensaje Nro 1" fondo='green'/></div>
            <div className="col-4"><Mensaje msj="Mensaje Nro 2" fondo='orangered'/></div>
            <div className="col-4"><Mensaje msj="Mensaje Nro 3" fondo='blue'/></div>
          </div>
          <hr/>

          <Contador id="1" valor="123" fondo="brown"/>
          <Contador id="2" valor="321" fondo="black"/>
         
        </div>
      </div>      
    </div>
  );
}

export default App;

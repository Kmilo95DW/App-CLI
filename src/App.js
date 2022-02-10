import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { productos } from './components/productos';

function App() {

  customFetch(1000, productos)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

  return (
    <div>
        <Navbar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;

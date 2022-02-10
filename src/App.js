import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { productos } from './components/productos';

function App() {

  return (
    <div>
        <Navbar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;

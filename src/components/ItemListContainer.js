import "bootstrap/dist/css/bootstrap.min.css";
//import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return (
    <>
      <div className="container" id="contenido">
        <p className="shop">Shop</p>
      </div>
      <div className="container" id="contenido">
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;

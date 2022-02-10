import 'bootstrap/dist/css/bootstrap.min.css'; 
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = () => {

    return(
        <>
        <div className="container" id='contenido'>
            <ItemList/>
            <ItemCount />
        </div>
        </>
          
    );
          
}

export default ItemListContainer

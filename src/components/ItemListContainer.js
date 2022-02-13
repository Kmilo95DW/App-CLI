import 'bootstrap/dist/css/bootstrap.min.css'; 
import ItemList from './ItemList';

const ItemListContainer = () => {

    return(
        <>
        <div className="container" id='contenido'>
            <ItemList/>      
        </div>
        </>
          
    );
          
}

export default ItemListContainer

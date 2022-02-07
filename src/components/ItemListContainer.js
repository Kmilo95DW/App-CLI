import 'bootstrap/dist/css/bootstrap.min.css'; 
import ItemCount from './ItemCount';

const ItemListContainer = () => {
    return(
        <>
        <div class="container" id='contenido'>
            <p>Este es el catalogo de concepts</p>
            <ItemCount />
        </div>
        </>
          
    );
          
}

export default ItemListContainer

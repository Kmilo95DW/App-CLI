import ItemCount from './ItemCount';

const Item = (props) => {
    return(
        <div className="item-contenedor">
            <div className="image-product">
                <img src={props.picture}  alt={props.title} width ="270vw" height="340vh" object-fit="contain"/>
            </div>
            <div className="info-product">
                 <h3>{props.title}</h3>
                 <p>Precio:{props.price}</p>
            </div>
            <ItemCount />
        </div>

    );

}

export default Item
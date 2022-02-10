
const Item = () =>{
    return(
        <div className="item-contenedor">
            <div className="image-product">
                <img src={props.picture}  alt={props.title} />
            </div>
            <div className="info-product">
                 <h3>{props.title}</h3>
                 <p>Precio:{props.price}</p>
            </div>
        </div>

    );

}

export default Item
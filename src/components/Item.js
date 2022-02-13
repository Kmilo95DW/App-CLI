
const Item = (props) => {
    return(
        <div className="item-contenedor">
            <div className="image-product">
                <img src={props.picture}  alt={props.title} width ="270vw" height="340vh" object-fit="contain"/>
            </div>
            <div className="info-product">
                 <h4>{props.title}</h4>
                 <p>by: {props.artist}</p>
            </div>
        </div>

    );

}

export default Item
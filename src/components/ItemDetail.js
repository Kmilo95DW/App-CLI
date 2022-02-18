import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  return (
    <>
        <div className="item-detail-contenedor">
          <div className="image-detail-product">
            <img
              src={props.picture}
              alt={props.title}
              className="img-fluid"
              width="400vw"
              height="500vh"
              object-fit="contain"
            />
          </div>
          <div className="info-detail-product">
            <h2>{props.title}</h2>
            <p>by: {props.artist}</p>
            <h6>Description</h6>
            <p> {props.description} </p>
            <p>Precio: $ {props.price}</p>
            <p>Stock: {props.stock}</p>
            <ItemCount />
          </div>
        </div>
    </>
  );
};

export default ItemDetail;

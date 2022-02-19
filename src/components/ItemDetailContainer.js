import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "./customFetch.js";
import ItemDetail from "./ItemDetail";

const { productos } = require("./productos.js");  

const ItemDetailContainer = () => {
  const [ItemsDetail, setItemDetail] = useState({});
  const {productId} = useParams(); 

  console.log(JSON.stringify(ItemsDetail))

  useEffect(() => {
    customFetch(productos.find(producto => producto.id === parseInt(productId)), 2000)
      .then((respuesta) => setItemDetail(respuesta))
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <div className="container" id="contenido">
      <ItemDetail
        key={ItemsDetail.id} 
        picture={ItemsDetail.picture}
        title={ItemsDetail.title}
        description={ItemsDetail.description}
        artist={ItemsDetail.artist}
        price={ItemsDetail.price}
        stock={ItemsDetail.stock}
      />
    </div>
  );
};

export default ItemDetailContainer;

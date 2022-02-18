import { useEffect, useState } from "react";
import { customFetch } from "./customFetch.js";
import Item from "./Item.js";
import { useParams } from "react-router-dom";

const { productos } = require("./productos.js");

const ItemList = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const { artistId } = useParams();

  //console.log(artistId);

  useEffect(() => {
    let resultadoX = [];

    if (categoryId === undefined && artistId === undefined) {
      resultadoX = productos;
    } else if (categoryId && artistId === undefined) {
      resultadoX = productos.filter((item) => item.category === categoryId);
    } else if (categoryId === undefined && artistId) {
      resultadoX = productos.filter((item) => item.artist === artistId);
    }

    customFetch(resultadoX, 2000)
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categoryId, artistId]);

  console.log(items);

  return (
    <>
        {items.map((items) => (
          <Item
            key={items.id}
            picture={items.picture}
            title={items.title}
            artist={items.artist}
          />
        ))}
    </>
  );
};

export default ItemList;

import { useEffect, useState } from "react";
import { customFetch } from "./customFetch.js";
import Item from "./Item.js";

const {productos} = require("./productos.js");

const ItemList = () => {
        const[items, setItems] = useState([])

        useEffect( () =>{
            customFetch(productos, 2000)
                .then(respuesta => setItems(respuesta))
                .catch(error => console.log(error))
        }, [])

        return(
            <>
                {
                    productos.map(items =>
                         <Item
                            key={items.id}
                            picture={items.picture}
                            title={items.title}
                            artist={items.artist}
                         />
                        )
                }
                
            </>
           
        )
}


export default ItemList



   



import { useEffect, useState } from "react";
import { customFetch } from "./customFetch.js";
import ItemDetail from "./ItemDetail"

const {productos} = require("./productos.js");

const ItemDetailContainer = () => {
        const[itemsDetail, setItemDetail] = useState({});

        useEffect( () =>{
            customFetch(productos[6], 2000)
                .then(respuesta => setItemDetail(respuesta))
                .catch(error => console.log(error))
        }, [])

    return(
             <div className="container" id='contenido'>
                    <ItemDetail 
                      picture = {itemsDetail.picture}
                      title =  {itemsDetail.title}
                      description = {itemsDetail.description}
                      artist={itemsDetail.artist}
                      price={itemsDetail.price}
                      stock = {itemsDetail.stock}
                    />         
            </div>   

        
    )
}

export default ItemDetailContainer
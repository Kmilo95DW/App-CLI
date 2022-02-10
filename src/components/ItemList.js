import { useEffect } from "react";
import { customFetch } from "./customFetch.js";

const {productos} = require("./productos.js");

const ItemList = () => {

        useEffect( () =>{
            customFetch(1000, productos)
                .then(respuesta => console.log(respuesta))
                .catch(error => console.log(error))
        }, [])

        return
    
}


export default ItemList



   



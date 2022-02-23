import { useState } from "react";
//import { useEffect } from "react";
//import { customFetch } from "./customFetch.js";S
//import { Link } from "react-router-dom";

const { productos } = require("./productos.js");  


const ItemCount = () => {

    const handleClick = (evt) =>  {
        evt.stopPropagation();
        alert("Agregar al carrito")
    }

    const [stock, setStock] = useState(1);


    const increment = (maximo) => {
        if(stock < maximo) {
            setStock(stock + 1)
        }
    }

    const decrease = (minimo) => {
        if(stock > minimo) {
            setStock(stock - 1)
        }
    }


    return(
            <div className="content-cont">
                <div className="btn-group" role="group">
                     <button onClick={() => decrease(1)} type="button" className="btn btn-primary">-</button>
                        <div className="text-stock">
                            <p className="text-center text-center-conta">{stock}</p>
                        </div>
                    <button onClick={() => increment(7)} type="button" className="btn btn-primary">+</button>             
                </div>
                    <button onClick={handleClick} type="button" className="btn btn-primary" id="btn_cart">Agregar al carrito</button>
            </div>     
    );
}

export default ItemCount
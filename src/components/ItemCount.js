import { useState } from "react";


const ItemCount = () => {

    const [stock, setStock] = useState(1)

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
                <div class="btn-group" role="group" aria-label="Basic example">
                     <button onClick={() => decrease(1)} type="button" class="btn btn-primary">-</button>
                        <div className="text-stock">
                            <p class="text-center text-center-conta">{stock}</p>
                        </div>
                    <button onClick={() => increment(7)} type="button" class="btn btn-primary">+</button>             
                </div>
                <button type="button" class="btn btn-outline-primary">Agregar al carrito</button>
            </div>     
    );
}

export default ItemCount
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
                <div className="btn-group" role="group">
                     <button onClick={() => decrease(1)} type="button" className="btn btn-primary">-</button>
                        <div className="text-stock">
                            <p className="text-center text-center-conta">{stock}</p>
                        </div>
                    <button onClick={() => increment(7)} type="button" className="btn btn-primary">+</button>             
                </div>
                <button type="button" className="btn btn-primary" id="btn_cart">Agregar al carrito</button>
            </div>     
    );
}

export default ItemCount
let is_ok = true;

const {productos} = require("./productos.js");

console.log(productos)

export const customFetch = (timeout, task) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            if (is_ok){
                resolve(productos)
            }else{
                reject("No se pudo acceder a la base de datos")
            }    
        }, timeout);    
    })
}


export default ItemList
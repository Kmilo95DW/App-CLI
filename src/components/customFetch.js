let is_ok = true;

export const customFetch = (task, timeout) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
                if (is_ok){
                    resolve(task)
                }else{
                    reject("No se pudo acceder a la base de datos")
                }    
            }, timeout);    
        })
    }
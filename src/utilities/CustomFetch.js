
let is_ok = true;

const CustomFetch = (time,task) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(is_ok){
                resolve(task);
            } else {
                reject("An error has ocurred in customFetch -.-") ;
            }
        }, time);
    });
}

export default CustomFetch;


// store in local storage 

import { fetchData } from "./api.js";

export function storeDataToLocalStorage() {    
  
     return JSON.parse(localStorage.getItem("products")) || [];;
}

export async function addToLocalStorage(product) {
//  improted data form local storage
    let products = await fetchData();
   localStorage.setItem("products", JSON.stringify(products));
    return products;
}

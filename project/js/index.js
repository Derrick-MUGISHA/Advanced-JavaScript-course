import { storeDataToLocalStorage } from "./store.js";

const container = document.getElementById("product-list");

function displayProducts(products) {
    container.innerHTML = "";

    products.forEach((product) => {
        container.innerHTML += `
        <div class="bg-white p-4 rounded shadow">
        <div><img src="${product.thumbnail}" alt="${product.name}" class=""></div> 
           <div class="flex flex-col items-start">
           <h1 class="text-2xl font-bold text-black">${product.title}</h1>
            <h2 class="text-lg font-bold text-gray-500">${product.tags}</h2>
            <p class="text-gray-600">${product.description}</p>
            <p class="text-green-500 font-bold">$${product.price}</p>
           </div>
        </div>` 
    })
}


function getsProducts() {
    let products = storeDataToLocalStorage();

    displayProducts(products);
}

getsProducts();


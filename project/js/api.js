



// export the function 

const url = "https://dummyjson.com/products";

export async function fetchData(url) {

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("Error fetching data");
        }
        const data = await response.json();

        console.log(data.products);
        
        return data.products;

    } catch(error) {
        console.log(error);
    }
}


fetchData("https://dummyjson.com/products");
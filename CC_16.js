const productUrl = `https://www.course-api.com/javascript-store-products`;

//Task 2 
function fetchProductsThen(){
    fetch(productUrl) //fetching the data from the api url

    .then(response => {
        if (!response.ok){ //Checks if the response was succesful
            throw new Error(`Network is not Responding`) //if not it will give an error
        }
        return response.json(); //changes to a json
    })
    .then(proudcts => {
        proudcts.forEach(product => {

            console.log(product.fields.name);//logs the product name into the console
        })
    })
    .catch(error => { //sees if something goes wrong during the process
        console.error(`There is a problem with fethcing this`,error); //logs the error into the console
    })
}
//Task 3 
async function fetchProductsAsync(){
    try{
        const response = await fetch(productUrl); //fetches products information using await

        const products = await response.json();//changes to json

        displayProducts(products);//shows the products
    }
    catch(error){
        handleError(error);//checks to see if theres an error
    }
}
//Task 4 
function displayProducts(products){
    let divProductContainer = document.getElementById(`product-container`);

    products.slice(0, 5).forEach(product =>{ //first 5 products
        const productCard = document.createElement(`div`);
        productCard.setAttribute(`class`, `product-card`);
        //create and add product name
        const productName = document.createElement(`h3`);
        productName.setAttribute(`class`, `product-header`);
        productName.textContent = product.fields.name; 
        productCard.append(productName);
        //create and add price
        const productPrice = document.createElement(`div`);
        productPrice.setAttribute(`class`, `product-price`);
        productName.textContent = `$` + product.fields.price;
        productCard.append(productPrice);
        //create and add image
        const divProductImage = document.createElement(`div`);
        divProductImage.setAttribute(`class`, `product-image`);
        const productImage = document.createElement(`img`);
        productImage.src = product.fields.image[0].thumbnails.small.url;
        productImage.width = 215;
        productImage.height = 215;
        divProductImage.append(productImage);
        productCard.append(divProductImage);
        //append the product card to main container
        divProductContainer.append(productCard);
    })
}
//Task 5 
function handleError(error){
    console.log("An error has happened", error); //logging a message if an error happens into the console
}
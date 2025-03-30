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
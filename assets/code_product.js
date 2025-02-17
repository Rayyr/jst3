function stars() {

    let count = document.querySelectorAll(".product-rating");

    for (i = 0; i < count.length; i++) {
        let num = Number(count[i].textContent);
        for (j = 0; j < num; j++) {
            let startToadd = `<i class="fa-regular fa-star"></i>`;
            count[i].innerHTML += startToadd;
        }
    }


};



async function getProduct() {
    let response;
    /* the products will be shown are depends on the clicked category so the category will be variable 
       in the URL */
    try {
        const temp = new URLSearchParams(window.location.search);
        const catVar = temp.get('catValue');//to extract the catValue from URL
        response = await fetch(`https://fakestoreapi.com/products/category/${catVar}`, { method: "GET" });

    }
    catch (occured_error) {
        console.log("Sorry , Try Again Later :)");
        return;
    }
    return await response.json();

}



async function displayProductsOfCategory() {

    const realData = await getProduct();

    if (realData == undefined) {
        console.log("No Products found :)");
        return;
    }

    try {
        document.querySelector(".navbar .container ").innerHTML = `<h1>${realData[0].category}</h1>`;

        const productWillBeAdded = realData.map(function (product) {

            let pro = `<div class="product">
        
        <div class="product-image"> 
        
        <img src="${product.image}" />
           <div class="overlay">
             <div class="overlay-text">Click Me</div>  
        </div>
        </div>

        <div class="product-description">
        <p class="product-title">${product.title}</p>
        <p class="product-details">${product.description}</p>

        <div class="price">
        <p>${product.price} $</p>
        <p class="product-rating">${product.rating.rate} </p>
        <p>${product.rating.count}</p>
        </div>

        </div >

        </div>`;

            return pro;

        }).join('');


        //document here mean : the linked html file wih js file
        document.querySelector(".cont .container ").innerHTML = productWillBeAdded;
        document.querySelector(".loading").classList.add("no_display");

        stars();

    }
    catch (occured_error) {
        console.log("Sorry , Try Again Later :)");
        return;
    }

    let imgs = document.querySelectorAll(".cont .container .product img");

    add_img_event_listener(imgs);
}


function add_img_event_listener(imgs) {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click",()=>{
        
        });

        imgs[i].addEventListener("mouseenter",()=>{
            console.log(1);
            
 
          
        });

        imgs[i].addEventListener("mouseleave",()=>{
            console.log(3);
           
           
        });
    }
}

displayProductsOfCategory();


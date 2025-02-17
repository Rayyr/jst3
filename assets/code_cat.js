

async function getCategory() {
    let response;
    try {
        response = await fetch("https://fakestoreapi.com/products/categories", { method: "get" });
    }
    catch (occured_error) {
        console.log("Sorry , Try Again Later :)");
        return;

    }

    return await response.json();

}

async function showCategory() {

    const realData = await getCategory();

    if (realData == undefined) {
        console.log("No Categories found :)");
        return;
    }

    try {
        //as same as using the loop since there are no details found for each category 
        //each passed parameter to the function is about element of the array realData
        const categoriesWillBeAdded = realData.map(function (category) {

            let cat = `
        <div class="cat">
           <h1>${category}</h1>
           <div class="details">
           <a href="cat_product.html?catValue=${category}">Products</a>
           </div>
        
        </div>`;

            return cat;//the category will be added to the categories list (categoriesWillBeAdded)
        }).join(''); // to erase the commas ,


        document.querySelector(".cont .container .row").innerHTML = categoriesWillBeAdded;
        document.querySelector(".loading").classList.add("no_display");
        mani();

    }
    catch (occured_error) {
        console.log("Sorry , Try Again Later :)");
        return;
    }


}

function mani() {
    let r = document.querySelectorAll(".cat");


    r.forEach(function (ele) {


        ele.onmouseenter = function () {

            let a = ele.children[1];//details child

            a.classList.add("toggle");//or toggle

        }

        ele.onmouseleave = function () {

            let a = ele.children[1];
            a.classList.remove("toggle");//or toggle


        }
    })


}

function change_opacity(pre) {
    let cont = document.querySelector(".cont");


    if (pre > window.scrollY) {

        if (window.scrollY == 0) {
            cont.style.backgroundColor = `rgb(${0}, ${0}, ${0},${1})`;//completlly black

        }
        else {
            opacity += .008;

            //console.log("up"+opacity);
            cont.style.backgroundColor = `rgb(${0}, ${0}, ${0},${opacity})`;


        }


    }
    else {

        if (window.scrollY == 1270.4000244140625) {

            cont.style.backgroundColor = `rgb(${0}, ${0}, ${0},${0})`;//completlly white
        }
        else {

            opacity -= .008;
            cont.style.backgroundColor = `rgb(${0}, ${0}, ${0},${opacity})`;

            //console.log("down"+opacity);
        }

    }

}


showCategory(); 

 
let pre = window.scrollY;
let opacity = 1;

window.onscroll = (e) => {
    change_opacity(pre);
    pre = window.scrollY;

}



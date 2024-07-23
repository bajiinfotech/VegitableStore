// let quantity = document.querySelector('.quantity');



const products = [
    {
        Id: 1,
        Name: "Green Apple",
        price: 30,
        rating: "4",
        Image: "./assets/Popular_Products/Image.png"
    },
    {
        Id: 2,
        Name: "Green Apple",
        price: 10,
        rating: "4",
        Image: "./assets/Popular_Products/Image (1).png"
    },
    {
        Id: 3,
        Name: "Green Apple",
        price: 20,
        rating: "4",
        Image: "./assets/Popular_Products/Image (2).png"
    },
    {
        Id: 4,
        Name: "Green Apple",
        price: 70,
        rating: "4",
        Image: "./assets/Popular_Products/Image (3).png"
    },
    {
        Id: 5,
        Name: "Green Apple",
        price: 50,
        rating: "4",
        Image: "./assets/Popular_Products/Image (4).png"
    },
    {
        Id: 6,
        Name: "Green Apple",
        price: 10,
        rating: "4",
        Image: "./assets/Popular_Products/Image (5).png"
    },
    {
        Id: 7,
        Name: "Green Apple",
        price: 90,
        rating: "4",
        Image: "./assets/Popular_Products/Image (6).png"
    },
    {
        Id: 8,
        Name: "Green Apple",
        price: 70,
        rating: "4",
        Image: "./assets/Popular_Products/Image (7).png"
    },
    {
        Id: 9,
        Name: "RED",
        price: 50,
        rating: "4",
        Image: "./assets/Popular_Products/Image (8).png"
    },
    {
        Id: 10,
        Name: "Green Apple",
        price: 60,
        rating: "4",
        Image: "./assets/Popular_Products/Image (9).png"
    },
]


// navbar togglr 

const toggleBtn = () => {
    let btton = document.getElementById("navLinks")
    let nav = document.querySelector(".nav-mobile")

    btton.addEventListener("click", () => {
        // console.log("button has clicked")
        nav.classList.toggle("nav-mobile-menu")
        // btton.innerHTML = "X"
    })
}

toggleBtn()


// function onInit() {
//     let productlist = document.querySelector('.product1')

//     let productss
//     // console.log(produtlist);
//     products.map((item, index) => {
//         productss = `
//         <div class="hot-deal-product">
//                 <img src="${item.Image}" alt="">
//                 <div class="">
//                     <div>
//                         <p>${item.Name}</p>
//                         <p>${item.price}</p>
//                         <span>${item.rating}</span>
//                     </div>
//                     <div>
//                 <button id="buynowbtn">Buy Now</button>
//                 <button onclick="addToCard(${item.Id})"id="addToCartBtn">Add To Card  <i class="fa fa-shopping-bag" aria-hidden="true"></i></button>
//             </div>
//                 </div>



//             </div>
//         `

//         productlist.innerHTML += productss
//     })

// }
// onInit()

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let navprice = document.querySelector('.nav-price');


openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})


let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="product">
                <img src="${value.Image}" alt="">
                <div class="product-details">
                    <div>
                        <p>${value.Name}</p>
                        <p>Price: ${value.price.toLocaleString()}</p>
                       <span> &starf; &starf; &starf; &starf; &star;</span>
                    </div>
                    <div>
                    <button class="cart-btn"  onclick="addToCard(${key})">Add To Cart</button>
                        
                    </div>
                </div>
                
            </div>`;
        list.appendChild(newDiv);
    })
}
initApp();


function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}


function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
    <div><img src="${value.Image}" /></div>
    <div>${value.Name}</div>
    <div>${value.price.toLocaleString()}</div>
    <div>
        <button class="cart-ince" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
        <div class="count">${value.quantity}</div>
        <button class="cart-ince" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
    </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    navprice.innerText = "$" + totalPrice;
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}



// cards preview 

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});


// search function 

let inputval = document.querySelector('#search')
console.log(inputval)


inputval.addEventListener('input', (e) => {
    const val = e.target.value
    console.log(val)

    products.filter((curelemet) => {
        console.log(curelemet.Name)
        curelemet.Name.toLowerCase().includes(val.toLowerCase()) ?
            curelemet.classList.remove('hide') : curelemet.classList.add('hide')
    })
})

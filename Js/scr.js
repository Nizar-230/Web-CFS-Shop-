// const hbgMenu = document.querySelector(".hamburger-menu")
// const navUl = document.querySelector(".nav-side")
// const closeMenu = document.querySelector(".close")
// const cardMenu = document.querySelectorAll(".card-menu .deskrip h3")
// const btnMenu = document.querySelectorAll("#btn-buy")
// const containerSpc = document.querySelector(".bdy-card")
// const resultPrice = document.querySelector(".result-price")
// const btnQtyPlus = document.querySelectorAll(".btn-plus")
// const nbrQrty = document.querySelector(".number-qty")
// const btnMinQty = document.querySelectorAll(".btn-minus")

// hbgMenu.addEventListener("click", () => {
//     navUl.classList.toggle("active");
// })

// closeMenu.addEventListener("click", () => {
//     navUl.classList.remove("active");
// })

// let listMenuKopi = [
//     { namaCoffe: "Coffe Latte", harga: 20000, img: "Folder Produk/Coffe latte.jpeg" },
//     { namaCoffe: "Americano", harga: 16000, img: "Folder Produk/Americano Coffe.jpg" },
//     { namaCoffe: "Matcha", harga: 23000, img: "Folder Produk/Matcha.png" },
//     { namaCoffe: "Flat Latte", harga: 17000, img: "Folder Produk/Flat Latte.jpeg" },
//     { namaCoffe: "Espresso", harga: 24000, img: "Folder Produk/Espresso Coffe.jpeg" },
//     { namaCoffe: "Machiatto", harga: 22000, img: "Folder Produk/Machiatto Coffe.jpeg" }
// ]

// let keranjang = [];

// btnMenu.forEach((btn, i) => {
//     btn.addEventListener("click", () => {
//         listMenuKopi.forEach((items, e) => {
//             if (i == e) {
//                 keranjang.push(items);
//                 displayKeranjang();
//             }
//         })

//         countQty();
//     })
// })

// function displayKeranjang() {
//     let pageKeranjang = "";

//     if (keranjang.length == 0) {
//         console.log("keranjang masih kosong")
//     }

//     for (let krj of keranjang) {
//         let idr = new Intl.NumberFormat("id-ID", {
//             style: "currency",
//             currency: "IDR"
//         }).format(krj.harga);

//         pageKeranjang += `
//          <div class="spc-card">
//                     <div class="img-spc">
//                         <img src="${krj.img}">
//                     </div>

//                     <div class="name-menu">
//                         <h3>${krj.namaCoffe}</h3>
//                         <div class="btn-qty">
//                             <button class="btn-plus"><i class="fa-solid fa-plus plus-t"></i></button>
//                             <span class="qty-amount"><div class="number-qty">0</div></span>
//                             <button class="btn-minus"><i class="fa-solid fa-minus"></i></button>
//                         </div>
//                     </div>

//                     <div class="contain-price">
//                         <button class="clear-card"><i class="fa-solid fa-trash"></i></button>
//                         <span class="price">${idr}</span>
//                     </div>
//                 </div>

//          `


//     }
//     containerSpc.innerHTML = pageKeranjang


const hbgMenu = document.querySelector(".hamburger-menu")
const navUl = document.querySelector(".nav-side")
const closeMenu = document.querySelector(".close")
const cardMenu = document.querySelectorAll(".card-menu .deskrip h3")
const btnMenu = document.querySelectorAll("#btn-buy")
const containerSpc = document.querySelector(".bdy-card")
const resultPrice = document.querySelector(".result-price")
const btnQtyPlus = document.querySelectorAll(".btn-plus")
const nbrQrty = document.querySelectorAll(".number-qty")
const btnMinQty = document.querySelectorAll(".btn-minus")

hbgMenu.addEventListener("click", () => {
    navUl.classList.toggle("active");
})

closeMenu.addEventListener("click", () => {
    navUl.classList.remove("active");
})

let listMenuKopi = [
    { namaCoffe: "Coffe Latte", harga: 20000, img: "Folder Produk/Coffe latte.jpeg" },
    { namaCoffe: "Americano", harga: 16000, img: "Folder Produk/Americano Coffe.jpg" },
    { namaCoffe: "Matcha", harga: 23000, img: "Folder Produk/Matcha.png" },
    { namaCoffe: "Flat Latte", harga: 17000, img: "Folder Produk/Flat Latte.jpeg" },
    { namaCoffe: "Espresso", harga: 24000, img: "Folder Produk/Espresso Coffe.jpeg" },
    { namaCoffe: "Machiatto", harga: 22000, img: "Folder Produk/Machiatto Coffe.jpeg" }
]

let keranjang = [];

btnMenu.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        listMenuKopi.forEach((items, e) => {
            if (i == e) {
                keranjang.push(items);
                displayKeranjang();
            }
        })

        countQty();
    })
})

function displayKeranjang() {
    let pageKeranjang = "";

    if (keranjang.length == 0) {
        console.log("keranjang masih kosong")
    }

    for (let krj of keranjang) {
        let idr = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(krj.harga);

        pageKeranjang += `
         <div class="spc-card">
                    <div class="img-spc">
                        <img src="${krj.img}">
                    </div>

                    <div class="name-menu">
                        <h3>${krj.namaCoffe}</h3>
                        <div class="btn-qty">
                            <button class="btn-plus"><i class="fa-solid fa-plus plu-t"></i></button>
                            <span class="qty-amount"><div class="number-qty">0</div></span>
                            <button class="btn-minus"><i class="fa-solid fa-minus"></i></button>
                        </div>
                    </div>

                    <div class="contain-price">
                        <button class="clear-card"><i class="fa-solid fa-trash"></i></button>
                        <span class="price">${idr}</span>
                    </div>
                </div>

         `

    }
    containerSpc.innerHTML = pageKeranjang
}

function countQty() {
    let setCount = 0;

    for (let itm of keranjang) {
        let count = itm.harga;
        setCount += count;
    }

    let kvr = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(setCount);

    resultPrice.textContent = `Total: ${kvr}`;
}



function countTotal() {
    let setQty = 0;

    btnQtyPlus.addEventListener("click", (e) => {

        if (e.target.classList.contains("plus-t")) {
            setQty++
        }
    })

    btnMinQty.addEventListener("click", () => {
        setQty--
    })

}


btnQtyPlus.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("plus-t") && ) {
            if (e.target.closest(".spc-card")) {
                setQty++
                nbrQrty.textContent = setQty
            }
        }
    })
})


// btnQtyPlus.addEventListener("click", (e) => {
//     e.forEach((btn, i) => {
//         shopingCard.forEach((card, u) => {
//             if (e.target.classList.contains("plus-t")) {
//                 if (e.target.closest(".spc-card") && u == i) {
//                     setQty++
//                     nbrQrty.textContent = setQty
//                 }
//             }
//         })
//     


btnQtyPlus.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        shopingCard.forEach((card, u) => {
            if (e.target.classList.contains("plus-t")) {
                if (e.target.closest(".spc-card") && u == i) {
                    setQty++
                    nbrQrty.textContent = setQty
                }
            }
        })
    })
})


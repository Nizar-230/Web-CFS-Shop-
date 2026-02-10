//get select elemen html
const spcTgl = document.querySelector(".btn-spc");
const ctnSpc = document.querySelector(".container-spc");
const closeSpc = document.querySelector(".close-spc");
const hbgMenu = document.querySelector(".hamburger-menu");
const navUl = document.querySelector(".nav-side");
const closeMenu = document.querySelector(".close");
const cardMenu = document.querySelectorAll(".card-menu .deskrip h3");
const btnMenu = document.querySelectorAll("#btn-buy");
const containerSpc = document.querySelector(".bdy-card");
const resultPrice = document.querySelector(".result-price");
const btnSeacrh = document.querySelector(".btn-scr");
const cardItem = document.querySelectorAll(".card-menu")
const inputScr = document.querySelector(".search1");

//toggle hamburger menu
hbgMenu.addEventListener("click", () => {
    navUl.classList.toggle("active");
    ctnSpc.classList.remove("active-spc");
})

closeMenu.addEventListener("click", () => {
    navUl.classList.remove("active");
})

//toggle shopping card
spcTgl.addEventListener("click", () => {
    ctnSpc.classList.toggle("active-spc");
    navUl.classList.remove("active");
})

closeSpc.addEventListener("click", () => {
    ctnSpc.classList.remove("active-spc")
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
    btn.addEventListener("click", (e) => {
        listMenuKopi.forEach((items, a) => {
            if (i == a) {
                keranjang.push({ ...items, qty: 1 });
                displayKeranjang();
            }
        })
        countQty();
        e.preventDefault();
    })
})

function displayKeranjang() {
    let pageKeranjang = "";

    if (keranjang.length == 0) {
        console.log("keranjang masih kosong");
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
                            <button class="btn-plus"><i class="fa-solid fa-plus plus-t"></i></button>
                            <span class="qty-amount"><div class="number-qty">${krj.qty}</div></span>
                            <button class="btn-minus"><i class="fa-solid fa-minus min-t"></i></button>
                        </div>
                    </div>

                    <div class="contain-price">
                        <button class="clear-card"><i class="fa-solid fa-trash btn-clear"></i></button>
                        <span class="price">${idr}</span>
                    </div>
                </div>
         `

    }
    containerSpc.innerHTML = pageKeranjang;
    countQty();
    countTotal();
    clearCard();
}

displayKeranjang();

function countQty() {
    let setCount = 0;

    for (let itm of keranjang) {
        let count = itm.harga;
        let getQty = itm.qty;
        setCount += count * getQty;
    }

    let kvr = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(setCount);

    resultPrice.textContent = `Total: ${kvr}`;
    console.log(setCount)
}

function countTotal() {
    const btnQtyPlus = document.querySelectorAll(".btn-plus, .btn-minus")
    const btnMinQty = document.querySelectorAll(".btn-minus")
    const shopingCard = document.querySelectorAll(".spc-card")

    btnQtyPlus.forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (e.target.classList.contains("plus-t")) {
                if (e.target.closest(".spc-card")) {
                    const card = e.target.closest(".spc-card");
                    const nbrQrty = card.querySelector(".number-qty");
                    const menu = card.querySelector("h3").textContent;

                    keranjang.forEach(kjn => {
                        if (kjn.namaCoffe === menu) {
                            kjn.qty++
                            nbrQrty.textContent = kjn.qty
                        }
                    })
                }
            }

            if (e.target.classList.contains("min-t")) {
                if (e.target.closest(".spc-card")) {
                    const card = e.target.closest(".spc-card")
                    const nbrQrty = card.querySelector(".number-qty")
                    const menu = card.querySelector("h3").textContent

                    keranjang.forEach(kjn => {
                        if (kjn.namaCoffe === menu) {
                            if (kjn.qty > 1) {
                                kjn.qty--
                                nbrQrty.textContent = kjn.qty
                            }
                        }
                    })
                }
            }

            countQty();
        })
    })

}

function clearCard() {
    const trashClear = document.querySelectorAll(".btn-clear");
    trashClear.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".spc-card");
            const menu = card.querySelector("h3").textContent

            keranjang.forEach((itm, i) => {
                if (itm.namaCoffe === menu) {
                    keranjang.splice(i, 1);
                    card.remove();
                }
            })
            countQty()
        })
    })
}

inputScr.addEventListener("keyup", (e) => {
    const getData = document.querySelector(".search1").value;
    const getInputDataScr = getData.toLowerCase()
    
    cardItem.forEach(card => {
        const getMenuCard = card.querySelector(".deskrip h3").textContent;
        const getCardChange = getMenuCard.toLowerCase();

        if (getCardChange.includes(getInputDataScr)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    })

    e.preventDefault();
})







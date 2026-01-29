/* Product Data */
const products = [
    { name: "CLICK HERE", img: "image/avocado.webp", link: "avocado.html" },
    { name: "CLICK HERE", img: "image/red.webp", link: "mahogany_red.html" },
    { name: "CLICK HERE", img: "image/brownfront.webp", link: "caramel_brown.html" },
    { name: "CLICK HERE", img: "image/bubblegum.webp", link: "bubblegum.html" },
    { name: "CLICK HERE", img: "image/cobalt.webp", link: "cobalt.html" },
];

let pageIndex = 0;
const bookContainer = document.getElementById("bookContainer");

/* Cover Page */
const coverPage = document.createElement("div");
coverPage.className = "page cover";
coverPage.style.zIndex = products.length + 1;
coverPage.innerHTML = `
    <div class="cover-content">
        <hr>
        <h1>C O M P A C T P A L</h1>
        <hr>
        <center>
          <i><p>Everyday Accessories</p></i>
        </center>
    </div>
`;
bookContainer.appendChild(coverPage);

/* Product Pages */
products.forEach((p, idx)=>{
    const page = document.createElement("div");
    page.className = "page";
    page.style.zIndex = products.length - idx;

    page.innerHTML = `
        <div class="page-right">
            <img src="${p.img}" alt="${p.name}">
            <button onclick="window.location.href='${p.link}'">${p.name}</button>
        </div>
    `;
    bookContainer.appendChild(page);
});

const pages = document.querySelectorAll(".page");

// ===== FLIP FUNCTIONS =====
function nextPage(){
    if(pageIndex < pages.length-1){
        pages[pageIndex].classList.add("flipped");
        pageIndex++;
    }
}
function prevPage(){
    if(pageIndex > 0){
        pageIndex--;
        pages[pageIndex].classList.remove("flipped");
    }
}



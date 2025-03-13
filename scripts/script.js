function cambiarColores(colorFondo, color, ruta) {
    document.getElementsByClassName("tag")[0].style.backgroundColor = colorFondo;
    document.getElementsByClassName("tag")[0].style.color = color;
    document.getElementsByClassName("product-image")[0].style.backgroundImage = ruta;
}

document.querySelector(".white").addEventListener("click",()=>{
    cambiarColores('white','black','url(../public/img/evoque-white.png)');
});

document.querySelector(".gray").addEventListener("click", ()=>{
    cambiarColores('gray','white','url(../public/img/evoque-grey.png)');
});

document.querySelector(".black").addEventListener("click", ()=>{
    cambiarColores('black','white','url(../public/img/evoque-black.png)');
});

document.querySelector(".red").addEventListener("click", ()=>{
    cambiarColores('red','white','url(../public/img/evoque-red.jpeg)')
});

function comprar() {
    let productCard = document.querySelector(".product-card");
    let productDescription = productCard.querySelector(".product-description");

    while (productDescription.firstChild) {
        productDescription.removeChild(productDescription.firstChild);
    }

    let mensaje = document.createElement("h1");

    mensaje.textContent = "Enhorabuena, has adquirido un espectacular Range Rover Evoque";
    mensaje.style.fontSize = "0.7rem";
    productDescription.appendChild(mensaje);
}
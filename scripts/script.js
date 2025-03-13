function cambiarColores(colorFondo, color, ruta) {
    document.getElementsByClassName("tag")[0].style.backgroundColor = colorFondo;
    document.getElementsByClassName("tag")[0].style.color = color;
    document.getElementsByClassName("product-image")[0].style.backgroundImage = ruta;
}

function comprar() {
    let productCard = document.getElementsByClassName("product-card")[0];
    let productDescription = productCard.getElementsByClassName("product-description")[0];
    
    productDescription.removeChild(productDescription.getElementsByClassName("tag")[0]);
    productDescription.removeChild(productDescription.getElementsByClassName("product-details")[0]);
    productDescription.removeChild(productDescription.getElementsByClassName("product_details_text")[0]);
    productDescription.removeChild(productDescription.getElementsByClassName("colors-price")[0]);
    productDescription.removeChild(document.getElementById("button"));

    let productTitle = productDescription.getElementsByClassName("product-title")[0];

    productTitle.style.marginTop = "10%";
    productTitle.style.fontSize = "0.75rem";
    productTitle.textContent = "Enhorabuena, has adquirido un espectacular Range Rover Evoque";
}
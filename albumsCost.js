function calcularPrecio(numPags, tipoEncuad, cantidad) {
    let pricePerAditionalPage; // Precio página adicional
    let aditionalPages = numPags - 20;
    let totalPrice;
    
    if (numPags % 2 !== 0){
        return undefined; 
    }

    if (tipoEncuad === "R"){
        basePrice = 20;
        pricePerAditionalPage = 0.70;

    } else if (tipoEncuad == "C"){
        basePrice = 30; 
        pricePerAditionalPage = 1;
    }

    if (numPags === 20){
        totalPrice = basePrice * cantidad;
    } else if (numPags > 20){
        totalPrice = basePrice + (aditionalPages * pricePerAditionalPage)
    } 
        
    if (cantidad >= 5 && cantidad <= 9){
        totalPrice *= 0.9
    } else if (cantidad >= 10 && cantidad <= 250){
        totalPrice *= 0.75
    } else if (cantidad > 250){
        return false
    }  
    
    return totalPrice; 

}


module.exports = {
    calcularPrecio
}
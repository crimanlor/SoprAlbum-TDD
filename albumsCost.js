function calcularPrecio(numPags, tipoEncuad, cantidad) {
    let pairOfAditionalPages = (numPags - 20) / 2;
    let totalPrice;
    
    if (numPags % 2 !== 0 || numPags > 100){
        return undefined;
    }

    const basePrice = tipoEncuad === "R" ? 20 : 30;
    const pricePerAditionalPage = tipoEncuad === "R" ? 0.70 : 1;

    if (numPags === 20){
        totalPrice = basePrice * cantidad;
    } else if (numPags > 20){
        totalPrice = (basePrice + (pairOfAditionalPages * pricePerAditionalPage)) * cantidad;
    } 
        
    if (cantidad >= 5 && cantidad <= 9) totalPrice *= 0.9;
    if (cantidad >= 10 && cantidad <= 250) totalPrice *= 0.75;
    if (cantidad > 250) return false;
    
    return totalPrice; 

}


module.exports = {
    calcularPrecio
}

const { calcularPrecio } = require('./albumsCost.js');

/**
 * 1. Implementar TEST
 * 2. Agregar el código necesario para que pase el test
 * 3. Pasar el test
 */

describe('Suitcase: Calcular precio cuando el número de páginas no es par', ()=> {

    it('devuelve undefined si el número de páginas es impar y la encuardenación rústica', () => {
        const numPags = 23;
        const tipoEncuad = "R";
        const cantidad = 1
    
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBeUndefined();
    })

     it('devuelve undefined si el número de páginas es impar y la encuardenación cartoné', () => {
         const numPags = 37;
         const tipoEncuad = "C";
         const cantidad = 1
    
         expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBeUndefined();
     })

})

describe('Suitcase: Calcular precio por encuadernación rústica', ()=> {

    test('devuelve 20.00 € para 20 páginas', () => {
        const numPags = 20;
        const tipoEncuad = "R";
        const cantidad = 1;
        const totalPrice = 20.00;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
   })

   test('devuelve 21.40 € para 22 páginas', () => {
        const numPags = 22;
        const tipoEncuad = "R";
        const cantidad = 1;
        const totalPrice = 21.40;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('devuelve 22.80 € para 24 páginas', () => {
         const numPags = 24;
         const tipoEncuad = "R";
         const cantidad = 1;
         const totalPrice = 22.80;
         expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
     })  

    test('se aplica el 10% de descuento para una cantidad de 5 unidades', () => {
         const numPags = 20;
         const tipoEncuad = "R";
         const cantidad = 5;
         const totalPrice = 90;
         expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
     })  

    test('se aplica el 25% de descuento para una cantidad de 10 unidades', () => {
         const numPags = 20;
         const tipoEncuad = "R";
         const cantidad = 10;
         const totalPrice = 150;
         expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
     })  

    test('no se aceptan pedidos de más de 250 unidades', () => {
        const numPags = 20;
        const tipoEncuad = "R";
        const cantidad = 260;
        const totalPrice = false;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

})

describe('Suitcase: Calcular precio por encuadernación cartoné', ()=> {

    test('devuelve 30 € para 20 páginas', () => {
        const numPags = 20;
        const tipoEncuad = "C";
        const cantidad = 1;
        const totalPrice = 30;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })

    test('devuelve 32 € para 22 páginas', () => {
    const numPags = 22;
    const tipoEncuad = "C";
    const cantidad = 1;
    const totalPrice = 32;
    expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('se aplica el 10% de descuento para una cantidad de 5 unidades', () => {
        const numPags = 20;
        const tipoEncuad = "C";
        const cantidad = 5;
        const totalPrice = 135;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('se aplica el 25% de descuento para una cantidad de 10 unidades', () => {
        const numPags = 20;
        const tipoEncuad = "C";
        const cantidad = 10;
        const totalPrice = 225;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('no se aceptan pedidos de más de 250 unidades', () => {
        const numPags = 20;
        const tipoEncuad = "C";
        const cantidad = 260;
        const totalPrice = false;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

})

const { calcularPrecio } = require('./albumsCost.js');

/**
 * 1. Implementar TEST
 * 2. Agregar el código necesario para que pase el test
 * 3. Pasar el test
 */

describe('Suitcase: Calculate price when the number of pages is not even-par', ()=> {

    it('Should return undefined when the number of pages is ood and binding is rustic', () => {
        const numPags = 23;
        const tipoEncuad = "R";
        const cantidad = 1
    
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBeUndefined();
    })

     it('Should return undefined when the number of pages is ood and binding is case', () => {
         const numPags = 37;
         const tipoEncuad = "C";
         const cantidad = 1
    
         expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBeUndefined();
     })

})

describe('Suitcase: Calculate price for rustic binding', ()=> {

    test('Should return 20.00 € when number of pages is 20', () => {
        const numPags = 20;
        const tipoEncuad = "R";
        const cantidad = 1;
        const totalPrice = 20.00;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
   })

   test('Should return 21.40 € when number of pages is 22', () => {
        const numPags = 22;
        const tipoEncuad = "R";
        const cantidad = 1;
        const totalPrice = 21.40;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('Should return 22.80 € when number of pages is 24', () => {
         const numPags = 24;
         const tipoEncuad = "R";
         const cantidad = 1;
         const totalPrice = 22.80;
         expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
     })  

    test('Should return 48.40 € when order 2 units and number of pages is 26', () => {
         const numPags = 26;
         const tipoEncuad = "R";
         const cantidad = 2;
         const totalPrice = 48.40;
         expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
     })  

    test('Should return undefined when number of pages is 120', () => {
         const numPags = 120;
         const tipoEncuad = "R";
         const cantidad = 1;
         expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBeUndefined();
     })  

    test('A 10% discount is applied for an order of 5 units.', () => {
         const numPags = 20;
         const tipoEncuad = "R";
         const cantidad = 5;
         const totalPrice = 90;
         expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
     })  

    test('A 25% discount is applied for an order of 10 units.', () => {
         const numPags = 20;
         const tipoEncuad = "R";
         const cantidad = 10;
         const totalPrice = 150;
         expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
     }) 
     
    test('A 25% discount is applied for an order of 250 units.', () => {
        const numPags = 20;
        const tipoEncuad = "R";
        const cantidad = 250;
        const totalPrice = 3750;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('Should return false for 260 units orders', () => {
        const numPags = 20;
        const tipoEncuad = "R";
        const cantidad = 260;
        const totalPrice = false;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

})

describe('Suitcase: Calculate price for case binding', ()=> {

    test('Should return 30 € when number of pages is 20', () => {
        const numPags = 20;
        const tipoEncuad = "C";
        const cantidad = 1;
        const totalPrice = 30;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })

    test('Should return 32 € when number of pages is 22', () => {
        const numPags = 22;
        const tipoEncuad = "C";
        const cantidad = 1;
        const totalPrice = 32;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('Should return 34 € when number of pages is 24', () => {
        const numPags = 24;
        const tipoEncuad = "C";
        const cantidad = 1;
        const totalPrice = 34;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('Should return 72 € when number of pages is 26', () => {
        const numPags = 26;
        const tipoEncuad = "C";
        const cantidad = 2;
        const totalPrice = 72;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('Should return false when number of pages is less of 20', () => {
        const numPags = 18;
        const tipoEncuad = "C";
        const cantidad = 1;
        const totalPrice = undefined;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    }) 

    test('Should return undefined when number of pages is 130', () => {
        const numPags = 130;
        const tipoEncuad = "C";
        const cantidad = 1;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBeUndefined();
    })  

    test('A 10% discount is applied for an order of 5 units.', () => {
        const numPags = 20;
        const tipoEncuad = "C";
        const cantidad = 5;
        const totalPrice = 135;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('A 25% discount is applied for an order of 10 units.', () => {
        const numPags = 20;
        const tipoEncuad = "C";
        const cantidad = 10;
        const totalPrice = 225;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('A 25% discount is applied for an order of 250 units.', () => {
        const numPags = 20;
        const tipoEncuad = "C";
        const cantidad = 250;
        const totalPrice = 5625;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

    test('Should return false for 260 units orders', () => {
        const numPags = 20;
        const tipoEncuad = "C";
        const cantidad = 260;
        const totalPrice = false;
        expect(calcularPrecio(numPags, tipoEncuad, cantidad)).toBe(totalPrice);
    })  

})
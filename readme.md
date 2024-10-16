# SoprAlbum - Testing

This project is a simulation of Test-Driven Development (TDD), where I test the functionality of calculating the price of an album based on specific client requirements. The pricing logic takes into account factors such as the number of pages, type of binding, and quantity, ensuring that the system behaves as expected through predefined test cases. The goal is to incrementally develop robust code by first writing tests, then implementing functionality to pass those tests, while continuously refactoring and improving the solution.

## Installation

1. Clone the repository.
2. Install dependencies using:
   ```bash
   npm install
   ```

## Usage

To start the server, run:

```bash
npm start
```

Run tests with jest you can use one of these two commands:

```bash
  npm run test
```

```bash
   npm run test:coverage
```

## Testing Methodology and Strategy

![Methodology and Strategy image](./public/methodology-and-strategy.png)

## Test Requirements

### Pricing Model

- Initial price (20 pages):
  - Rústica binding: **€20.00**
  - Cartoné binding: **€30.00**
- Additional price per 2 extra pages:
  - Rústica: **€0.70**
  - Cartoné: **€1.00**

#### Discounts for bulk orders:

- **1-4 units:** No discount.
- **5-9 units:** 10% discount.
- **10-250 units:** 25% discount.
- **Above 250 units:** Orders are not accepted.

### Parameters

- `numPags`: An integer representing the album's page count.
- `tipoEncuad`: A string representing the binding type, either "R" for rústica or "C" for cartoné.
- `cantidad`: The number of copies ordered.

Additionally, **all inputs and outputs** are received as strings, meaning incorrect formats and null values could be encountered.

## Test Cases Breakdown

Here is a detailed breakdown of the test cases written to ensure the functionality:

**Suitcase: Calculate price when the number of pages is not even**

- **Case 1**: Should return undefined when the number of pages is odd and binding is rústica.
- **Case 2**: Should return undefined when the number of pages is odd and binding is cartoné.

**Suitcase: Calculate price for rústica binding**

- **Case 3**: Should return 20.00 € when number of pages is 20.
- **Case 4**: Should return 21.40 € when number of pages is 22.
- **Case 5**: Should return 22.80 € when number of pages is 24.
- **Case 6**: Should return 48.40 € when order 2 units and number of pages is 26.
- **Case 7**: Should return undefined when number of pages is 120.
- **Case 8**: A 10% discount is applied for an order of 5 units.
- **Case 9**: A 25% discount is applied for an order of 10 units.
- **Case 10**: A 25% discount is applied for an order of 250 units.
- **Case 11**: Should return false for 260 units orders.

**Suitcase: Calculate price for cartoné binding**

- **Case 12**: Should return 30 € when number of pages is 20.
- **Case 13**: Should return 32 € when number of pages is 22.
- **Case 14**: Should return 34 € when number of pages is 24.
- **Case 15**: Should return 72 € when number of pages is 26.
- **Case 16**: Should return undefined when number of pages is less than 20.
- **Case 17**: Should return undefined when number of pages is 130.
- **Case 18**: A 10% discount is applied for an order of 5 units.
- **Case 19**: A 25% discount is applied for an order of 10 units.
- **Case 20**: A 25% discount is applied for an order of 250 units.
- **Case 21**: Should return false for 260 units orders.

## Reporting and Additional Resources

If you would like to view the report of inputs and outputs, you can access it [here](https://drive.google.com/file/d/1KB6wzzEmwochsJbaN8a48vk2PCE1lZJf/view?usp=sharing).

If you want to learn more about the development process, feel free to check out the [Figma Jam](https://www.figma.com/board/K2UCMwwdY7JsmcJDFU5tF6/SoprAlbum-Testing?node-id=0-1&t=fsxOiwF7r4mFlnCW-1) where I documented various stages of the project.

---

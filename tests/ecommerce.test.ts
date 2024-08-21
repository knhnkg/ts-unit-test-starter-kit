import { describe, it, expect, beforeEach } from "vitest"; // Functions of vitest
import {
  addProduct,
  addToCart,
  removeFromCart,
  calculateTotal,
  clearCart,
  applyShippingDiscount
} from "../src/ecommerce";

// let cart = {};
describe("E-commerce System", () => { // Add test to e-commerce system
  beforeEach(() => { // Before every "it", beforeEach allows you to set up things (eg. addProduct(), clearCart())
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    clearCart();
  });

  it("should calculate price of all products", () => { // Specify the test itself; Each "it" is one test case
    // Arrange
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);

    // Act
    const sum = calculateTotal();

    // Assert
    expect(sum).toBe(600); // Assertion; To compare if your result is as expected; 600 is the expected sum of price
  });

  it("should add items to cart", () => {
    // Arrange
    let cart = {};

    // Act
    cart = addToCart("Soap", 2);

    // Assert
    expect(cart["Soap"]).toBe(2);
  });

  it("should delete the cart", () => {
    // Arrange
    let cart = {};

    // Act
    cart = addToCart("Soap", 2);
    cart = removeFromCart("Soap", 2);

    // Assert
    expect(cart).toEqual({});
  });

  it("should apply discount to the cart", () => {
    // Arrange
    let total = applyShippingDiscount(550);

    // Act

    // Assert
    expect(total).toBe(540);


    // let cart = {};
    // cart = addToCart("Soap", 100);
    // let total = calculateTotal();
    // total = applyShippingDiscount(total);
    // expect(total).toBe(990);

  });
});

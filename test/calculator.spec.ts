import { expect } from "chai";
import Calculator from "../src/calculator";

describe("Test Calculator Class", () => {
  it("should return sum equal", () => {
    // arrange
    const calc = new Calculator();

    // act
    const result = calc.add(2, 3);

    // assert
    expect(result).to.equal(5);
  });

  it("should return sum not equal", () => {
    // arrange
    const calc = new Calculator();

    // act
    const result = calc.add(2, 3);

    // assert
    expect(result).not.equal(3);
  });

  it("should return subtract equal", () => {
    // arrange
    const calc = new Calculator();

    // act
    const result = calc.substract(5, 3);

    // assert
    expect(result).to.equal(2);
  });

  it("should return subtract not equal", () => {
    // arrange
    const calc = new Calculator();

    // act
    const result = calc.substract(5, 3);

    // assert
    expect(result).not.equal(-2);
  });

  it("should return multiply equal", () => {
    // arrange
    const calc = new Calculator();

    // act
    const result = calc.multiply(5, 3);

    // assert
    expect(result).to.equal(15);
  });

  it("should return multiply not equal", () => {
    // arrange
    const calc = new Calculator();

    // act
    const result = calc.multiply(5, 3);

    // assert
    expect(result).not.equal(10);
  });

  it("should return divide equal", () => {
    // arrange
    const calc = new Calculator();

    // act
    const result = calc.divide(10, 2);

    // assert
    expect(result).to.equal(5);
  });

  it("should return divide not equal", () => {
    // arrange
    const calc = new Calculator();

    // act
    const result = calc.divide(10, 2);

    // assert
    expect(result).not.equal(2);
  });

  it("should throw an error while dividing by zero", () => {
    // arrange
    const calc = new Calculator();

    // act and assert
    expect(() => calc.divide(10, 0)).to.throw("Cannot divide by zero");
  });
});

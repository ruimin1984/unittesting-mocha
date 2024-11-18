import Calculator from "../src/calculator";
import { expect } from "chai";

describe("Hooks test", () => {
  let calc: Calculator;
  before(() => {
    console.log("before");
    calc = new Calculator();
  });

  beforeEach(() => {
    console.log("beforeEach");
  });

  afterEach(() => {
    console.log("afterEach");
  });
  after(() => {
    console.log("after");
  });

  describe("add test suite", () => {
    it("should return sum", () => {
      expect(calc.add(2, 3)).to.equal(5);
    });
  });

  describe("subtract test suite", () => {
    it("should return subtract", () => {
      expect(calc.substract(5, 3)).to.equal(2);
    });
  });
});

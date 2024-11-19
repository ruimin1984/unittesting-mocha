import Calculator2 from "../src/calculator2";
import { expect } from "chai";
import sinon, { SinonMock, SinonSpy, SinonStub } from "sinon";

describe("Spy Stub and Mock tests", () => {
  let calc: Calculator2;
  let spy: SinonSpy;
  let stub: SinonStub;
  let mock: SinonMock;

  before(() => {
    console.log("before");
    calc = new Calculator2();
  });

  beforeEach(() => {
    console.log("beforeEach");
    mock = sinon.mock(calc);
  });

  afterEach(() => {
    console.log("afterEach");
    if (spy) spy.restore();
    if (stub) stub.restore();
    if (mock) mock.restore();
  });
  after(() => {
    console.log("after");
  });

  describe("add test suite", () => {
    it("should return sum", () => {
      // arrange
      spy = sinon.spy(calc, "add");
      stub = sinon.stub(calc, "getRandomValue").returns(2);

      let expectation = mock
        .expects("logMessage")
        .exactly(1)
        .withArgs("Logging add function");
      // act
      const result = calc.add(2, 3);
      // assert
      expect(result).to.equal(7);
      expect(spy.calledOnceWith(2, 3)).to.be.true;
      expectation.verify();
    });
  });

  describe("subtract test suite", () => {
    it("should return subtract", () => {
      // arrange
      spy = sinon.spy(calc, "substract");
      let expectation = mock
        .expects("logMessage")
        .exactly(1)
        .withArgs("Logging subtract function");
      // act
      const result = calc.substract(5, 3);
      // assert
      expect(result).to.equal(2);
      expect(spy.calledOnceWith(5, 3)).to.be.true;
      expectation.verify();
    });
  });
});

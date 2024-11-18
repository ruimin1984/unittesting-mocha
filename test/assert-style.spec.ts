import { expect, should, assert } from "chai";

describe("assert style", () => {
  it("Expect assertion style", () => {
    // arrange
    const name: string = "peter";
    const age: number = 30;
    const objData: Object = { name: "peter", age: 30 };
    const arrData: Array<number> = [1, 2, 3];
    const boolData: boolean = true;

    // act

    // assert
    expect(name).to.be.ok;
    expect(name).to.be.equal("peter");
    expect(name).to.not.be.equal("peter1");
    expect(name).to.be.a("string");

    expect(age).to.be.ok;
    expect(age).to.be.equal(30);
    expect(age).to.not.be.equal(40);
    expect(age).to.be.a("number");

    expect(objData).to.be.ok;
    expect(objData).to.be.a("Object");
    expect(objData).to.have.property("name").equal("peter");
    expect(objData).to.have.property("age").equal(30);

    expect(arrData).to.be.ok;
    expect(arrData).to.be.a("Array");
    expect(arrData).to.have.lengthOf(3);
    expect(arrData).to.have.lengthOf(3).that.include(2);
    expect(arrData).to.not.have.lengthOf(4).that.does.not.include(5);

    expect(boolData).to.be.ok;
    expect(boolData).to.be.a("boolean");
    expect(boolData).to.be.true;
    expect(boolData).to.not.be.false;
  });

  it("Should assertion style", () => {
    should();

    // arrange
    const name: string = "peter";
    const age: number = 30;
    const objData: Object = { name: "peter", age: 30 };
    const arrData: Array<number> = [1, 2, 3];
    const boolData: boolean = true;

    // act

    // assert
    name.should.be.ok;
    name.should.be.equal("peter");
    name.should.not.be.equal("peter1");
    name.should.be.a("string");

    age.should.be.ok;
    age.should.be.equal(30);
    age.should.not.be.equal(40);
    age.should.be.a("number");

    objData.should.be.ok;
    objData.should.be.a("object");
    objData.should.have.property("name").equal("peter");
    objData.should.have.property("age").equal(30);

    arrData.should.be.ok;
    arrData.should.be.a("array");
    arrData.should.have.lengthOf(3);
    arrData.should.have.lengthOf(3).that.include(2);
    arrData.should.not.have.lengthOf(4).that.does.include(5);

    boolData.should.be.ok;
    boolData.should.be.a("boolean");
    boolData.should.be.true;
    boolData.should.not.be.false;
  });

  it("Assert assertion style", () => {
    // arrange
    const name: string = "peter";
    const age: number = 30;
    const objData: Object = { name: "peter", age: 30 };
    const arrData: Array<number> = [1, 2, 3];
    const boolData: boolean = true;

    // act

    // assert
    assert.isOk(name);
    assert.equal(name, "peter");
    assert.notEqual(name, "peter1");
    assert.typeOf(name, "string");

    assert.isOk(age);
    assert.equal(age, 30);
    assert.notEqual(age, 40);
    assert.typeOf(age, "number");

    assert.isOk(objData);
    assert.typeOf(objData, "object");
    assert.deepEqual(objData, { name: "peter", age: 30 });
    assert.property(objData, "name");
    assert.property(objData, "age");

    assert.isOk(arrData);
    assert.typeOf(arrData, "array");
    assert.deepEqual(arrData, [1, 2, 3]);
    assert.include(arrData, 2);
    assert.notInclude(arrData, 5);
    assert.lengthOf(arrData, 3);

    assert.isOk(boolData);
    assert.typeOf(boolData, "boolean");
    assert.equal(boolData, true);
    assert.notEqual(boolData, false);
  });
});

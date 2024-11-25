import { expect } from "chai";
import Calculator3 from "../src/calculator3";
import nock from "nock";

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("API Testing", () => {
  it("should make a GET request from API", async () => {
    // arrange
    const calc = new Calculator3();
    // act
    const res = await calc.getUser();
    // assert
    expect(res.status).to.equal(200);
    expect(res.data.id).to.equal(1);
  });

  it("should make a POST request from API", async () => {
    // arrange
    const calc = new Calculator3();
    const userPayload = {
      name: "Peter Parker",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };
    // act
    const res = await calc.saveUser(userPayload);
    // assert
    expect(res.status).to.equal(201);
    expect(res.data.id).to.equal(11);
  });

  it("should make a GET request from API with nock", async () => {
    // arrange
    const calc = new Calculator3();
    const mockedUserResponse = { id: 1, name: "Peter Parker" };
    nock(baseUrl).get("/users/1").reply(200, mockedUserResponse);
    // act
    const res = await calc.getUser();
    // assert
    expect(res.status).to.equal(200);
    expect(res.data.id).to.equal(1);
  });

  it("should make a POST request from API with nock", async () => {
    // arrange
    const calc = new Calculator3();
    const userPayload = { name: "Peter Parker" };
    const expectedUserResponse = { id: 11, name: "Peter Parker" };
    nock(baseUrl).post("/users", userPayload).reply(201, expectedUserResponse);
    // act
    const res = await calc.saveUser(userPayload);
    // assert
    expect(res.status).to.equal(201);
    expect(res.data.id).to.equal(11);
  });

  after(() => {
    nock.cleanAll();
  });

  it("should return random value from 1 to 10", async () => {
    // arrange
    const calc = new Calculator3();
    // act
    const randomNumber = calc.getRandomValue();
    // assert
    expect(randomNumber).to.be.at.least(1);
    expect(randomNumber).to.be.at.most(10);
  });
});

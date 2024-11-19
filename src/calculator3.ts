import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

class Calculator3 {
  add(a: number, b: number): number {
    const c = this.getRandomValue();
    this.logMessage(`Logging add function`);
    return a + b + c;
  }

  substract(a: number, b: number): number {
    this.logMessage(`Logging subtract function`);
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  getRandomValue(): number {
    return Math.floor(Math.random() * 10 + 1);
  }

  logMessage(msg: string) {
    console.log(msg);
  }

  asyncFunctionPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(4);
      }, 1000);
    });
  }

  async getUser() {
    return await axios.get(`${baseUrl}/users/1`);
  }

  async saveUser(userPayload: object) {
    return await axios.post(`${baseUrl}/users`, userPayload);
  }
}

export default Calculator3;

import { expect } from "chai";
import Calculator2 from "../src/calculator2"

describe('Async Await and Promise Test Suite', () => {
    let calc: Calculator2;

    it('should work with async and await', async () => {

        // arrange
        calc = new Calculator2();
        // act
        const result = await calc.asyncFunctionPromise();
        // assert
        expect(result).to.equal(4);
    });

    it('should work with async and await', () => { 

        // arrange
        calc = new Calculator2();
        // act
        calc.asyncFunctionPromise().then((result) => {
            expect(result).to.equal(4);
        });
    });
});